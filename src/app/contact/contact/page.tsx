"use client";

import Navbar from "@/components/marketing/navbar";
import Footer from "@/components/marketing/footer";
import Hero from "./components/hero";
import ContactForm from "./components/contactform";
import MapAddress from "./components/map";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="min-h-screen w-full bg-gray-50">
        <Hero />
        <ContactForm />
        <MapAddress />
      </main>
      <Footer />
    </div>
  );
}