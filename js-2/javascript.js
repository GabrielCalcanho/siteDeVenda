 AOS.init({ duration: 700, once: true, offset: 60, easing: 'ease-out-cubic' });

  // Menu mobile
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const iconOpen = document.getElementById('iconOpen');
  const iconClose = document.getElementById('iconClose');

  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px';
    mobileMenu.style.maxHeight = isOpen ? '0px' : mobileMenu.scrollHeight + 'px';
    iconOpen.classList.toggle('hidden', !isOpen);
    iconClose.classList.toggle('hidden', isOpen);
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  // Fecha o menu mobile ao clicar em um link
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.style.maxHeight = '0px';
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Navbar com sombra ao rolar
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('is-scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Efeito ripple nos botões CTA
  document.querySelectorAll('.btn-shine').forEach((button) => {
    button.addEventListener('click', (event) => {
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
      button.style.position = button.style.position || 'relative';
      button.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });

  // Fecha outros itens do FAQ ao abrir um novo (accordion single-open)
  document.querySelectorAll('details.faq').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        document.querySelectorAll('details.faq').forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });