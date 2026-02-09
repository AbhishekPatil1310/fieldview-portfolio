import { MapPin, Mail, Phone } from "lucide-react";
import profileImg from "@/assets/profile.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float-delayed" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 pt-20">
        {/* Profile image */}
        <div className="animate-slide-up">
          <div className="glass rounded-3xl p-2 w-56 h-56 md:w-72 md:h-72">
            <img
              src={profileImg}
              alt="Nikeel Patil"
              className="w-full h-full object-cover rounded-[1.25rem]"
            />
          </div>
        </div>

        {/* Hero text */}
        <div className="text-center md:text-left max-w-xl">
          <p className="animate-slide-up text-sm font-medium text-primary tracking-widest uppercase mb-2">
            Field Engineer
          </p>
          <h1 className="animate-slide-up-delay-1 font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Nikeel <span className="gradient-text">Patil</span>
          </h1>
          <p className="animate-slide-up-delay-2 text-lg text-muted-foreground mt-4 leading-relaxed">
            ANPR Camera Technician & IT Professional at{" "}
            <span className="font-semibold text-foreground">Stellarview</span>.
            Specializing in surveillance systems, network configuration, and field engineering.
          </p>

          <div className="animate-slide-up-delay-3 flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <span className="glass rounded-full px-4 py-2 text-sm flex items-center gap-2 text-muted-foreground">
              <MapPin size={14} className="text-primary" /> Pune, India
            </span>
            <a
              href="mailto:nikhil797505@gmail.com"
              className="glass rounded-full px-4 py-2 text-sm flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={14} className="text-primary" /> nikhil797505@gmail.com
            </a>
            <a
              href="tel:+917975053002"
              className="glass rounded-full px-4 py-2 text-sm flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone size={14} className="text-primary" /> +91 7975053002
            </a>
          </div>

          <div className="animate-slide-up-delay-4 mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="gradient-accent-bg text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="glass px-8 py-3 rounded-full font-medium text-foreground hover:bg-secondary transition-colors"
            >
              My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
