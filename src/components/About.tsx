import { motion } from 'motion/react';

export default function About() {
  const images = [
    "/images/WhatsApp-Image-2024-03-03-at-10.18.23_5d33be47-150x150.jpg",
    "/images/ECJ-PHOTOGRAPHY-461-150x150.jpg",
    "/images/ECJ-PHOTOGRAPHY-456-150x150.jpg",
    "/images/WhatsApp-Image-2024-03-03-at-10.18.23_2abaf8a3-150x150.jpg",
    "/images/ECJ-PHOTOGRAPHY-454-150x150.jpg",
    "/images/ECJ-PHOTOGRAPHY-444-150x150.jpg",
    "/images/ECJ-PHOTOGRAPHY-422-150x150.jpg",
    "/images/ECJ-PHOTOGRAPHY-418-150x150.jpg",
    "/images/ECJ-PHOTOGRAPHY-405-150x150.jpg",
    "/images/ECJ-PHOTOGRAPHY-387-150x150.jpg",
    "/images/ECJ-PHOTOGRAPHY-334-150x150.jpg",
    "/images/ECJ-PHOTOGRAPHY-91-150x150.jpg",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-primary text-xl font-bold uppercase mb-2">a memorable experience of nature</h3>
            <h5 className="text-dark text-3xl font-bold uppercase mb-6">Relax & Revitalise</h5>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Welcome to our African Hunting Safari! We are thrilled to provide you with a vast array of options so you can truly have an unforgettable experience. Hunting with us not only guarantees an exciting hunt and unforgettable memories but also the chance to harvest a magnificent specimen that will be treasured in your home for generations to come.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We offer complete information on planned photo safaris to top vacation destinations. Please note that these trips are flexible. Contact us for any desired changes, as we are happy to assist you in any way.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-3 sm:grid-cols-4 gap-2"
          >
            {images.map((src, idx) => (
              <div key={idx} className="aspect-square overflow-hidden">
                <img 
                  src={src} 
                  alt={`Gallery image ${idx + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
