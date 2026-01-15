import { navItems, products, partners } from "@/data/aps"; // Import the new partners list
import { LinkedInFeed } from "@/components/aps/LinkedInFeed";
import heroImage from "/assets/homepage_hero.avif"; 
import apsLogo from "/assets/aps-logo-white.png"; // Using your REAL logo
import { ArrowRight, ChevronRight, Menu, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Option1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-white">
      
      {/* Top Bar - Modernized with Icons */}
      <div className="bg-black text-white text-xs py-2 px-4 md:px-8 flex flex-col md:flex-row justify-end gap-4 items-center">
        <div className="flex gap-4">
            <a href="tel:800-395-0693" className="hover:text-aps-red flex items-center gap-1 transition-colors">
                <Phone className="w-3 h-3" /> (800) 395-0693
            </a>
            <span className="hidden md:inline text-gray-600">|</span>
            <a href="mailto:info@ampowersys.com" className="hover:text-aps-red flex items-center gap-1 transition-colors">
                <Mail className="w-3 h-3" /> info@ampowersys.com
            </a>
        </div>
        <div className="hidden md:flex gap-4 border-l border-gray-700 pl-4">
            <a href="#" className="hover:text-gray-300 font-bold">CAREERS</a>
            <a href="#" className="hover:text-gray-300 font-bold">APS PORTAL</a>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-aps-blue shadow-lg border-b-4 border-aps-red">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Updated to use Image */}
            <Link href="/">
              <a className="flex items-center gap-2 cursor-pointer">
                <img src={apsLogo} alt="APS Logo" className="h-12 w-auto" />
              </a>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-white font-bold hover:text-aps-red transition-colors text-sm uppercase tracking-wider"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-aps-dark border-t border-white/10 p-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-white font-bold hover:text-aps-red text-lg">
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section - Using Real Image */}
      <section className="relative h-[650px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Dark overlay for text readability */}
        <img 
          src={heroImage} 
          alt="APS Facility" 
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[20s]" 
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl text-white">
              <div className="inline-block bg-aps-red text-white text-xs font-bold px-3 py-1 mb-6 uppercase tracking-[0.2em]">
                Since 1994
              </div>
              <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                POWERING YOUR <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">SUCCESS</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl leading-relaxed drop-shadow-md">
                We provide complete DC power solutions through operational excellence and a commitment to safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-aps-red hover:bg-red-700 text-white px-10 py-4 font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Explore Products
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-aps-blue text-white px-10 py-4 font-bold uppercase tracking-wider transition-all">
                  Contact Engineering
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Trusted Partners Strip */}
      <section className="bg-gray-100 border-b border-gray-200 py-8 overflow-hidden">
        <div className="container mx-auto px-6">
            <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Trusted Partners & Brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                {partners.map((partner, idx) => (
                    <img 
                        key={idx} 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="h-12 md:h-16 w-auto object-contain mix-blend-multiply" 
                    />
                ))}
            </div>
        </div>
      </section>

      {/* Products & Services Grid */}
      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-heading font-bold text-aps-blue mb-4">Core Solutions</h2>
              <div className="h-1.5 w-24 bg-aps-red"></div>
            </div>
            <p className="text-gray-600 max-w-lg text-lg">
                From motive power to critical backup infrastructure, we engineer systems that keep your business running.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((prod, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-aps-blue to-aps-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="w-14 h-14 bg-blue-50 text-aps-blue rounded-lg mb-6 flex items-center justify-center group-hover:bg-aps-blue group-hover:text-white transition-colors duration-300">
                   {/* In a real app, map prod.icon to a Lucide icon component here */}
                   <span className="font-bold text-2xl">{idx + 1}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-aps-blue transition-colors">{prod.title}</h3>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                  {prod.desc}
                </p>
                
                <a href="#" className="inline-flex items-center text-aps-red font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                  View Specs <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Wall */}
      <LinkedInFeed />

      {/* Footer */}
      <footer className="bg-aps-dark text-white pt-24 pb-12 mt-auto border-t-[10px] border-aps-blue">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <img src={apsLogo} alt="APS" className="h-12 mb-8 opacity-90" />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                American Power Systems provides industry-leading DC power solutions for telecommunications, utility, and industrial applications.
              </p>
              <div className="flex gap-4">
                  {/* Social Icons Placeholder */}
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-aps-red cursor-pointer transition">in</div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-aps-red cursor-pointer transition">fb</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-8 text-white tracking-widest uppercase text-xs">Navigation</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-aps-red transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3"/> Home</a></li>
                <li><a href="#" className="hover:text-aps-red transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3"/> Services</a></li>
                <li><a href="#" className="hover:text-aps-red transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3"/> Products</a></li>
                <li><a href="#" className="hover:text-aps-red transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3"/> Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 text-white tracking-widest uppercase text-xs">Contact Headquarters</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex gap-3 items-start">
                    <MapPin className="w-5 h-5 text-aps-red shrink-0" />
                    <span>1851 Central Place South,<br/>Suite 206<br/>Kent, WA 98030</span>
                </li>
                <li className="flex gap-3 items-center">
                    <Phone className="w-5 h-5 text-aps-red shrink-0" />
                    <a href="tel:800-395-0693" className="hover:text-white transition">(800) 395-0693</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <p>&copy; 2026 American Power Systems. All rights reserved.</p>
            <div className="flex gap-8">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
                <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
          
          {/* NASPO Logo Integration */}
          <div className="flex justify-center mt-12">
             <img src="/assets/naspo-logo-white.png" alt="NASPO ValuePoint" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
          </div>

        </div>
      </footer>
    </div>
  );
}
