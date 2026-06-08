import React, { useState } from 'react';
const LINKS = [
  { label:'thivikittu@gmail.com', href:'mailto:thivikittu@gmail.com' },
  { label:'India, Tamil Nadu', href:'#' },
  { label:'linkedin.com/in/thivyanath', href:'https://linkedin.com' },
];
export default function Contact() {
  return (
    <section id="contact" style={{
      padding:'7rem 5%', position:'relative', overflow:'hidden',
      background:'linear-gradient(135deg, #0d1f2d 0%, var(--dark3) 50%, #061520 100%)',
    }}>
      {/* Grid bg */}
      <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(rgba(0,154,221,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,154,221,0.05) 1px, transparent 1px)`, backgroundSize:'60px 60px', pointerEvents:'none' }}/>
      {/* Glow */}
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:600, height:400, background:'radial-gradient(ellipse, rgba(0,154,221,0.08) 0%, transparent 70%)', pointerEvents:'none' }}/>
      {/* BG text */}
      <div style={{ position:'absolute', bottom:'-0.1em', left:'-0.02em', fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(4rem,18vw,14rem)', color:'rgba(0,154,221,0.04)', lineHeight:1, pointerEvents:'none', userSelect:'none' }}>CONNECT</div>

      <div style={{ maxWidth:1300, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', position:'relative', zIndex:1 }} className="contact-grid">
        <div data-aos="fade-right">
          <SectionTag>07 — Connect</SectionTag>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2.5rem,5vw,5.5rem)', lineHeight:0.95, letterSpacing:'-0.02em', color:'var(--white)', marginBottom:'1.5rem' }}>
            Let's<br/><span style={{ color:'var(--blue)' }}>Work</span><br/>Together
          </h2>
          <p style={{ color:'var(--gray)', lineHeight:1.8, marginBottom:'2rem', fontSize:'0.93rem' }}>
            Open to new opportunities in Power Platform development, enterprise automation, and production support roles. Let's build something impactful.
          </p>
          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            {LINKS.map(l => <CItem key={l.label} {...l} />)}
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="100" style={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
          <div style={{
            background:'rgba(0,154,221,0.06)', border:'1px solid rgba(0,154,221,0.2)',
            padding:'3rem', position:'relative', overflow:'hidden',
          }}>
            <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'linear-gradient(90deg,var(--blue),var(--blue-light))' }}/>
            <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(1.5rem,3vw,2.5rem)', lineHeight:1.2, color:'var(--white)', marginBottom:'1.5rem' }}>
              "Automating the <span style={{ color:'var(--blue)' }}>future</span>, one workflow at a time."
            </div>
            <p style={{ color:'var(--gray)', lineHeight:1.8, fontSize:'0.9rem', marginBottom:'2rem' }}>
              Currently working as Associate Consultant at Flex Ltd., India. 2+ years of enterprise automation experience across Power Platform and production support.
            </p>
            <DarkBtn href="mailto:thivikittu@gmail.com">Send a Message →</DarkBtn>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:1024px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
function CItem({ label, href }) {
  const [h, setH] = useState(false);
  return (
    <a href={href} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{ display:'flex', alignItems:'center', gap:'1rem', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.78rem', color: h?'var(--white)':'var(--gray)', padding:'0.9rem 0', borderBottom:'1px solid rgba(255,255,255,0.06)', transition:'color 0.3s' }}>
      <div style={{ width:8, height:8, background: h?'var(--blue)':'var(--gray2)', rotate:'45deg', flexShrink:0, transition:'background 0.3s' }}/>
      {label}
    </a>
  );
}
function DarkBtn({ children, href }) {
  const [h, setH] = useState(false);
  return <a href={href} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{ display:'inline-block', background: h?'var(--blue)':'transparent', border:'1.5px solid var(--blue)', color: h?'#fff':'var(--blue)', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.72rem', letterSpacing:'0.12em', textTransform:'uppercase', padding:'0.9rem 2.2rem', transform: h?'translateY(-3px)':'none', transition:'all 0.3s ease' }}>{children}</a>;
}
function SectionTag({ children }) {
  return <div data-aos="fade-up" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--blue)', marginBottom:'0.8rem', display:'flex', alignItems:'center', gap:'0.7rem' }}>
    {children}<span style={{ width:40, height:1, background:'var(--blue)', opacity:0.4, display:'inline-block' }}/>
  </div>;
}
