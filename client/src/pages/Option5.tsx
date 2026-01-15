import { navItems, companyInfo, partners } from "@/data/aps";
import apsLogo from "/assets/aps-logo-white.png";
import naspoLogo from "/assets/naspo-logo-white.png";
import { Link } from "wouter";
import { LinkedInFeed } from "@/components/aps/LinkedInFeed";

export default function Option5() {
  return (
    <div className="font-mono min-h-screen bg-white text-gray-900">
      {/* Minimal Header */}
      <header className="border-b-2 border-black p-4 flex justify-between items-center bg-aps-navy text-white sticky top-0 z-50">
        <div className="flex items-center gap-4">
            <a href="#top"><img src={apsLogo} alt="APS" className="h-8" /></a>
            <span className="text-sm font-bold tracking-widest hidden sm:inline">| DC POWER SPECS</span>
        </div>
        <nav className="flex gap-4 text-sm font-bold">
            <a href="#products" className="hover:underline">INDEX</a>
            <a href="#contact" className="hover:underline">CONTACT</a>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto p-8" id="top">
        <div className="mb-12 border-l-4 border-aps-red pl-6 py-2">
            <h1 className="text-4xl font-bold mb-2">American Power Systems</h1>
            <p className="text-xl text-gray-600">{companyInfo.tagline}</p>
            <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">EST. {companyInfo.founded}</p>
        </div>

        {/* Real Action Link */}
        <div className="grid grid-cols-2 gap-4 mb-12">
            <a href={companyInfo.lineCardUrl} target="_blank" className="bg-gray-100 hover:bg-gray-200 p-4 block border border-gray-300 text-center font-bold">
                ↓ DOWNLOAD LINE CARD (PDF)
            </a>
            <a href="#products" className="bg-black text-white hover:bg-gray-800 p-4 block text-center font-bold">
                BROWSE CATALOG &rarr;
            </a>
        </div>

        {/* Trust Signals */}
        <div className="mb-12" id="partners">
            <h3 className="text-xs font-bold uppercase mb-4 border-b border-gray-200 pb-2">Certifications</h3>
            <div className="flex gap-4 items-center grayscale opacity-80">
                <img src={naspoLogo} className="h-8 bg-gray-800 p-1" alt="NASPO" />
                {partners.slice(0,3).map((p, i) => (
                    <img key={i} src={p.logo} className="h-6" alt={p.name} />
                ))}
            </div>
        </div>

        {/* Minimal Feed */}
        <LinkedInFeed variant="minimal" />

        <div className="h-px bg-gray-200 my-12"></div>

        {/* Index */}
        <section id="products">
            <h3 className="text-xs font-bold uppercase mb-4 border-b border-gray-200 pb-2">Product Index</h3>
            <ul className="space-y-4">
                <li className="flex justify-between items-baseline group cursor-pointer">
                    <span className="font-bold group-hover:text-aps-red">01. DC Power Plants</span>
                    <span className="text-xs text-gray-400">RECTIFIERS / DIST</span>
                </li>
                <li className="flex justify-between items-baseline group cursor-pointer">
                    <span className="font-bold group-hover:text-aps-red">02. Batteries</span>
                    <span className="text-xs text-gray-400">VRLA / LITHIUM</span>
                </li>
            </ul>
        </section>

        <footer id="contact" className="mt-20 text-xs text-gray-400">
            {companyInfo.address} | {companyInfo.phone} | <a href={`mailto:${companyInfo.email}`} className="underline">Email Us</a>
        </footer>
      </main>
    </div>
  );
}
