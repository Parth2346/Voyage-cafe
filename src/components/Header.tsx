import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  onNavigateWithScroll?: (view: string, targetId?: string) => void;
}

export default function Header({ currentView, setCurrentView, onNavigateWithScroll }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: string, elementId?: string) => {
    setMobileMenuOpen(false);
    if (onNavigateWithScroll) {
      onNavigateWithScroll(view, elementId);
    } else {
      setCurrentView(view);
    }
  };

  const navItems = [
    { label: 'Home', view: 'home' },
    { label: 'Menu', view: 'menu' },
    { label: 'About', view: 'home', targetId: 'about-section' },
    { label: 'Gallery', view: 'gallery' },
    { label: 'Reviews', view: 'gallery', targetId: 'reviews-section' },
    { label: 'Contact', view: 'reservations', targetId: 'contact-section' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-cream/80 backdrop-blur-xl border-b border-brand-gold shadow-[0_10px_30px_rgba(90,90,64,0.03)] transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 h-20">
        
        {/* Brand Logo */}
        <div className="cursor-pointer" onClick={() => handleNavClick('home')}>
          <Logo />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => {
            const isActive = currentView === item.view && !item.targetId;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view, item.targetId)}
                className={`font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-300 pb-1 cursor-pointer
                  ${isActive 
                    ? 'text-brand-brown-light border-b-2 border-brand-brown-light' 
                    : 'text-brand-brown/70 hover:text-brand-brown-light hover:scale-105'
                  }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <button
          onClick={() => handleNavClick('reservations')}
          className="hidden md:block bg-brand-brown-light text-white font-sans text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-full hover:bg-brand-brown hover:scale-105 transition-all duration-300 shadow-[0_8px_16px_rgba(90,90,64,0.15)] cursor-pointer"
        >
          Reserve Table
        </button>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-brand-brown-light hover:text-brand-brown transition-colors cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-brand-cream border-b border-brand-gold shadow-lg px-6 py-8 flex flex-col gap-6 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.view, item.targetId)}
              className="text-left font-sans text-base font-semibold tracking-wider uppercase text-brand-brown/80 hover:text-brand-brown-light transition-colors py-1 border-b border-brand-gold/40 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('reservations')}
            className="w-full text-center bg-brand-brown-light text-white font-sans text-sm font-semibold tracking-widest uppercase py-4 rounded-full hover:bg-brand-brown transition-colors shadow-md cursor-pointer"
          >
            Reserve Table
          </button>
        </div>
      )}
    </nav>
  );
}
