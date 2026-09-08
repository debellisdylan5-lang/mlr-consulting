const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    function toggleMenu() {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      menuButton.setAttribute('aria-expanded', String(!isOpen));
    }

    menuButton.addEventListener('click', toggleMenu);
    document.querySelectorAll('.mobile-link').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const status = document.getElementById('formStatus');

      if (!event.currentTarget.checkValidity()) {
        event.currentTarget.reportValidity();
        return;
      }

      status.textContent = 'Thanks — contact submission is not yet connected. Please email us directly once contact details are added.';
      status.classList.remove('hidden');
    });

AOS.init({ once: true, duration: 700, offset: 80 });