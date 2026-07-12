 // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.2});
  revealEls.forEach(el=>io.observe(el));

  // Ledger chart draw-in animation
  const paths = [document.getElementById('pathBefore'), document.getElementById('pathAfter')];
  paths.forEach((p, i) => {
    const len = p.getTotalLength();
    p.style.strokeDasharray = len;
    p.style.strokeDashoffset = len;
    p.getBoundingClientRect(); // force reflow
    p.style.transition = `stroke-dashoffset 1.4s ease ${0.3 + i*1.2}s`;
    setTimeout(()=>{ p.style.strokeDashoffset = '0'; }, 200);
  });