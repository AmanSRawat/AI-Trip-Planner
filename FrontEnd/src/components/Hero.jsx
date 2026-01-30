import { Sparkles } from 'lucide-react';


export default function Hero() {


  return (
    <>
    <section className="relative h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070" alt="Himalayas" className="absolute inset-0 w-full h-full object-cover" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/50 px-4 py-2 rounded-full text-sm mb-6">
          <Sparkles className="w-4 h-4 text-teal-400" />
          Powered by AI & RAG Technology
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Your Personalized Journey Through the Himalayas
        </h2>
        <p className="text-xl text-slate-300 mb-10">
          Experience the Himalayas like never before. Get hyper-localized, AI-powered itineraries tailored to your preferences, budget, and travel style.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-4 bg-teal-500 text-slate-900 font-semibold rounded-xl hover:bg-teal-400 transition shadow-lg">
            Plan Your Trip
          </button>
          <button className="px-8 py-4 border border-slate-500 text-white rounded-xl hover:border-teal-400 transition">
            Explore Destinations
          </button>
        </div>
      </div>
    </section>
  </>);
}