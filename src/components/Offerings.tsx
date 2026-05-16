import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export const packages = [
  {
    id: "dangerous",
    title: "DANGEROUS GAME PACKAGES",
    image: "/images/f95d1bf7-6408-4ed4-a471-9d8b4a843940-768x1024.jpg",
    description: "Hunting Africa’s dangerous game might not be for everyone. Nerves of steel and experience as a hunter are very important. Also of great value is the skill of your professional hunter to put you in a position for a clean and effective shot, and to have your back when an animal decides to charge. This is where Superior African Hunting Safaris excel above the rest!",
    buttonText: "Get Info"
  },
  {
    id: "plains",
    title: "PLAINS GAME PACKAGES",
    image: "/images/3-scaled.jpg",
    description: "African Plains game hunting is arguably the largest marketing segment in the world. And for good reason! Affordable options, great diversity, different levels of difficulty, several species slams and the list goes on. Hunting plains game in Africa will never disappoint and is sure to satisfy all your hunting desires.",
    buttonText: "Get Info"
  },
  {
    id: "speciality",
    title: "SPECIALITY GAME PACKAGES",
    image: "/images/superiorspecial-5_thumb.jpg",
    description: "African Plains game hunting is arguably the largest marketing segment in the world. And for good reason! Affordable options, great diversity, different levels of difficulty, several species slams and the list goes on. Hunting plains game in Africa will never disappoint and is sure to satisfy all your hunting desires.",
    buttonText: "Get Info"
  },
  {
    id: "tailored",
    title: "TAILORED SAFARI",
    image: "/images/hunttailoredbanner.jpg",
    description: "Tailored Safaris with Superior African Hunting Safaris are all about you. You get to choose what you want to hunt, how you want to hunt it, your available budget, your preferences and pretty much anything else. We will then design your dream hunt and create a Safari Package unlike any other!",
    buttonText: "Get Info"
  },
  {
    id: "fishing",
    title: "FISHING SAFARI",
    image: "/images/safarisfishing.jpg",
    description: "With Superior African Hunting Safaris, your next fishing safari is planned to perfection. Real African deepsea fishing adventure awaits you. Why not make this part of your next Superior African Hunting Safaris hunting experience?",
    buttonText: "Get Info"
  },
  {
    id: "caprivi",
    title: "CAPRIVI STRIP, NAMIBIA",
    image: "/images/image-16.jpeg",
    description: "The Caprivi Strip is a legendary hunting area now offered by Superior Safaris. If it is hunting in the true wilderness of Africa you desire, then this is the place you need to be!",
    buttonText: "More Info"
  },
  {
    id: "tiger",
    title: "TIGER FISHING",
    image: "/images/safarisfishing.jpg",
    description: "Exclusive 5 Day / 4 Night fishing expedition in Namibia. Experience the thrill of catching the legendary Tiger Fish.",
    buttonText: "Get Info"
  },
  {
    id: "girls",
    title: "ALL GIRLS PACKAGES",
    image: "/images/4-1024x683.jpg",
    description: "A new addition for the ladies! Unforgettable trips tailor-made for ladies, from Cape Town to Sun City and Mauritius.",
    buttonText: "Get Info"
  }
];

const dangerousGameDetails = [
  {
    title: "Buffalo Hunt",
    description: "Superior African Hunting Safaris offers some of the best Buffalo hunting Africa has to offer! We can cater for any Buffalo you would wish to hunt. Please note that the price is dependant on the size Buffalo hunted. Please inquire below for more information."
  },
  {
    title: "Leopard Hunt Namibia",
    description: "14 days Accommodation\nTrophy is Exportable"
  },
  {
    title: "Nile Crocodile Mozambique",
    description: "1x crocodile – Expect 13 to 18 feet\nIncludes Airfare to Mozambique from Johannesburg, Accommodation, 3 meals a day, transportation fees & soft drinks."
  },
  {
    title: "Elephant bull hunt Zimbabwe (Gonarezhou)",
    description: ""
  }
];

const plainsGameDetails = [
  {
    title: "Let's jump in package",
    description: "This package includes – Bluewildebeest, Warthog, Impala, 5 days accommodation."
  },
  {
    title: "Beginners package",
    description: "This package includes – Warthog, Impala, Blesbuck, 5 days accommodation."
  },
  {
    title: "Spiral Horned Slam",
    description: "This package includes – Eland, Bushbuck, Nyala, Kudu and accommodation for 10-days"
  },
  {
    title: "Monster Mountain Package",
    description: "This package is for two hunters, includes accommodation for 7-days and the animals may be split as per request. These animals include – Klipspringer, Mountain reedbuck, Baboon, Kudu, Bushpig, Bushbuck."
  },
  {
    title: "Mountain Package",
    description: "This package includes – Klipspringer, Mountain reedbuck, Baboon, Bushpig, 7 days accommodation."
  }
];

const specialityGameDetails = [
  {
    title: "Blesbuck Slam",
    description: "This package includes – Yellow Blesbuck, Copper Blesbuck, White Blesbuck, Common Blesbuck, 7 days accommodation."
  },
  {
    title: "Springbuck Slam",
    description: "This package includes – White Springbuck, Black Springbuck, Copper Springbuck, Common Springbuck, 7 days accommodation."
  },
  {
    title: "Wildebeest Slam",
    description: "This package includes – Kings Wildebeest, Golden Wildebeest, Blue Wildebeest, Black Wildebeest and accommodation for 7-days"
  },
  {
    title: "Impala Slam",
    description: "This package includes – White Impala, Black Impala, Saddleback Impala, Common Impala and accommodation for 7-days"
  },
  {
    title: "Night Crawlers",
    description: "This package includes – Steenbok, Common Duiker, Warthog, Bushpig and accommodation for 7-days with all soft drinks & three meals a day. Travel from the airport and back also included."
  }
];

const tailoredSafariDetails = [
  {
    title: "Cost Summary",
    description: "To give you a rough idea of our costs, here is a quick summary. For more details, please click the enquiry button where we will then be able to assist with all the information you need."
  },
  {
    title: "One-on-One Daily Fee",
    description: ""
  },
  {
    title: "Two-on-One Daily Fee",
    description: ""
  },
  {
    title: "Observer Fee (12<)",
    description: ""
  },
  {
    title: "Observer Fee (<11)",
    description: ""
  }
];

const fishingSafariDetails = [
  {
    title: "6 Day fishing safari in Mozambique",
    description: ""
  },
  {
    title: "Day – 1",
    description: "Fly from OR Tambo (Johannesburg) to Vilanculos in Mozambique(flight included in the package) drive +- 1 hour to a town called Inhassoro, stay in a lodge called the Captian Lee."
  },
  {
    title: "Day – 2",
    description: "Visit Paradise island( where Survivor Africa was done), followed with a Lunch on Bazaruto island."
  },
  {
    title: "Day – 3",
    description: "A day of predator fishing ( bottom fish ext )"
  },
  {
    title: "Day – 4",
    description: "A day of deep sea fishing."
  },
  {
    title: "Day – 5",
    description: "A day trip to the famous BD point."
  },
  {
    title: "Day – 6",
    description: "Continue on your Safari with us or fly home."
  }
];

const capriviDetails = [
  {
    title: "Cost Summary",
    description: "To give you a rough idea of our costs, here is a quick summary. For more details, please click the enquiry button where we will then be able to assist with all the information you need."
  },
  {
    title: "All prices include:",
    description: "Daily rates; accommodation; meals; Drinks – bottled water, soft drinks, beer x 6, wyn x 1; Ground transfer – Katima to Caprivi, or Windhoek to Boemanland; PH services; Hunting Vehicle; Skinners & Trackers; Salt & Field Prep; Permits; Quarantine of trophies & transport to Caspers Taxidermy in Grootfontein for Dip & Ship;"
  },
  {
    title: "Not Included:",
    description: "Private Charters; Hotel before & after safari; Gun Rental @ $75 per day, includes ammo; Dip & Ship; Flight tickets; Taxidermy; Additional Liquor; Second PH or Cameraman @ $100 pppd; Client Observers @ $250 pppd"
  },
  {
    title: "BOESMANLAND",
    description: ""
  },
  {
    title: "CAPRIVI",
    description: ""
  },
  {
    title: "Non-Export:",
    description: ""
  }
];

const tigerFishingDetails = [
  {
    title: "Tiger Fishing Exclusive",
    description: "5 DAY / 4 NIGHT FISHING EXPEDITION NAMIBIA"
  },
  {
    title: "Tour Includes:",
    description: "Return flights Johannesburg – Kasane, Botswana – Johannesburg; Return road / boat transfers; 4 Night's accommodation at fishing lodge; Full Board (breakfast, lunch & dinner); Fishing with boat Guide and fuel"
  },
  {
    title: "Tour Excludes:",
    description: "All drinks, all fishing gear, bait, gratuities, insurances and optional extras."
  }
];

const allGirlsDetails = [
  {
    title: "African Adventures",
    description: "A new addition for the ladies! Ladies, get a few friends together for an idyllic trip to Africa! Or are you joining your husband on his hunting trip to Africa? While the men are busy hunting, let us take you on an unforgettable trip, tailor-made for ladies…"
  },
  {
    title: "Option 1: Cape Town",
    description: "Visit places of interest like Robben Island, Table Mountain, and the beautiful winelands."
  },
  {
    title: "Option 2: Sun City",
    description: "Experience a once-in-a-lifetime drum show with local cuisine dinner."
  },
  {
    title: "Option 3: Mauritius",
    description: "Have a trip tailor-made for you and your friends!"
  }
];

export default function Offerings() {
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  const getDrawerDetails = () => {
    if (activeDrawer === 'dangerous') return dangerousGameDetails;
    if (activeDrawer === 'plains') return plainsGameDetails;
    if (activeDrawer === 'speciality') return specialityGameDetails;
    if (activeDrawer === 'tailored') return tailoredSafariDetails;
    if (activeDrawer === 'fishing') return fishingSafariDetails;
    if (activeDrawer === 'caprivi') return capriviDetails;
    if (activeDrawer === 'tiger') return tigerFishingDetails;
    if (activeDrawer === 'girls') return allGirlsDetails;
    return [];
  };

  const drawerDetails = getDrawerDetails();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hunting Safari Packages",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Superior African Hunting Safaris"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Safari Packages",
      "itemListElement": packages.map((pkg, index) => ({
        "@type": "Offer",
        "url": `https://www.superiorsafaris.co.za/package/${pkg.id}`,
        "itemOffered": {
          "@type": "Service",
          "name": pkg.title,
          "description": pkg.description
        }
      }))
    }
  };

  return (
    <section id="packages" className="py-20 bg-dark text-white relative">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-primary text-3xl md:text-4xl font-bold uppercase mb-8">Hunting Is In Our Blood.</h3>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed italic border-l-4 border-primary pl-6 text-left">
            "As a dedicated hunter, I take personal pride in the trophies my clients take with Superior African Hunting Safaris on every hunt. My personal guarantee to you is that you will leave us with great memories, new friends, outstanding trophies and the desire to come back again and again. Join us this year to experience your African dream hunt."
            <br/><br/>
            <span className="font-bold not-italic text-primary">– Eli van der Walt</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-darker flex flex-col cursor-pointer group"
              onClick={() => {
                if (pkg.id === "dangerous" || pkg.id === "plains" || pkg.id === "speciality" || pkg.id === "tailored" || pkg.id === "fishing" || pkg.id === "caprivi" || pkg.id === "tiger" || pkg.id === "girls") {
                  setActiveDrawer(pkg.id);
                }
              }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h5 className="text-xl font-bold mb-4 text-white uppercase">{pkg.title}</h5>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {pkg.description}
                </p>
                <Link 
                  to={`/package/${pkg.id}`}
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 font-bold uppercase text-sm transition-colors self-start inline-block text-center"
                  onClick={(e) => {
                    e.preventDefault();
                    if (pkg.id === "dangerous" || pkg.id === "plains" || pkg.id === "speciality" || pkg.id === "tailored" || pkg.id === "fishing" || pkg.id === "caprivi" || pkg.id === "tiger" || pkg.id === "girls") {
                      e.stopPropagation();
                      setActiveDrawer(pkg.id);
                    }
                  }}
                >
                  {pkg.buttonText}
                </Link>
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
                  <h4 className="text-2xl font-bold text-primary uppercase">Our Offerings Include</h4>
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
                    Inquire Now
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
