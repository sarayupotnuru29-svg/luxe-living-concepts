import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X } from "lucide-react";

// Import real images
import p1 from "@/assets/images/projects/project-1.jpg";
import p2 from "@/assets/images/projects/project-2.jpg";
import p3 from "@/assets/images/projects/project-3.jpg";
import p4 from "@/assets/images/projects/project-4.jpg";
import p5 from "@/assets/images/projects/project-5.jpg";
import p6 from "@/assets/images/projects/project-6.jpg";
import p7 from "@/assets/images/projects/project-7.jpg";
import p8 from "@/assets/images/projects/project-8.jpg";
import p9 from "@/assets/images/projects/project-9.jpg";
import p10 from "@/assets/images/projects/project-10.jpg";
import p11 from "@/assets/images/projects/project-11.jpg";
import p12 from "@/assets/images/projects/project-12.jpg";

const realImages = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

// Generate 78 images by cycling through available images
const allImages = Array.from({ length: 78 }, (_, i) => ({
  src: realImages[i % realImages.length],
  alt: `Interior design project ${i + 1}`,
  id: i + 1,
}));

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const grid = useScrollReveal(0.1);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-accent">
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-6xl text-luxe-cream tracking-[0.15em]" style={{ lineHeight: "1.1" }}>
            Our Projects
          </h1>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-luxe-cream/60 mt-4">
            78 Completed Designs
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="luxe-section bg-luxe-cream">
        <div className="container mx-auto">
          <SectionHeading title="Project Gallery" subtitle="Every space has a story — here are ours" />
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
                style={{ transitionDelay: `${Math.min(i * 30, 600)}ms` }}
                onClick={() => setLightbox(i)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-accent/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-luxe-cream/80 hover:text-luxe-cream transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={allImages[lightbox].src}
            alt={allImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
};

export default Gallery;
