// ==========================================================
// FAQ: abre e fecha com animação, acessível via teclado
// ==========================================================
document.querySelectorAll('.faq-question').forEach((button) => {
  const answer = button.nextElementSibling;

  const setState = (isOpen) => {
    button.setAttribute('aria-expanded', String(isOpen));
    answer.style.maxHeight = isOpen ? answer.scrollHeight + 'px' : '0px';
  };

  // Estado inicial (a primeira pergunta já vem aberta no HTML)
  setState(button.getAttribute('aria-expanded') === 'true');

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    setState(!isOpen);
  });
});

// ==========================================================
// Scroll reveal: elementos aparecem suavemente ao entrar na tela
// ==========================================================
const revealTargets = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealTargets.length){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}

// ==========================================================
// Botão flutuante: some perto do rodapé para não sobrepor o CTA final
// ==========================================================
const floatingBuy = document.getElementById('floatingBuy');
const footer = document.querySelector('.site-footer');

if (floatingBuy && footer && 'IntersectionObserver' in window){
  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      floatingBuy.classList.toggle('hide', entry.isIntersecting);
    });
  }, { threshold: 0.05 });

  footerObserver.observe(footer);
}
