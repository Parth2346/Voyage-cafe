import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS, REVIEWS } from '../data';
import { Review } from '../types';
import { Star, MessageSquareCode, Check, Send, Sparkles, Compass, X } from 'lucide-react';

export default function GalleryView() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [activeTab, setActiveTab] = useState<string>('all');
  
  // New Review state
  const [newAuthor, setNewAuthor] = useState<string>('');
  const [newComment, setNewComment] = useState<string>('');
  const [newRating, setNewRating] = useState<number>(5);
  const [reviewSuccess, setReviewSuccess] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');

  // Selected lightbox image
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const categories = [
    { value: 'all', label: 'All Views' },
    { value: 'coffee', label: 'Our Coffee' },
    { value: 'space', label: 'The Sanctuary' },
    { value: 'pastry', label: 'Larder & Baking' }
  ];

  const filteredGallery = GALLERY_ITEMS.filter(item => {
    return activeTab === 'all' || item.category === activeTab;
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!newAuthor.trim() || !newComment.trim()) {
      setFormError('Please complete both fields to share your experience.');
      return;
    }

    const createdReview: Review = {
      id: `review-${Date.now()}`,
      author: newAuthor,
      rating: newRating,
      comment: newComment,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaetv-413t1cBtE2PlNbIx5ZurRSLL-MTTfk-WXRU4gJSUIvtfYqcNzXDOhCQIwd0n46anFr6n1-JTxeI6FsMMxeXxOyj64_oavg9tY4mKJqGS4ZUBR2L4llcVeIWYi1h2Scmab7iHBxuZ_ZoHgqTsxZhIRkZ1yD4IP5D7-amiIZoiaOVtOriQkSV33SkmsJ2qw5HqV5HoBgRZs828O1NQ7uM4mbD6u3sq_i9qRrd2FfC-ty2ywM_UVRtNvOaAKNGUA0xu-VTy9Yk' // fallback avatar
    };

    setReviewsList([createdReview, ...reviewsList]);
    setNewAuthor('');
    setNewComment('');
    setNewRating(5);
    setReviewSuccess(true);

    setTimeout(() => {
      setReviewSuccess(false);
    }, 2500);
  };

  return (
    <div className="w-full pt-32 pb-24 bg-brand-cream">
      
      {/* SECTION 1: VISUAL ATMOSPHERE GALLERY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="text-center mb-12">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-beige block mb-3">
            Capturing Moments
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown tracking-tight">
            Visual Atmosphere
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Gallery Tab Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => {
            const isSelected = activeTab === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveTab(cat.value)}
                className={`font-sans text-xs font-semibold uppercase tracking-widest px-4.5 py-2.5 rounded-full transition-all duration-300 cursor-pointer
                  ${isSelected 
                    ? 'bg-brand-brown-light text-white shadow-md' 
                    : 'bg-brand-cream-dark border border-brand-gold text-brand-brown/70 hover:border-brand-brown-light/40 hover:text-brand-brown-light'
                  }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedImg(item.image)}
                className="group relative rounded-2xl overflow-hidden border border-brand-gold aspect-square bg-brand-cream-dark shadow-sm hover:shadow-xl transition-all duration-500 cursor-zoom-in"
              >
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Overlay on Hover */}
                <div className="absolute inset-0 bg-brand-brown-light/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <Compass className="h-8 w-8 text-white/80 mb-3 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75" />
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-cream mb-1">
                    {item.category}
                  </span>
                  <p className="font-serif text-sm text-white/90 leading-relaxed italic max-w-xs">
                    {item.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 2: GUEST EXPERIENCES (REVIEWS) */}
      <section id="reviews-section" className="py-24 bg-brand-cream border-t border-brand-gold scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Experience Submission Form */}
          <div className="lg:col-span-5 bg-brand-cream-dark p-8 md:p-10 rounded-3xl border border-brand-gold shadow-[0_15px_40px_rgba(90,90,64,0.02)]">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand-brown-light block mb-2">
              Guestbook
            </span>
            <h2 className="font-serif text-3xl font-bold text-brand-brown tracking-tight mb-2">
              Share Your Journey
            </h2>
            <p className="font-sans text-sm text-brand-brown/70 leading-relaxed mb-8">
              Your stories and moments at The Voyage inspire us. We would be honored to receive your experiences.
            </p>

            {reviewSuccess ? (
              <div className="flex flex-col items-center justify-center py-10 text-emerald-600 gap-2">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100">
                  <Check className="h-6 w-6" />
                </div>
                <span className="font-sans text-sm font-semibold">Thank you! Your experience is published.</span>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-5 text-left">
                {formError && (
                  <div className="text-xs text-rose-500 font-semibold bg-rose-50 p-3 rounded-lg border border-rose-100">
                    {formError}
                  </div>
                )}
                
                {/* Rating Input */}
                <div>
                  <label className="block text-xs font-bold text-brand-brown/70 uppercase tracking-widest mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1 hover:scale-125 transition-transform cursor-pointer"
                      >
                        <Star 
                          className={`h-6 w-6 ${
                            star <= newRating 
                              ? 'fill-brand-brown-light stroke-brand-brown-light' 
                              : 'stroke-brand-brown-light/25'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-brand-brown/70 uppercase tracking-widest mb-2">Name / Handle</label>
                  <input 
                    type="text"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="e.g. Julian Thorne"
                    className="w-full bg-brand-cream border border-brand-gold rounded-xl p-3.5 text-sm font-sans focus:outline-none focus:border-brand-brown-light/40"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-brand-brown/70 uppercase tracking-widest mb-2">Your Experience</label>
                  <textarea 
                    rows={4}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a brief story about your cup, your work, or your time with us..."
                    className="w-full bg-brand-cream border border-brand-gold rounded-xl p-3.5 text-sm font-sans focus:outline-none focus:border-brand-brown-light/40 resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2 bg-brand-brown-light text-white font-sans text-xs font-semibold tracking-widest uppercase py-4 rounded-full hover:bg-brand-brown transition-colors shadow-md cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  Publish Experience
                </button>
              </form>
            )}
          </div>

          {/* Right Block: Reviews Feed */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8">
            <div className="flex items-center gap-2">
              <MessageSquareCode className="h-5 w-5 text-brand-brown-light" />
              <h3 className="font-serif text-2xl font-bold text-brand-brown">Guest Experiences</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 w-full max-h-[640px] overflow-y-auto pr-2 hide-scrollbar">
              <AnimatePresence mode="popLayout">
                {reviewsList.map((rev) => (
                  <motion.div
                    key={rev.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-brand-cream-dark p-6 md:p-8 rounded-2xl border border-brand-gold shadow-[0_4px_25px_rgba(90,90,64,0.01)] text-left flex flex-col justify-between"
                  >
                    <div>
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-4 text-brand-brown-light">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current stroke-current" />
                        ))}
                      </div>

                      {/* Comment */}
                      <p className="font-serif text-base italic text-brand-brown leading-relaxed mb-6">
                        "{rev.comment}"
                      </p>
                    </div>

                    {/* Author Metadata */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-gold">
                        <img 
                          src={rev.avatar} 
                          alt={rev.author} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans text-sm font-bold text-brand-brown">{rev.author}</span>
                        <span className="font-sans text-[10px] uppercase tracking-widest text-brand-brown/50">Verified Guest</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white/60 hover:text-white hover:scale-110 transition-all cursor-pointer"
              onClick={() => setSelectedImg(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] overflow-hidden rounded-xl"
            >
              <img 
                src={selectedImg} 
                alt="Enlarged atmospheric view" 
                className="max-w-full max-h-[85vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
