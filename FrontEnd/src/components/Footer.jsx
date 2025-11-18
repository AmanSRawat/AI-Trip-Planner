import { Mountain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm text-slate-400">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Mountain className="w-6 h-6 text-teal-400" />
            <span className="font-bold text-white">UttarakhandAI</span>
          </div>
          <p>Experience Uttarakhand with AI-powered personalized itineraries and local expertise.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2"><li><a href="#" className="hover:text-teal-400">Home</a></li><li><a href="#" className="hover:text-teal-400">Destinations</a></li><li><a href="#" className="hover:text-teal-400">Plan Your Trip</a></li><li><a href="#" className="hover:text-teal-400">How It Works</a></li></ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Popular Places</h4>
          <ul className="space-y-2">Rishikesh · Nainital · Mussoorie · Kedarnath · Auli</ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Contact Us</h4>
          <ul className="space-y-2">
            <li>info@uttarakhandai.com</li>
            <li>+91 98765 43210</li>
            <li>Dehradun, Uttarakhand</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-slate-500 text-xs mt-10">
        © 2025 UttarakhandAI. All rights reserved.
      </div>
    </footer>
  );
}