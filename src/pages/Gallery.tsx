// import { useState } from "react";
// import SectionHeading from "@/components/SectionHeading";
// import { useScrollReveal } from "@/hooks/useScrollReveal";
// import { X } from "lucide-react";
// import galleryBg from "@/assets/gallery-bg.jpg";

// /**
//  * We programmatically generate the image list.
//  * This assumes the files are named 1.jpeg through 78.jpeg 
//  * in the src/assets/images/projects/ folder.
//  */
// const allImages = Array.from({ length: 78 }, (_, i) => {
//   const id = i + 1;
//   return {
//     // Using new URL for Vite/Webpack compatibility to dynamic import by path
//     src: new URL(`../assets/images/projects/${id}.jpeg`, import.meta.url).href,
//     alt: `Luxe Living Interior Project ${id}`,
//     id: id,
//   };
// });

// const Gallery = () => {
//   const [lightbox, setLightbox] = useState<number | null>(null);
//   const grid = useScrollReveal(0.1);

//   return (
//     <main className="pt-20">
//       {/* Hero Section */}
//       <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
//         <img 
//           src={galleryBg} 
//           alt="Gallery backdrop" 
//           className="absolute inset-0 w-full h-full object-cover" 
//         />
//         <div className="absolute inset-0 luxe-overlay" />
//         <div className="relative z-10 text-center">
//           <h1 
//             className="font-heading text-4xl md:text-6xl text-luxe-cream tracking-[0.15em]" 
//             style={{ lineHeight: "1.1" }}
//           >
//             Our Projects
//           </h1>
//         </div>
//       </section>

//       {/* Gallery Grid */}
//       <section className="luxe-section bg-luxe-cream">
//         <div className="container mx-auto">
//           <SectionHeading 
//             title="Project Gallery" 
//             subtitle="Every space has a story — here are ours" 
//           />
          
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
//                 style={{ transitionDelay: `${Math.min(i * 20, 500)}ms` }}
//                 onClick={() => setLightbox(i)}
//               >
//                 <img 
//                   src={img.src} 
//                   alt={img.alt} 
//                   loading="lazy" 
//                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Lightbox / Image Preview */}
//       {lightbox !== null && (
//         <div
//           className="fixed inset-0 z-50 bg-accent/95 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm"
//           onClick={() => setLightbox(null)}
//         >
//           <button
//             onClick={() => setLightbox(null)}
//             className="absolute top-6 right-6 text-luxe-cream/80 hover:text-luxe-cream transition-colors z-50"
//           >
//             <X size={32} />
//           </button>
          
//           <div className="relative max-w-5xl w-full flex items-center justify-center">
//             <img
//               src={allImages[lightbox].src}
//               alt={allImages[lightbox].alt}
//               className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             />
//             <p className="absolute -bottom-8 left-0 text-luxe-cream/60 font-body text-sm">
//               Project {allImages[lightbox].id} of 78
//             </p>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default Gallery;









import { useState, useMemo } from "react";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X } from "lucide-react";
import galleryBg from "@/assets/gallery-bg.jpg";

// 1. Define the categories in the specific order requested
const CATEGORIES = [
  "All",
  "Main Entry",
  "Main door -opp",
  "mini Hall wall",
  "main Hall wall",
  "TV unit -opp wall",
  "TV unit",
  "Dining Area",
  "pooja-kitchen entry",
  "kitchen",
  "M bedroom",
  "G Bedroom",
  "G tv unit",
  "G B Door",
  "Kids B room",
  "KB tv unit",
];

// 2. Map your 1.jpeg - 78.jpeg to these categories
// ACTION REQUIRED: Move the numbers into the correct category arrays
const categoryMapping: Record<string, number[]> = {
  "Main Entry": [1, 2, 3, 4], 
  "Main door -opp": [5, 6],
  "mini Hall wall": [7, 8, 9],
  "main Hall wall": [10, 11, 12],
  "TV unit -opp wall": [13, 14],
  "TV unit": [15, 16, 17],
  "Dining Area": [18, 19, 20],
  "pooja-kitchen entry": [21, 22],
  "kitchen": [23, 24, 25, 26],
  "M bedroom": [27, 28, 29, 30],
  "G Bedroom": [31, 32, 33],
  "G tv unit": [34, 35],
  "G B Door": [36, 37],
  "Kids B room": [38, 39, 40],
  "KB tv unit": [41, 42],
  // Put any remaining IDs here or spread them above to reach 78
  "Uncategorized": Array.from({ length: 36 }, (_, i) => i + 43), 
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const grid = useScrollReveal(0.1);

  // Generate image objects with category tags
  const allImages = useMemo(() => {
    return Array.from({ length: 78 }, (_, i) => {
      const id = i + 1;
      let category = "Uncategorized";
      
      for (const [cat, ids] of Object.entries(categoryMapping)) {
        if (ids.includes(id)) {
          category = cat;
          break;
        }
      }

      return {
        src: new URL(`../assets/images/projects/${id}.jpeg`, import.meta.url).href,
        alt: `Luxe Living Interior Project ${id}`,
        id: id,
        category: category,
      };
    });
  }, []);

  // Filter images based on selection
  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return allImages;
    return allImages.filter((img) => img.category === activeCategory);
  }, [activeCategory, allImages]);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <img src={galleryBg} alt="Gallery backdrop" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 luxe-overlay" />
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-6xl text-luxe-cream tracking-[0.15em]">
            Our Projects
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="luxe-section bg-luxe-cream">
        <div className="container mx-auto">
          <SectionHeading title="Project Gallery" subtitle="Every space has a story — here are ours" />

          {/* Category Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-widest border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-accent text-white border-accent"
                    : "bg-transparent text-accent border-accent/20 hover:border-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div
            ref={grid.ref}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            {filteredImages.map((img, i) => (
              <div
                key={img.id}
                className={`gallery-item aspect-square cursor-pointer transition-all duration-700 ${
                  grid.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${Math.min(i * 20, 500)}ms` }}
                onClick={() => setLightbox(img.id)}
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

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-accent/95 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-luxe-cream/80 hover:text-luxe-cream z-50">
            <X size={32} onClick={() => setLightbox(null)} />
          </button>
          
          <div className="relative max-w-5xl w-full flex items-center justify-center">
            <img
              src={allImages.find(img => img.id === lightbox)?.src}
              alt="Gallery Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute -bottom-8 left-0 text-luxe-cream/60 font-body text-sm">
              Image ID: {lightbox} | {allImages.find(img => img.id === lightbox)?.category}
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;