import servicesBg from "@/assets/services-bg.jpg";
import serviceBudget from "@/assets/service-budget.jpg";
import serviceTurnkey from "@/assets/service-turnkey.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import servicePremium from "@/assets/service-premium.jpg";
import serviceLuxury from "@/assets/service-luxury.jpg";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Budget Friendly Home Interiors",
    desc: "Smart, stylish, and functional designs that respect your investment. We utilize value-engineered materials and creative layouts to deliver a high-end look without the premium price tag.",
    image: serviceBudget,
  },
  {
    title: "Premium Interiors",
    desc: "Elevated living through curated materials and bespoke craftsmanship. Designed for those who appreciate refined detailing, custom furniture, and a sophisticated aesthetic in every room.",
    image: servicePremium,
  },
  {
    title: "Luxury Interiors",
    desc: "The ultimate expression of residential grandeur. From rare marbles to exotic veneers, we collaborate with master artisans to create timeless spaces of unparalleled opulence and prestige.",
    image: serviceLuxury,
  },
  {
    title: "Turn Key Projects",
    desc: "A seamless transition from blueprint to beautiful. We manage the entire lifecycle — architecture, interior construction, and final styling — providing you with a stress-free, move-in-ready experience.",
    image: serviceTurnkey,
  },
  {
    title: "Commercial Interiors",
    desc: "Strategic design solutions for high-performance workplaces, retail hubs, and hospitality venues. We craft environments that reflect your brand identity while inspiring productivity and growth.",
    image: serviceCommercial,
  },
];

const Services = () => {
  const cards = useScrollReveal();
  const info = useScrollReveal();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img src={servicesBg} alt="Interior design concepts" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 luxe-overlay" />
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-6xl text-luxe-cream tracking-[0.15em]" style={{ lineHeight: "1.1" }}>
            Our Services
          </h1>
        </div>
      </section>

      {/* Services list */}
      <section className="luxe-section bg-luxe-cream">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading title="What We Offer" subtitle="Complete interior solutions for every scale and style" />
          <div ref={cards.ref} className="space-y-8">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`luxe-card overflow-hidden flex flex-col md:flex-row md:items-stretch transition-all duration-700 ${
                  cards.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="md:w-64 h-48 md:h-auto shrink-0">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl md:text-2xl mb-3 text-foreground" style={{ lineHeight: "1.2" }}>{s.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                  <Link to="/contact" className="luxe-btn-outline shrink-0 text-xs">
                    Enquire <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business info */}
      <section className="luxe-section bg-accent text-accent-foreground">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading title="Business Hours & Locations" light />
          <div ref={info.ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className={`transition-all duration-700 ${info.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
              <div className="flex items-center gap-3 mb-4">
                <Clock size={18} className="text-primary" />
                <h3 className="font-heading text-xl text-luxe-cream">Working Hours</h3>
              </div>
              <ul className="font-body text-sm text-luxe-cream/70 space-y-2">
                <li>Monday – Saturday: 10:00 AM – 7:00 PM</li>
                <li>Sunday: By Appointment</li>
              </ul>
              <div className="flex items-center gap-3 mt-8 mb-4">
                <Phone size={18} className="text-primary" />
                <h3 className="font-heading text-xl text-luxe-cream">Contact</h3>
              </div>
              <ul className="font-body text-sm text-luxe-cream/70 space-y-2">
                <li>+91 9000633655</li>
                <li>luxelivingconcepts2299@gmail.com</li>
              </ul>
            </div>
            <div className={`transition-all duration-700 delay-200 ${info.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={18} className="text-primary" />
                <h3 className="font-heading text-xl text-luxe-cream">Our Locations</h3>
              </div>
              <ul className="font-body text-sm text-luxe-cream/70 space-y-4">
                <li>
                  <strong className="text-luxe-cream">Hyderabad</strong><br />
                  Corporate Office & Design Studio
                </li>
                <li>
                  <strong className="text-luxe-cream">Vijayawada</strong><br />
                  Regional Office
                </li>
                <li>
                  <strong className="text-luxe-cream">Vizag</strong><br />
                  Regional Office
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;