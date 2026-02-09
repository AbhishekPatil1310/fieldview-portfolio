const technicalSkills = [
  { name: "ANPR Camera Systems", level: 90 },
  { name: "Network Configuration", level: 85 },
  { name: "CCTV (IP & Analog)", level: 90 },
  { name: "Boom Barrier Integration", level: 80 },
  { name: "Firmware Updates", level: 85 },
  { name: "Troubleshooting", level: 90 },
];

const softSkills = [
  "Project Management",
  "Client Coordination",
  "Teamwork",
  "Time Management",
  "Leadership",
  "Effective Communication",
  "Critical Thinking",
  "Problem Solving",
];

const languages = [
  { name: "Marathi", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
  { name: "English", level: "Intermediate" },
  { name: "Kannada", level: "Intermediate" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-2">Expertise</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Skills & <span className="gradient-text">Languages</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div className="lg:col-span-2 glass rounded-3xl p-8">
            <h3 className="font-display font-semibold text-foreground mb-6">Technical Skills</h3>
            <div className="space-y-5">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full gradient-accent-bg transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {/* Languages */}
            <div className="glass rounded-3xl p-8">
              <h3 className="font-display font-semibold text-foreground mb-4">Languages</h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center">
                    <span className="text-sm text-foreground">{lang.name}</span>
                    <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="glass rounded-3xl p-8">
              <h3 className="font-display font-semibold text-foreground mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
