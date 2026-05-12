import "./skills.css";
import { motion } from "framer-motion";

const Skills = () => {
  const skillGroups = [
    {
      title: "Mobile",
      skills: [
        "React Native (CLI)",
        "Flutter",
        "TypeScript",
        "JavaScript",
        "Dart",
      ],
    },
    {
      title: "State & Data",
      skills: ["Redux Toolkit", "React Query", "Context API"],
    },
    {
      title: "Backend & APIs",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Supabase",
        "REST APIs",
      ],
    },
    {
      title: "Integrations",
      skills: [
        "Pusher",
        "OneSignal",
        "Payment Gateways",
        "Deep Linking",
        "Cloudflare",
      ],
    },
    {
      title: "Infrastructure",
      skills: [
        "App Store Connect",
        "Google Play Console",
        "OTA Updates",
        "CI/CD",
      ],
    },
    {
      title: "Specialisations",
      skills: [
        "RTL/LTR Layouts",
        "BiDi Arabic/English Rendering",
        "Performance Optimization & Profiling",
        "Multilingual Apps",
      ],
    },
    {
      title: "Tooling",
      skills: ["Git & GitHub", "Postman", "Figma", "VS Code"],
    },
  ];

  const achievements = [
    { metric: "14+", label: "Live Apps Published", icon: "📱" },
    { metric: "3+", label: "Years Experience", icon: "⏳" },
    { metric: "10K+", label: "Total Downloads", icon: "📊" },
    { metric: "10", label: "Countries Active", icon: "🌍" },
    { metric: "4.5–5★", label: "Store Ratings", icon: "⭐" },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Technical Expertise & Achievements
        </motion.h2>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="achievements-grid"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <span className="achievement-icon">{achievement.icon}</span>
              <h3 className="achievement-metric">{achievement.metric}</h3>
              <p className="achievement-label">{achievement.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Skills Matrix */}
        <div className="skills-matrix">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.15 }}
              className="skill-category"
            >
              <h3 className="category-title">{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="certifications"
        >
          <h3 className="subsection-title">
            Professional Certifications & Training
          </h3>
          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-icon">🎓</div>
              <h4>React Native Specialist</h4>
              <p>Nile University - DPE Program</p>
              <span className="cert-year">2023</span>
            </div>
            <div className="cert-card">
              <div className="cert-icon">📱</div>
              <h4>Flutter Developer</h4>
              <p>Google Developer Student Clubs</p>
              <span className="cert-year">2023</span>
            </div>
            <div className="cert-card">
              <div className="cert-icon">🚀</div>
              <h4>Mobile App Publisher</h4>
              <p>14+ Apps on App Store & Google Play</p>
              <span className="cert-year">2024</span>
            </div>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="languages"
        >
          <h3 className="subsection-title">Languages</h3>
          <div className="lang-row">
            <span className="lang-item">🇦🇪 Arabic : Native</span>
            <span className="lang-item">🇬🇧 English : Professional</span>
            <span className="lang-item">🇩🇪 German : Learning</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
