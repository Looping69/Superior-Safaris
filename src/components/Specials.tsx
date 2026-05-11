import { motion } from 'motion/react';

const specials = [
  {
    title: "2026 Safari Special",
    description: "5 day all inclusive African adventure. See Africa in just 5 days with a Superior guide leading the way. Includes Kruger Park Lodge, Private game drive, Victoria Falls (Zim), and flights to O.R Tambo.",
    image: "https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1920",
    badge: "$5600.00 per person"
  },
  {
    title: "Father & Son Special",
    description: "Share the ultimate bonding experience. Second hunter pays only 50% of the daily rate. Create memories that will last a lifetime.",
    image: "https://www.superiorsafaris.co.za/wp-content/uploads/2024/03/1-scaled.jpg",
    badge: "50% OFF 2nd Hunter"
  }
];

export default function Specials() {
  return (
    <section id="specials" className="py-20 bg-primary text-white">
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
              className="bg-darker flex flex-col md:flex-row overflow-hidden group"
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
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <h4 className="text-xl font-bold mb-4 uppercase">{special.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {special.description}
                </p>
                <a 
                  href="#contact"
                  className="inline-block border-2 border-primary hover:bg-primary text-white px-6 py-2 font-bold uppercase text-sm transition-colors self-start"
                >
                  Claim Offer
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
