import React from 'react';
import Logo from './Logo';
import { Share2, Mail } from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: string) => void;
  onNavigateWithScroll?: (view: string, targetId?: string) => void;
}

export default function Footer({ setCurrentView, onNavigateWithScroll }: FooterProps) {
  const handleNavClick = (view: string, targetId?: string) => {
    if (onNavigateWithScroll) {
      onNavigateWithScroll(view, targetId);
    } else {
      setCurrentView(view);
    }
  };

  return (
    <footer className="w-full py-20 bg-brand-cream-dark border-t border-brand-gold">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Brand & Text */}
        <div className="md:col-span-1">
          <div className="cursor-pointer mb-4" onClick={() => handleNavClick('home')}>
            <Logo showText={true} />
          </div>
          <p className="font-sans text-sm text-brand-brown/70 leading-relaxed mb-6">
            A modern sanctuary for exceptional coffee and slow living. Handcrafted in every detail.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col gap-3">
          <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-brown mb-2">Explore</h4>
          <button 
            onClick={() => handleNavClick('menu')}
            className="font-sans text-sm text-brand-brown/70 hover:text-brand-brown-light text-left transition-colors cursor-pointer"
          >
            Our Menu
          </button>
          <button 
            onClick={() => handleNavClick('reservations')}
            className="font-sans text-sm text-brand-brown/70 hover:text-brand-brown-light text-left transition-colors cursor-pointer"
          >
            Reservation
          </button>
        </div>

        {/* Column 3: Opportunities */}
        <div className="flex flex-col gap-3">
          <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-brown mb-2">Experience</h4>
          <button 
            onClick={() => handleNavClick('gallery')}
            className="font-sans text-sm text-brand-brown/70 hover:text-brand-brown-light text-left transition-colors cursor-pointer"
          >
            Visual Atmosphere
          </button>
          <button 
            onClick={() => handleNavClick('gallery', 'reviews-section')}
            className="font-sans text-sm text-brand-brown/70 hover:text-brand-brown-light text-left transition-colors cursor-pointer"
          >
            Guest Experiences
          </button>
        </div>

        {/* Column 4: Reach & Social */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-brown mb-1">Connect</h4>
          <p className="font-sans text-sm text-brand-brown/70 leading-relaxed">
            Beside Wellness Forever, Opp. Lane 5,<br />
            North Main Road, Koregaon Park,<br />
            Pune, MH 411001, India
          </p>
          <div className="flex gap-3 mt-2">
            <a 
              href="mailto:hello@thevoyagehospitality.in" 
              className="w-10 h-10 rounded-full border border-brand-gold flex items-center justify-center text-brand-brown/70 hover:bg-brand-brown-light hover:text-white hover:border-brand-brown-light transition-all duration-300"
              title="Email Us"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button 
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="w-10 h-10 rounded-full border border-brand-gold flex items-center justify-center text-brand-brown/70 hover:bg-brand-brown-light hover:text-white hover:border-brand-brown-light transition-all duration-300 cursor-pointer"
              title="Copy link to share"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-brand-gold/40 flex flex-col sm:flex-row justify-between gap-4">
        <p className="font-sans text-xs text-brand-brown/50">
          © {new Date().getFullYear()} The Voyage. All rights reserved.
        </p>
        <div className="flex gap-6">
          <button className="font-sans text-xs text-brand-brown/50 hover:text-brand-brown-light cursor-pointer">Privacy Policy</button>
          <button className="font-sans text-xs text-brand-brown/50 hover:text-brand-brown-light cursor-pointer">Terms of Service</button>
        </div>
      </div>
    </footer>
  );
}
