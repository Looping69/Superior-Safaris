import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import metadata from '../../metadata.json';
import { packages } from '../components/Offerings';

export default function PackagePage() {
  const { id } = useParams();
  const pkg = packages.find(p => p.id === id);

  if (!pkg) {
    return <Navigate to="/#packages" replace />;
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": pkg.title,
    "description": pkg.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Superior African Hunting Safaris"
    }
  };

  return (
    <div className="pt-24 pb-20 bg-dark text-white min-h-screen">
      <Helmet>
        <title>{pkg.title} | {metadata.name}</title>
        <meta name="description" content={pkg.description} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/#packages" className="text-primary hover:text-white uppercase text-sm font-bold tracking-widest mb-8 inline-block transition-colors">
          &larr; Back to Packages
        </Link>
        
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-64 md:h-96 object-cover rounded-sm mb-10 shadow-2xl" 
        />
        
        <h1 className="text-4xl md:text-5xl font-bold uppercase text-primary mb-6">{pkg.title}</h1>
        
        <div className="bg-darker p-8 rounded-sm border-l-4 border-primary">
          <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
            {pkg.description}
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/#contact"
            className="inline-block bg-primary hover:bg-white hover:text-dark text-white px-10 py-4 font-bold uppercase tracking-widest text-sm transition-colors shadow-lg"
          >
            Inquire About This Package
          </a>
        </div>
      </div>
    </div>
  );
}
