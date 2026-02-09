import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:nikhil797505@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Contact <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-8">
              <h3 className="font-display font-semibold text-foreground mb-6">Let's Connect</h3>
              <p className="text-sm text-muted-foreground mb-8">
                Available for field engineering projects, ANPR installations, and surveillance system consultations.
              </p>

              <div className="space-y-4">
                <a href="mailto:nikhil797505@gmail.com" className="flex items-center gap-4 group">
                  <div className="gradient-accent-bg w-10 h-10 rounded-xl flex items-center justify-center">
                    <Mail size={16} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">nikhil797505@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+917975053002" className="flex items-center gap-4 group">
                  <div className="gradient-accent-bg w-10 h-10 rounded-xl flex items-center justify-center">
                    <Phone size={16} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">+91 7975053002</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="gradient-accent-bg w-10 h-10 rounded-xl flex items-center justify-center">
                    <MapPin size={16} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm text-foreground">Handewadi, Pune 411028</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full gradient-accent-bg text-primary-foreground py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
