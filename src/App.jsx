import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Landing from "./landing";
import ContactForm from './views/contact';

export default function LandingPage() {
  return (
    <BrowserRouter>
    <div className="flex flex-col font-sans antialiased text-gray-900 bg-gray-50 min-h-screen">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element = {<Landing />} />
          <Route path="/contact" element = {<ContactForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}