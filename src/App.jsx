import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ExternalLink,
  FileText,
  ArrowRight,
  BarChart3,
  Database,
  Workflow,
  Briefcase,
  Award,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "Energy Program Client Targeting Analysis",
    description:
      "Expanded analysis and delivery of potential client lists based on verified energy consumption thresholds for VCx, vSEM, and VCxL programs, helping stakeholders focus prospecting on the most relevant opportunities.",
    stack: ["SQL", "Excel", "AWS QuickSight", "Salesforce"],
    impact:
      "Improved targeting by translating raw energy and program data into practical prospecting lists for business teams.",
  },
  {
    title: "Stakeholder Reporting in Excel & QuickSight",
    description:
      "Built and delivered recurring analyses for stakeholders using Excel and AWS QuickSight, supporting clearer visibility into program opportunities, data trends, and reporting needs.",
    stack: ["AWS QuickSight", "Excel", "SQL"],
    impact:
      "Made analysis easier to consume for business teams through more structured reporting and clearer data presentation.",
  },
  {
    title: "Data Quality & Prospecting Workflow Support",
    description:
      "Performed data cleaning, table joins, validation checks, and reporting support to improve consistency across prospecting workflows and internal reporting datasets.",
    stack: ["SQL", "Excel", "Data Quality", "Jira"],
    impact:
      "Increased trust in reporting outputs by reducing inconsistencies and improving the quality of underlying data used by teams.",
  },
];

const services = [
  {
    title: "Dashboard & Reporting Support",
    text: "Build or improve dashboards that help teams track KPIs, trends, and business performance with more clarity.",
    icon: <BarChart3 size={20} />,
  },
  {
    title: "SQL & Data Analysis",
    text: "Query, clean, and analyze data to answer business questions, uncover trends, and support better decisions.",
    icon: <Database size={20} />,
  },
  {
    title: "Analytics Workflow Improvement",
    text: "Help organize reporting logic, define cleaner metrics, and improve repeatable data workflows for teams.",
    icon: <Workflow size={20} />,
  },
];

const skills = [
  "SQL",
  "Python",
  "AWS QuickSight",
  "Excel",
  "Data Cleaning",
  "Dashboarding",
  "Reporting Automation",
  "Stakeholder Communication",
  "Business Analysis",
  "Data Quality",
];

export default function App() {
  return (
    <div>
      <section className="hero section">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="stack"
          >
            <div className="badge">
              Data Analyst | SQL, Excel, AWS QuickSight | Growing into Analytics Engineering
            </div>

            <div className="stack">
              <h1>
                I help teams turn messy data into clear insights, reliable reporting, and better decisions.
              </h1>
              <p style={{ fontSize: "1.1rem" }}>
                I’m Immanuella Iyawe, a data analyst with 4 years of experience across reporting,
                stakeholder analysis, data quality, and business-facing data work. I’m currently
                deepening my skills in SQL, Python, and data modeling while building toward analytics engineering.
              </p>
            </div>

            <div className="buttons">
              <a href="#work" className="btn btn-primary">
                View My Work <ArrowRight size={16} />
              </a>
              <a href="/resume.pdf" className="btn btn-secondary" target="_blank" rel="noreferrer">
                Download Resume <FileText size={16} />
              </a>
            </div>

            <div className="contact-row">
              <a href="mailto:immanuellaiyawe17@gmail.com" className="btn btn-secondary">
                <Mail size={16} /> immanuellaiyawe17@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/immanuella-iyawe-008b9b151"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/erllarhrie"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="card">
              <div className="stack">
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div className="soft-box" style={{ padding: 12 }}>
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <p className="mini-label">Current focus</p>
                    <h3>Positioning for higher-impact data roles</h3>
                  </div>
                </div>

                <div className="mini-grid">
                  <MiniStat label="Experience" value="4 years" />
                  <MiniStat label="Core strengths" value="SQL, stakeholder reporting, data quality" />
                  <MiniStat label="Growth path" value="Analytics engineering" />
                  <MiniStat label="Open to" value="Freelance, volunteer, full-time" />
                </div>

                <div className="soft-box">
                  I’m building a portfolio that reflects not just reporting ability, but stronger ownership
                  over data workflows, metric clarity, and decision-ready datasets.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="stack">
            <div className="eyebrow">About</div>
            <h2>
              A practical analyst with strong business context, reporting experience, and growing technical depth.
            </h2>
          </div>

          <div className="stack">
            <p>
              My background is in computer science, and over the last 4 years I’ve built experience in data
              analysis, stakeholder-facing reporting, prospecting support, and transforming raw information into
              insights teams can actually use.
            </p>
            <p>
              I’m especially interested in work that improves reporting quality, metric consistency, stakeholder
              visibility, and the overall reliability of business data. As I continue sharpening my Python and SQL
              foundation, I’m building toward roles that sit closer to analytics engineering and modern data workflows.
            </p>
            <p>
              Outside of full-time work, I’m open to volunteer and freelance opportunities that let me contribute to
              real projects, expand my portfolio, and solve practical data problems for teams and organizations.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="section section-soft">
        <div className="container">
          <div className="stack" style={{ marginBottom: 28 }}>
            <div className="eyebrow">Selected Work</div>
            <h2>Projects that show how I think and work with data.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="card project-card">
                  <div className="stack">
                    <div className="stack" style={{ gap: 12 }}>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>

                    <div className="chip-wrap">
                      {project.stack.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="project-impact">
                      <strong style={{ color: "#0f172a" }}>Impact:</strong> {project.impact}
                    </div>

                    <div className="project-link">
                      Case study coming soon <ExternalLink size={16} style={{ verticalAlign: "middle" }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stack" style={{ maxWidth: 760, marginBottom: 28 }}>
            <div className="eyebrow">How I Can Help</div>
            <h2>Available for practical data support on the side.</h2>
            <p style={{ fontSize: "1.05rem" }}>
              I’m open to selected freelance, volunteer, and project-based opportunities where I can support
              reporting, analysis, dashboarding, prospect targeting, and workflow improvement.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.title} className="card service-card">
                <div className="stack">
                  <div className="soft-box" style={{ display: "inline-flex", width: "fit-content", padding: 12 }}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container skills-grid">
          <div className="stack">
            <div className="eyebrow">Skills</div>
            <h2>Tools and strengths I use in my work.</h2>
          </div>

          <div className="chip-wrap">
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <div className="cta-grid">
              <div className="stack">
                <div className="eyebrow">Let’s Connect</div>
                <h2>
                  Looking for a data analyst who can support reporting, analysis, and data-driven business decisions?
                </h2>
                <p style={{ fontSize: "1.05rem", maxWidth: 760 }}>
                  I’m open to full-time opportunities, freelance projects, and volunteer work where I can contribute
                  to meaningful data problems, support stakeholders more effectively, and continue building at the next level.
                </p>
              </div>

              <div className="buttons">
                <a href="mailto:immanuellaiyawe17@gmail.com" className="btn btn-primary">
                  Email Me <Mail size={16} />
                </a>
                <a href="/resumepdf" className="btn btn-secondary" target="_blank" rel="noreferrer">
                  View Resume <Briefcase size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-row">
          <p style={{ fontSize: 14 }}>
            © 2026 Immanuella Iyawe. Built to support career growth, credibility, and stronger data opportunities.
          </p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/immanuella-iyawe-008b9b151" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/erllarhrie" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Award size={14} /> Portfolio
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="mini-stat">
      <div className="mini-label">{label}</div>
      <div className="mini-value">{value}</div>
    </div>
  );
}