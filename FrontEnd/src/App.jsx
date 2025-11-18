// src/App.jsx
import {
  Navbar,
  Hero,
  WhyAISection,
  DestinationsGrid,
  TripPlannerForm,
  Footer
} from './components/index'
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section id="home">       {/* ← Home */}
        <Hero />
      </section>

      <section id="why-ai">     {/* ← How It Works */}
        <WhyAISection />
      </section>

      <section id="destinations"> {/* ← Destinations */}
        <DestinationsGrid />
      </section>

      <section id="plan-trip">  {/* ← Plan Trip */}
        <TripPlannerForm />
      </section>

      <Footer />
    </div>
  );
}