import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const form = useScrollReveal();
  const addresses = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-accent">
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-6xl text-luxe-cream tracking-[0.15em]" style={{ lineHeight: "1.1" }}>
            Contact Us
          </h1>
          <p className="font-body text-sm tracking-[0.2em] uppercase text-luxe-cream/60 mt-4">
            Let's create something beautiful together
          </p>
        </div>
      </section>

      {/* Form + Details */}
      <section className="luxe-section bg-luxe-cream">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <div ref={form.ref} className={`transition-all duration-700 ${form.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="font-heading text-2xl md:text-3xl mb-8 text-foreground" style={{ lineHeight: "1.2" }}>
                Send Us a Message
              </h2>
              {submitted && (
                <div className="mb-6 p-4 bg-primary/10 rounded-sm font-body text-sm text-foreground">
                  Thank you! We'll get back to you shortly.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: "name", label: "Full Name", type: "text" },
                  { name: "email", label: "Email Address", type: "email" },
                  { name: "phone", label: "Phone Number", type: "tel" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      required
                      value={formData[f.name as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [f.name]: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="luxe-btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact details */}
            <div ref={addresses.ref} className={`transition-all duration-700 delay-200 ${addresses.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="font-heading text-2xl md:text-3xl mb-8 text-foreground" style={{ lineHeight: "1.2" }}>
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone size={16} className="text-primary" />
                    <span className="font-body text-sm font-medium text-foreground">Phone</span>
                  </div>
                  <a href="tel:+919000633655" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 9000633655
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Mail size={16} className="text-primary" />
                    <span className="font-body text-sm font-medium text-foreground">Email</span>
                  </div>
                  <a href="mailto:luxelivingconcepts2299@gmail.com" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                    luxelivingconcepts2299@gmail.com
                  </a>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Instagram size={16} className="text-primary" />
                    <span className="font-body text-sm font-medium text-foreground">Instagram</span>
                  </div>
                  <a
                    href="https://www.instagram.com/luxeliving_concepts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    @luxeliving_concepts
                  </a>
                </div>

                {/* Addresses */}
                <div className="pt-4 space-y-6">
                  {[
                    { title: "Corporate Office", addr: "Hyderabad, Telangana" },
                    { title: "Office Address", addr: "Vijayawada, Andhra Pradesh" },
                    { title: "Factory Address", addr: "Vizag, Andhra Pradesh" },
                  ].map((a) => (
                    <div key={a.title}>
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin size={16} className="text-primary" />
                        <span className="font-body text-sm font-medium text-foreground">{a.title}</span>
                      </div>
                      <p className="font-body text-sm text-muted-foreground">{a.addr}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3170753!2d78.24323005!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Luxe Living Concepts Location"
        />
      </section>
    </main>
  );
};

export default Contact;
