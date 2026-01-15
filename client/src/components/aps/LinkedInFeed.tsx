import { Linkedin } from "lucide-react";

interface LinkedInFeedProps {
  className?: string;
  variant?: "default" | "dark" | "minimal";
}

export function LinkedInFeed({ className = "", variant = "default" }: LinkedInFeedProps) {
  const isDark = variant === "dark";
  const isMinimal = variant === "minimal";

  // Colors based on variant
  const bgColor = isDark ? "bg-slate-900" : isMinimal ? "bg-white" : "bg-gray-100";
  const textColor = isDark ? "text-white" : "text-aps-navy";
  const cardBg = isDark ? "bg-slate-800" : "bg-white";
  const cardText = isDark ? "text-gray-300" : "text-gray-600";
  const titleSize = isMinimal ? "text-4xl" : "text-2xl";

  return (
    <section className={`py-12 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          {!isMinimal && <Linkedin className={`w-6 h-6 ${isDark ? "text-cyan-400" : "text-aps-navy"}`} />}
          <h2 className={`${titleSize} font-bold ${textColor} uppercase tracking-wide`}>
            Latest from APS LinkedIn
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className={`${cardBg} p-4 rounded-lg shadow-md transition-transform hover:-translate-y-1 duration-300`}>
            <p className={`text-sm mb-2 font-medium ${cardText}`}>Recent Update</p>
            <div className="w-full overflow-hidden rounded bg-gray-200">
               <iframe 
                 src="https://www.linkedin.com/embed/feed/update/urn:li:share:7272654321987654321" 
                 height="400" 
                 width="100%" 
                 frameBorder="0" 
                 title="APS Post 1"
                 className="w-full"
               ></iframe>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`${cardBg} p-4 rounded-lg shadow-md transition-transform hover:-translate-y-1 duration-300`}>
             <p className={`text-sm mb-2 font-medium ${cardText}`}>Product Highlight</p>
             <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center rounded text-gray-400">
                <span className="text-sm">Post Placeholder</span>
             </div>
             {/* Note: User provided empty src for 2nd and 3rd, keeping placeholder visual */}
          </div>

          {/* Card 3 */}
          <div className={`${cardBg} p-4 rounded-lg shadow-md transition-transform hover:-translate-y-1 duration-300`}>
             <p className={`text-sm mb-2 font-medium ${cardText}`}>Company News</p>
             <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center rounded text-gray-400">
                <span className="text-sm">Post Placeholder</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
