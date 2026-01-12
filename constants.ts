import { Crown, Palette, Clock, ShieldCheck, Gem, LayoutTemplate } from 'lucide-react';
import { NavItem, Feature, Testimonial, PricingPlan, FAQItem } from './types';

export const BRAND_NAME = "Andino";

export const NAV_ITEMS: NavItem[] = [
  { label: "Philosophy", href: "#features" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#pricing" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#footer" },
];

export const FEATURES: Feature[] = [
  {
    title: "Bespoke Curation",
    description: "Every texture, hue, and furniture piece is hand-selected from global artisans to ensure your space is singularly yours.",
    icon: Palette
  },
  {
    title: "Timeless Elegance",
    description: "We transcend fleeting trends to create environments that possess an enduring sophistication and grace.",
    icon: Clock
  },
  {
    title: "White-Glove Management",
    description: "From conceptualization to the final reveal, our team handles logistics, procurement, and installation with absolute discretion.",
    icon: Crown
  },
  {
    title: "Sustainable Luxury",
    description: "Ethically sourced materials meet opulent design. We believe true luxury respects both the inhabitant and the environment.",
    icon: Gem
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Andino Interior Design didn't just renovate our penthouse; they interpreted our personalities into a physical form. The attention to detail is simply unrivaled.",
    author: "Alexandra V.",
    role: "Private Collector",
    location: "Manhattan, NY"
  },
  {
    quote: "Professionalism at its peak. The team navigated complex architectural challenges with ease, delivering a sanctuary that feels both grand and intimate.",
    author: "James & Eleanor S.",
    role: "Technology Executives",
    location: "Atherton, CA"
  },
  {
    quote: "An absolute masterclass in luxury. Walking into my home now feels like stepping into a curated gallery that invites you to stay.",
    author: "Isabella R.",
    role: "Fashion Director",
    location: "Milan, Italy"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "The Consultation",
    price: "$2,500",
    description: "Perfect for refreshing a single room or seeking expert direction.",
    features: [
      "2-Hour In-Home Strategy Session",
      "Curated Material Palette",
      "Furniture Layout Recommendations",
      "Vendor Introductions",
      "4-Week Digital Support"
    ],
    cta: "Book Consultation"
  },
  {
    name: "The Residence",
    price: "From $15,000",
    description: "Comprehensive design for multi-room renovations or new builds.",
    features: [
      "Full Architectural Review",
      "Bespoke Furniture Design",
      "3D Renderings & Walkthroughs",
      "Project Management & Procurement",
      "White-Glove Installation",
      "Art Advisory Services"
    ],
    cta: "Inquire for Proposal",
    isPopular: true
  },
  {
    name: "The Estate",
    price: "Custom",
    description: "End-to-end management for large-scale estates and vacation homes.",
    features: [
      "Global Sourcing Expeditions",
      "Custom Millwork & Joinery",
      "Landscape Integration",
      "Smart Home Architecture",
      "Dedicated Senior Design Team",
      "Priority Access"
    ],
    cta: "Contact Principals"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary by scope. A single-room refresh typically requires 8-12 weeks, while full-scale residence renovations can span 6-18 months. We prioritize quality and precision over speed."
  },
  {
    question: "Do you travel for international projects?",
    answer: "Yes, Andino Interior Design accepts commissions globally. We have established logistics networks in Europe, Asia, and North America to ensure seamless execution regardless of location."
  },
  {
    question: "How do you handle budget management?",
    answer: "Transparency is paramount. We establish a detailed budget framework at the onset and provide monthly financial reports. Our fee structure is simple: a design fee plus a procurement percentage on furnishings."
  },
  {
    question: "Can you incorporate my existing art collection?",
    answer: "Absolutely. We view your existing collection as the soul of the home. Our designs are often conceptualized around key pieces to ensure they are displayed with the prominence they deserve."
  }
];