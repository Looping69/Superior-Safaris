/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import metadata from '../metadata.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PopularDestination from './components/PopularDestination';
import Offerings from './components/Offerings';
import Specials from './components/Specials';
import Gallery from './components/Gallery';
import Details from './components/Details';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PackagePage from './pages/PackagePage';
import SpecialPage from './pages/SpecialPage';

function Home() {
  return (
    <>
      <Helmet>
        <title>{metadata.name}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>
      <Hero />
      <About />
      <PopularDestination />
      <Offerings />
      <Specials />
      <Details />
      
      {/* Gallery Section Preview Linking to the Full Gallery */}
      <section id="gallery" className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-primary text-3xl md:text-4xl font-bold uppercase mb-6">Our Gallery</h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A glimpse into the African bush. Browse through our collection of memories, successful hunts, and the stunning landscapes of Superior African Hunting Safaris.
            </p>
          </div>
          
          <div className="text-center">
            <Link 
              to="/gallery" 
              className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-4 font-bold uppercase tracking-widest text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <Contact />
    </>
  );
}

function GalleryPage() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Gallery | {metadata.name}</title>
        <meta name="description" content="Browse through our collection of memories, successful hunts, and the stunning landscapes of Superior African Hunting Safaris." />
      </Helmet>
      <Gallery />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-serif selection:bg-primary/30 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/package/:id" element={<PackagePage />} />
            <Route path="/special/:id" element={<SpecialPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
