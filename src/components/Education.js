import React, { useState } from 'react';
const EDU = [
  { deg:'B.E. Computer Science', school:'R.M.D Engineering College', year:'2019 — 2023' },
  { deg:'Senior Secondary (XII)', school:'Senthil Matriculation Hr Sec School', year:'2016 — 2017' },
];
export default function Education() {
  return (
    <section id="education" style={{ padding:'6rem 5%', background:'var(--dark3)' }}>
      <div style={{ maxWidth:1300, margin:'0 auto' }}>
        <SectionTag>06 — Academia</SectionTag>
        <h2 data-aos="fade-up" data-aos-delay="50" style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,4vw,4rem)', letterSpacing:'-0.02em', lineHeight:1.05, marginBottom:'3rem' }}>
          My <span style={{ color:'var(--blue)' }}>Education</span>
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1.5px', background:'rgba(0,154,221,0.06)' }}>
          {EDU.map((e,i) => <EduCard key={i} {...e} delay={i*120} />)}
        </div>
      </div>
    </section>
  );
}
function EduCard({ deg, school, year, delay }) {
  const [h, setH] = useState(false);
  return (
    <div data-aos="flip-left" data-aos-delay={delay} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{
      background: h?'rgba(0,154,221,0.07)':'var(--dark3)',
      padding:'2.5rem', position:'relative', overflow:'hidden',
      transform: h?'translateY(-5px)':'none', transition:'all 0.35s ease',
    }}>
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:2, background:'linear-gradient(90deg,var(--blue),var(--blue-light))', transform: h?'scaleX(1)':'scaleX(0)', transformOrigin: h?'left':'right', transition:'transform 0.4s ease' }}/>
      <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'1.2rem', marginBottom:'0.4rem', color:'var(--white)' }}>{deg}</div>
      <div style={{ fontSize:'0.88rem', color:'var(--blue)', fontStyle:'italic', marginBottom:'0.5rem' }}>{school}</div>
      <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.68rem', letterSpacing:'0.1em', color:'var(--gray)' }}>{year}</div>
    </div>
  );
}
function SectionTag({ children }) {
  return <div data-aos="fade-up" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--blue)', marginBottom:'0.8rem', display:'flex', alignItems:'center', gap:'0.7rem' }}>
    {children}<span style={{ width:40, height:1, background:'var(--blue)', opacity:0.4, display:'inline-block' }}/>
  </div>;
}
