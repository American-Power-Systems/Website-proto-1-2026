import { navItems, products, services, partners } from "@/data/aps";
import { LinkedInFeed } from "@/components/aps/LinkedInFeed";
import { Link } from "wouter";
import { ArrowRight, Phone, Mail, ChevronRight, Zap, Wrench, Activity, DraftingCompass, Trash2 } from "lucide-react";

// Helper to map string icon names to components
const IconMap: Record<string, any> = {
  DraftingCompass: DraftingCompass,
  Wrench: Wrench,
  Activity: Activity,
  Trash2: Trash2
};

export default function Option3() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-[#0a0a0a] text-white selection:bg-aps-red selection:text-white">
      
      {/* HEADER: Dark Industrial Style */}
      <header className="sticky top-0 z-50 border-b border-gray-800 bg-[#0a0a0a]/95 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center gap-3">
              <img src="/assets/aps-logo-white.png" alt="APS" className="h-10 w-auto" />
              <div className="hidden lg:block h-8 w-px bg-gray-700"></div>
              <span className="hidden lg:block text-sm text-gray-400 font-light tracking-widest uppercase">
                Critical Power Specialists
              </span>
            </a>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-white hover:text-shadow-glow transition-all">
                {item.name}
              </a>
            ))}
            <a href="#contact" className="bg-aps-red hover:bg-red-700 text-white px-5 py-2 rounded-sm uppercase text-xs font-bold tracking-widest transition-colors">
              Get Quote
            </a>
          </nav>
        </div>
      </header>

      {/* HERO: Technical Dashboard Look */}
      <section className="relative h-[600px] flex items-center border-b border-gray-800 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        {/* Hero Image Overlay */}
        <div className="absolute inset-0 z-0">
            <img src="/assets/homepage_hero.avif" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" alt="Background" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-500 text-xs font-mono uppercase">System Operational</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-none tracking-tight">
              ENGINEERED <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aps-red to-orange-600">RELIABILITY</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 font-light border-l-2 border-aps-red pl-6">
              Complete DC power solutions. From motive power batteries to complex telecom plant engineering.
            </p>
            <div className="flex gap-4">
              <a href="#products" className="bg-white text-black px-8 py-3 font-bold uppercase hover:bg-gray-200 transition">
                View Products
              </a>
              <a href="#services" className="border border-gray-600 text-gray-300 px-8 py-3 font-bold uppercase hover:border-white hover:text-white transition">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS TICKER (Dark Mode) */}
      <div className="border-b border-gray-800 bg-black py-6">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {partners.map((p, i) => (
               <img key={i} src={p.logo} alt={p.name} className="h-8 md:h-10 object-contain invert brightness-200" /> 
           ))}
        </div>
      </div>

      {/* SECTION 1: PRODUCTS (Visual Cards) */}
      <section id="products" className="py-24 bg-[#0f0f0f]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">DC Power Products</h2>
              <div className="w-12 h-1 bg-aps-red"></div>
            </div>
            <a href="#" className="text-gray-400 hover:text-aps-red text-sm flex items-center gap-2">View Full Catalog <ChevronRight size={16}/></a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((prod, idx) => (
              <div key={idx} className="group relative bg-[#1a1a1a] border border-gray-800 hover:border-aps-red/50 transition-colors h-96 flex flex-col">
                {/* Image Area */}
                <div className="h-48 bg-gray-800 overflow-hidden relative">
                    <div className="absolute inset-0 bg-aps-blue/20 group-hover:bg-transparent transition-colors z-10"></div>
                    {/* Fallback for missing images in prototype */}
                    <div className="w-full h-full flex items-center justify-center text-gray-700 bg-gray-900">
                        <Zap className="w-12 h-12 opacity-20" />
                    </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-aps-red transition-colors">{prod.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 flex-1">{prod.desc}</p>
                    <button className="self-start text-xs font-bold uppercase tracking-widest text-white border-b border-aps-red pb-1">
                        Specs &rarr;
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES (List / Technical View) */}
      <section id="services" className="py-24 bg-[#0a0a0a] border-t border-gray-800">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
            
            {/* Left: Text & Pitch */}
            <div>
                <h2 className="text-3xl font-bold text-white mb-6">Engineering & Services</h2>
                <p className="text-gray-400 text-lg mb-8">
                    We don't just sell batteries. We design, install, and maintain the critical infrastructure that keeps your business running.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-900 border-l-4 border-aps-red">
                        <h4 className="font-bold text-2xl">24/7</h4>
                        <p className="text-xs text-gray-500 uppercase">Emergency Support</p>
                    </div>
                    <div className="p-4 bg-gray-900 border-l-4 border-blue-600">
                        <h4 className="font-bold text-2xl">IEEE</h4>
                        <p className="text-xs text-gray-500 uppercase">Testing Standards</p>
                    </div>
                </div>
            </div>

            {/* Right: Service List */}
            <div className="space-y-4">
                {services.map((service, idx) => {
                    const Icon = IconMap[service.icon] || Zap;
                    return (
                        <div key={idx} className="flex items-start gap-4 p-4 hover:bg-gray-900 rounded transition-colors border border-transparent hover:border-gray-800">
                            <div className="bg-gray-800 p-3 rounded text-aps-red">
                                <Icon size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">{service.title}</h3>
                                <p className="text-gray-500 text-sm">{service.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
      </section>

      {/* Social Feed (Dark) */}
      <section className="py-20 bg-[#0f0f0f] border-t border-gray-800">
        <div className="container mx-auto px-6">
            <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                <span className="text-blue-500">in</span> Latest Updates
            </h2>
            <div className="invert filter contrast-75">
                <LinkedInFeed />
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-500 py-12 border-t border-gray-900 text-sm">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
            <div>
                <img src="/assets/aps-logo-white.png" className="h-8 mb-4 opacity-50" alt="Logo" />
                <p>1851 Central Place South,<br/>Suite 206<br/>Kent, WA 98030</p>
            </div>
            <div>
                <h4 className="text-white font-bold uppercase mb-4 text-xs tracking-wider">Solutions</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-aps-red">DC Power Plants</a></li>
                    <li><a href="#" className="hover:text-aps-red">Batteries</a></li>
                    <li><a href="#" className="hover:text-aps-red">Monitoring</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold uppercase mb-4 text-xs tracking-wider">Company</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-aps-red">About Us</a></li>
                    <li><a href="#" className="hover:text-aps-red">Careers</a></li>
                    <li><a href="#" className="hover:text-aps-red">Contact</a></li>
                </ul>
            </div>
            <div>
                <a href="tel:8003950693" className="flex items-center gap-2 text-white hover:text-aps-red transition-colors mb-2">
                    <Phone size={16} /> (800) 395-0693
                </a>
                <a href="mailto:info@ampowersys.com" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail size={16} /> info@ampowersys.com
                </a>
            </div>
        </div>
      </footer>
    </div>
  );
}
