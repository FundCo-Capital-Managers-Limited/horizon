import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/horizon-logo.svg"
            alt="Horizon Energy"
            width={220}
            height={48}
            className="bg-white rounded-lg px-3 py-2 h-10 w-auto"
          />
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
            An EPC company delivering solar mini-grids and electrical
            infrastructure that bring reliable, affordable power to
            underserved communities across Sierra Leone and West Africa.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/capabilities" className="hover:text-white transition-colors">
                Capabilities
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-white transition-colors">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Sustainability
          </h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>
              <Link href="/sustainability" className="hover:text-white transition-colors">
                Safety &amp; ESHS Policy
              </Link>
            </li>
            <li>
              <Link href="/grm" className="hover:text-white transition-colors">
                Grievance Redress
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Contact Details
          </h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>15 Barracks Lane, Murray Town,</li>
            <li>Freetown, Sierra Leone</li>
            <li className="pt-1">
              <a href="mailto:info@horizonenergy.org" className="hover:text-white transition-colors">
                info@horizonenergy.org
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Horizon Energy Company (SL) Limited. All Rights Reserved.
      </div>
    </footer>
  );
}
