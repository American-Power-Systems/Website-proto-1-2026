import { navItems, companyInfo, benefits, openPositions } from "@/data/aps";
import apsLogo from "/assets/aps-logo-white.png";
import { Link } from "wouter";
import { Menu, Phone, Mail, MapPin, ChevronRight, Briefcase, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Careers() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-white">
      
      {/* 1. TOP BAR (Option 1 Style) */}
      <div id="top" className="bg-black text-white text-xs py-2 px-4 md:px-8 flex flex-col md:flex-row justify-end gap-4 items-center">
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
            <Link href="/careers"><a className="text-aps-red font-bold">CAREERS</a></Link>
            <a href="#" className="hover:text-gray-300 font-bold">APS PORTAL</a>
        </div>
      </div>

      {/* 2. HEADER */}
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
                  <a className={`font-bold hover:text-aps-red transition-colors text-sm uppercase tracking-wider ${item.name === 'Careers' ? 'text-aps-red' : 'text-white'}`}>
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

      {/* 3. HERO */}
      <section className="relative bg-gray-900 h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center" 
            style={{backgroundImage: `linear-gradient(rgba(0,51,102,0.8), rgba(0,0,0,0.6)), url('/assets/homepage_hero.avif')`}}>
        <div className="px-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Build Your Career with Power</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
                Join a team committed to operational excellence, safety, and long-term relationships.
            </p>
            <a href="#openings" className="bg-aps-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded shadow-lg transition">
                View Open Positions
            </a>
        </div>
      </section>

      {/* 4. BENEFITS GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-aps-navy mb-4">Why Work at APS?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We believe that team success beats individual credit. We offer competitive benefits because we value our people.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow text-center group">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-aps-red shadow-sm mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <benefit.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-aps-navy mb-3">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. CULTURE SECTION */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <img src="/assets/40181a_faa5d04f181b4812b04963a4670024b5~mv2.jpg" alt="Team at work" className="rounded-lg shadow-xl" />
            </div>
            <div>
                <h2 className="text-3xl font-bold text-aps-navy mb-6">Our Culture</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        At APS, we are committed to long-term relationships, not short-term wins. We work with customers, suppliers, and especially our employees with <strong>humor and humility</strong>.
                    </p>
                    <p>
                        You'll work with a team that is supportive, helpful, and focused on solving real-world challenges. We are serious about professionalism and doing great work, but we don't take ourselves too seriously.
                    </p>
                    <p className="font-bold text-aps-red">
                        If you value trust, teamwork, and shared laughter, you will fit in just fine here.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 6. OPEN POSITIONS */}
      <section id="openings" className="py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-aps-navy mb-12 border-b border-gray-200 pb-4">Current Opportunities</h2>
            
            <div className="space-y-6">
                {openPositions.map((job, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm hover:shadow-md transition flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-aps-navy mb-2 flex items-center gap-3">
                                {job.title}
                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full uppercase tracking-wide font-bold">{job.type}</span>
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                                <span className="flex items-center gap-1"><Briefcase size={14} /> Operations</span>
                            </div>
                            <p className="text-gray-600 max-w-2xl">{job.desc}</p>
                        </div>
                        <a href={`mailto:${companyInfo.jobsEmail}?subject=Application for ${job.title} - ${job.location}`} className="bg-aps-red hover:bg-red-700 text-white px-6 py-3 rounded font-bold transition whitespace-nowrap">
                            Apply Now
                        </a>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center border border-blue-100">
                <h3 className="text-xl font-bold text-aps-navy mb-2">Don't see the right fit?</h3>
                <p className="text-gray-600 mb-6">
                    We are always looking for talented technicians and project managers. Send us your resume!
                </p>
                <a href={`mailto:${companyInfo.jobsEmail}`} className="text-aps-red font-bold hover:underline flex items-center justify-center gap-2">
                    <Mail size={18} /> Email {companyInfo.jobsEmail}
                </a>
            </div>
        </div>
      </section>

      {/* Footer Reuse */}
      <footer id="contact" className="bg-aps-dark text-white pt-24 pb-12 mt-auto border-t-[10px] border-aps-blue">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <img src={apsLogo} alt="APS" className="h-12 mb-8 opacity-90" />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                American Power Systems provides industry-leading DC power solutions for telecommunications, utility, and industrial applications.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-8 text-white tracking-widest uppercase text-xs">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="/services"><a className="hover:text-aps-red transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3"/> Installation</a></Link></li>
                <li><Link href="/services"><a className="hover:text-aps-red transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3"/> Maintenance</a></Link></li>
                <li><Link href="/products"><a className="hover:text-aps-red transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3"/> Products</a></Link></li>
              </ul>
            </div>

            <div id="about">
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
            <p>© 2026 {companyInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
