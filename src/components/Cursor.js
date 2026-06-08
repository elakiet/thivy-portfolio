import React, { useEffect, useRef } from 'react';
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) { dotRef.current.style.left = e.clientX + 'px'; dotRef.current.style.top = e.clientY + 'px'; }
    };
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) { ringRef.current.style.left = ring.current.x + 'px'; ringRef.current.style.top = ring.current.y + 'px'; }
      raf.current = requestAnimationFrame(animate);
    };
    window.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(animate);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf.current); };
  }, []);
  return (
    <>
      <div ref={dotRef} style={{ position:'fixed', width:10, height:10, background:'var(--blue)', borderRadius:'50%', pointerEvents:'none', zIndex:9999, transform:'translate(-50%,-50%)' }} />
      <div ref={ringRef} style={{ position:'fixed', width:34, height:34, border:'1.5px solid var(--blue)', borderRadius:'50%', pointerEvents:'none', zIndex:9998, transform:'translate(-50%,-50%)', opacity:0.5 }} />
    </>
  );
}
