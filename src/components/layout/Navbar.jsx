import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X } from 'lucide-react';
import { navLinks } from '../../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong shadow-lg shadow-brand-500/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 transition-shadow duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-extrabold bg-gradient-to-l from-brand-600 to-purple-600 bg-clip-text text-transparent">
              CenterCRM
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=%2B201009065792&text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85+%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C+%D8%AD%D8%A7%D8%A8%D8%A8+%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%B1+%D8%B9%D9%86+%D9%86%D8%B8%D8%A7%D9%85+CenterCRM&type=phone_number&app_absent=0"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-l from-brand-500 to-purple-500 text-white text-sm font-bold shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 transition-all duration-300 btn-shine"
          >
            تواصل معنا لطلب نسختك
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="فتح القائمة"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-white/40 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNav}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-600 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleNav}
                className="block mt-3 px-6 py-3 rounded-xl bg-gradient-to-l from-brand-500 to-purple-500 text-white text-sm font-bold text-center shadow-lg"
              >
                تواصل معنا لطلب نسختك
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
