import { navItems, products } from "@/data/aps";
import { LinkedInFeed } from "@/components/aps/LinkedInFeed";
import heroImage from "@assets/generated_images/industrial_power_systems_factory_floor.png";
import { ArrowRight, ChevronRight, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Option1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-white">
      {/* Top Bar */}
      <div className="bg-black text-white text-xs py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <span>Leading DC Power Solutions Since 1995</span>
          <div className="flex gap-4 font-medium">
            <a href="#" className="hover:text-aps-red transition-colors">Contact</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-aps-red transition-colors">Careers</a>
            <span className="text-gray-600">|</span>
            <Link href="/" className="text-gray-400 hover:text-white">Back to Menu</Link>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-aps-blue shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-aps-blue border-2 border-white p-2">
                <span className="text-white font-heading font-bold text-3xl tracking-tighter">APS</span>
              </div>
              <span className="text-white font-light text-sm hidden sm:block leading-tight opacity-80">
                AMERICAN<br/>POWER SYSTEMS
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-white font-medium hover:text-aps-red transition-colors text-sm uppercase tracking-wide"
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
                <a key={item.name} href={item.href} className="text-white hover:text-aps-red">
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Wide Hero */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <img 
          src={heroImage} 
          alt="Industrial Facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-aps-blue/90 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="font-heading text-6xl font-bold mb-6 leading-tight">
                LEADING DC <br/>
                <span className="text-aps-red">POWER SOLUTIONS</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 font-light">
                Engineering reliable power infrastructure for the world's most critical applications.
              </p>
              <div className="flex gap-4">
                <button className="bg-aps-red hover:bg-red-700 text-white px-8 py-3 font-bold uppercase tracking-wider transition-colors">
                  View Products
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-aps-blue text-white px-8 py-3 font-bold uppercase tracking-wider transition-colors">
                  Contact Engineering
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-heading font-bold text-aps-blue mb-2">Our Divisions</h2>
              <div className="h-1 w-20 bg-aps-red"></div>
            </div>
            <a href="#" className="hidden md:flex items-center text-aps-blue font-bold hover:text-aps-red transition-colors">
              View All Services <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((prod, idx) => (
              <div key={idx} className="bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group border-b-4 border-transparent hover:border-aps-red">
                <div className="w-12 h-12 bg-aps-blue/5 rounded mb-6 flex items-center justify-center text-white group-hover:bg-aps-red transition-colors">
                  {/* Icon placeholder */}
                  <span className="font-bold text-xl">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-aps-blue">{prod.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {prod.desc}
                </p>
                <a href="#" className="inline-flex items-center text-aps-red font-bold text-sm uppercase tracking-wider group-hover:underline">
                  Learn More <ArrowRight className="w-3 h-3 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Wall */}
      <div className="bg-white">
        <LinkedInFeed />
      </div>

      {/* Footer */}
      <footer className="bg-aps-dark text-white pt-20 pb-10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="bg-aps-blue w-fit p-2 mb-6">
                <span className="font-heading font-bold text-2xl">APS</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                American Power Systems provides industry-leading DC power solutions for telecommunications, utility, and industrial applications.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Products</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>123 Industrial Way</li>
                <li>Power City, ST 12345</li>
                <li>(555) 123-4567</li>
                <li>info@americanpowersystems.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Newsletter</h4>
              <div className="flex">
                <input type="email" placeholder="Enter email" className="bg-white/10 border-none text-white placeholder-gray-500 px-4 py-2 w-full focus:ring-1 focus:ring-aps-red" />
                <button className="bg-aps-red px-4 py-2 hover:bg-red-700 transition-colors">OK</button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex justify-between text-xs text-gray-500">
            <p>&copy; 2026 American Power Systems. All rights reserved.</p>
            <p>Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
