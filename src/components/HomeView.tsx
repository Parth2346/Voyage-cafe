import React from 'react';
import { motion } from 'motion/react';
import { FEATURED_SIGNATURES } from '../data';
import { ArrowRight, Coffee, Heart, Globe, FlameKindling } from 'lucide-react';

interface HomeViewProps {
  setCurrentView: (view: string) => void;
  onNavigateWithScroll?: (view: string, targetId?: string) => void;
  key?: string;
}

export default function HomeView({ setCurrentView, onNavigateWithScroll }: HomeViewProps) {
  const handleNavClick = (view: string, targetId?: string) => {
    if (onNavigateWithScroll) {
      onNavigateWithScroll(view, targetId);
    } else {
      setCurrentView(view);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 md:py-40 bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            className="lg:col-span-6 flex flex-col items-start text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-beige mb-4 bg-brand-beige/5 px-4 py-2 rounded-full">
              Handcrafted Slow Coffee
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-brown leading-[1.1] mb-6">
              The Art of <br />
              <span className="italic text-brand-beige font-normal">Slow Living</span>, <br />
              Brewed Daily.
            </h1>
            <p className="font-sans text-lg text-brand-brown/70 leading-relaxed mb-10 max-w-lg">
              Experience precision-crafted coffee in an atmosphere designed for contemplation, connection, and the pursuit of exceptional taste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => setCurrentView('menu')}
                className="bg-brand-brown-light text-white font-sans text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-brand-brown hover:scale-105 transition-all duration-300 shadow-[0_10px_25px_rgba(39,19,16,0.15)] cursor-pointer flex items-center justify-center gap-2 group"
              >
                View Menu
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setCurrentView('reservations')}
                className="border border-brand-brown/20 text-brand-brown font-sans text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-brand-brown/5 hover:border-brand-brown transition-all duration-300 cursor-pointer flex items-center justify-center"
              >
                Reserve a Table
              </button>
            </div>
          </motion.div>

          {/* Right Column: High-End Hero Image */}
          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Soft backdrop glow */}
            <div className="absolute -inset-4 bg-brand-gold/10 rounded-3xl filter blur-3xl z-0" />
            
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(90,90,64,0.12)] border border-brand-gold aspect-4/3 group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIDosOQqE3BiM_VbGQQ9-Yh3ZO4VLZ6obx-z2qiB_M9bXB7w12IPtD2kf75ht6s8dx9V1aqMwc7m_FV1n6NNaqPZtBPxuYPFbLQdyVYHtkG1PTUlFSxZeUWJwbox00aWf1kZDyEwfDK8zCOyPYX9cXcIcd_jH2oLaf_GtqpuyoXYK9su2KhOhXCaGMl-NKbEtqJJhh9d__Hx5pNCbLAGLGiNHFNnUaebs0nfjr-1uwcXu1bGViYSqTXce1ev8QEZCR6QmLsJTZG5c" 
                alt="The Voyage Cafe Luxury Interior" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/30 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Subtle overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-cream/95 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-lg flex justify-between items-center transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <div>
                  <h4 className="font-serif text-base font-bold text-brand-brown">The Voyage Sanctuary</h4>
                  <p className="font-sans text-xs text-brand-brown/60 mt-0.5">Koregaon Park, Pune</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-beige">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open Until 11:30 PM
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Curated Signatures Bento Grid */}
      <section className="py-24 bg-brand-cream border-y border-brand-gold">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-beige block mb-3">
              Only the Finest
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown tracking-tight">
              Curated Signatures
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4" />
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {FEATURED_SIGNATURES.map((sig) => (
              <motion.div
                key={sig.id}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl bg-brand-cream-dark border border-brand-gold shadow-[0_10px_30px_rgba(90,90,64,0.02)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(90,90,64,0.06)] hover:border-brand-gold flex flex-col justify-between cursor-pointer
                  ${sig.gridSpan || ''}`}
                onClick={() => setCurrentView('menu')}
              >
                {/* Image and Tag Container */}
                <div className="relative overflow-hidden aspect-video md:aspect-auto md:flex-grow min-h-[220px]">
                  <img 
                    src={sig.image} 
                    alt={sig.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/70 via-brand-brown/10 to-transparent opacity-80" />
                  
                  {/* Float Tag */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-brand-brown font-sans text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                    {sig.tag}
                  </span>

                  {/* Price Bubble */}
                  <span className="absolute top-4 right-4 bg-brand-brown text-white font-sans text-sm font-semibold px-3.5 py-1.5 rounded-full shadow-md border border-white/10">
                    ${sig.price.toFixed(2)}
                  </span>

                  {/* For large item, bottom-aligned details */}
                  {sig.gridSpan && (
                    <div className="absolute bottom-6 left-6 right-6 text-white hidden md:block">
                      <h3 className="font-serif text-2xl font-bold tracking-wide mb-2">{sig.name}</h3>
                      <p className="font-sans text-sm text-stone-200 leading-relaxed max-w-md">{sig.description}</p>
                    </div>
                  )}
                </div>

                {/* Text Block for smaller items or Mobile layouts */}
                <div className={`p-6 flex flex-col gap-2 ${sig.gridSpan ? 'md:hidden' : ''}`}>
                  <h3 className="font-serif text-xl font-bold text-brand-brown tracking-wide">{sig.name}</h3>
                  <p className="font-sans text-sm text-brand-brown/70 leading-relaxed">{sig.description}</p>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 3. The Voyage Standard (About Section) */}
      <section id="about-section" className="py-24 bg-brand-cream-dark overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: The philosophy */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-beige block mb-3">
              Our Philosophy
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown tracking-tight mb-6">
              The Voyage Standard
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mb-6" />
            <p className="font-sans text-base text-brand-brown/80 leading-relaxed mb-8">
              Every cup we serve is a testament to our commitment to quality, sustainability, and the craft of coffee. We partner directly with small-holder farms to source exceptional beans, roasted in micro-batches to preserve their unique terroir.
            </p>
            <p className="font-sans text-base text-brand-brown/80 leading-relaxed">
              In our space, time slows down. We design every square inch to allow you to fully appreciate the complex notes of your brew and the company of those around you.
            </p>
          </div>

          {/* Right Block: 3 Core Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Pillar 1 */}
            <div className="bg-brand-cream p-8 rounded-2xl border border-brand-gold shadow-[0_10px_30px_rgba(90,90,64,0.01)] hover:shadow-[0_15px_35px_rgba(90,90,64,0.05)] transition-all duration-300 flex flex-col gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-brand-brown-light/10 flex items-center justify-center text-brand-brown-light">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-brown">Direct Trade</h3>
              <p className="font-sans text-xs text-brand-brown/70 leading-relaxed">
                Partnering directly with small farmers to guarantee premium quality, fair wages, and sustainable practices.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-brand-cream p-8 rounded-2xl border border-brand-gold shadow-[0_10px_30px_rgba(90,90,64,0.01)] hover:shadow-[0_15px_35px_rgba(90,90,64,0.05)] transition-all duration-300 flex flex-col gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-brand-brown-light/10 flex items-center justify-center text-brand-brown-light">
                <FlameKindling className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-brown">Micro-Batching</h3>
              <p className="font-sans text-xs text-brand-brown/70 leading-relaxed">
                Roasting in small, focused volumes to unlock and preserve the signature profile of every single origin.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-brand-cream p-8 rounded-2xl border border-brand-gold shadow-[0_10px_30px_rgba(90,90,64,0.01)] hover:shadow-[0_15px_35px_rgba(90,90,64,0.05)] transition-all duration-300 flex flex-col gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-brand-brown-light/10 flex items-center justify-center text-brand-brown-light">
                <Coffee className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-brown">Precision Craft</h3>
              <p className="font-sans text-xs text-brand-brown/70 leading-relaxed">
                Hand-poured extraction with strict temperature controls and water mineral balances for absolute clarity.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Immersive CTA Banner */}
      <section className="py-24 bg-brand-brown text-white relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-beige/5 rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-gold/5 rounded-full filter blur-2xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center px-6 md:px-12 relative z-10 flex flex-col items-center">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-4">
            Join Us On The Voyage
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Experience the Slow Living Sanctuary?
          </h2>
          <p className="font-sans text-base text-stone-200 leading-relaxed mb-10 max-w-xl">
            Whether you are dropping in for your morning pour-over, looking to work in quiet contemplation, or booking an intimate weekend table, we would love to host you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={() => setCurrentView('reservations')}
              className="bg-brand-cream text-brand-brown font-sans text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-brand-gold hover:text-brand-brown hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
            >
              Reserve a Table
            </button>
            <button 
              onClick={() => setCurrentView('menu')}
              className="border border-white/20 text-white font-sans text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer"
            >
              Explore Menu
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
