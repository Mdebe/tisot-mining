// src/components/Footer.tsx

import {
  Phone,
  Mail,
  MapPin,
 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-4">
        <div>
          <h3 className="text-3xl font-black text-white">
            TISOT <span className="text-amber-400">MINING</span>
          </h3>

          <p className="mt-5 leading-7 text-zinc-400">
            Delivering reliable mining, infrastructure and civil
            engineering solutions across South Africa.
          </p>

         
        </div>

        <div>
          <h4 className="mb-5 text-lg font-bold text-white">
            Quick Links
          </h4>

          <div className="space-y-3 text-zinc-400">
            <p>About Us</p>
            <p>Projects</p>
            <p>Services</p>
            <p>Safety</p>
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-bold text-white">
            Services
          </h4>

          <div className="space-y-3 text-zinc-400">
            <p>Earthworks</p>
            <p>Mining Support</p>
            <p>Plant Hire</p>
            <p>Road Construction</p>
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-lg font-bold text-white">
            Contact
          </h4>

          <div className="space-y-4 text-zinc-400">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-amber-400" />
              <span>+27 82 123 4567</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-amber-400" />
              <span>mqaphie@engineer.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-amber-400" />
              <span>KwaZulu-Natal, South Africa</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 px-6 pt-8 text-center text-sm text-zinc-500">
        © 2026 TISOT Mining. All rights reserved.
      </div>
    </footer>
  );
}