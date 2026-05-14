import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#' },
    { name: 'About Us', href: '/#about' },
    { name: 'Packages', href: '/#packages' },
    { name: 'Specials', href: '/#specials' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Safari Details', href: '/#details' },
    { name: 'Contact', href: '/#contact' },
  ];

  // For non-home pages, we might want the navbar to always appear solid, or at least have dark text
  const isSolid = scrolled || !isHomePage;
  const textColorClass = isSolid ? 'text-dark hover:text-primary' : 'text-white hover:text-primary';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isSolid ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <img 
              src="https://www.superiorsafaris.co.za/wp-content/uploads/2023/11/cropped-cropped-logo-2.png" 
              alt="Superior Safaris Logo" 
              className={`transition-all duration-300 ${isSolid ? 'h-16' : 'h-24'}`}
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`transition-colors text-sm font-bold uppercase tracking-wide ${textColorClass}`}
                onClick={(e) => {
                  if (link.href.startsWith('/#')) {
                    const id = link.href.split('#')[1];
                    setTimeout(() => {
                      const element = document.getElementById(id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      } else if (!id) {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }, 100);
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
            <LanguageSelector />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={isSolid ? 'text-dark' : 'text-white'}
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 top-full">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-3 text-base font-bold text-dark hover:text-primary hover:bg-gray-50 rounded-md uppercase tracking-wide border-b border-gray-100"
                onClick={() => {
                  setIsOpen(false);
                  if (link.href.startsWith('/#')) {
                    const id = link.href.split('#')[1];
                    setTimeout(() => {
                      const element = document.getElementById(id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      } else if (!id) {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }, 100);
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
