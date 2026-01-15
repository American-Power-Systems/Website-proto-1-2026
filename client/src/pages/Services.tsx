import { navItems, services, companyInfo } from "@/data/aps";
import apsLogo from "/assets/aps-logo-main.avif";
import { Link } from "wouter";
import { CheckCircle2, Phone, Menu, Mail, Activity } from "lucide-react";
import { useState } from "react";
import { LinkedInFeed } from "@/components/aps/LinkedInFeed";

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen bg-white flex flex-col">
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
                  <a className={`font-bold hover:text-aps-red transition-colors text-sm uppercase tracking-wider ${item.name === 'Services' ? 'text-aps-red' : 'text-white'}`}>
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

      {/* 2. HERO: Services */}
      <section className="bg-aps-navy text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="inline-block bg-aps-red px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4 rounded">From Start to Finish</div>
            <h1 className="text-5xl font-bold mb-6">Installation & Maintenance</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
                We provide complete DC power solutions—from initial engineering and design to installation, maintenance, and final disposal.
            </p>
        </div>
      </section>

      {/* 3. DETAILED LIST */}
      <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="grid gap-16">
                {services.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                        <div key={idx} className="flex flex-col md:flex-row gap-8 border-b border-gray-100 pb-12 last:border-0 group">
                            {/* Icon Column */}
                            <div className="md:w-1/4">
                                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center text-aps-navy mb-6 group-hover:bg-aps-navy group-hover:text-white transition-colors duration-300">
                                    <Icon size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-aps-navy">{service.title}</h3>
                            </div>
                            
                            {/* Description Column */}
                            <div className="md:w-3/4">
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    {service.desc}
                                </p>
                                
                                <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-aps-blue">
                                    <h4 className="font-bold text-sm uppercase text-aps-blue mb-4 tracking-wider flex items-center gap-2">
                                        <Activity size={16}/> Capabilities
                                    </h4>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {service.details?.map((detail, dIdx) => (
                                            <div key={dIdx} className="flex items-center gap-3">
                                                <CheckCircle2 className="text-aps-red w-5 h-5 flex-shrink-0" />
                                                <span className="text-gray-800 font-medium">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </section>

      <LinkedInFeed className="bg-gray-50" />

      {/* 4. FOOTER CTA */}
      <section className="bg-aps-red py-16 text-white text-center mt-auto">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Need a Site Survey?</h2>
            <p className="text-xl mb-8 opacity-90">Our project managers can schedule a visit to your Central Office or remote site.</p>
            <a href={`tel:${companyInfo.phone}`} className="inline-flex items-center gap-2 bg-white text-aps-red px-8 py-4 font-bold rounded shadow-lg hover:bg-gray-100 transition">
                <Phone size={20} /> Call {companyInfo.phone}
            </a>
        </div>
      </section>
    </div>
  );
}
