/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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

export default function App() {
  return (
    <div className="min-h-screen bg-white font-serif selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PopularDestination />
        <Offerings />
        <Specials />
        <Details />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
