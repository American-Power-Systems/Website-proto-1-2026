import { socialPosts } from "@/data/aps";
import { Linkedin } from "lucide-react";

interface LinkedInFeedProps {
  className?: string;
  variant?: "default" | "dark" | "minimal";
}

export function LinkedInFeed({ className = "", variant = "default" }: LinkedInFeedProps) {
  const isDark = variant === "dark";
  const isMinimal = variant === "minimal";

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Linkedin className={`w-8 h-8 ${isDark ? "text-aps-blue" : "text-aps-blue"}`} />
          <h2 className={`text-3xl font-bold uppercase ${isDark ? "text-white" : "text-aps-blue"}`}>
            Latest from APS LinkedIn
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialPosts.map((post) => (
            <div 
              key={post.id} 
              className={`
                h-64 rounded-lg flex flex-col items-center justify-center p-6 border-2 border-dashed
                ${isDark 
                  ? "bg-slate-800 border-slate-600 text-slate-400 hover:border-aps-blue/50" 
                  : "bg-gray-50 border-gray-300 text-gray-400 hover:border-aps-blue/50"
                }
                ${isMinimal ? "border-0 border-l-4 border-l-aps-blue rounded-none bg-transparent pl-4 items-start justify-start" : ""}
                transition-all duration-300
              `}
            >
              {!isMinimal ? (
                <>
                  <span className="mb-2 font-semibold">LinkedIn Post Embed Placeholder</span>
                  <p className="text-sm text-center opacity-70">
                    &lt;iframe&gt; code for:<br/>
                    "{post.title}"
                  </p>
                </>
              ) : (
                <>
                  <span className="text-aps-blue font-bold text-lg mb-1">{post.date}</span>
                  <span className="text-gray-800 font-bold text-xl leading-tight">{post.title}</span>
                  <span className="text-sm text-gray-500 mt-2 underline cursor-pointer">Read on LinkedIn &rarr;</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
