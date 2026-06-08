import React, { useState, useEffect } from 'react';
const LINKS = ['Home','About','Skills','Experience','Projects','Contact'];
const IDS   = { Home:'hero', About:'about', Skills:'skills', Experience:'experience', Projects:'projects', Contact:'contact' };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }); setOpen(false); };

  return (
    <>
      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:500,
        padding:'0 5%', height:68,
        display:'flex', alignItems:'center', justifyContent:'space-between',
        background: scrolled ? 'rgba(17,17,17,0.97)' : 'rgba(17,17,17,0.8)',
        backdropFilter:'blur(20px)',
        borderBottom:`1px solid ${scrolled ? 'rgba(0,154,221,0.3)' : 'rgba(0,154,221,0.1)'}`,
        transition:'all 0.35s ease',
      }}>
        <div onClick={() => go('hero')} style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'1.4rem', letterSpacing:'0.06em', color:'var(--white)', cursor:'pointer' }}>
          T<span style={{ color:'var(--blue)' }}>.</span>G
        </div>
        <ul style={{ display:'flex', gap:'2rem', listStyle:'none' }} className="nav-desktop">
          {LINKS.map(l => <NavItem key={l} label={l} onClick={() => go(IDS[l])} />)}
        </ul>
        <button onClick={() => go('contact')} className="nav-hire" style={{
          background:'var(--blue)', color:'#fff', border:'none', cursor:'pointer',
          fontFamily:"'JetBrains Mono',monospace", fontSize:'0.7rem', letterSpacing:'0.1em',
          textTransform:'uppercase', padding:'0.55rem 1.4rem', transition:'all 0.3s',
        }}>Hire Me</button>
        <div className="hamburger" onClick={() => setOpen(!open)} style={{ display:'none', flexDirection:'column', gap:5, cursor:'pointer', padding:5 }}>
          {[0,1,2].map(i => <span key={i} style={{ display:'block', width:24, height:2, background:'var(--white)', transition:'all 0.3s',
            transform: open ? (i===0?'translateY(7px) rotate(45deg)':i===2?'translateY(-7px) rotate(-45deg)':'none'):'none',
            opacity: open&&i===1?0:1 }} />)}
        </div>
      </nav>
      <div className="mobile-menu" style={{
        position:'fixed', top:68, left:0, right:0, zIndex:499,
        background:'rgba(17,17,17,0.98)', backdropFilter:'blur(20px)',
        padding:'2rem 5%', flexDirection:'column', gap:'1.2rem',
        borderBottom:'1px solid rgba(0,154,221,0.2)',
        transform: open ? 'translateY(0)' : 'translateY(-110%)',
        transition:'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        {LINKS.map(l => (
          <button key={l} onClick={() => go(IDS[l])} style={{
            background:'none', border:'none', cursor:'pointer',
            fontFamily:"'JetBrains Mono',monospace", fontSize:'0.9rem',
            letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--gray)',
            padding:'0.5rem 0', borderBottom:'1px solid rgba(255,255,255,0.05)',
            textAlign:'left', transition:'color 0.3s',
          }}
          onMouseEnter={e=>e.target.style.color='var(--blue)'}
          onMouseLeave={e=>e.target.style.color='var(--gray)'}>{l}</button>
        ))}
      </div>
      <style>{`
        @media(max-width:768px){ .nav-desktop{display:none!important} .nav-hire{display:none!important} .hamburger{display:flex!important} .mobile-menu{display:flex!important} }
        @media(min-width:769px){ .mobile-menu{display:none!important} }
      `}</style>
    </>
  );
}

function NavItem({ label, onClick }) {
  const [h, setH] = useState(false);
  return (
    <li><button onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{
      background:'none', border:'none', cursor:'pointer',
      fontFamily:"'JetBrains Mono',monospace", fontSize:'0.72rem',
      letterSpacing:'0.12em', textTransform:'uppercase',
      color: h ? 'var(--white)' : 'var(--gray)',
      transition:'color 0.3s', position:'relative', padding:'4px 0',
    }}>
      {label}
      <span style={{ position:'absolute', bottom:0, left:0, right:0, height:'1.5px', background:'var(--blue)', transform: h?'scaleX(1)':'scaleX(0)', transformOrigin: h?'left':'right', transition:'transform 0.3s ease', display:'block' }} />
    </button></li>
  );
}
