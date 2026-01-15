import { navItems, products } from "@/data/aps";
import { LinkedInFeed } from "@/components/aps/LinkedInFeed";
import { Link } from "wouter";
import { Zap, Activity, Battery, Wrench } from "lucide-react";

const heroImage = "/assets/cd_cat_header.jpg";

export default function Option3() {
  const getIcon = (idx: number) => {
    switch(idx) {
      case 0: return <Zap className="w-8 h-8 text-cyan-400" />;
      case 1: return <Battery className="w-8 h-8 text-cyan-400" />;
      case 2: return <Wrench className="w-8 h-8 text-cyan-400" />;
      case 3: return <Activity className="w-8 h-8 text-cyan-400" />;
      default: return <Zap className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <div className="font-sans min-h-screen bg-aps-dark text-gray-300 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Tech Header */}
      <header className="border-b border-cyan-900/30 bg-aps-dark/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 border border-cyan-500/50 flex items-center justify-center bg-cyan-900/20">
               <span className="font-heading font-bold text-cyan-400">APS</span>
             </div>
             <span className="font-heading uppercase tracking-widest text-sm text-cyan-400/80">
               Systems Online
             </span>
          </div>

          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-sm font-medium hover:text-cyan-400 uppercase tracking-wider transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <Link href="/" className="text-xs border border-cyan-800 px-3 py-1 rounded text-cyan-600 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
            EXIT PROTO
          </Link>
        </div>
      </header>

      {/* Hero Section - Dashboard Style */}
      <section className="relative h-[500px] border-b border-cyan-900/30">
        <div className="absolute inset-0">
          <img src={heroImage} className="w-full h-full object-cover opacity-20 grayscale" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-t from-aps-dark via-transparent to-aps-dark/50" />
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
          <div className="inline-flex items-center gap-2 text-cyan-500 text-xs font-mono mb-4 border border-cyan-900/50 bg-cyan-950/30 px-3 py-1 w-fit rounded-full">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            SYSTEM STATUS: OPTIMAL
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
            ADVANCED<br/>POWER MATRIX
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Next-generation DC infrastructure for mission-critical operations. 
            Reliability engineered at the component level.
          </p>
          
          <div className="mt-10 flex gap-4">
            <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(8,145,178,0.5)] transition-all">
              Initialize
            </button>
            <button className="border border-cyan-700 text-cyan-400 px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-cyan-950/50 transition-all">
              Specs
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-b border-cyan-900/30 bg-aps-dark/50">
        <div className="container mx-auto px-6 py-4 flex flex-wrap gap-8 justify-around text-center">
          <div>
            <span className="block text-2xl font-bold text-white font-mono">99.99%</span>
            <span className="text-xs text-gray-500 uppercase">Uptime</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-white font-mono">50+</span>
            <span className="text-xs text-gray-500 uppercase">Countries</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-white font-mono">24/7</span>
            <span className="text-xs text-gray-500 uppercase">Monitoring</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-white font-mono">ISO</span>
            <span className="text-xs text-gray-500 uppercase">Certified</span>
          </div>
        </div>
      </div>

      {/* Services Grid - Dark Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {products.map((prod, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800 p-6 hover:border-cyan-700 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-10 font-mono text-4xl font-bold text-white">
                  0{idx + 1}
                </div>
                <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  {getIcon(idx)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-heading uppercase tracking-wide group-hover:text-cyan-400 transition-colors">
                  {prod.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {prod.desc}
                </p>
                <div className="w-full h-0.5 bg-slate-800 group-hover:bg-cyan-900 transition-colors">
                  <div className="h-full bg-cyan-500 w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn - Dark Variant */}
      <LinkedInFeed className="bg-slate-900/30" variant="dark" />

      <footer className="border-t border-cyan-900/30 py-12 mt-auto bg-aps-dark/80">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm mb-8">
             <div>
                <h4 className="font-heading font-bold text-cyan-400 mb-4">APS SYSTEMS</h4>
                <p className="text-gray-400">Advanced DC Power Infrastructure</p>
             </div>
             <div>
                <h4 className="font-heading font-bold text-cyan-400 mb-4">CONTACT NODE</h4>
                <ul className="text-gray-400 space-y-2 font-mono text-xs">
                    <li>1851 Central Place South, Suite 206</li>
                    <li>Kent, WA 98030</li>
                    <li>(800) 395-0693</li>
                    <li>info@ampowersys.com</li>
                </ul>
             </div>
        </div>
        <div className="container mx-auto px-6 text-center border-t border-cyan-900/30 pt-8">
          <p className="font-mono text-cyan-900 text-sm">SYSTEM END OF LINE // © 2026</p>
        </div>
      </footer>
    </div>
  );
}
