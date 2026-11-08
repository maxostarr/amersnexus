(() => {
  const destination = 'https://www.gamersnexus.net/';
  const countdown = document.querySelector('#countdown');
  const cancel = document.querySelector('#cancel-redirect');
  const link = document.querySelector('#continue-link');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let remaining = 6;

  const timer = window.setInterval(() => {
    remaining -= 1;
    countdown.textContent = remaining;

    if (remaining <= 0) {
      window.clearInterval(timer);
      window.location.assign(destination);
    }
  }, reducedMotion ? 1200 : 1000);

  cancel.addEventListener('click', () => {
    window.clearInterval(timer);
    countdown.textContent = '—';
    cancel.textContent = 'Redirect paused';
    cancel.disabled = true;
  });

  link.addEventListener('click', () => window.clearInterval(timer));
})();
