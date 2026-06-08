import React, { useState } from 'react';
const PROJECTS = [
  { num:'01', title:'Business Reporting Automation', desc:'Power Automate Desktop workflows automating report generation — seamless data extraction, formatting, and distribution to business users. Eliminated manual reporting effort entirely.', stack:['Power Automate Desktop','Excel','Email Automation'] },
  { num:'02', title:'TRIRIGA Access Management', desc:'Automated user access management workflows in IBM TRIRIGA. Improved security compliance, reduced manual errors, and accelerated provisioning processes across the organization.', stack:['Power Automate','IBM TRIRIGA','Security'] },
  { num:'03', title:'Employee Tracker App', desc:'Full Power App developed and deployed to centralize employee data, enhance visibility, and simplify reporting for leadership and operational teams at Flex.', stack:['Power Apps','Database','Low-Code'] },
  { num:'04', title:'App Health Monitor', desc:'Automated validation checking application health every 5 minutes. Monitors performance, identifies issues early, sends email alerts to owners, and logs results in a database for tracking.', stack:['Power Automate','Monitoring','SQL'] },
  { num:'05', title:'UserCount Tracker Dashboard', desc:'Dashboard pulling user count data from emails, databases, UI elements, and app front-ends. Stores data in database enabling business owners to eliminate manual usage tracking.', stack:['Power Apps','Power Automate','SQL','Multi-source'] },
  { num:'06', title:'Command Center Operations', desc:'Single Point of Contact for Atlas Warehouse Application — monitoring critical business apps, analyzing operational data, and presenting insights to application owners.', stack:['Command Center','Atlas','Monitoring','Reporting'] },
];
export default function Projects() {
  return (
    <section id="projects" style={{ padding:'6rem 5%', background:'var(--dark3)' }}>
      <div style={{ maxWidth:1300, margin:'0 auto' }}>
        <SectionTag>04 — Work</SectionTag>
        <h2 data-aos="fade-up" data-aos-delay="50" style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,4vw,4rem)', letterSpacing:'-0.02em', lineHeight:1.05, marginBottom:'3rem' }}>
          Key <span style={{ color:'var(--blue)' }}>Projects</span>
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'1px', background:'rgba(0,154,221,0.06)' }}>
          {PROJECTS.map((p,i) => <ProjCard key={p.num} {...p} delay={i%3*100} />)}
        </div>
      </div>
    </section>
  );
}
function ProjCard({ num, title, desc, stack, delay }) {
  const [h, setH] = useState(false);
  return (
    <div data-aos="fade-up" data-aos-delay={delay} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{
      background: h?'rgba(0,154,221,0.07)':'var(--dark3)',
      padding:'2.5rem', position:'relative', overflow:'hidden',
      transform: h?'translateY(-8px)':'none',
      boxShadow: h?'0 20px 60px rgba(0,0,0,0.5)':'none',
      borderBottom:`3px solid ${h?'var(--blue)':'transparent'}`,
      transition:'all 0.35s ease', cursor:'default',
    }}>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(0,154,221,0.04),transparent)', opacity:h?1:0, transition:'opacity 0.4s' }}/>
      <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'4rem', lineHeight:1, color: h?'rgba(0,154,221,0.2)':'rgba(0,154,221,0.08)', marginBottom:'0.8rem', transition:'color 0.3s' }}>{num}</div>
      <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'1.1rem', letterSpacing:'-0.01em', marginBottom:'0.8rem', color:'var(--white)' }}>{title}</div>
      <div style={{ color:'var(--gray)', fontSize:'0.85rem', lineHeight:1.8, marginBottom:'1.5rem' }}>{desc}</div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem' }}>
        {stack.map(s => <span key={s} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.62rem', padding:'0.25rem 0.6rem', border:'1px solid rgba(0,154,221,0.25)', color:'var(--blue-light)', letterSpacing:'0.06em', background: h?'rgba(0,154,221,0.08)':'transparent', transition:'background 0.25s' }}>{s}</span>)}
      </div>
    </div>
  );
}
function SectionTag({ children }) {
  return <div data-aos="fade-up" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--blue)', marginBottom:'0.8rem', display:'flex', alignItems:'center', gap:'0.7rem' }}>
    {children}<span style={{ width:40, height:1, background:'var(--blue)', opacity:0.4, display:'inline-block' }}/>
  </div>;
}
