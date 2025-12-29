
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients' },
    { name: 'Leadership', href: '#leadership' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-xl md:text-2xl font-extrabold tracking-tighter ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              ASK <span className="text-blue-500">ENTERPRISES</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-slate-200 hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 top-[60px] bg-white z-40 transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-4 pt-8 pb-12 space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center bg-blue-600 text-white py-4 rounded-xl text-lg font-bold shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
