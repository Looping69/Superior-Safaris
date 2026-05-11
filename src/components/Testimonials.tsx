import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "John Smith",
    location: "Texas, USA",
    text: "An absolutely incredible experience. The guides were knowledgeable, the accommodation was top-notch, and the hunting was beyond my expectations."
  },
  {
    name: "Michael Johnson",
    location: "London, UK",
    text: "Superior Safaris truly lives up to their name. From the moment we arrived until our departure, everything was handled with utmost professionalism."
  },
  {
    name: "David Williams",
    location: "Alberta, Canada",
    text: "My third time hunting in Africa, and by far the best outfitter I've used. The attention to detail and commitment to ethical hunting is commendable."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-light text-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-primary text-3xl md:text-4xl font-bold uppercase">WHAT OUR CLIENTS SAY</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 shadow-md border-t-4 border-primary relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-200" />
              <div className="mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-primary text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-lg text-dark uppercase">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
