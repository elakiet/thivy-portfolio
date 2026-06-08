import React, { useEffect, useState } from 'react';
import heroImg from '../assets/thivy-hero.jpg';

const ROLES = ['Power Platform Developer','Power Automate Expert','Low-Code Automation Pro','Associate Consultant @ Flex'];

export default function Hero() {
  const [typed, setTyped] = useState('');
  const [ri, setRi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => { const id = setInterval(() => setBlink(b => !b), 500); return () => clearInterval(id); }, []);
  useEffect(() => {
    const cur = ROLES[ri];
    let t;
    if (!del) {
      if (ci < cur.length) { t = setTimeout(() => { setTyped(cur.slice(0, ci+1)); setCi(c=>c+1); }, 85); }
      else { t = setTimeout(() => setDel(true), 1800); }
    } else {
      if (ci > 0) { t = setTimeout(() => { setTyped(cur.slice(0, ci-1)); setCi(c=>c-1); }, 50); }
      else { setDel(false); setRi(r=>(r+1)%ROLES.length); }
    }
    return () => clearTimeout(t);
  }, [typed, ci, del, ri]);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' });

  return (
    <section id="hero" style={{
      position:'relative', minHeight:'100vh',
      background:'linear-gradient(135deg, var(--dark3) 0%, #0d1f2d 50%, var(--dark3) 100%)',
      display:'flex', alignItems:'center', overflow:'hidden',
      padding:'68px 5% 2rem',
    }}>
      {/* Grid bg */}
      <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(rgba(0,154,221,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,154,221,0.04) 1px, transparent 1px)`, backgroundSize:'60px 60px', pointerEvents:'none' }}/>
      {/* Glow orbs */}
      <div style={{ position:'absolute', top:'20%', right:'5%', width:'400px', height:'400px', background:'radial-gradient(circle, rgba(0,154,221,0.1) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none', animation:'heroPulse 4s ease-in-out infinite' }}/>
      <div style={{ position:'absolute', bottom:'10%', left:'5%', width:'250px', height:'250px', background:'radial-gradient(circle, rgba(142,209,252,0.06) 0%, transparent 70%)', borderRadius:'50%', pointerEvents:'none', animation:'heroPulse 6s ease-in-out infinite reverse' }}/>
      {/* BG watermark */}
      <div style={{ position:'absolute', bottom:'-0.05em', right:'-0.02em', fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(4rem,15vw,14rem)', color:'rgba(0,154,221,0.04)', letterSpacing:'0.02em', whiteSpace:'nowrap', lineHeight:1, pointerEvents:'none', userSelect:'none' }}>FLEX</div>

      {/* Main layout */}
      <div style={{
        position:'relative', zIndex:2,
        maxWidth:1300, margin:'0 auto', width:'100%',
        display:'grid', gridTemplateColumns:'1fr clamp(260px,32%,380px)',
        alignItems:'center', gap:'3rem',
      }} className="hero-grid">

        {/* LEFT */}
        <div>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'0.6rem', background:'rgba(0,154,221,0.1)', border:'1px solid rgba(0,154,221,0.25)', padding:'0.4rem 1rem', marginBottom:'2rem', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.68rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--blue-light)' }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--blue)', display:'inline-block', animation:'heroPulse 1.5s infinite' }}/>
            Available for Opportunities
          </div>

          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.7rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gray)', marginBottom:'1rem' }}>
            — Associate Consultant · Flex Ltd.
          </div>

          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2.5rem,6vw,6rem)', lineHeight:0.92, letterSpacing:'-0.02em', marginBottom:'1.5rem' }}>
            <span style={{ display:'block', color:'var(--white)' }}>THIVYANATH</span>
          </h1>

          <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'clamp(0.72rem,1.3vw,0.92rem)', color:'var(--blue-light)', letterSpacing:'0.06em', marginBottom:'2rem', minHeight:'1.5em' }}>
            {typed}<span style={{ opacity:blink?1:0, color:'var(--blue)', transition:'opacity 0.1s' }}>|</span>
          </div>

          <p style={{ fontSize:'0.93rem', lineHeight:1.85, color:'var(--gray)', maxWidth:500, marginBottom:'2.5rem' }}>
            Power Platform professional automating enterprise workflows at Flex Ltd. Specializing in Power Automate Desktop, Power Apps, and low-code solutions that transform operational efficiency.
          </p>

          <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
            <HBtn primary onClick={() => go('projects')}>View My Work</HBtn>
            <HBtn onClick={() => go('contact')}>Contact Me</HBtn>
          </div>

          {/* Stats */}
          <div style={{ display:'flex', gap:'2rem', marginTop:'3rem', paddingTop:'2rem', borderTop:'1px solid rgba(0,154,221,0.15)', flexWrap:'wrap' }}>
            {[['2+','Years at Flex'],['5×','Star Performer'],['6+','Automations'],['2×','Platinum Award']].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.8rem', color:'var(--blue)', lineHeight:1 }}>{n}</div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.58rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--gray)', marginTop:'0.3rem' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — photo + tech stack */}
        <div className="hero-right" style={{ display:'flex', flexDirection:'column', gap:'1rem', height:'100%' }}>
          {/* Photo */}
          <div style={{ position:'relative', flex:1, minHeight:0 }}>
            <img src={heroImg} alt="Thivyanath G" style={{
              width:'100%', height:'100%',
              display:'block',
              objectFit:'cover', objectPosition:'top center',
              minHeight:300, maxHeight:480,
              filter:'contrast(1.05) brightness(0.95)',
            }}/>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, transparent 55%, rgba(0,20,40,0.55))', pointerEvents:'none' }}/>
            {/* Star performer badge */}
            <div style={{ position:'absolute', bottom:'1rem', left:'-0.8rem', background:'var(--blue)', padding:'0.5rem 0.9rem', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.6rem', letterSpacing:'0.1em', textTransform:'uppercase' }}>
              <span style={{ fontSize:'1rem', fontWeight:700, color:'#fff', display:'block', fontFamily:"'Syne',sans-serif" }}>5×</span>
              Star Performer
            </div>
            {/* Flex badge */}
            <div style={{ position:'absolute', top:'0.8rem', right:'0.8rem', background:'rgba(0,154,221,0.88)', padding:'0.3rem 0.65rem', fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'0.62rem', letterSpacing:'0.1em' }}>
              FLEX LTD.
            </div>
          </div>

          {/* Tech stack */}
          <div style={{ background:'rgba(0,154,221,0.06)', border:'1px solid rgba(0,154,221,0.2)', padding:'1rem 1.2rem', backdropFilter:'blur(10px)' }}>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.56rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--blue)', marginBottom:'0.7rem' }}>Tech Stack</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'0.35rem' }}>
              {['Power Automate','Power Apps','IBM TRIRIGA','Snowflake','ServiceNow','SQL / Oracle','Linux','Red Prairie'].map(t => (
                <span key={t} style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'0.58rem', padding:'0.2rem 0.45rem', border:'1px solid rgba(0,154,221,0.2)', color:'var(--blue-light)', letterSpacing:'0.03em' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position:'absolute', bottom:'1.5rem', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'0.5rem', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.58rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)' }}>
        <span>Scroll</span>
        <div style={{ width:1, height:40, background:'linear-gradient(to bottom, var(--blue), transparent)' }}/>
      </div>

      <style>{`
        @keyframes heroPulse { 0%,100%{opacity:0.6} 50%{opacity:1} }
        @media(max-width:1024px){
          .hero-grid{ grid-template-columns:1fr!important; }
          .hero-right{ flex-direction:row!important; align-items:flex-start!important; gap:1rem!important; }
          .hero-right > div:first-child{ width:42%!important; flex-shrink:0; }
          .hero-right > div:last-child{ flex:1; }
        }
        @media(max-width:600px){
          .hero-right{ flex-direction:column!important; }
          .hero-right > div:first-child{ width:100%!important; }
        }
      `}</style>
    </section>
  );
}

function HBtn({ children, primary, onClick }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{
      background: primary ? (h?'#0080bb':'var(--blue)') : 'transparent',
      color:'#fff',
      border: primary ? 'none' : `1.5px solid ${h?'var(--blue)':'rgba(255,255,255,0.25)'}`,
      fontFamily:"'JetBrains Mono',monospace", fontSize:'0.72rem',
      letterSpacing:'0.12em', textTransform:'uppercase',
      padding:'0.85rem 2rem', cursor:'pointer',
      transform: h?'translateY(-3px)':'none',
      transition:'all 0.3s ease',
    }}>{children}</button>
  );
}