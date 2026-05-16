import { motion } from 'motion/react';

export default function PopularDestination() {
  const images = [
    "/images/1-scaled.jpg",
    "/images/4-1024x683.jpg",
    "/images/5-1024x683.jpg",
    "/images/3-scaled.jpg",
  ];

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-primary text-3xl md:text-4xl font-bold uppercase mb-6">our popular destination</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Behind the scenes, a huge team of highly capable individuals all work together to make the African dream a true reality. Our Superior team work tirelessly during hunting season to ensure that everything you might expect is catered for without having to even think about it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img 
                src={src} 
                alt={`Destination image ${idx + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
