import React, { useState } from 'react';
const JOBS = [
  {
    period:'03/2025 — Present', role:'Associate Consultant', company:'Flex Ltd.',
    tags:['Power Automate','Power Apps','IBM TRIRIGA','Low-Code'],
    bullets:[
      'Designed Power Automate Desktop workflows for intelligent business reporting — automated data extraction, formatting & distribution.',
      'Implemented automated user access management in IBM TRIRIGA, improving security compliance and reducing manual errors.',
      'Developed Employee Tracker Power App to centralize employee data and simplify reporting for leadership.',
      'Built Application Validation & Alert Automation checking app health every 5 minutes with email alerts to owners.',
      'Created UserCount Tracker dashboard pulling data from emails, databases, UI elements, and front-end screens.',
      'Monitored critical apps through Command Center operations as SPOC for the Atlas Warehouse Application.',
    ]
  },
  {
    period:'07/2023 — 03/2025', role:'System Analyst', company:'Flex Ltd.',
    tags:['ServiceNow','SQL','Dynatrace','Production Support'],
    bullets:[
      '24/7 production support for IBM TRIRIGA, Red Prairie, Atlas Billing Engine, and eFreight.',
      'Daily health checks and application/database performance monitoring using Dynatrace and UMF.',
      'Investigated production issues by analyzing logs, validating data, and identifying workflow failures.',
      'Executed SQL queries for data validation, troubleshooting, and issue resolution.',
      'Managed P1–P4 incidents in ServiceNow ensuring timely resolution and SLA compliance.',
    ]
  },
];
export default function Experience() {
  const [active, setActive] = useState(0);
  return (
    <section id="experience" style={{ padding:'6rem 5%', background:'var(--dark2)' }}>
      <div style={{ maxWidth:1300, margin:'0 auto' }}>
        <SectionTag>03 — Career</SectionTag>
        <h2 data-aos="fade-up" data-aos-delay="50" style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,4vw,4rem)', letterSpacing:'-0.02em', lineHeight:1.05, marginBottom:'3rem' }}>
          Work <span style={{ color:'var(--blue)' }}>Experience</span>
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'280px 1fr', gap:'2rem' }} className="exp-grid">
          {/* Tabs */}
          <div style={{ display:'flex', flexDirection:'column', gap:'2px' }}>
            {JOBS.map((j,i) => (
              <button key={i} onClick={()=>setActive(i)} style={{
                background: active===i ? 'rgba(0,154,221,0.1)' : 'transparent',
                border:'none', borderLeft:`3px solid ${active===i?'var(--blue)':'rgba(255,255,255,0.06)'}`,
                padding:'1.2rem 1.5rem', cursor:'pointer', textAlign:'left',
                transition:'all 0.3s',
              }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'0.9rem', color: active===i?'var(--white)':'var(--gray)', marginBottom:'0.3rem', transition:'color 0.3s' }}>{j.role}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.62rem', letterSpacing:'0.1em', color: active===i?'var(--blue)':'var(--gray2)', textTransform:'uppercase', transition:'color 0.3s' }}>{j.period}</div>
              </button>
            ))}
          </div>
          {/* Content */}
          <div data-aos="fade-left" style={{ background:'rgba(0,154,221,0.04)', border:'1px solid rgba(0,154,221,0.12)', padding:'2rem' }}>
            <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', flexWrap:'wrap', gap:'1rem', marginBottom:'1.5rem' }}>
              <div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.5rem', color:'var(--white)', marginBottom:'0.3rem' }}>{JOBS[active].role}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.7rem', color:'var(--blue)', letterSpacing:'0.1em' }}>{JOBS[active].company} · {JOBS[active].period}</div>
              </div>
              <div style={{ display:'flex', gap:'0.4rem', flexWrap:'wrap' }}>
                {JOBS[active].tags.map(t => <span key={t} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.6rem', padding:'0.25rem 0.6rem', border:'1px solid rgba(0,154,221,0.3)', color:'var(--blue-light)', letterSpacing:'0.06em' }}>{t}</span>)}
              </div>
            </div>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.8rem' }}>
              {JOBS[active].bullets.map((b,i) => (
                <li key={i} style={{ display:'flex', gap:'0.8rem', fontSize:'0.88rem', color:'var(--gray)', lineHeight:1.7 }}>
                  <span style={{ color:'var(--blue)', flexShrink:0, marginTop:'0.15rem' }}>▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.exp-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
function SectionTag({ children }) {
  return <div data-aos="fade-up" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--blue)', marginBottom:'0.8rem', display:'flex', alignItems:'center', gap:'0.7rem' }}>
    {children}<span style={{ width:40, height:1, background:'var(--blue)', opacity:0.4, display:'inline-block' }}/>
  </div>;
}
