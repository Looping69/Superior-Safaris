import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import metadata from '../../metadata.json';
import { specials } from '../components/Specials';

export default function SpecialPage() {
  const { id } = useParams();
  const special = specials.find(s => s.id === id);

  if (!special) {
    return <Navigate to="/#specials" replace />;
  }

  const specialSchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": special.title,
    "description": special.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Superior African Hunting Safaris"
    },
    "offers": {
      "@type": "Offer",
      "name": special.badge
    }
  };

  return (
    <div className="pt-24 pb-20 bg-primary text-white min-h-screen">
      <Helmet>
        <title>{special.title} | {metadata.name}</title>
        <meta name="description" content={special.description} />
        <script type="application/ld+json">
          {JSON.stringify(specialSchemaData)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/#specials" className="text-white/70 hover:text-white uppercase text-sm font-bold tracking-widest mb-8 inline-block transition-colors">
          &larr; Back to Specials
        </Link>
        
        <div className="relative">
          <img 
            src={special.image} 
            alt={special.title} 
            className="w-full h-64 md:h-96 object-cover rounded-sm mb-10 shadow-2xl" 
          />
          {special.badge && (
            <div className="absolute top-4 right-4 bg-primary text-white px-6 py-2 font-bold uppercase tracking-wider text-sm shadow-lg border border-white/20">
              {special.badge}
            </div>
          )}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold uppercase mb-6">{special.title}</h1>
        
        <div className="bg-darker text-gray-300 p-8 rounded-sm">
          <p className="text-lg leading-relaxed whitespace-pre-line">
            {special.description}
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/#contact"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-10 py-4 font-bold uppercase tracking-widest text-sm transition-colors shadow-lg"
          >
            Claim This Special
          </a>
        </div>
      </div>
    </div>
  );
}
