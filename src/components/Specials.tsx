import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const safari2026Details = [
  {
    title: "Itinerary",
    description: "See Africa in just 5 days with a Superior guide leading the way starting at:\n\nDay 1 - Kruger Park Lodge\nDay 2 - Private game drive\nDay 03 - Fly to Victoria Falls (Zim)\nDay 4 - Victoria Falls\nDay 5 - Fly to O.R Tambo interational airport"
  },
  {
    title: "Included",
    description: "This trip is all inclusive except for alcoholic beverages, tips and extra activities.\n\n• Non alcoholic Beverages\n• Meals\n• Hotels\n• Airfare to Victoria falls and back to Johannesburg\n• A tour guide\n• Activities listed"
  },
  {
    title: "Price",
    description: "For the total of $5600 per person Superior African Hunting Safaris"
  }
];

const fatherSonDetails = [
  {
    title: "Ultimate Bonding Experience",
    description: "Create unforgettable memories as you traverse the African bush, sharing the thrill of the hunt."
  },
  {
    title: "50% Off Daily Rate",
    description: "The second hunter in your party pays only half of our standard daily rate. An incredible value for duo hunts."
  },
  {
    title: "Tailored for All Skill Levels",
    description: "Our professional hunters adapt to your abilities, making this perfect for both experienced hunters and beginners alike."
  },
  {
    title: "Accommodation & Meals",
    description: "Stay in comfort and enjoy freshly prepared traditional meals throughout your safari experience."
  }
];

export const specials = [
  {
    id: "safari2026",
    title: "2026 Safari Special",
    description: "See Africa in just 5 days with a Superior guide leading the way starting at Kruger Park Lodge with flights to Victoria Falls and O.R Tambo included.",
    image: "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1920",
    badge: "$5600.00 per person",
    buttonText: "More Info"
  },
  {
    id: "fatherson",
    title: "Father & Son Special",
    description: "Share the ultimate bonding experience. Second hunter pays only 50% of the daily rate. Create memories that will last a lifetime.",
    image: "/images/1-scaled.jpg",
    badge: "50% OFF 2nd Hunter",
    buttonText: "More Info"
  }
];

export default function Specials() {
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  const getDrawerDetails = () => {
    if (activeDrawer === 'safari2026') return safari2026Details;
    if (activeDrawer === 'fatherson') return fatherSonDetails;
    return [];
  };

  const drawerDetails = getDrawerDetails();

  const specialsSchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hunting Safari Specials",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Superior African Hunting Safaris"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Special Safari Offers",
      "itemListElement": specials.map((special, index) => ({
        "@type": "Offer",
        "url": `https://www.superiorsafaris.co.za/special/${special.id}`,
        "itemOffered": {
          "@type": "Service",
          "name": special.title,
          "description": special.description
        }
      }))
    }
  };

  return (
    <section id="specials" className="py-20 bg-primary text-white relative">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(specialsSchemaData)}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-white text-3xl md:text-4xl font-bold uppercase mb-6">Current Specials</h3>
          <p className="text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Take advantage of our limited-time offers and exclusive packages. Don't miss out on the opportunity to experience Superior African Hunting Safaris at an exceptional value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specials.map((special, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-darker flex flex-col md:flex-row overflow-hidden group cursor-pointer"
              onClick={() => setActiveDrawer(special.id)}
            >
              <div className="md:w-2/5 relative overflow-hidden">
                <img 
                  src={special.image} 
                  alt={special.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[250px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  {special.badge}
                </div>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center relative z-10 h-full">
                <h4 className="text-xl font-bold mb-4 uppercase group-hover:text-primary transition-colors">
                  <Link 
                    to={`/special/${special.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveDrawer(special.id);
                    }}
                    className="hover:underline focus:outline-none"
                  >
                    {special.title}
                  </Link>
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {special.description}
                </p>
                <div className="flex gap-4 self-start mt-auto">
                  <Link 
                    to={`/special/${special.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveDrawer(special.id);
                    }}
                    className="inline-block bg-white text-primary hover:bg-gray-100 px-6 py-2 font-bold uppercase text-sm transition-colors text-center"
                  >
                    {special.buttonText}
                  </Link>
                  <a 
                    href="#contact"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block border-2 border-primary hover:bg-primary text-white px-6 py-2 font-bold uppercase text-sm transition-colors"
                  >
                    Claim Offer
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Slide-in Drawer */}
      <AnimatePresence>
        {activeDrawer && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDrawer(null)}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-darker z-50 shadow-2xl overflow-y-auto border-l border-dark"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="text-2xl font-bold text-primary uppercase">Special Details</h4>
                  <button 
                    onClick={() => setActiveDrawer(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-8">
                  {drawerDetails.map((detail, idx) => (
                    <div key={idx} className="border-b border-dark pb-6 last:border-0">
                      <h5 className="text-lg font-bold text-white mb-3 uppercase">{detail.title}</h5>
                      {detail.description && (
                        <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                          {detail.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-dark">
                  <a 
                    href="#contact"
                    onClick={() => setActiveDrawer(null)}
                    className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-6 py-4 font-bold uppercase text-sm transition-colors"
                  >
                    Claim This Special
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
