import { Link } from "wouter";

export default function Home() {
  const options = [
    {
      id: 1,
      title: "The Modern Hybrid",
      desc: "Tailwind CSS, Sticky Header, Wide Layout, Social Wall.",
      path: "/option-1",
      color: "bg-aps-blue text-white"
    },
    {
      id: 2,
      title: "The Corporate Standard",
      desc: "Bootstrap 5 style, Card Grid, Traditional Layout.",
      path: "/option-2",
      color: "bg-white text-aps-blue border-2 border-aps-blue"
    },
    {
      id: 3,
      title: "Dark Mode Industrial",
      desc: "Dark Navy background, High-end Tech Dashboard feel.",
      path: "/option-3",
      color: "bg-aps-dark text-white border border-slate-700"
    },
    {
      id: 4,
      title: "Sidebar Navigation",
      desc: "Vertical Left Sidebar for catalog-heavy browsing.",
      path: "/option-4",
      color: "bg-slate-200 text-aps-blue"
    },
    {
      id: 5,
      title: "Minimal & Fast",
      desc: "Text-heavy, minimal images, focus on specs.",
      path: "/option-5",
      color: "bg-white text-black border-l-4 border-aps-red"
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <div className="inline-block px-4 py-1 bg-aps-blue text-white text-xs font-bold uppercase tracking-widest mb-4">
            Project: American Power Systems Prototype 2026
          </div>
          <h1 className="text-5xl font-heading font-bold text-aps-blue mb-4">
            American Power Systems, LLC
          </h1>
          <p className="text-xl text-slate-600 font-light">
            5 Design Prototypes for Review
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {options.map((opt) => (
            <Link key={opt.id} href={opt.path}>
              <a className={`
                block p-8 rounded-lg shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1
                ${opt.color} group relative overflow-hidden
              `}>
                <div className="relative z-10 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold opacity-70 uppercase tracking-widest mb-1 block">
                      Option 0{opt.id}
                    </span>
                    <h2 className="text-3xl font-heading font-bold mb-2">
                      {opt.title}
                    </h2>
                    <p className="opacity-90 font-light text-lg">
                      {opt.desc}
                    </p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
