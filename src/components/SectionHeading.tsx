import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, light }: Props) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="text-center mb-16">
      <h2
        className={`luxe-heading text-3xl md:text-5xl mb-4 text-balance transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        } ${light ? "text-luxe-cream" : "text-foreground"}`}
        style={{ lineHeight: "1.15" }}
      >
        {title}
      </h2>
      <div
        className={`luxe-divider my-6 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 w-16" : "opacity-0 w-0"
        } ${light ? "bg-luxe-cream" : ""}`}
      />
      {subtitle && (
        <p
          className={`font-body text-sm md:text-base tracking-wider max-w-2xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? "opacity-70 translate-y-0" : "opacity-0 translate-y-4"
          } ${light ? "text-luxe-cream" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
