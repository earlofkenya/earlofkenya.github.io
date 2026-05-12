document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  // Remove hardcoded delay classes to let JS handle staggering if needed
  reveals.forEach(el => {
    el.classList.remove('delay-1', 'delay-2', 'delay-3');
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => {
    observer.observe(el);
  });
});
