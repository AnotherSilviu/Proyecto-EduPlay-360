function scrollToInfo() {
    document.getElementById('info').scrollIntoView({ behavior: 'smooth' });
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const animatables = document.querySelectorAll('.animate-in');
    animatables.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.3}s`;
    });
  });
  