// import { useState } from "react";
// import SectionHeading from "@/components/SectionHeading";
// import { useScrollReveal } from "@/hooks/useScrollReveal";
// import { X } from "lucide-react";
// import galleryBg from "@/assets/gallery-bg.jpg";

// // Import real images
// import p1 from "@/assets/images/projects/project-1.jpg";
// import p2 from "@/assets/images/projects/project-2.jpg";
// import p3 from "@/assets/images/projects/project-3.jpg";
// import p4 from "@/assets/images/projects/project-4.jpg";
// import p5 from "@/assets/images/projects/project-5.jpg";
// import p6 from "@/assets/images/projects/project-6.jpg";
// import p7 from "@/assets/images/projects/project-7.jpg";
// import p8 from "@/assets/images/projects/project-8.jpg";
// import p9 from "@/assets/images/projects/project-9.jpg";
// import p10 from "@/assets/images/projects/project-10.jpg";
// import p11 from "@/assets/images/projects/project-11.jpg";
// import p12 from "@/assets/images/projects/project-12.jpg";

// const realImages = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

// // Generate 78 images by cycling through available images
// const allImages = Array.from({ length: 78 }, (_, i) => ({
//   src: realImages[i % realImages.length],
//   alt: `Interior design project ${i + 1}`,
//   id: i + 1,
// }));

// const Gallery = () => {
//   const [lightbox, setLightbox] = useState<number | null>(null);
//   const grid = useScrollReveal(0.1);

//   return (
//     <main className="pt-20">
//       {/* Hero */}
//       <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
//         <img src={galleryBg} alt="Gallery backdrop" className="absolute inset-0 w-full h-full object-cover" />
//         <div className="absolute inset-0 luxe-overlay" />
//         <div className="relative z-10 text-center">
//           <h1 className="font-heading text-4xl md:text-6xl text-luxe-cream tracking-[0.15em]" style={{ lineHeight: "1.1" }}>
//             Our Projects
//           </h1>
//         </div>
//       </section>

//       {/* Gallery grid */}
//       <section className="luxe-section bg-luxe-cream">
//         <div className="container mx-auto">
//           <SectionHeading title="Project Gallery" subtitle="Every space has a story — here are ours" />
//           <div
//             ref={grid.ref}
//             className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
//           >
//             {allImages.map((img, i) => (
//               <div
//                 key={img.id}
//                 className={`gallery-item aspect-square cursor-pointer transition-all duration-700 ${
//                   grid.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//                 }`}
//                 style={{ transitionDelay: `${Math.min(i * 30, 600)}ms` }}
//                 onClick={() => setLightbox(i)}
//               >
//                 <img src={img.src} alt={img.alt} loading="lazy" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Lightbox */}
//       {lightbox !== null && (
//         <div
//           className="fixed inset-0 z-50 bg-accent/90 flex items-center justify-center p-4 animate-fade-in"
//           onClick={() => setLightbox(null)}
//         >
//           <button
//             onClick={() => setLightbox(null)}
//             className="absolute top-6 right-6 text-luxe-cream/80 hover:text-luxe-cream transition-colors"
//           >
//             <X size={32} />
//           </button>
//           <img
//             src={allImages[lightbox].src}
//             alt={allImages[lightbox].alt}
//             className="max-w-full max-h-[85vh] object-contain rounded-sm"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </main>
//   );
// };

// export default Gallery;




import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X } from "lucide-react";
import galleryBg from "@/assets/gallery-bg.jpg";

/**
 * We programmatically generate the image list.
 * This assumes the files are named 1.jpeg through 78.jpeg 
 * in the src/assets/images/projects/ folder.
 */
const allImages = Array.from({ length: 78 }, (_, i) => {
  const id = i + 1;
  return {
    // Using new URL for Vite/Webpack compatibility to dynamic import by path
    src: new URL(`../assets/images/projects/${id}.jpeg`, import.meta.url).href,
    alt: `Luxe Living Interior Project ${id}`,
    id: id,
  };
});

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const grid = useScrollReveal(0.1);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img 
          src={galleryBg} 
          alt="Gallery backdrop" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 luxe-overlay" />
        <div className="relative z-10 text-center">
          <h1 
            className="font-heading text-4xl md:text-6xl text-luxe-cream tracking-[0.15em]" 
            style={{ lineHeight: "1.1" }}
          >
            Our Projects
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="luxe-section bg-luxe-cream">
        <div className="container mx-auto">
          <SectionHeading 
            title="Project Gallery" 
            subtitle="Every space has a story — here are ours" 
          />
          
          <div
            ref={grid.ref}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            {allImages.map((img, i) => (
              <div
                key={img.id}
                className={`gallery-item aspect-square cursor-pointer transition-all duration-700 ${
                  grid.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${Math.min(i * 20, 500)}ms` }}
                onClick={() => setLightbox(i)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  loading="lazy" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Image Preview */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-accent/95 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-luxe-cream/80 hover:text-luxe-cream transition-colors z-50"
          >
            <X size={32} />
          </button>
          
          <div className="relative max-w-5xl w-full flex items-center justify-center">
            <img
              src={allImages[lightbox].src}
              alt={allImages[lightbox].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute -bottom-8 left-0 text-luxe-cream/60 font-body text-sm">
              Project {allImages[lightbox].id} of 78
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;