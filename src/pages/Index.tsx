// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, MapPin, ShieldCheck, Clock, Box } from "lucide-react";
// import heroBg from "@/assets/hero-bg.png";
// import SectionHeading from "@/components/SectionHeading";
// import { useScrollReveal } from "@/hooks/useScrollReveal";

// // Import project images
// import p1 from "@/assets/images/projects/project-1.jpg";
// import p9 from "@/assets/images/projects/project-9.jpg";
// import p10 from "@/assets/images/projects/project-10.jpg";
// import p11 from "@/assets/images/projects/project-11.jpg";

// const heroImages = [p1, p9, p10, p11];

// const specializations = [
//   { 
//     title: "Budget Friendly Home Interiors", 
//     desc: "Elegant designs that respect your investment without compromising on quality or aesthetics.", 
//     icon: "✦" 
//   },
//   { 
//     title: "Premium Interiors", 
//     desc: "Curated materials and bespoke craftsmanship for discerning homeowners seeking elevated living.", 
//     icon: "★" 
//   },
//   { 
//     title: "Luxury Interiors", 
//     desc: "The pinnacle of residential design — rare materials, master artisans, and timeless elegance.", 
//     icon: "✵" 
//   },
//   { 
//     title: "Turn Key Projects", 
//     desc: "Complete end-to-end interior solutions — from concept to handover, we manage everything.", 
//     icon: "◆" 
//   },
//   { 
//     title: "Commercial Interiors", 
//     desc: "Sophisticated commercial spaces that reflect your brand identity and inspire productivity.", 
//     icon: "▣" 
//   },
// ];

// const locations = ["Hyderabad", "Vijayawada", "Vizag"];

// const Index = () => {
//   const [heroLoaded, setHeroLoaded] = useState(false);
//   const specs = useScrollReveal();
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
        
//         <div className="relative z-10 text-center px-6 flex flex-col items-center max-w-5xl">
//           <Link
//             to="/contact"
//             className={`luxe-btn-primary inline-flex items-center mt-24 transition-all duration-1000 delay-500 ${
//               heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//             }`}
//           >
//             Get a free Quote
//             <ArrowRight size={16} className="ml-2" />
//           </Link>
//         </div>
//       </section>

//       {/* Specializations Section */}
//       <section className="luxe-section bg-luxe-cream">
//         <div className="container mx-auto">
//           <SectionHeading
//             title="Our Specialization"
//             subtitle="Crafting spaces that resonate with your lifestyle — across every budget and vision."
//           />

//           {/* Feature Badges - Filled Solid primary color */}
//           <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
//             {[
//               { icon: <Clock size={16} />, text: "45 Days Move-in" },
//               { icon: <ShieldCheck size={16} />, text: "10 Years Warranty" },
//               { icon: <Box size={16} />, text: "Free 3D Preview" }
//             ].map((badge, idx) => (
//               <div 
//                 key={idx} 
//                 className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-[10px] md:text-[11px] font-body tracking-[0.2em] uppercase shadow-lg border border-primary/10"
//               >
//                 {badge.icon}
//                 {badge.text}
//               </div>
//             ))}
//           </div>
          
//           <div
//             ref={specs.ref}
//             className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
//           >
//             {specializations.map((s, i) => (
//               <div
//                 key={s.title}
//                 className={`luxe-card p-10 text-center transition-all duration-700 ${
//                   specs.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//                 } ${i >= 3 ? "md:col-span-1 md:translate-x-[50%]" : ""}`}
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

//       {/* Projects Preview */}
//       <section className="luxe-section bg-luxe-cream border-t border-border/50">
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
//                 <img src={img} alt={`Interior project ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
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
import { ArrowRight, MapPin, ShieldCheck, Clock, Box } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Import project images
import p1 from "@/assets/images/projects/project-1.jpg";
import p9 from "@/assets/images/projects/project-9.jpg";
import p10 from "@/assets/images/projects/project-10.jpg";
import p11 from "@/assets/images/projects/project-11.jpg";

const heroImages = [p1, p9, p10, p11];

const specializations = [
  { 
    title: "Budget Friendly Home Interiors", 
    desc: "Elegant designs that respect your investment without compromising on quality or aesthetics.", 
    icon: "✦" 
  },
  { 
    title: "Premium Interiors", 
    desc: "Curated materials and bespoke craftsmanship for discerning homeowners seeking elevated living.", 
    icon: "★" 
  },
  { 
    title: "Luxury Interiors", 
    desc: "The pinnacle of residential design — rare materials, master artisans, and timeless elegance.", 
    icon: "✵" 
  },
  { 
    title: "Turn Key Projects", 
    desc: "Complete end-to-end interior solutions — from concept to handover, we manage everything.", 
    icon: "◆" 
  },
  { 
    title: "Commercial Interiors", 
    desc: "Sophisticated commercial spaces that reflect your brand identity and inspire productivity.", 
    icon: "▣" 
  },
];

const locations = ["Hyderabad", "Vijayawada", "Vizag"];

const Index = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const specs = useScrollReveal();
  const preview = useScrollReveal();

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <main>
      {/* Hero Section - Mobile Friendly height and centering */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Luxury interior living space"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            heroLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setHeroLoaded(true)}
        />
        {/* Darker overlay on mobile for better text/button contrast */}
        <div className="absolute inset-0 bg-black/30 md:luxe-overlay" />
        
        <div className="relative z-10 text-center px-6 flex flex-col items-center max-w-5xl">
          <Link
            to="/contact"
            className={`luxe-btn-primary inline-flex items-center mt-24 transition-all duration-1000 delay-500 shadow-2xl ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Get a free Quote
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="luxe-section bg-luxe-cream">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Specialization"
            subtitle="Crafting spaces that resonate with your lifestyle — across every budget and vision."
          />

          {/* Feature Badges - Solid Primary Color */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16">
            {[
              { icon: <Clock size={16} />, text: "45 Days Move-in" },
              { icon: <ShieldCheck size={16} />, text: "10 Years Warranty" },
              { icon: <Box size={16} />, text: "Free 3D Preview" }
            ].map((badge, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 px-4 py-2.5 md:px-6 rounded-full bg-primary text-white text-[9px] md:text-[11px] font-body tracking-[0.2em] uppercase shadow-lg border border-primary/10"
              >
                {badge.icon}
                {badge.text}
              </div>
            ))}
          </div>
          
          <div
            ref={specs.ref}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {specializations.map((s, i) => (
              <div
                key={s.title}
                className={`luxe-card p-10 text-center transition-all duration-700 ${
                  specs.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${i >= 3 ? "md:col-span-1 md:translate-x-[50%]" : ""}`}
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

      {/* Projects Preview */}
      <section className="luxe-section bg-luxe-cream border-t border-border/50">
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
                <img src={img} alt={`Interior project ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
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

