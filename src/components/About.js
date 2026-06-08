import React from 'react';
import aboutImg from '../assets/thivy-about.jpg';

export default function About() {
  return (
    <section id="about" style={{ padding:'6rem 5%', background:'var(--dark2)' }}>
      <div style={{ maxWidth:1300, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }} className="about-grid">
        
        {/* Left — visual card */}
        <div data-aos="fade-right" style={{ position:'relative' }}>
  {/* Photo */}
  <div style={{ position:'relative', marginBottom:'1.5rem', overflow:'hidden' }}>
    <img src={aboutImg} alt="Thivyanath G" style={{
      width:'100%', display:'block',
      objectFit:'cover', objectPosition:'top center',
      aspectRatio:'4/5',
      filter:'contrast(1.05) brightness(0.95)',
    }}/>
    <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, transparent 65%, rgba(0,20,40,0.5))', pointerEvents:'none' }}/>
  </div>

  {/* Stats card below photo */}
  <div style={{
    background:'linear-gradient(135deg, rgba(0,154,221,0.08), rgba(142,209,252,0.04))',
    border:'1px solid rgba(0,154,221,0.2)',
    padding:'1.5rem 2rem',
    position:'relative', overflow:'hidden',
  }}>
    <div style={{ position:'absolute', top:0, left:0, width:40, height:40, borderRight:'1px solid var(--blue)', borderBottom:'1px solid var(--blue)', opacity:0.3 }}/>
    <div style={{ position:'absolute', bottom:0, right:0, width:40, height:40, borderLeft:'1px solid var(--blue)', borderTop:'1px solid var(--blue)', opacity:0.3 }}/>
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
      {[['🏆','Star Performer','Q1,Q2 FY25 · Q4 FY25 · Q1,Q2 FY26'],['💎','Platinum Award','2× Critical Incident Resolution'],['🎯','SPOC','Atlas Warehouse Application'],['⚡','Automation','6+ Enterprise Workflows']].map(([icon,title,sub]) => (
        <div key={title} style={{ background:'rgba(0,0,0,0.3)', padding:'0.8rem', border:'1px solid rgba(0,154,221,0.1)' }}>
          <div style={{ fontSize:'1rem', marginBottom:'0.3rem' }}>{icon}</div>
          <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:600, fontSize:'0.75rem', color:'var(--white)', marginBottom:'0.15rem' }}>{title}</div>
          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.55rem', color:'var(--gray)', letterSpacing:'0.04em' }}>{sub}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Flex badge */}
  <div style={{ position:'absolute', top:'-1rem', right:'-1rem', background:'var(--blue)', padding:'0.6rem 1rem', fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'0.75rem', letterSpacing:'0.1em' }}>
    FLEX LTD.
  </div>
</div>

        {/* Right — text */}
        <div data-aos="fade-left" data-aos-delay="100">
          <SectionTag>01 — About Me</SectionTag>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,4vw,4rem)', letterSpacing:'-0.02em', lineHeight:1.05, marginBottom:'1.5rem' }}>
            Power Platform <span style={{ color:'var(--blue)' }}>Professional</span>
          </h2>
          {[
            'Power Platform professional with hands-on experience developing and supporting Power Automate Desktop workflows and Power Apps to automate business processes at Flex Ltd.',
            'Experienced in automated report generation, user access management, and low-code application development to improve operational efficiency.',
            'Strong background in incident management, root-cause analysis, application monitoring, and production support across enterprise applications like IBM TRIRIGA, Red Prairie, and Atlas Billing Engine.'
          ].map((p,i) => (
            <p key={i} style={{ color:'var(--gray)', lineHeight:1.9, marginBottom:'1.2rem', fontSize:'0.93rem' }}>{p}</p>
          ))}
          <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap', marginTop:'2rem' }}>
            {[['Email →','mailto:thivikittu@gmail.com'],['LinkedIn →','https://linkedin.com']].map(([label,url]) => (
              <Pill key={label} href={url}>{label}</Pill>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:1024px){.about-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function SectionTag({ children }) {
  return <div data-aos="fade-up" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--blue)', marginBottom:'0.8rem', display:'flex', alignItems:'center', gap:'0.7rem' }}>
    {children}<span style={{ width:40, height:1, background:'var(--blue)', opacity:0.4, display:'inline-block' }}/>
  </div>;
}
function Pill({ children, href }) {
  const [h, setH] = React.useState(false);
  return <a href={href} target="_blank" rel="noreferrer" onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.7rem', letterSpacing:'0.1em', textTransform:'uppercase', padding:'0.6rem 1.2rem', border:`1px solid ${h?'var(--blue)':'rgba(255,255,255,0.1)'}`, color: h?'var(--blue)':'var(--gray)', transform: h?'translateY(-2px)':'none', transition:'all 0.3s ease', display:'inline-block' }}>{children}</a>;
}
