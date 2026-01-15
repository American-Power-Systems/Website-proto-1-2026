import { 
  Wrench, ClipboardList, Activity, Trash2, 
  Zap, Battery, Server, ShieldCheck, Truck, DraftingCompass 
} from "lucide-react";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Locations", href: "/locations" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export const products = [
  { 
    title: "DC Power Plants", 
    desc: "Complete DC power solutions including rectifiers, chargers, converters, and distribution panels from industry leaders.",
    image: "/assets/products_dc_power.jpg", // Ensure this exists or use a placeholder
    icon: Zap
  },
  { 
    title: "UPS & Inverters", 
    desc: "Single Phase and Three Phase UPS systems and inverters for critical AC power backup.",
    image: "/assets/products_ups.jpg",
    icon: Server
  },
  { 
    title: "Batteries (VRLA & Flooded)", 
    desc: "Premium reserve power solutions for Central Office and Cellular environments.",
    image: "/assets/products_batteries.jpg",
    icon: Battery
  },
  { 
    title: "Racks & Spill Containment", 
    desc: "Seismic-rated enclosures, battery racks, and spill containment systems for UPS and Telecom.",
    image: "/assets/products_racking.jpg",
    icon: ShieldCheck
  }
];

export const services = [
  {
    title: "Installation & Removal",
    desc: "Specializing in Central Office, Cellular, and Data Centers. We handle batteries, grounding, cabling, ironwork, and bussing.",
    icon: Wrench,
    details: ["Power Plants & Distribution", "Batteries & Grounding", "Ironwork & Bussing"]
  },
  {
    title: "Battery Maintenance",
    desc: "Comprehensive preventative maintenance programs: Basic, Extended, & Select options available.",
    icon: ClipboardList,
    details: ["Preventative Programs", "IEEE Standards", "VRLA & Flooded"]
  },
  {
    title: "Testing & Monitoring",
    desc: "IEEE battery capacity testing, internal resistance testing (VRLA), and remote site monitoring down to individual cells.",
    icon: Activity,
    details: ["Capacity Testing", "Resistance Testing", "Cell Tracking"]
  },
  {
    title: "Project Management",
    desc: "Full installation management and multi-site scheduling, including complex remote site logistics.",
    icon: ClipboardList,
    details: ["Installation Management", "Multi-site Scheduling", "Remote Sites"]
  },
  {
    title: "Engineering",
    desc: "Custom power design, equipment layouts, material selection, and logistics planning.",
    icon: DraftingCompass,
    details: ["Design & Layouts", "Material Selection", "Logistics"]
  },
  {
    title: "Disposal & Logistics",
    desc: "Removal and disposal of lead acid batteries with certificates. Labor, material procurement, and site delivery.",
    icon: Truck,
    details: ["EPA Compliant Disposal", "Material Procurement", "Site Delivery"]
  }
];

export const locations = [
  {
    name: "Corporate Headquarters",
    address: "1851 Central Place South, Suite 206",
    city: "Kent, WA 98030",
    phone: "(800) 395-0693",
    type: "Headquarters",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.393278637734!2d-122.2465996843699!3d47.41459997917244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905ecc3a223f6b%3A0x6b2b733777777777!2s1851%20Central%20Pl%20S%20%23206%2C%20Kent%2C%20WA%2098030!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
  },
  {
    name: "Midwest Operations", // Updated based on earlier context
    address: "Davenport Area", 
    city: "Davenport, IA",
    phone: "(563) 555-0123",
    type: "Regional Hub",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95460.29749069153!2d-90.6367356653282!3d41.54287532392476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e234c2e6f4277d%3A0x629f6266075677!2sDavenport%2C%20IA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
  }
];

export const partners = [
  { name: "East Penn Manufacturing", logo: "/assets/EPM-Logo_RGB.jpg" },
  { name: "MK Battery", logo: "/assets/MK Battery.png" },
  { name: "Enviroguard", logo: "/assets/Enviroguard.png" },
  { name: "Hindle Power", logo: "/assets/Hindle.png" },
  { name: "C&C Power", logo: "/assets/cc-power-logo.png" }
];
