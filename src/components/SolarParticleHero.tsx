"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";

const BRAND = new THREE.Color("#c2650b");
const ACCENT = new THREE.Color("#f2b705");
const WARM_LIGHT = new THREE.Color("#ffe6b3");

const PARTICLE_COUNT = 140;

export default function SolarParticleHero() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -width / 2,
      width / 2,
      height / 2,
      -height / 2,
      0.1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Build particle geometry: positions, sizes, colors, and drift velocities.
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const velocities: { x: number; y: number; phase: number }[] = [];

    const palette = [BRAND, ACCENT, WARM_LIGHT];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * width;
      const y = (Math.random() - 0.5) * height;
      const z = Math.random() * 4 - 2;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 3.5 + 1.5;

      velocities.push({
        x: (Math.random() - 0.5) * 6,
        y: -(Math.random() * 8 + 4), // slow downward drift, like falling light
        phase: Math.random() * Math.PI * 2,
      });
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 6,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let animationId: number | null = null;
    let lastTime = performance.now();

    function renderStaticFrame() {
      renderer.render(scene, camera);
    }

    function animate(time: number) {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const posAttr = geometry.getAttribute(
        "position"
      ) as THREE.BufferAttribute;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const v = velocities[i];
        let x = posAttr.getX(i);
        let y = posAttr.getY(i);

        v.phase += dt * 0.6;
        x += (v.x + Math.sin(v.phase) * 4) * dt;
        y += v.y * dt;

        // Wrap around edges so particles keep drifting endlessly.
        if (y < -height / 2 - 10) y = height / 2 + 10;
        if (x > width / 2 + 10) x = -width / 2 - 10;
        if (x < -width / 2 - 10) x = width / 2 + 10;

        posAttr.setXY(i, x, y);
      }
      posAttr.needsUpdate = true;

      // Gentle twinkle via opacity oscillation.
      material.opacity = 0.6 + Math.sin(time * 0.0008) * 0.15;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }

    if (prefersReducedMotion) {
      renderStaticFrame();
    } else {
      animationId = requestAnimationFrame(animate);
    }

    function handleResize() {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.left = -w / 2;
      camera.right = w / 2;
      camera.top = h / 2;
      camera.bottom = -h / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      if (prefersReducedMotion) renderStaticFrame();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationId !== null) cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 z-[1]"
      aria-hidden
    />
  );
}
