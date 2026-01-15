import { navItems, products, partners, companyInfo } from "@/data/aps";
import apsLogo from "/assets/aps-logo-main.avif";
import { Link } from "wouter";
import { ArrowRight, Phone, Mail, Menu, Zap, Battery } from "lucide-react";
import { useState } from "react";
import { LinkedInFeed } from "@/components/aps/LinkedInFeed";

export default function Products() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen bg-gray-50 flex flex-col">
      {/* 1. HEADER (Option 1 Style) */}
      <header className="sticky top-0 z-50 bg-aps-blue shadow-lg border-b-4 border-aps-red">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/">
                <a className="flex items-center gap-2 cursor-pointer">
                    <img src={apsLogo} alt={companyInfo.name} className="h-12 w-auto" />
                </a>
            </Link>
            <nav className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className={`font-bold hover:text-aps-red transition-colors text-sm uppercase tracking-wider ${item.name === 'Products' ? 'text-aps-red' : 'text-white'}`}>
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-aps-dark border-t border-white/10 p-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}><a className="text-white font-bold">{item.name}</a></Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* 2. HERO: Products */}
      <section className="bg-aps-navy text-white py-16">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-heading font-bold mb-4">Product Solutions</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We supply DC and AC power system solutions from the leaders in the industry.
            </p>
        </div>
      </section>

      {/* 3. PRIMARY PARTNERS HIGHLIGHT */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container mx-auto px-6">
            <p className="text-center text-gray-500 text-sm font-bold uppercase tracking-widest mb-8">Authorized Distributor For</p>
            <div className="flex flex-wrap justify-center gap-12 items-center">
                {/* Highlight East Penn & C&D specifically */}
                <img src="/assets/EPM-Logo_RGB.jpg" className="h-20 object-contain hover:scale-105 transition-transform" alt="East Penn" />
                <div className="w-px h-12 bg-gray-300 hidden md:block"></div>
                <img src="/assets/cd-logo.avif" className="h-16 object-contain hover:scale-105 transition-transform" alt="C&D Technologies" />
                <div className="w-px h-12 bg-gray-300 hidden md:block"></div>
                <img src="/assets/MK Battery.png" className="h-14 object-contain hover:scale-105 transition-transform" alt="MK Battery" />
            </div>
        </div>
      </section>

      {/* 4. PRODUCT GRID */}
      <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10">
                {products.map((prod, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
                        <div className="h-64 overflow-hidden relative">
                            <div className="absolute inset-0 bg-aps-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
                            <img src={prod.image} alt={prod.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute bottom-4 left-4 z-20">
                                <span className="bg-aps-red text-white text-xs font-bold px-3 py-1 rounded uppercase">
                                    {idx === 0 ? "Featured" : "Available"}
                                </span>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-blue-50 rounded-lg text-aps-blue">
                                    <prod.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-aps-navy">{prod.title}</h3>
                            </div>
                            <p className="text-gray-600 font-medium mb-4">{prod.desc}</p>
                            <p className="text-gray-500 text-sm mb-8 leading-relaxed">{prod.details}</p>
                            
                            <a href="#contact" className="inline-flex items-center text-aps-red font-bold uppercase text-sm tracking-wider hover:gap-2 transition-all">
                                Request Quote <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-gray-900 py-16 text-white text-center mt-auto">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Need Equipment Pricing?</h2>
            <p className="mb-8 text-gray-400">Our sales team is ready to help with specs, sizing, and quotes.</p>
            <div className="flex justify-center gap-4">
                <a href={`tel:${companyInfo.phone}`} className="inline-flex items-center gap-2 bg-aps-red text-white px-8 py-3 font-bold rounded shadow-lg hover:bg-red-700 transition">
                    <Phone size={20} /> Call Sales
                </a>
                <a href={`mailto:${companyInfo.email}`} className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-3 font-bold rounded hover:bg-white/20 transition">
                    <Mail size={20} /> Email Us
                </a>
            </div>
        </div>
      </section>
      
      {/* Footer Reuse */}
      <footer className="bg-black text-gray-500 py-8 text-center text-xs border-t border-gray-800">
        <p>© 2026 {companyInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
