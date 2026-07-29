import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#b4b4b4]/40 bg-[#1f1f1f] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-[#02a9e4]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-[#02a9e4]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="transition-colors hover:text-[#02a9e4]">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-[#02a9e4]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#02a9e4]" />
                <a
                  href="mailto:info@qroconstruction.com"
                  className="transition-colors hover:text-[#02a9e4]"
                >
                  info@qroconstruction.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#02a9e4]" />
                <a href="tel:+12513862046" className="transition-colors hover:text-[#02a9e4]">
                  (251) 386-2046
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#02a9e4]" />
                <a href="tel:+17133041073" className="transition-colors hover:text-[#02a9e4]">
                  (713) 304-1073
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-[#02a9e4]" />
                <span>Houston, TX</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Ready to Build?
            </h3>
            <Link
              href="/contact"
              className="block w-full rounded-md bg-[#02a9e4] px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0172be] sm:inline-block sm:w-auto"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-300 sm:flex-row">
          <p>© {currentYear} QRO Construction. All rights reserved.</p>
          <p>
            Powered by{' '}
            <a
              href="https://indevasa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#02a9e4] hover:underline"
            >
              Indeva Websites
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}