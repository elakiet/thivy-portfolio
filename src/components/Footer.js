import React from 'react';
export default function Footer() {
  return (
    <footer style={{ background:'var(--dark3)', padding:'2rem 5%', display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid rgba(0,154,221,0.12)', fontFamily:"'JetBrains Mono',monospace", fontSize:'0.68rem', letterSpacing:'0.08em', color:'var(--gray2)', flexWrap:'wrap', gap:'1rem' }}>
      <span style={{ color:'var(--blue)' }}>Thivyanath G</span>
      <span style={{ display:'flex', alignItems:'center', gap:'0.4rem' }}>© 2026 — All Rights Reserved</span>
    </footer>
  );
}
