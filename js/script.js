document.addEventListener('DOMContentLoaded', function () {
  // Load NAVBAR
  loadHTML('navbar-placeholder', 'partials/nav.html', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    if (navbarToggler && navbarCollapse) {
      navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
      });
    }
  });

  // Load FOOTER (no JS needed)
  loadHTML('footer-placeholder', 'partials/footer.html');
});

// Helper to load external HTML files
function loadHTML(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (typeof callback === 'function') callback();  // ensure callback after content is injected
    });
}