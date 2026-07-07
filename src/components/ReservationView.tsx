import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, MapPin, Phone, Mail, Check, AlertCircle, Compass } from 'lucide-react';
import { Reservation } from '../types';

export default function ReservationView() {
  const [formData, setFormData] = useState<Reservation>({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '10:00',
    requests: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.date) {
      setError('Please provide all required fields to register your table.');
      return;
    }

    // Success transition
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-32 pb-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT COLUMN: RESERVATION FORM */}
        <div className="lg:col-span-7 bg-brand-cream-dark p-8 md:p-12 rounded-3xl border border-brand-gold shadow-[0_15px_40px_rgba(90,90,64,0.02)]">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-brown-light block mb-3 text-left">
            Table Bookings
          </span>
          <h1 className="font-serif text-4xl font-bold text-brand-brown tracking-tight mb-4 text-left">
            Reserve a Table
          </h1>
          <p className="font-sans text-sm text-brand-brown/70 leading-relaxed mb-10 text-left">
            Reserve your table for pour-overs, working sessions, or intimate morning gatherings. Walk-ins are always welcomed, but reservations guarantee prompt hosting.
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-12 text-center text-brand-brown gap-6"
              >
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100">
                  <Check className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold">Reservation Confirmed</h3>
                  <p className="font-sans text-sm text-brand-brown/80 max-w-md">
                    Thank you, <span className="font-bold">{formData.name}</span>! Your table for <span className="font-bold">{formData.guests} guests</span> on <span className="font-bold">{formData.date}</span> at <span className="font-bold">{formData.time}</span> has been locked in.
                  </p>
                  <p className="font-sans text-xs text-brand-brown/50 mt-1">
                    A confirmation ticket has been sent to {formData.email}.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      guests: '2',
                      date: '',
                      time: '10:00',
                      requests: ''
                    });
                  }}
                  className="mt-4 font-sans text-xs font-bold uppercase tracking-widest border border-brand-brown-light/30 text-brand-brown-light px-6 py-3 rounded-full hover:bg-brand-brown-light/10 transition-all cursor-pointer"
                >
                  Book Another Table
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {error && (
                  <div className="flex items-center gap-2.5 text-xs text-rose-500 font-semibold bg-rose-50 p-4 rounded-xl border border-rose-100">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                 {/* Main Guest details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-brand-brown/75 uppercase tracking-widest mb-2">Your Name *</label>
                    <input 
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full bg-brand-cream border border-brand-gold rounded-xl p-3.5 text-sm font-sans focus:outline-none focus:border-brand-brown-light/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-brown/75 uppercase tracking-widest mb-2">Email Address *</label>
                    <input 
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. eleanor@example.com"
                      className="w-full bg-brand-cream border border-brand-gold rounded-xl p-3.5 text-sm font-sans focus:outline-none focus:border-brand-brown-light/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-brand-brown/75 uppercase tracking-widest mb-2">Phone Number *</label>
                    <input 
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 000-0000"
                      className="w-full bg-brand-cream border border-brand-gold rounded-xl p-3.5 text-sm font-sans focus:outline-none focus:border-brand-brown-light/40"
                    />
                  </div>

                  {/* Guests Selector */}
                  <div>
                    <label className="block text-xs font-bold text-brand-brown/75 uppercase tracking-widest mb-2 flex items-center gap-1">
                      <Users className="h-3 w-3 text-brand-brown-light" />
                      Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full bg-brand-cream border border-brand-gold rounded-xl p-3.5 text-sm font-sans focus:outline-none focus:border-brand-brown-light/40"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="8">8 Guests (Large Group)</option>
                    </select>
                  </div>

                  {/* Date Picker */}
                  <div>
                    <label className="block text-xs font-bold text-brand-brown/75 uppercase tracking-widest mb-2 flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-brand-brown-light" />
                      Date *
                    </label>
                    <input 
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full bg-brand-cream border border-brand-gold rounded-xl p-3.5 text-sm font-sans focus:outline-none focus:border-brand-brown-light/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Time Selector */}
                  <div>
                    <label className="block text-xs font-bold text-brand-brown/75 uppercase tracking-widest mb-2 flex items-center gap-1">
                      <Clock className="h-3 w-3 text-brand-brown-light" />
                      Preferred Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full bg-brand-cream border border-brand-gold rounded-xl p-3.5 text-sm font-sans focus:outline-none focus:border-brand-brown-light/40"
                    >
                      <option value="07:30">7:30 AM</option>
                      <option value="08:30">8:30 AM</option>
                      <option value="09:30">9:30 AM</option>
                      <option value="10:30">10:30 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:30">2:30 PM</option>
                      <option value="15:30">3:30 PM</option>
                      <option value="16:30">4:30 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:30">6:30 PM</option>
                    </select>
                  </div>

                  {/* Special Requests */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-brand-brown/75 uppercase tracking-widest mb-2">Special Notes & Requests</label>
                    <input 
                      type="text"
                      name="requests"
                      value={formData.requests}
                      onChange={handleInputChange}
                      placeholder="e.g. Bar seating, window table, wheat allergy..."
                      className="w-full bg-brand-cream border border-brand-gold rounded-xl p-3.5 text-sm font-sans focus:outline-none focus:border-brand-brown-light/40"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-brown-light text-white font-sans text-xs font-semibold tracking-widest uppercase py-4.5 rounded-full hover:bg-brand-brown hover:scale-[1.02] transition-all duration-300 shadow-[0_10px_30px_rgba(39,19,16,0.15)] cursor-pointer"
                >
                  Confirm Table Request
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: CONTACT & MAP DETAILS */}
        <div id="contact-section" className="lg:col-span-5 space-y-8 scroll-mt-24 text-left">
          
          {/* Visiting info card */}
          <div className="bg-brand-cream-dark p-8 md:p-10 rounded-3xl border border-brand-gold shadow-[0_15px_40px_rgba(90,90,64,0.02)] space-y-6">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-brown-light block">
              Contact & Address
            </span>
            <h2 className="font-serif text-3xl font-bold text-brand-brown tracking-tight">
              Visit The Voyage
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mt-2" />
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-brown-light/10 flex items-center justify-center text-brand-brown-light shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-brown/50">Location</h4>
                  <p className="font-sans text-sm text-brand-brown font-semibold mt-0.5 leading-relaxed">
                    Beside Wellness Forever, Opp. Lane 5,<br />
                    North Main Road, Koregaon Park,<br />
                    Pune, Maharashtra 411001, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-brown-light/10 flex items-center justify-center text-brand-brown-light shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-brown/50">Opening Hours</h4>
                  <p className="font-sans text-sm text-brand-brown font-semibold mt-0.5 leading-relaxed">
                    <strong>Cafe:</strong> 7:30 AM – 11:00 PM Daily<br />
                    <strong>Hostel & Co-Work:</strong> 24 Hours Open
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-brown-light/10 flex items-center justify-center text-brand-brown-light shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-brown/50">Phone Support</h4>
                  <p className="font-sans text-sm text-brand-brown font-semibold mt-0.5">
                    +91 91580 20643
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Grayscale Map Vector */}
          <div className="relative h-64 md:h-80 bg-brand-gold rounded-3xl border border-brand-gold overflow-hidden shadow-inner flex items-center justify-center group">
            {/* Elegant grid map background vector */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(#1c1b1b 1px, transparent 1px), linear-gradient(to right, #1c1b1b 1px, transparent 1px), linear-gradient(to bottom, #1c1b1b 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              backgroundPosition: 'center'
            }} />
            
            {/* Street Lines mock */}
            <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full opacity-35 stroke-brand-brown stroke-[2] fill-none pointer-events-none">
              <line x1="0" y1="50" x2="400" y2="50" />
              <line x1="0" y1="180" x2="400" y2="180" />
              <line x1="120" y1="0" x2="120" y2="300" />
              <line x1="280" y1="0" x2="280" y2="300" />
              <path d="M 120 50 Q 200 120, 280 180" strokeDasharray="5 5" strokeWidth="1.5" />
            </svg>

            <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/10 to-transparent pointer-events-none" />

            {/* Pulsing Target Point Pin */}
            <div className="relative z-10 flex flex-col items-center">
              <span className="absolute -top-3 w-6 h-6 rounded-full bg-brand-brown-light/25 animate-ping" />
              <span className="absolute -top-1 w-2 h-2 rounded-full bg-brand-brown-light" />
              <div className="bg-brand-brown text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-lg flex items-center gap-1 border border-white/10 group-hover:scale-105 transition-transform duration-300">
                <Compass className="h-3 w-3 animate-spin" style={{ animationDuration: '6s' }} />
                The Voyage
              </div>
            </div>
            
            {/* Overlay Instructions for Directions */}
            <div className="absolute bottom-4 left-4 right-4 bg-brand-cream/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-brand-gold flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-sans text-[10px] uppercase tracking-widest font-bold text-brand-brown/60">Koregaon Park, Lane 5</span>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=The+Voyage+Cafe+Hostel+CoWork+Koregaon+Park+Pune" 
                target="_blank" 
                rel="noreferrer"
                className="font-sans text-[10px] uppercase tracking-widest font-bold text-brand-brown-light hover:text-brand-brown underline"
              >
                Directions
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
