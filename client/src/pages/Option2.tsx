import { navItems, products, services, partners, companyInfo } from "@/data/aps";
import apsLogo from "/assets/aps-logo-white.png";
import { LinkedInFeed } from "@/components/aps/LinkedInFeed";
import { Link } from "wouter";
import { ChevronRight, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Option2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
        {/* Corporate Top Bar */}
        <div className="bg-aps-navy text-white text-sm py-2" id="top">
            <div className="container mx-auto px-6 flex justify-between">
                <span>Leading Power Solutions Since {companyInfo.founded}</span>
                <div className="flex gap-4">
                    <a href="/locations" className="hover:underline">Locations</a>
                    <span>|</span>
                    <a href={`tel:${companyInfo.phone.replace(/\D/g,'')}`} className="hover:underline">{companyInfo.phone}</a>
                </div>
            </div>
        </div>

        {/* Main Nav */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#top">
                    <img src={apsLogo} alt="APS" className="h-12 bg-aps-navy p-2 rounded-sm" />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 font-bold text-gray-700">
                    {navItems.map(item => (
                        <a key={item.name} href={item.href} className="hover:text-aps-red uppercase text-sm tracking-wide">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-gray-100 border-t border-gray-200 p-4">
                    <div className="flex flex-col gap-3">
                        {navItems.map(item => (
                            <a key={item.name} href={item.href} className="block py-2 px-4 bg-white rounded shadow-sm text-aps-navy font-bold" onClick={() => setMobileMenuOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>

        {/* Hero */}
        <section className="bg-white border-b border-gray-300">
            <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl font-bold text-aps-navy mb-4">Industrial Power Systems</h1>
                    <p className="text-xl text-gray-600 mb-8">{companyInfo.tagline}. Reliability when you need it most.</p>
                    <a href="#products" className="bg-aps-red text-white px-8 py-3 rounded font-bold hover:bg-red-700 transition inline-block">
                        View Products
                    </a>
                </div>
                {/* Placeholder Image */}
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden border-4 border-gray-100 shadow-lg">
                     <img src={products[0].image} className="w-full h-full object-cover" alt="Industrial Power" />
                </div>
            </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-200 py-4 border-y border-gray-300">
            <div className="container mx-auto px-6 flex items-center gap-2 text-sm text-gray-600">
                <span>Home</span> <ChevronRight size={14} /> <span className="font-bold text-aps-navy">Products & Solutions</span>
            </div>
        </div>

        {/* Products Grid */}
        <section id="products" className="py-16 container mx-auto px-6">
            <h2 className="text-3xl font-bold text-aps-navy mb-8 border-b border-gray-300 pb-4">Our Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((prod, idx) => (
                    <div key={idx} className="bg-white border border-gray-300 rounded shadow-sm hover:shadow-md transition">
                        <div className="h-40 bg-gray-100 border-b border-gray-200 relative">
                            <img src={prod.image} alt={prod.title} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 bg-aps-navy text-white text-xs px-2 py-1 font-bold">
                                SERIES {idx + 1}00
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-aps-navy mb-2">{prod.title}</h3>
                            <p className="text-sm text-gray-600 mb-4 h-10 overflow-hidden">{prod.desc}</p>
                            <a href="#" className="text-aps-red font-bold text-sm flex items-center hover:underline">
                                Learn More <ArrowRight size={14} className="ml-1" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Services List (Standardized Section) */}
        <section id="services" className="py-16 bg-gray-200 border-y border-gray-300">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-aps-navy mb-8">Installation Services</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {services.slice(0,4).map((s, i) => (
                        <div key={i} className="flex gap-4 items-start bg-white p-6 rounded border border-gray-300">
                            <s.icon className="text-aps-red w-8 h-8 shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-aps-navy">{s.title}</h4>
                                <p className="text-sm text-gray-600">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Partners (Standardized) */}
        <section id="partners" className="py-12 bg-white container mx-auto px-6">
             <div className="flex flex-wrap justify-center gap-12 grayscale opacity-60 hover:opacity-100 transition-opacity">
                {partners.map((p, i) => <img key={i} src={p.logo} className="h-10 object-contain" alt={p.name} />)}
             </div>
        </section>
        
        <LinkedInFeed />

        {/* Footer Minimal */}
        <footer id="contact" className="bg-white border-t border-gray-300 py-8 mt-8">
            <div className="container mx-auto px-6 text-center text-sm text-gray-500">
                <div className="mb-4" id="about">
                    <strong>{companyInfo.name}</strong> <br/>
                    {companyInfo.address}, {companyInfo.cityStateZip} <br/>
                    <a href={`tel:${companyInfo.phone}`} className="text-aps-navy font-bold">{companyInfo.phone}</a>
                </div>
                © 2026 {companyInfo.name}. 
            </div>
        </footer>
    </div>
  );
}
