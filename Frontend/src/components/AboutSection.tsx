import { Camera, Wifi, Settings, Shield } from "lucide-react";

const highlights = [
  { icon: Camera, title: "ANPR Systems", desc: "Installation & commissioning of Automatic Number Plate Recognition cameras" },
  { icon: Wifi, title: "Network Config", desc: "IP configuration, ping testing, dashboard connectivity & troubleshooting" },
  { icon: Settings, title: "Hardware Integration", desc: "Boom barrier, relay module & indication light integration" },
  { icon: Shield, title: "System Maintenance", desc: "Firmware updates, offline/online issue resolution & log verification" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">About Me</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What I <span className="gradient-text">Do</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="glass rounded-3xl p-8">
            <p className="text-muted-foreground leading-relaxed">
              I am an IT Technician and Field Engineer with expertise in ANPR camera systems, 
              surveillance technology, and network management. I specialize in on-site installation, 
              configuration, and troubleshooting of security systems. With strong problem-solving 
              skills and hands-on field experience, I ensure smooth IT operations and optimal 
              system performance for clients across various sites.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`glass rounded-2xl p-6 hover:scale-[1.03] transition-transform duration-300 animate-slide-up-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="gradient-accent-bg w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <item.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
