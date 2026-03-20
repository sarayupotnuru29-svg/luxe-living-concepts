// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, MapPin, Star } from "lucide-react";
// import heroBg from "@/assets/hero-bg.png";
// import SectionHeading from "@/components/SectionHeading";
// import { useScrollReveal } from "@/hooks/useScrollReveal";

// // Import some project images for the home preview
// import p1 from "@/assets/images/projects/project-1.jpg";
// import p9 from "@/assets/images/projects/project-9.jpg";
// import p10 from "@/assets/images/projects/project-10.jpg";
// import p11 from "@/assets/images/projects/project-11.jpg";

// const heroImages = [p1, p9, p10, p11];

// const specializations = [
//   { title: "Budget Friendly Home Interiors", desc: "Elegant designs that respect your investment without compromising on quality or aesthetics.", icon: "✦" },
//   { title: "Turn Key Projects", desc: "Complete end-to-end interior solutions — from concept to handover, we manage everything.", icon: "◆" },
//   { title: "Commercial Interiors", desc: "Sophisticated commercial spaces that reflect your brand identity and inspire productivity.", icon: "▣" },
// ];

// const premiumTiers = [
//   { title: "Premium Interiors", desc: "Curated materials and bespoke craftsmanship for discerning homeowners." },
//   { title: "Luxury Interiors", desc: "The pinnacle of residential design — rare materials, master artisans, timeless elegance." },
// ];

// const locations = ["Hyderabad", "Vijayawada", "Vizag"];

// const Index = () => {
//   const [heroLoaded, setHeroLoaded] = useState(false);
//   const specs = useScrollReveal();
//   const pricing = useScrollReveal();
//   const preview = useScrollReveal();

//   useEffect(() => {
//     const t = setTimeout(() => setHeroLoaded(true), 100);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <img
//           src={heroBg}
//           alt="Luxury interior living space"
//           className="absolute inset-0 w-full h-full object-cover"
//           onLoad={() => setHeroLoaded(true)}
//         />
//         <div className="absolute inset-0 luxe-overlay" />
        
//         {/* Centered Decorative Line */}
//         <div className="relative z-10 text-center px-6">
//           <div
//             className={`w-16 h-px bg-luxe-cream/50 mx-auto transition-all duration-1000 delay-300 ${
//               heroLoaded ? "opacity-100 w-16" : "opacity-0 w-0"
//             }`}
//           />
//         </div>

//         {/* View Our Work Button - Positioned at bottom center */}
//         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
//           <Link
//             to="/gallery"
//             className={`luxe-btn-outline inline-flex border-luxe-cream/60 text-luxe-cream hover:bg-luxe-cream/20 hover:text-luxe-cream transition-all duration-1000 delay-700 ${
//               heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             View Our Work
//             <ArrowRight size={16} className="ml-2" />
//           </Link>
//         </div>
//       </section>

//       {/* Specializations */}
//       <section className="luxe-section bg-luxe-cream">
//         <div className="container mx-auto">
//           <SectionHeading
//             title="Our Specialization"
//             subtitle="Crafting spaces that resonate with your lifestyle — across every budget and vision."
//           />
//           <div
//             ref={specs.ref}
//             className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
//           >
//             {specializations.map((s, i) => (
//               <div
//                 key={s.title}
//                 className={`luxe-card p-10 text-center transition-all duration-700 ${
//                   specs.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                 }`}
//                 style={{ transitionDelay: `${i * 120}ms` }}
//               >
//                 <span className="text-3xl text-primary mb-4 block">{s.icon}</span>
//                 <h3 className="font-heading text-xl md:text-2xl mb-4 text-foreground" style={{ lineHeight: "1.2" }}>
//                   {s.title}
//                 </h3>
//                 <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
//               </div>
//             ))}
//           </div>

//           {/* Premium tiers */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//             {premiumTiers.map((t, i) => (
//               <div
//                 key={t.title}
//                 className={`luxe-card p-10 border-l-2 border-primary transition-all duration-700 ${
//                   specs.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
//                 }`}
//                 style={{ transitionDelay: `${(i + 3) * 120}ms` }}
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <Star size={18} className="text-primary" />
//                   <h3 className="font-heading text-xl md:text-2xl text-foreground">{t.title}</h3>
//                 </div>
//                 <p className="font-body text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
//               </div>
//             ))}
//           </div>

//           {/* Locations */}
//           <div className="flex flex-wrap justify-center gap-6">
//             {locations.map((loc) => (
//               <span
//                 key={loc}
//                 className="flex items-center gap-2 font-body text-sm tracking-wider text-muted-foreground"
//               >
//                 <MapPin size={14} className="text-primary" />
//                 {loc}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing */}
//       <section className="luxe-section bg-accent text-accent-foreground">
//         <div className="container mx-auto">
//           <SectionHeading title="Investment Guide" subtitle="Transparent pricing for every vision" light />
//           <div ref={pricing.ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
//             {/* Package pricing */}
//             <div
//               className={`p-10 rounded-sm border border-primary/30 transition-all duration-700 ${
//                 pricing.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//               }`}
//             >
//               <h3 className="font-heading text-2xl text-luxe-cream mb-8" style={{ lineHeight: "1.2" }}>
//                 Package Pricing
//               </h3>
//               <div className="space-y-6">
//                 {[
//                   { label: "2 BHK Complete Interiors", price: "₹5,99,999" },
//                   { label: "3 BHK Complete Interiors", price: "₹6,99,999" },
//                 ].map((p) => (
//                   <div key={p.label} className="flex justify-between items-baseline border-b border-primary/20 pb-4">
//                     <span className="font-body text-sm text-luxe-cream/80">{p.label}</span>
//                     <span className="font-heading text-xl text-luxe-cream">{p.price}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Per SFT pricing */}
//             <div
//               className={`p-10 rounded-sm border border-primary/30 transition-all duration-700 delay-200 ${
//                 pricing.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//               }`}
//             >
//               <h3 className="font-heading text-2xl text-luxe-cream mb-8" style={{ lineHeight: "1.2" }}>
//                 Per SFT Pricing
//               </h3>
//               <div className="space-y-6">
//                 {[
//                   { label: "Economy", price: "₹1,500/sft" },
//                   { label: "Premium", price: "₹2,000/sft" },
//                   { label: "Luxury", price: "₹2,500/sft" },
//                 ].map((p) => (
//                   <div key={p.label} className="flex justify-between items-baseline border-b border-primary/20 pb-4">
//                     <span className="font-body text-sm text-luxe-cream/80">{p.label}</span>
//                     <span className="font-heading text-xl text-luxe-cream">{p.price}</span>
//                   </div>
//                 ))}
//               </div>
//               <p className="font-body text-xs text-luxe-cream/50 mt-6 italic">
//                 Turnkey project pricing depends on space (sft) and services selected.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects preview */}
//       <section className="luxe-section bg-luxe-cream">
//         <div className="container mx-auto">
//           <SectionHeading title="Featured Projects" subtitle="A glimpse into the spaces we've transformed" />
//           <div ref={preview.ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {heroImages.map((img, i) => (
//               <div
//                 key={i}
//                 className={`gallery-item aspect-[3/4] transition-all duration-700 ${
//                   preview.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                 }`}
//                 style={{ transitionDelay: `${i * 100}ms` }}
//               >
//                 <img src={img} alt={`Interior project ${i + 1}`} loading="lazy" />
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <Link to="/gallery" className="luxe-btn-primary">
//               View All Projects
//               <ArrowRight size={16} className="ml-2" />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Index;



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Import some project images for the home preview
import p1 from "@/assets/images/projects/project-1.jpg";
import p9 from "@/assets/images/projects/project-9.jpg";
import p10 from "@/assets/images/projects/project-10.jpg";
import p11 from "@/assets/images/projects/project-11.jpg";

const heroImages = [p1, p9, p10, p11];

const specializations = [
  { title: "Budget Friendly Home Interiors", desc: "Elegant designs that respect your investment without compromising on quality or aesthetics.", icon: "✦" },
  { title: "Turn Key Projects", desc: "Complete end-to-end interior solutions — from concept to handover, we manage everything.", icon: "◆" },
  { title: "Commercial Interiors", desc: "Sophisticated commercial spaces that reflect your brand identity and inspire productivity.", icon: "▣" },
];

const premiumTiers = [
  { title: "Premium Interiors", desc: "Curated materials and bespoke craftsmanship for discerning homeowners." },
  { title: "Luxury Interiors", desc: "The pinnacle of residential design — rare materials, master artisans, timeless elegance." },
];

const locations = ["Hyderabad", "Vijayawada", "Vizag"];

const Index = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const specs = useScrollReveal();
  const pricing = useScrollReveal();
  const preview = useScrollReveal();

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Luxury interior living space"
          className="absolute inset-0 w-full h-full object-cover"
          onLoad={() => setHeroLoaded(true)}
        />
        <div className="absolute inset-0 luxe-overlay" />
        
        {/* Centered Content Container */}
        <div className="relative z-10 text-center px-6 flex flex-col items-center">
          {/* Decorative Line */}
          <div
            className={`w-16 h-px bg-luxe-cream/50 mb-8 transition-all duration-1000 delay-300 ${
              heroLoaded ? "opacity-100 w-16" : "opacity-0 w-0"
            }`}
          />
          
          {/* View Our Work Button - Exactly in the Center */}
          <Link
            to="/gallery"
            className={`luxe-btn-outline inline-flex border-luxe-cream/60 text-luxe-cream hover:bg-luxe-cream/20 hover:text-luxe-cream transition-all duration-1000 delay-500 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            View Our Work
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Specializations */}
      <section className="luxe-section bg-luxe-cream">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Specialization"
            subtitle="Crafting spaces that resonate with your lifestyle — across every budget and vision."
          />
          <div
            ref={specs.ref}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {specializations.map((s, i) => (
              <div
                key={s.title}
                className={`luxe-card p-10 text-center transition-all duration-700 ${
                  specs.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="text-3xl text-primary mb-4 block">{s.icon}</span>
                <h3 className="font-heading text-xl md:text-2xl mb-4 text-foreground" style={{ lineHeight: "1.2" }}>
                  {s.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Premium tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {premiumTiers.map((t, i) => (
              <div
                key={t.title}
                className={`luxe-card p-10 border-l-2 border-primary transition-all duration-700 ${
                  specs.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
                style={{ transitionDelay: `${(i + 3) * 120}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Star size={18} className="text-primary" />
                  <h3 className="font-heading text-xl md:text-2xl text-foreground">{t.title}</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Locations */}
          <div className="flex flex-wrap justify-center gap-6">
            {locations.map((loc) => (
              <span
                key={loc}
                className="flex items-center gap-2 font-body text-sm tracking-wider text-muted-foreground"
              >
                <MapPin size={14} className="text-primary" />
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="luxe-section bg-accent text-accent-foreground">
        <div className="container mx-auto">
          <SectionHeading title="Investment Guide" subtitle="Transparent pricing for every vision" light />
          <div ref={pricing.ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Package pricing */}
            <div
              className={`p-10 rounded-sm border border-primary/30 transition-all duration-700 ${
                pricing.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="font-heading text-2xl text-luxe-cream mb-8" style={{ lineHeight: "1.2" }}>
                Package Pricing
              </h3>
              <div className="space-y-6">
                {[
                  { label: "2 BHK Complete Interiors", price: "₹5,99,999" },
                  { label: "3 BHK Complete Interiors", price: "₹6,99,999" },
                ].map((p) => (
                  <div key={p.label} className="flex justify-between items-baseline border-b border-primary/20 pb-4">
                    <span className="font-body text-sm text-luxe-cream/80">{p.label}</span>
                    <span className="font-heading text-xl text-luxe-cream">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Per SFT pricing */}
            <div
              className={`p-10 rounded-sm border border-primary/30 transition-all duration-700 delay-200 ${
                pricing.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="font-heading text-2xl text-luxe-cream mb-8" style={{ lineHeight: "1.2" }}>
                Per SFT Pricing
              </h3>
              <div className="space-y-6">
                {[
                  { label: "Economy", price: "₹1,500/sft" },
                  { label: "Premium", price: "₹2,000/sft" },
                  { label: "Luxury", price: "₹2,500/sft" },
                ].map((p) => (
                  <div key={p.label} className="flex justify-between items-baseline border-b border-primary/20 pb-4">
                    <span className="font-body text-sm text-luxe-cream/80">{p.label}</span>
                    <span className="font-heading text-xl text-luxe-cream">{p.price}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-xs text-luxe-cream/50 mt-6 italic">
                Turnkey project pricing depends on space (sft) and services selected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="luxe-section bg-luxe-cream">
        <div className="container mx-auto">
          <SectionHeading title="Featured Projects" subtitle="A glimpse into the spaces we've transformed" />
          <div ref={preview.ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {heroImages.map((img, i) => (
              <div
                key={i}
                className={`gallery-item aspect-[3/4] transition-all duration-700 ${
                  preview.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img src={img} alt={`Interior project ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/gallery" className="luxe-btn-primary">
              View All Projects
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;