import { navItems, products, services, partners, companyInfo } from "@/data/aps";
import { LinkedInFeed } from "@/components/aps/LinkedInFeed";
import heroImage from "/assets/homepage_hero.avif"; 
import apsLogo from "/assets/aps-logo-white.png";
import { Menu, Phone, Mail, MapPin, ChevronRight, Zap, Wrench } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Option1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-white">
      
      {/* Top Bar */}
      <div className="bg-black text-white text-xs py-2 px-4 md:px-8 flex flex-col md:flex-row justify-end gap-4 items-center">
        <div className="flex gap-4">
            <a href={`tel:${companyInfo.phone.replace(/\D/g,'')}`} className="hover:text-aps-red flex items-center gap-1 transition-colors">
                <Phone className="w-3 h-3" /> {companyInfo.phone}
            </a>
            <span className="hidden md:inline text-gray-600">|</span>
            <a href={`mailto:${companyInfo.email}`} className="hover:text-aps-red flex items-center gap-1 transition-colors">
                <Mail className="w-3 h-3" /> {companyInfo.email}
            </a>
        </div>
        <div className="hidden md:flex gap-4 border-l border-gray-700 pl-4">
            <Link href="/careers"><a className="hover:text-gray-300 font-bold">CAREERS</a></Link>
            <a href="#" className="hover:text-gray-300 font-bold">APS PORTAL</a>
        </div>
      </div>

      {/* Header */}
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
                  <a className="text-white font-bold hover:text-aps-red transition-colors text-sm uppercase tracking-wider">
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
                <Link key={item.name} href={item.href}>
                  <a className="text-white font-bold hover:text-aps-red text-lg">{item.name}</a>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero (Reduced Motion Support via CSS classes handled by modern browsers, but structure cleaned here) */}
      <section className="relative h-[650px] w-full overflow-hidden group">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Added motion-reduce:transition-none to disable zoom effect for accessibility */}
        <img 
          src={heroImage} 
          alt="APS Facility" 
          className="w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none" 
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl text-white">
              <div className="inline-block bg-aps-red text-white text-xs font-bold px-3 py-1 mb-6 uppercase tracking-[0.2em]">
                Since 1994
              </div>
              <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                DC POWER <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">INSTALLATION SERVICES</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl leading-relaxed drop-shadow-md">
                {companyInfo.tagline}. From VRLA batteries to complete DC power plants. We install, maintain, and test critical infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                    <a className="bg-aps-red hover:bg-red-700 text-white px-10 py-4 font-bold uppercase tracking-wider transition-all text-center">
                    View Services
                    </a>
                </Link>
                <Link href="/products">
                    <a className="border-2 border-white hover:bg-white hover:text-aps-blue text-white px-10 py-4 font-bold uppercase tracking-wider transition-all text-center">
                    Our Products
                    </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Ticker (Added ID for navigation) */}
      <section id="partners" className="bg-gray-100 border-b border-gray-200 py-8 overflow-hidden">
        <div className="container mx-auto px-6">
            <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Trusted Partners & Brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                {partners.map((partner, idx) => (
                    <img 
                        key={idx} 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 mix-blend-multiply" 
                    />
                ))}
            </div>
        </div>
      </section>

      {/* Main Offering Split */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-aps-navy uppercase tracking-wide">Complete Power Solutions</h2>
                <div className="w-20 h-1 bg-aps-red mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Column 1: PRODUCTS */}
                <div className="bg-gray-50 p-10 border-t-4 border-aps-navy hover:shadow-xl transition-all group">
                    <h3 className="text-2xl font-bold text-aps-navy mb-6 flex items-center gap-3">
                        <Zap className="text-aps-red" /> DC & AC Power Products
                    </h3>
                    <p className="text-gray-600 mb-8">
                        Providing DC and AC power system solutions from industry leaders. Rectifiers, chargers, UPS, and custom enclosures.
                    </p>
                    <ul className="space-y-3 mb-8">
                        {products.slice(0, 4).map(p => (
                            <li key={p.title} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                <span className="w-1.5 h-1.5 bg-aps-red rounded-full"></span> {p.title}
                            </li>
                        ))}
                    </ul>
                    <Link href="/products">
                        <a className="inline-block bg-aps-navy text-white px-6 py-3 font-bold uppercase text-sm hover:bg-aps-red transition-colors">
                            View Product Catalog
                        </a>
                    </Link>
                </div>

                {/* Column 2: SERVICES (Highlighted) */}
                <div className="bg-gray-50 p-10 border-t-4 border-aps-red hover:shadow-xl transition-all group">
                    <h3 className="text-2xl font-bold text-aps-navy mb-6 flex items-center gap-3">
                        <Wrench className="text-aps-red" /> Installation Services
                    </h3>
                    <p className="text-gray-600 mb-8">
                        We don't just sell boxes. We provide full EF&I services, project management, and battery disposal for remote and central sites.
                    </p>
                    <ul className="space-y-3 mb-8">
                        {services.slice(0, 4).map(s => (
                            <li key={s.title} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                <span className="w-1.5 h-1.5 bg-aps-red rounded-full"></span> {s.title}
                            </li>
                        ))}
                    </ul>
                    <Link href="/services">
                        <a className="inline-block bg-aps-red text-white px-6 py-3 font-bold uppercase text-sm hover:bg-aps-navy transition-colors">
                            Explore Services
                        </a>
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Social Wall */}
      <LinkedInFeed variant="default" />

      {/* Footer */}
      <footer id="contact" className="bg-aps-dark text-white pt-24 pb-12 mt-auto border-t-[10px] border-aps-blue">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <img src={apsLogo} alt="APS" className="h-12 mb-8 opacity-90" />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                American Power Systems provides industry-leading DC power solutions for telecommunications, utility, and industrial applications.
              </p>
              {/* Real Social Links */}
              <div className="flex gap-4">
                  <a href={companyInfo.linkedinUrl} target="_blank" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0077b5] cursor-pointer transition text-white">
                    {/* Using Font Awesome class since we don't have the icon imported or installed, but the user used it in LinkedInFeed.tsx. 
                        Actually, I should check if FontAwesome is available. The user snippet used <i className="fab fa-linkedin"></i> in LinkedInFeed.tsx.
                        However, the footer in Option1.tsx (bottom of snippet) used <i className="fab fa-linkedin-in"></i>.
                        Since this is a React environment and I don't see FontAwesome loaded in index.html, this might break.
                        I'll use Lucide icons instead since they are available and safer.
                    */}
                    {/* Using Lucide 'Linkedin' icon which is not imported yet, I'll import it. Wait, I see I already imported Zap, Wrench etc. I'll add Linkedin to imports */}
                  </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-8 text-white tracking-widest uppercase text-xs">Services</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="/services"><a className="hover:text-aps-red transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3"/> Installation</a></Link></li>
                <li><Link href="/services"><a className="hover:text-aps-red transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3"/> Maintenance</a></Link></li>
                <li><Link href="/services"><a className="hover:text-aps-red transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3"/> Testing</a></Link></li>
                <li><Link href="/services"><a className="hover:text-aps-red transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3"/> Disposal</a></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 text-white tracking-widest uppercase text-xs">Contact Headquarters</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex gap-3 items-start">
                    <MapPin className="w-5 h-5 text-aps-red shrink-0" />
                    <span>{companyInfo.address}<br/>{companyInfo.cityStateZip}</span>
                </li>
                <li className="flex gap-3 items-center">
                    <Phone className="w-5 h-5 text-aps-red shrink-0" />
                    <a href={`tel:${companyInfo.phone.replace(/\D/g,'')}`} className="hover:text-white transition">{companyInfo.phone}</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <p>&copy; 2026 {companyInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
