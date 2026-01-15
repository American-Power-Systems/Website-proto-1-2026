import { 
  Wrench, ClipboardList, Activity, Trash2, 
  Zap, Battery, Server, ShieldCheck, Truck, DraftingCompass, MapPin 
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
    desc: "Complete turnkey DC power plants, rectifiers, and distribution panels for telecom & utility.",
    details: "We provide solutions from industry leaders with necessary rectifiers, chargers, converters, and distribution.",
    image: "/assets/products_dc_power.jpg", // Ensure image exists
    icon: Zap
  },
  { 
    title: "Batteries (VRLA & Flooded)", 
    desc: "Premium reserve power solutions including VRLA, NiCad, and Lithium-ion technologies.",
    details: "Authorized distributor for MK Battery, East Penn, and other top-tier manufacturers.",
    image: "/assets/products_batteries.jpg",
    icon: Battery
  },
  { 
    title: "UPS & Inverters", 
    desc: "Single Phase and Three Phase UPS systems and inverters for critical AC power backup.",
    details: "Protect your critical loads with reliable AC power solutions.",
    image: "/assets/products_ups.jpg",
    icon: Server
  },
  { 
    title: "Racking & Containment", 
    desc: "Seismic-rated battery racking, spill containment systems, and safety compliance gear.",
    details: "Includes over-current protection, bus/cable components, and certified spill containment.",
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
    // Embed URL for Google Maps
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.353396860388!2d-122.2356!3d47.382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905bfdb7e62563%3A0x1!2s1851%20Central%20Pl%20S%20%23206%2C%20Kent%2C%20WA%2098030!5e0!3m2!1sen!2sus!4v1620000000000"
  },
  {
    name: "Midwest Operations",
    address: "Davenport Area", 
    city: "Davenport, IA",
    phone: "(563) 555-0123",
    type: "Regional Hub",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95683.50742586324!2d-90.6366!3d41.543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e234c2e6f7b901%3A0x!2sDavenport%2C%20IA!5e0!3m2!1sen!2sus!4v1620000000000"
  }
];

export const partners = [
  { name: "East Penn Manufacturing", logo: "/assets/EPM-Logo_RGB.jpg" },
  { name: "MK Battery", logo: "/assets/MK Battery.png" },
  { name: "Enviroguard", logo: "/assets/Enviroguard.png" },
  { name: "Hindle Power", logo: "/assets/Hindle.png" },
  { name: "C&C Power", logo: "/assets/cc-power-logo.png" }
];
