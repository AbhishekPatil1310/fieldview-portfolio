import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "2025 - Present",
    company: "Stellarview",
    role: "ANPR Camera Technician / Field Engineer",
    points: [
      "ANPR camera installation, configuration and commissioning",
      "Entry/Exit gate ANPR setup, IP rated box, adaptor, UPS wiring and power management",
      "Camera IP configuration, network ping testing, dashboard connectivity and troubleshooting",
      "Device firmware/software updates to latest versions",
      "Boom barrier, relay module and indication light integration",
      "Site visits, testing, client coordination and daily work report handling",
    ],
  },
  {
    period: "2024 - 2025",
    company: "Glaza Systems",
    role: "Surveillance Camera Technician",
    points: [
      "Installing, configuring, and maintaining surveillance camera systems",
      "Optimal camera placement, wiring, and system troubleshooting",
      "Handling IP and analog CCTV systems",
      "Customer service and technical support",
    ],
  },
  {
    period: "2022 - 2023",
    company: "Smart Vision",
    role: "IT Technician & Marketing Specialist",
    points: [
      "Resource allocation for sales and camera installation projects",
      "Analysis of emerging trends in security cameras and surveillance technology",
      "Customer needs identification and competitor strategy analysis",
      "Security camera installation with optimized network connectivity",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Career</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="glass rounded-3xl p-8 hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="gradient-accent-bg w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Briefcase size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium text-primary tracking-wider uppercase">{exp.period}</p>
                  <h3 className="font-display text-xl font-bold text-foreground">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">{exp.role}</p>
                </div>
              </div>
              <ul className="space-y-2 ml-14">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
