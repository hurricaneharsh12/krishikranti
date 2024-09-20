import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import Chat from "../components/Chat";
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Smart-Farming", href: "#" },
];

export const testimonials = [
  {
    user: "Avinash Patel",
    company: "Urban Farming India Enterprises",
    image: user1,
    text: "We've been able to reduce our procurement costs significantly thanks to the efficient price negotiation features. It's a win-win for both farmers and our company.",
  },
  {
    user: "Anjali Pandey",
    company: "Urban Farming Agritech Solutions",
    image: user2,
    text: "Our agricultural contracts are complex, but this system has simplified the negotiation process. The AI-powered tools provide valuable insights into market trends and help us secure the best possible terms for our farmers.",
  },
  {
    user: "Ramesh Kumar",
    company: "Urban Farming AgriInnovations",
    image: user3,
    text: "We've been able to effectively manage risks and ensure compliance with agricultural regulations using this system. The built-in compliance checks and alerts have helped us avoid costly penalties and maintain a positive reputation.",
  },
  {
    user: "Rajesh Sharma",
    company: "Urban Farming Visionary Farms",
    image: user4,
    text: "Our relationships with farmers have improved dramatically since we started using this platform. It's a great tool for building trust and transparency.",
  },
  {
    user: "Vivek Gupta",
    company: "Urban Farming Organic India Limited",
    image: user5,
    text: "Finding reliable farmers used to be a time-consuming process. This platform has made it so much easier for us to connect with quality suppliers.",
  },
  {
    user: "Priya Singh",
    company: "Urban Farming Agri Systems",
    image: user6,
    text: "By streamlining our contract management processes, we have been able to expand our market reach and access new customers. This has helped us grow our business and increase our revenue.",
  },
];
export const checklistItems = [
  {
    title: "AI-Powered Price Comparison",
    description:
      "Get instant price comparisons from various agents and companies, ensuring you always secure the best deals for your crops.",
  },
  {
    title: "Automated Crop Growth tracking",
    description: "Track crop growth effortlessly with our automated system.",
  },
  {
    title: "Streamlined APMC Market Interactions",
    description:
      "Easily navigate the APMC market with AI-assisted contract management, simplifying the process of dealing with market contractors.",
  },
  {
    title: "Real-Time Market Insights",
    description:
      "Stay informed about market trends and fluctuations, making informed decisions for your contracts.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Real-Time Price Comparison",
    description:
      "Easily compare prices offered by different agents and companies to ensure you get the best deals for your crops.",
  },
  {
    icon: <Fingerprint />,
    text: "Automated Contract Generation",
    description:
      "Generate legally binding contracts with just a few clicks, saving you time and effort.",
  },
  {
    icon: <ShieldHalf />,
    text: "Contract Templates",
    description:
      "Choose from a variety of pre-designed contract templates tailored to your specific farming needs.",
  },
  {
    icon: <BatteryCharging />,
    text: "Payment Tracking",
    description:
      "Monitor and track payments related to your contracts in real time to ensure timely settlements.",
  },
  {
    icon: <PlugZap />,
    text: "Secure Document Storage",
    description:
      "Store all your important contract documents securely in a centralized location, accessible anytime, anywhere.",
  },
  {
    icon: <GlobeLock />,
    text: "Regulatory Compliance",
    description:
      "Stay compliant with relevant agricultural regulations and industry standards through automated contract management.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "₹0",
    features: [
      "Automated Contract Generation",
      "Real-Time Price Comparison",
      "Basic Analytics",
    ],
  },
  {
    title: "Standard",
    price: "₹100",
    features: [
      "Automated Contract Negotiation",
      "Advanced Analytics",
      "APMC Market Integration",
    ],
  },
  {
    title: "Premium",
    price: "₹200",
    features: [
      "AI-Powered Risk Assessment",
      "Customizable Templates",
      "Priority Support",
    ],
  },
];
export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "AI Chatbot" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Blog" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
];
