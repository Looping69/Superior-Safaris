import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-darker text-gray-400 py-16 border-t border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="https://www.superiorsafaris.co.za/wp-content/uploads/2023/11/cropped-cropped-logo-2.png" 
                alt="Superior Safaris Logo" 
                className="h-16"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Providing world-class hunting safaris across Southern Africa. Experience the thrill of the hunt with our expert guides and luxurious accommodations.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/superiorsafaris" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/superiorsafaris" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/superiorsafaris" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors text-sm">Packages</a></li>
              <li><a href="#specials" className="hover:text-primary transition-colors text-sm">Specials</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors text-sm">Gallery</a></li>
              <li><a href="#details" className="hover:text-primary transition-colors text-sm">Safari Details</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Packages</h4>
            <ul className="space-y-3">
              <li><a href="#packages" className="hover:text-primary transition-colors text-sm">Dangerous Game</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors text-sm">Plains Game</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors text-sm">Speciality Game</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors text-sm">Tailored Safari</a></li>
              <li><a href="#packages" className="hover:text-primary transition-colors text-sm">Fishing Safari</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form 
              className="flex flex-col space-y-2 relative"
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.elements.namedItem('email') as HTMLInputElement;
                if (!input.value.trim()) {
                  input.setCustomValidity('Please enter your email address.');
                  input.reportValidity();
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                  input.setCustomValidity('Please enter a valid email address.');
                  input.reportValidity();
                } else {
                  input.setCustomValidity('');
                  alert('Thank you for subscribing!');
                  e.currentTarget.reset();
                }
              }}
            >
              <input 
                type="email" 
                name="email"
                placeholder="Your email" 
                onChange={(e) => e.target.setCustomValidity('')}
                className="bg-dark border border-gray-800 text-white px-4 py-3 w-full focus:outline-none focus:border-primary text-sm transition-colors"
              />
              <button 
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-3 transition-colors text-sm font-bold uppercase"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-dark text-sm text-center flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Superior Safaris. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
