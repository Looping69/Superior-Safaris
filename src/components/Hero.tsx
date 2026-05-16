import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/images/1-scaled.jpg"
          alt="Safari adventure"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-white mb-6 leading-tight uppercase drop-shadow-lg"
        >
          Searching for a great adventure
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed font-serif drop-shadow-md"
        >
          Discover the beauty of Southern Africa with diverse landscapes and wildlife, we invite you to an adventure like no other.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/#packages"
              className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-sm font-bold transition-colors uppercase tracking-widest text-sm shadow-xl inline-block"
              onClick={() => {
                setTimeout(() => {
                  document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Find it here
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
