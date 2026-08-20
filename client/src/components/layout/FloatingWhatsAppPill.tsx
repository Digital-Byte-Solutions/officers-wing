import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingWhatsAppPill: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded Quick Action Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="w-72 bg-[#060F1E] border border-[#C8922A]/40 rounded-2xl shadow-2xl overflow-hidden text-white"
          >
            {/* Header */}
            <div className="bg-[#0A1E3F] p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xs">Officers Wing Helpdesk</h4>
                  <p className="text-[10px] text-emerald-400 font-medium">● Online — Replies in 5 mins</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <p className="text-xs text-slate-300 leading-relaxed">
                👋 Hello! Looking for IMU-CET coaching or DNS/GP Rating admissions? Speak directly with our counselor.
              </p>

              <a
                href="https://wa.me/919557381578?text=Hi%20Officers%20Wing,%20I%20want%20to%20know%20more%20about%20Merchant%20Navy%20courses"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 rounded-xl transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>

              <a
                href="tel:+919557381578"
                className="flex items-center justify-center gap-2 w-full bg-[#0A1E3F] hover:bg-[#0F2C59] text-amber-300 border border-amber-400/30 font-bold text-xs py-2.5 rounded-xl transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Admissions Hotline
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button — Positioned above mobile bottom bar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact Admissions"
        className="group relative flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-emerald-500 text-white shadow-[0_4px_20px_rgba(16,185,129,0.45)] hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Pulse ring */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
        
        {isOpen ? (
          <X className="w-5 sm:w-6 h-5 sm:h-6 text-white relative z-10" />
        ) : (
          <MessageCircle className="w-6 sm:w-7 h-6 sm:h-7 text-white relative z-10" />
        )}
      </button>
    </div>
  );
};
