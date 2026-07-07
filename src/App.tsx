/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import MenuView from './components/MenuView';
import GalleryView from './components/GalleryView';
import ReservationView from './components/ReservationView';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');

  // Unified scroll routing handler
  const handleNavigateWithScroll = (view: string, targetId?: string) => {
    setCurrentView(view);
    if (targetId) {
      // Small timeout allows the component to mount in DOM before searching
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderActiveView = () => {
    switch (currentView) {
      case 'menu':
        return <MenuView key="menu" />;
      case 'gallery':
        return <GalleryView key="gallery" />;
      case 'reservations':
        return <ReservationView key="reservations" />;
      case 'home':
      default:
        return (
          <HomeView 
            key="home" 
            setCurrentView={setCurrentView} 
            onNavigateWithScroll={handleNavigateWithScroll}
          />
        );
    }
  };

  return (
    <div id="root-container" className="flex flex-col min-h-screen bg-brand-cream antialiased">
      {/* Dynamic Navigation Header */}
      <Header 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        onNavigateWithScroll={handleNavigateWithScroll}
      />

      {/* Main Viewport Container */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dynamic Information Footer */}
      <Footer 
        setCurrentView={setCurrentView} 
        onNavigateWithScroll={handleNavigateWithScroll}
      />
    </div>
  );
}

