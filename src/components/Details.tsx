import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crosshair, Home, HeartPulse, Sun, Plane, FileText, Shield, X, ChevronDown, ChevronUp } from 'lucide-react';

const details = [
  {
    id: "rifle-bow",
    icon: <Crosshair className="w-10 h-10" />,
    title: "Rifle & Bow Hunting",
    description: "Expert guidance for both rifle and bow hunters, ensuring a successful and ethical hunt.",
    fullDescription: "Our experienced professional hunters will ensure that your hunt will be an unforgettable adventure. We will adapt our hunt to your ability and ensure you get the best possible trophies. We will introduce Africa to you. Hunting with us will become an experience that will have you returning for more, year after year. We use well-built pit blind and tree stands for our bow hunting. Whatever is needed to get you that big one, we’ll make happen."
  },
  {
    id: "accommodation",
    icon: <Home className="w-10 h-10" />,
    title: "Accommodation Facilities",
    description: "Luxurious lodges and comfortable camps that blend seamlessly with the African bush.",
    fullDescription: "You will be staying in our luxurious lodge, where we will ensure you are made as comfortable as in your own home. You will be staying in our upgraded farmhouse with clean and neat rooms. Laundry can be done daily. Delicious meals will be freshly prepared and served every day. Please inform us of any special dietary requirements when confirming your booking. We will be happy to accommodate you."
  },
  {
    id: "health",
    icon: <HeartPulse className="w-10 h-10" />,
    title: "Health Details",
    description: "Comprehensive health and safety guidelines to keep you secure throughout your journey.",
    fullDescription: "The hunting lodge and lodge area are malaria free and no vaccinations are needed for travel to South Africa. However, if you will be visiting any of our neighbouring African countries, you will have to get Hepatitis and Tetanus shots. Ensure that you bring along a good quality sun block and tick repellent. A local private hospital, doctor and drug store are nearby in case of an emergency.\n\nFor the most up to date information on vaccinations and medications required or recommended for our country please visit this site https://wwwnc.cdc.gov/travel/"
  },
  {
    id: "weather",
    icon: <Sun className="w-10 h-10" />,
    title: "Weather",
    description: "Information on seasonal weather patterns to help you pack and prepare appropriately.",
    fullDescription: "Winters here are mild, but it can get cold between June and August. We recommend you pack a light base layer such as silk long underwear and one light and one heavy jacket when visiting us in this period. Green or khaki coloured clothing are good choices and camo is legal hunting wear in South Africa\n\nPlease be sure to check what the weather will be like by visiting this website – Climate for Lephalale area website"
  },
  {
    id: "travel",
    icon: <Plane className="w-10 h-10" />,
    title: "Best Way To Travel",
    description: "Assistance with flight bookings, transfers, and internal travel arrangements.",
    fullDescription: "It is preferable for clients to fly to Polokwane International Airport, where they will be met by our Professional Hunters, Alternatively, if flying into O.R Thambo (the old Johannesburg International) shuttle service can be arranged with Superior Safaris.\n\nFrom Polokwane, it is an hour drive and from O.R. Tambo it is a 4-hour drive. Superior African Hunting Safaris recommends that all clients obtain travel insurance prior to their safari."
  },
  {
    id: "regulations",
    icon: <FileText className="w-10 h-10" />,
    title: "Regulations & Documents",
    description: "Regulations and documents with Superior African Hunting Safaris is something we want every hunter to be comfortable with. If struggling or uncertain please contact us.",
    fullDescription: "Regulations and documents with Superior African Hunting Safaris is something we want every hunter to be comfortable with. If struggling or uncertain please contact us."
  },
  {
    id: "taxidermy",
    icon: <Shield className="w-10 h-10" />,
    title: "Taxidermy",
    description: "Taxidermy with Superior African Hunting Safaris is as important to us as it is to you. We know the importance of having that trophy against your wall and that life-size memory in your living room.",
    fullDescription: "Taxidermy with Superior African Hunting Safaris is as important to us as it is to you. We know the importance of having that trophy against your wall and that life-size memory in your living room."
  }
];

const notIncludedList = [
  "International and domestic flights",
  "Shipping and taxidermy",
  "Day fees for the day of arrival and first night in camp",
  "Rifle and ammunition(only per request)",
  "Baiting fees(if required)",
  "Local shopping trips to town",
  "15% VAT tax on daily rates and services(not applicable to trophy fees)",
  "Gratuities for safari staff and personal hunters",
  "Any animals wounded or hit where blood is drawn(Found or lost) is deemed taken and full trophy fee will apply"
];

export default function Details() {
  const [activeDetail, setActiveDetail] = useState<string | null>(null);
  const [isExclusionsExpanded, setIsExclusionsExpanded] = useState(false);

  const getActiveDetailContent = () => {
    return details.find(d => d.id === activeDetail);
  };

  const activeContent = getActiveDetailContent();

  return (
    <section id="details" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-primary text-3xl md:text-4xl font-bold uppercase mb-6">Safari Details</h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Safari details about your Superior African Hunting Safari. Here are some details you need to know. If you have any uncertainties please feel free to contact us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-light p-8 text-center border-b-4 border-transparent hover:border-primary transition-all duration-300 cursor-pointer"
              onClick={() => {
                setActiveDetail(detail.id);
                setIsExclusionsExpanded(false);
              }}
            >
              <div className="text-primary mb-6 flex justify-center">
                {detail.icon}
              </div>
              <h4 className="text-xl font-bold text-dark mb-4 uppercase">{detail.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Slide-in Drawer */}
      <AnimatePresence>
        {activeDetail && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDetail(null)}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl overflow-y-auto border-l border-gray-200"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="text-2xl font-bold text-primary uppercase">Safari Details</h4>
                  <button 
                    onClick={() => setActiveDetail(null)}
                    className="text-gray-400 hover:text-dark transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-light border-l-4 border-primary overflow-hidden">
                    <button 
                      className="w-full flex justify-between items-center p-6 text-left"
                      onClick={() => setIsExclusionsExpanded(!isExclusionsExpanded)}
                    >
                      <h5 className="text-lg font-bold text-dark uppercase">Prices Exclude</h5>
                      {isExclusionsExpanded ? <ChevronUp className="w-5 h-5 text-dark" /> : <ChevronDown className="w-5 h-5 text-dark" />}
                    </button>
                    <AnimatePresence>
                      {isExclusionsExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-6 pb-6"
                        >
                          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                            {notIncludedList.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {activeContent && (
                    <div className="border-t border-gray-200 pt-6">
                      <div className="text-primary mb-4">
                        {activeContent.icon}
                      </div>
                      <h5 className="text-xl font-bold text-dark mb-4 uppercase">{activeContent.title}</h5>
                      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                        {activeContent.fullDescription}
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <a 
                    href="#contact"
                    onClick={() => setActiveDetail(null)}
                    className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-6 py-4 font-bold uppercase text-sm transition-colors"
                  >
                    Contact Us
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
