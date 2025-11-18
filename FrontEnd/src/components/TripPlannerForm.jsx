import { Sparkles, Calendar, Users, IndianRupee, MapPin, MessageCircle } from 'lucide-react';

export default function TripPlannerForm() {
  const interests = ["Adventure Sports", "Spiritual", "Nature & Wildlife", "Photography", "Trekking", "Pilgrimage", "Yoga & Wellness", "Local Culture"];
  const destinations = ["Rishikesh", "Nainital", "Mussoorie", "Haridwar", "Jim Corbett", "Auli", "Kedarnath", "Badrinath", "Valley of Flowers", "Chopta"];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-slate-700/50 backdrop-blur-xl border border-slate-600 rounded-3xl p-10 shadow-2xl">
          <div className="text-center mb-10">
            <Sparkles className="w-12 h-12 text-teal-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white">Plan Your Perfect Trip</h3>
            <p className="text-slate-300 mt-2">Tell us your preferences and let AI craft your ideal itinerary</p>
          </div>

          {/* Form fields */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="flex items-center gap-2 text-sm text-slate-300 mb-2"><Calendar className="w-4 h-4" /> Start Date</label>
              <input type="date" className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:border-teal-500 outline-none transition" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm text-slate-300 mb-2"><Calendar className="w-4 h-4" /> End Date</label>
              <input type="date" className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:border-teal-500 outline-none transition" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm text-slate-300 mb-2"><Users className="w-4 h-4" /> Number of Travelers</label>
              <select className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:border-teal-500">
                <option>2 People</option><option>1 Person</option><option>3-4 People</option><option>5+ People</option>
              </select>
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm text-slate-300 mb-2"><IndianRupee className="w-4 h-4" /> Budget Range</label>
              <select className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:border-teal-500">
                <option>Moderate (₹25k-50k)</option><option>Comfort (₹50k-1L)</option><option>Luxury (₹1L+)</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm text-slate-300 mb-4">Your Interests</label>
            <div className="flex flex-wrap gap-3">
              {interests.map(tag => (
                <span key={tag} className="px-5 py-2 bg-slate-700 border border-slate-600 rounded-full text-sm text-slate-200 hover:border-teal-500 cursor-pointer transition">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="flex items-center gap-2 text-sm text-slate-300 mb-2"><MapPin className="w-4 h-4" /> Preferred Destinations (Optional)</label>
            <div className="flex flex-wrap gap-3">
              {destinations.map(place => (
                <span key={place} className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-full text-sm text-slate-200 hover:border-teal-500 cursor-pointer transition">
                  {place}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <label className="flex items-center gap-2 text-sm text-slate-300 mb-2"><MessageCircle className="w-4 h-4" /> Special Requirements</label>
            <textarea rows={3} placeholder="E.g., wheelchair accessible, vegetarian only, etc." className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-teal-500 outline-none transition resize-none"></textarea>
          </div>

          <button className="w-full py-5 bg-teal-500 text-slate-900 font-bold text-lg rounded-xl hover:bg-teal-400 transition shadow-lg flex items-center justify-center gap-3">
            <Sparkles className="w-6 h-6" />
            Generate My Itinerary
          </button>
        </div>
      </div>
    </section>
  );
}