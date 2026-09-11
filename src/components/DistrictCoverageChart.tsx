"use client";

import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

const TOTAL_DISTRICTS = 16;
const COVERED_DISTRICTS = 16;
const MW_CAPACITY = 2; // ~2 MW solar PV generation capacity installed to date

const BRAND = "#c2650b";
const ACCENT = "#f2b705";
const NAVY = "#0b2a45";

export default function DistrictCoverageChart() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const mwRef = useRef<HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || hasAnimated.current) return;
    if (!svgRef.current) return;
    hasAnimated.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const size = 260;
    const radius = size / 2;
    const innerRadius = radius * 0.62;
    const outerRadius = radius * 0.92;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const g = svg
      .attr("viewBox", `0 0 ${size} ${size}`)
      .append("g")
      .attr("transform", `translate(${radius}, ${radius})`);

    // Background track (all 16 slots, unfilled)
    const pie = d3
      .pie<number>()
      .value(1)
      .sort(null)
      .padAngle(0.02);

    const trackArcs = pie(d3.range(TOTAL_DISTRICTS));

    const arcGen = d3
      .arc<d3.PieArcDatum<number>>()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(3);

    g.selectAll("path.track")
      .data(trackArcs)
      .enter()
      .append("path")
      .attr("class", "track")
      .attr("d", arcGen)
      .attr("fill", "rgba(11, 42, 69, 0.08)");

    // Foreground segments (covered districts), drawn in sequentially
    const coveredArcs = trackArcs.slice(0, COVERED_DISTRICTS);
    const colorScale = d3
      .scaleLinear<string>()
      .domain([0, TOTAL_DISTRICTS - 1])
      .range([BRAND, ACCENT]);

    const segments = g
      .selectAll("path.segment")
      .data(coveredArcs)
      .enter()
      .append("path")
      .attr("class", "segment")
      .attr("fill", (_d, i) => colorScale(i) as string)
      .attr("d", arcGen)
      .style("opacity", prefersReducedMotion ? 1 : 0);

    if (prefersReducedMotion) {
      segments.attr("d", arcGen);
    } else {
      segments
        .transition()
        .delay((_d, i) => i * 70)
        .duration(450)
        .ease(d3.easeCubicOut)
        .style("opacity", 1)
        .attrTween("d", (d) => {
          const outerInterp = d3.interpolateNumber(innerRadius, outerRadius);
          return (t: number) => {
            const frameArc = d3
              .arc<d3.PieArcDatum<number>>()
              .innerRadius(innerRadius)
              .outerRadius(outerInterp(t))
              .cornerRadius(3);
            return frameArc(d) as string;
          };
        });
    }

    // Center label group
    const centerGroup = g.append("g").attr("text-anchor", "middle");

    const countText = centerGroup
      .append("text")
      .attr("class", "count-text")
      .attr("y", -6)
      .attr("font-size", "40")
      .attr("font-weight", "800")
      .attr("fill", NAVY)
      .text(prefersReducedMotion ? `${COVERED_DISTRICTS}/${TOTAL_DISTRICTS}` : "0/0");

    centerGroup
      .append("text")
      .attr("y", 22)
      .attr("font-size", "11")
      .attr("font-weight", "600")
      .attr("letter-spacing", "0.08em")
      .attr("fill", "#5b6472")
      .text("DISTRICTS COVERED");

    if (!prefersReducedMotion) {
      countText
        .transition()
        .duration(1400)
        .ease(d3.easeCubicOut)
        .tween("districtCount", () => {
          const interp = d3.interpolateNumber(0, COVERED_DISTRICTS);
          return (t: number) => {
            const covered = Math.round(interp(t));
            countText.text(`${covered}/${TOTAL_DISTRICTS}`);
          };
        });
    }

    // MW count-up number, drawn with d3 in its own small svg-adjacent span
    if (mwRef.current) {
      const mwSel = d3.select(mwRef.current);
      if (prefersReducedMotion) {
        mwSel.text(`~${MW_CAPACITY} MW`);
      } else {
        mwSel.text("~0 MW");
        mwSel
          .transition()
          .duration(1400)
          .ease(d3.easeCubicOut)
          .tween("mwCount", () => {
            const interp = d3.interpolateNumber(0, MW_CAPACITY);
            return (t: number) => {
              const val = interp(t);
              const display =
                t >= 1 ? MW_CAPACITY : Math.round(val * 10) / 10;
              mwSel.text(`~${display} MW`);
            };
          });
      }
    }
  }, [visible]);

  return (
    <div
      ref={containerRef}
      className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm"
    >
      <div className="grid gap-8 sm:grid-cols-2 items-center">
        <div className="flex justify-center">
          <svg ref={svgRef} width={260} height={260} role="img" aria-label="16 out of 16 districts of Sierra Leone covered" />
        </div>
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
            Nationwide Reach
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">
            Every District, Powered
          </h3>
          <p className="text-text-secondary leading-relaxed mb-6">
            Operational coverage across all 16 districts of Sierra Leone, backed by
          </p>
          <div>
            <span
              ref={mwRef}
              className="text-4xl sm:text-5xl font-extrabold text-brand tabular-nums"
            >
              ~0 MW
            </span>
            <div className="mt-2 text-sm text-text-secondary leading-relaxed">
              Solar PV generation capacity installed to date
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
