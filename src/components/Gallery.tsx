import { motion } from 'motion/react';
import { ZoomIn } from 'lucide-react';

const galleryImages = [
  "https://www.superiorsafaris.co.za/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-03-at-10.18.23_5d33be47-150x150.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2023/12/ECJ-PHOTOGRAPHY-461-150x150.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2023/12/ECJ-PHOTOGRAPHY-456-150x150.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-03-at-10.18.23_2abaf8a3-150x150.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2023/12/ECJ-PHOTOGRAPHY-454-150x150.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2023/12/ECJ-PHOTOGRAPHY-444-150x150.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2024/03/4-1024x683.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2024/03/5-1024x683.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2023/11/image-16.jpeg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2023/12/safarisfishing.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2023/12/hunttailoredbanner.jpg",
  "https://www.superiorsafaris.co.za/wp-content/uploads/2023/12/superiorspecial-5_thumb.jpg"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-primary text-3xl md:text-4xl font-bold uppercase mb-6">Our Gallery</h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A glimpse into the African bush. Browse through our collection of memories, successful hunts, and the stunning landscapes of Superior African Hunting Safaris.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="aspect-square overflow-hidden bg-dark relative group cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact"
            className="inline-block bg-dark hover:bg-primary text-white px-8 py-3 font-bold uppercase tracking-widest text-sm transition-colors"
          >
            Start Your Adventure
          </a>
        </div>
      </div>
    </section>
  );
}
