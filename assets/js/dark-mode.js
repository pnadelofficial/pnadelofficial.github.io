// Toggle dark mode and save preference
const toggle = document.getElementById('dark-mode-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Initialize
if (localStorage.getItem('dark-mode') === 'true' || 
    (localStorage.getItem('dark-mode') === null && prefersDark.matches)) {
  document.body.classList.add('dark-theme');
}

// Toggle on button click
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('dark-mode', document.body.classList.contains('dark-theme'));
});