import React, { useState } from 'react';
const ITEMS = [
  { icon:'⭐', title:'Star Performer Award', sub:'Q1 FY25 · Q2 FY25 · Q4 FY25 · Q1 FY26 · Q2 FY26 — 5 consecutive recognitions', color:'#f5c518' },
  { icon:'💎', title:'Platinum Award ×2', sub:'For exceptional customer service and critical incident resolution at Flex Ltd.', color:'var(--blue-light)' },
  { icon:'🏆', title:'Customer Service Award', sub:'GIS — Q2 FY25 to Q3 FY25 for outstanding client-facing support', color:'var(--blue)' },
  { icon:'🎯', title:'SPOC — Atlas Warehouse', sub:'Designated Single Point of Contact responsible for analyzing and presenting operational data', color:'#7ee8a2' },
];
export default function Achievements() {
  return (
    <section id="achievements" style={{ padding:'6rem 5%', background:'var(--dark2)' }}>
      <div style={{ maxWidth:1300, margin:'0 auto' }}>
        <SectionTag>05 — Recognition</SectionTag>
        <h2 data-aos="fade-up" data-aos-delay="50" style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,4vw,4rem)', letterSpacing:'-0.02em', lineHeight:1.05, marginBottom:'3rem' }}>
          Awards & <span style={{ color:'var(--blue)' }}>Achievements</span>
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1.5rem' }}>
          {ITEMS.map((a,i) => <AchCard key={i} {...a} delay={i*100} />)}
        </div>
      </div>
    </section>
  );
}
function AchCard({ icon, title, sub, color, delay }) {
  const [h, setH] = useState(false);
  return (
    <div data-aos="fade-up" data-aos-delay={delay} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{
      background: h?'rgba(0,154,221,0.06)':'rgba(255,255,255,0.02)',
      border:`1px solid ${h?'rgba(0,154,221,0.3)':'rgba(255,255,255,0.06)'}`,
      borderTop:`3px solid ${color}`,
      padding:'2rem', transition:'all 0.35s ease',
      transform: h?'translateY(-5px)':'none',
    }}>
      <div style={{ fontSize:'2rem', marginBottom:'1rem' }}>{icon}</div>
      <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'1.05rem', color:'var(--white)', marginBottom:'0.5rem' }}>{title}</div>
      <div style={{ fontSize:'0.83rem', color:'var(--gray)', fontStyle:'italic', lineHeight:1.6 }}>{sub}</div>
    </div>
  );
}
function SectionTag({ children }) {
  return <div data-aos="fade-up" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--blue)', marginBottom:'0.8rem', display:'flex', alignItems:'center', gap:'0.7rem' }}>
    {children}<span style={{ width:40, height:1, background:'var(--blue)', opacity:0.4, display:'inline-block' }}/>
  </div>;
}
