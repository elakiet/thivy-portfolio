import React, { useState } from 'react';
const SKILLS = [
  { num:'01', cat:'Power Platform', tags:['Power Automate Desktop','Power Apps','Power Automate Cloud','Low-Code Dev'] },
  { num:'02', cat:'Enterprise Apps', tags:['IBM TRIRIGA','Red Prairie','Atlas Billing Engine','eFreight','Command Center'] },
  { num:'03', cat:'Data & Database', tags:['SQL','Oracle','Snowflake','Data Validation','Log Analysis'] },
  { num:'04', cat:'DevOps & Tools', tags:['ServiceNow','Confluence','FlexPM','FileZilla (SFTP)','Dynatrace','UMF'] },
  { num:'05', cat:'OS & Infra', tags:['Linux / Unix','Application Monitoring','Production Support','Health Checks'] },
  { num:'06', cat:'Soft Skills', tags:['Incident Management','Root Cause Analysis','Business Requirements','Technical Docs','SPOC'] },
];
export default function Skills() {
  return (
    <section id="skills" style={{ padding:'6rem 5%', background:'var(--dark3)' }}>
      <div style={{ maxWidth:1300, margin:'0 auto' }}>
        <SectionTag>02 — Capabilities</SectionTag>
        <h2 data-aos="fade-up" data-aos-delay="50" style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,4vw,4rem)', letterSpacing:'-0.02em', lineHeight:1.05, marginBottom:'3rem' }}>
          Technical <span style={{ color:'var(--blue)' }}>Skills</span>
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'1px', background:'rgba(0,154,221,0.08)' }}>
          {SKILLS.map((s,i) => <SkillCard key={s.num} {...s} delay={i%3*80} />)}
        </div>
      </div>
    </section>
  );
}
function SkillCard({ num, cat, tags, delay }) {
  const [h, setH] = useState(false);
  return (
    <div data-aos="fade-up" data-aos-delay={delay} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{
      background: h ? 'rgba(0,154,221,0.08)' : 'var(--dark3)',
      padding:'2rem', position:'relative', overflow:'hidden',
      transform: h?'translateY(-5px)':'none',
      transition:'all 0.35s ease', cursor:'default',
    }}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:'linear-gradient(90deg,var(--blue),var(--blue-light))', transform: h?'scaleX(1)':'scaleX(0)', transformOrigin:'left', transition:'transform 0.4s ease' }}/>
      <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'3rem', color: h?'rgba(0,154,221,0.2)':'rgba(0,154,221,0.07)', lineHeight:1, marginBottom:'0.5rem', transition:'color 0.3s' }}>{num}</div>
      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.6rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--blue)', marginBottom:'1rem' }}>{cat}</div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
        {tags.map(t => <span key={t} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.68rem', padding:'0.3rem 0.7rem', background: h?'rgba(0,154,221,0.08)':'rgba(255,255,255,0.03)', border:`1px solid ${h?'rgba(0,154,221,0.3)':'rgba(255,255,255,0.07)'}`, color:'var(--white)', letterSpacing:'0.04em', transition:'all 0.25s' }}>{t}</span>)}
      </div>
    </div>
  );
}
function SectionTag({ children }) {
  return <div data-aos="fade-up" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--blue)', marginBottom:'0.8rem', display:'flex', alignItems:'center', gap:'0.7rem' }}>
    {children}<span style={{ width:40, height:1, background:'var(--blue)', opacity:0.4, display:'inline-block' }}/>
  </div>;
}
