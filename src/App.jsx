import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Github, Linkedin, Mail, Download, Menu, X, Database, BarChart3, Layers3, CheckCircle2, MapPin } from "lucide-react";
import "./styles.css";

const CONTACT = {
  email: "immanuellaiyawe17@gmail.com",
  github: "https://github.com/erllarhrie",
  linkedin: "https://www.linkedin.com/in/immanuella-iyawe-008b9b151",
};
const work = [
  {
    index: "01",
    category: "PROSPECTING & PROGRAM ANALYTICS",
    title: "Making energy program targeting more precise",
    challenge: "Business teams needed a clearer way to prioritize eligible accounts across energy-efficiency programs.",
    approach: "Combined utility usage, program criteria, prospecting records and Salesforce context; applied eligibility checks and validated the final account lists.",
    outcome: "Delivered decision-ready prospecting lists and a more consistent path from raw accounts to prioritized outreach.",
    tags: ["Spark SQL", "Salesforce", "Excel", "Data Quality"],
    className: "work-plum",
    graphic: "target",
  },
  {
    index: "02",
    category: "DASHBOARDS & STAKEHOLDER REPORTING",
    title: "Turning complex reporting into a clear story",
    challenge: "Stakeholders needed a dependable view of activity, opportunity and performance across different utilities and reporting periods.",
    approach: "Built reporting logic and dashboards with consistent definitions, reusable datasets and clear breakdowns for business audiences.",
    outcome: "Made key trends easier to monitor, interpret and discuss with teams.",
    tags: ["AWS QuickSight", "Athena", "SQL", "KPIs"],
    className: "work-blue",
    graphic: "dashboard",
  },
  {
    index: "03",
    category: "DATA QUALITY & WORKFLOW DESIGN",
    title: "Building confidence in the underlying data",
    challenge: "Inconsistent identifiers, duplicate records and different source rules made analysis more difficult to trust.",
    approach: "Standardized business logic, reconciled joins, added validation checks and documented how metrics and classifications are produced.",
    outcome: "Created more explainable, repeatable analytics outputs for downstream reporting.",
    tags: ["PySpark", "SQL", "Data Modeling", "Documentation"],
    className: "work-gold",
    graphic: "quality",
  },
];

const capabilities = [
  { icon: BarChart3, label: "Visualize", title: "Business intelligence", text: "Dashboards, KPI storytelling and stakeholder-ready insights." },
  { icon: Database, label: "Analyze", title: "Data analysis", text: "SQL-driven exploration, reconciliation and data quality checks." },
  { icon: Layers3, label: "Build", title: "Analytics workflows", text: "Reusable reporting logic, clean datasets and metric definitions." },
];
const skillGroups = [
  { label: "QUERY & PROGRAMMING", items: ["SQL", "Spark SQL", "Python", "PySpark", "Pandas"] },
  { label: "BUSINESS INTELLIGENCE", items: ["AWS QuickSight", "Excel", "Power BI", "KPI Reporting"] },
  { label: "DATA & PLATFORMS", items: ["AWS Athena", "Salesforce", "Data Quality", "Data Modeling"] },
  { label: "WAYS OF WORKING", items: ["Stakeholder Communication", "Requirements", "Documentation", "Business Analysis"] },
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55, delay }}>{children}</motion.div>;
}
function SectionHeading({ number, eyebrow, title, description }) {
  return <div className="section-heading"><div className="section-kicker"><span>{number}</span>{eyebrow}</div><div className="heading-split"><h2>{title}</h2>{description && <p>{description}</p>}</div></div>;
}
function Graphic({ type }) {
  if (type === "dashboard") return <div className="visual-dashboard" aria-hidden="true"><div className="visual-top"><span>PERFORMANCE OVERVIEW</span><span>↗</span></div><div className="visual-bars">{[44,68,52,83,63,91,73].map((v,i)=><span key={i} style={{height:v+"%"}} />)}</div><div className="visual-axis"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div></div>;
  if (type === "quality") return <div className="visual-quality" aria-hidden="true"><span>DATA INTEGRITY</span><div className="visual-ring"><CheckCircle2 size={44} strokeWidth={1.4}/></div><div className="visual-lines"><i/><i/><i/></div></div>;
  return <div className="visual-target" aria-hidden="true"><div className="target-orbit orbit-one"/><div className="target-orbit orbit-two"/><div className="target-orbit orbit-three"/><span className="target-center">INSIGHT</span><span className="target-label">SIGNAL / 01</span></div>;
}
function Portrait() {
  const [error, setError] = useState(false);
  return <div className="portrait-frame">{!error && <img src="/portrait.jpg" alt="Portrait of Immanuella Iyawe" onError={() => setError(true)} />}{error && <div className="portrait-fallback" role="img" aria-label="Portrait placeholder until a professional photograph is added"><span>II</span><p>A human perspective on data.</p></div>}<div className="portrait-mark">ANALYST <span>·</span> STORYTELLER <span>·</span> BUILDER</div></div>;
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return <div className="site-shell">
    <header className="site-header"><div className="container nav-wrap"><a className="brand" href="#home" onClick={close} aria-label="Immanuella Iyawe home">Immanuella<span className="brand-sub">Iyawe</span></a><button className="mobile-toggle" onClick={() => setMenuOpen(v=>!v)} aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen}>{menuOpen?<X size={23}/>:<Menu size={23}/>}</button><nav className={menuOpen?"nav-links open":"nav-links"} aria-label="Main navigation"><a href="#about" onClick={close}>About</a><a href="#work" onClick={close}>Selected work</a><a href="#expertise" onClick={close}>Expertise</a><a href="#contact" onClick={close}>Contact</a><a className="nav-cta" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé <ArrowUpRight size={15}/></a></nav></div></header>
    <main>
      <section id="home" className="hero"><div className="container hero-layout"><Reveal className="hero-copy"><div className="hero-eyebrow"><span className="eyebrow-line"/> DATA ANALYST · OTTAWA, CANADA</div><h1>Data is complex.<br/><em>Clarity</em> shouldn't be.</h1><p className="hero-lead">Hi, I'm <strong>Immanuella Iyawe.</strong> I transform raw data into reliable reporting, thoughtful insights and decisions that move businesses forward.</p><div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={18}/></a><a className="text-link" href="#about">Get to know me <ArrowRight size={17}/></a></div><div className="hero-footnote"><span>SQL & ANALYTICS</span><span className="foot-separator"/> <span>BUSINESS INTELLIGENCE</span><span className="foot-separator"/><span>DATA QUALITY</span></div></Reveal><Reveal className="hero-visual" delay={0.1}><Portrait/><div className="floating-note"><span className="note-asterisk">✳</span><span>Where analytical thinking<br/>meets business impact.</span></div></Reveal></div><div className="hero-bottom-stripe"/></section>
      <section id="about" className="section about-section"><div className="container"><SectionHeading number="01" eyebrow="A LITTLE ABOUT ME" title={<>A curious mind.<br/><em>A practical approach.</em></>} description="Good analysis goes beyond the numbers. It's about asking better questions, finding the pattern, and making the answer useful."/><div className="about-content"><Reveal><p className="about-large">I'm a data analyst with a computer science background and <strong>4+ years of experience</strong> working at the intersection of data, reporting and business needs.</p></Reveal><Reveal className="about-details" delay={0.08}><p>My work spans energy analytics, prospect targeting, dashboard development, stakeholder reporting and data quality. I enjoy taking something complex and making it feel effortless for the people who rely on it.</p><p>I'm particularly drawn to teams that care about good questions, dependable metrics and data that supports real decisions. I continue to grow my skills in Python, SQL, data modeling and analytics engineering.</p><a className="underlined-link" href="#contact">Let's work together <ArrowUpRight size={17}/></a></Reveal></div><div className="about-metrics"><div><strong>4+</strong><span>YEARS IN ANALYTICS</span></div><div><strong>SQL</strong><span>CORE ANALYTICAL TOOL</span></div><div><strong>BI</strong><span>REPORTING & INSIGHTS</span></div></div></div></section>
      <section id="work" className="section work-section"><div className="container"><SectionHeading number="02" eyebrow="SELECTED WORK" title={<>Projects with <em>purpose.</em></>} description="A selection of the problems I've worked on, the methods behind my thinking and the value delivered. Client-sensitive details are intentionally kept high level."/><div className="work-grid">{work.map((item,i)=><Reveal key={item.index} className="work-card" delay={i*0.05}><div className={`work-visual ${item.className}`}><span className="work-number">{item.index} / 03</span><Graphic type={item.graphic}/></div><div className="work-body"><p className="work-category">{item.category}</p><h3>{item.title}</h3><div className="case-detail"><span>THE CHALLENGE</span><p>{item.challenge}</p></div><div className="case-detail"><span>MY APPROACH</span><p>{item.approach}</p></div><div className="case-outcome"><strong>THE VALUE</strong><p>{item.outcome}</p></div><div className="tags">{item.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></Reveal>)}</div><p className="work-disclaimer">Case studies are summarized to respect employer and client confidentiality. Visual illustrations are conceptual, not actual client dashboards.</p></div></section>
      <section id="expertise" className="section expertise-section"><div className="container"><SectionHeading number="03" eyebrow="WHAT I BRING" title={<>Technical depth.<br/><em>Human perspective.</em></>} description="From messy inputs to measurable business clarity, I connect the technical work to the people it serves."/><div className="capability-grid">{capabilities.map((c,i)=><Reveal key={c.title} className="capability" delay={i*.06}><div className="capability-icon"><c.icon size={24} strokeWidth={1.5}/></div><span className="capability-label">0{i+1} / {c.label}</span><h3>{c.title}</h3><p>{c.text}</p></Reveal>)}</div><div className="skills-panel"><div className="skills-heading"><span className="section-kicker">TOOLKIT</span><h3>Tools, technologies & strengths</h3></div><div className="skills-grid">{skillGroups.map(g=><div key={g.label} className="skill-group"><h4>{g.label}</h4><div className="skill-tags">{g.items.map(item=><span key={item}>{item}</span>)}</div></div>)}</div></div></div></section>
      <section id="contact" className="contact-section"><div className="container contact-layout"><div><div className="section-kicker contact-kicker"><span>04</span> LET'S CONNECT</div><h2>Let's make the<br/><em>data mean more.</em></h2><p>Looking for an analyst who can connect the dots between data, people and outcomes? I'd love to hear about it.</p><a href={`mailto:${CONTACT.email}`} className="button button-light">Start a conversation <ArrowUpRight size={19}/></a></div><div className="contact-links"><a href={`mailto:${CONTACT.email}`}><Mail size={20}/><span>Email me</span><ArrowUpRight size={18}/></a><a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20}/><span>LinkedIn</span><ArrowUpRight size={18}/></a><a href={CONTACT.github} target="_blank" rel="noopener noreferrer"><Github size={20}/><span>GitHub</span><ArrowUpRight size={18}/></a><a href="/resume.pdf" target="_blank" rel="noopener noreferrer"><Download size={20}/><span>View résumé</span><ArrowUpRight size={18}/></a></div></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-layout"><span>© {new Date().getFullYear()} Immanuella Iyawe</span><span>Curiosity · Clarity · Impact</span><a href="#home">Back to top ↑</a></div></footer>
  </div>;
}