import { Wrench, Clock, Mail, Phone } from 'lucide-react';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-darker flex flex-col items-center justify-center px-4 text-center">
      {/* Logo */}
      <div className="mb-10">
        <img
          src="https://www.superiorsafaris.co.za/wp-content/uploads/2023/11/cropped-cropped-logo-2.png"
          alt="Superior Safaris Logo"
          className="h-28 mx-auto"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Icon */}
      <div className="bg-primary/10 border border-primary/30 rounded-full p-5 mb-8 inline-flex">
        <Wrench className="w-10 h-10 text-primary" />
      </div>

      {/* Heading */}
      <h1 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4 font-sans">
        Under Maintenance
      </h1>

      {/* Divider */}
      <div className="w-20 h-1 bg-primary mb-8" />

      {/* Message */}
      <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-4">
        We're currently making improvements to bring you an even better experience.
        Our website will be back online shortly.
      </p>

      <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-12">
        <Clock className="w-4 h-4" />
        <span>We appreciate your patience.</span>
      </div>

      {/* Contact */}
      <div className="border border-gray-800 rounded-lg p-8 max-w-md w-full bg-dark/50">
        <h2 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
          Need to reach us?
        </h2>
        <div className="space-y-4">
          <a
            href="mailto:info@superiorsafaris.co.za"
            className="flex items-center justify-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span>info@superiorsafaris.co.za</span>
          </a>
          <a
            href="tel:+27000000000"
            className="flex items-center justify-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>+27 (0) XX XXX XXXX</span>
          </a>
        </div>
      </div>

      {/* Footer note */}
      <p className="text-gray-700 text-xs mt-12 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Superior Safaris. All rights reserved.
      </p>
    </div>
  );
}
