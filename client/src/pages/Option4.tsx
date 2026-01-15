import { navItems, products, companyInfo } from "@/data/aps";
import apsLogo from "/assets/aps-logo-main.avif";
import { Link } from "wouter";
import { Menu, X, FileText, Download } from "lucide-react";
import { useState } from "react";
import { LinkedInFeed } from "@/components/aps/LinkedInFeed";

export default function Option4() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="font-sans flex min-h-screen bg-gray-50">
      
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 w-full bg-aps-navy text-white p-4 flex justify-between items-center z-50 shadow-md">
        <img src={apsLogo} alt="APS" className="h-8" />
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-aps-navy text-white transform transition-transform duration-300 z-50 lg:translate-x-0 shadow-xl ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center bg-black/20">
            <img src={apsLogo} alt="APS" className="h-10" />
            <button className="lg:hidden" onClick={() => setSidebarOpen(false)}><X /></button>
        </div>
        
        <nav className="px-4 py-8 space-y-2">
            {navItems.map(item => (
                <a key={item.name} href={item.href} className="block py-3 px-4 rounded hover:bg-white/10 transition-colors font-medium" onClick={() => setSidebarOpen(false)}>
                    {item.name}
                </a>
            ))}
        </nav>

        {/* Downloads Rail */}
        <div className="px-6 py-8 border-t border-white/10">
            <h4 className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-wider">Downloads</h4>
            <a href={companyInfo.lineCardUrl} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-3">
                <FileText size={14} /> Line Card (PDF)
            </a>
            <a href="#" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
                <Download size={14} /> Corporate Brochure
            </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 p-8 pt-24 lg:pt-8">
        
        <section id="products">
            <h1 className="text-4xl font-bold text-aps-navy mb-8">Product Catalog</h1>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
                {products.map((prod, idx) => (
                    <div key={idx} className="bg-white p-6 rounded shadow-sm hover:shadow-md border border-gray-200 flex gap-4">
                        <div className="w-20 h-20 bg-gray-100 shrink-0">
                            <img src={prod.image} className="w-full h-full object-cover" alt={prod.title}/>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-aps-navy">{prod.title}</h3>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{prod.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Placeholders to make nav work */}
        <section id="services" className="mb-16 p-8 bg-white rounded border border-gray-200">
            <h2 className="text-2xl font-bold text-aps-navy mb-4">Installation Services</h2>
            <p className="text-gray-600">Full EF&I support for all products listed above.</p>
        </section>

        <section id="partners" className="mb-16">
             <h2 className="text-xl font-bold text-aps-navy mb-4">Partners</h2>
             <div className="flex gap-4 opacity-50 grayscale">
                 {/* Placeholder logos for simplicity in this view */}
                 <div className="h-8 w-24 bg-gray-300 rounded"></div>
                 <div className="h-8 w-24 bg-gray-300 rounded"></div>
             </div>
        </section>

        <LinkedInFeed className="bg-transparent px-0 py-0" />
        
        <footer id="contact" className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-500">
            <p>{companyInfo.name} &bull; {companyInfo.phone}</p>
        </footer>
      </main>
    </div>
  );
}
