// ===== MOBILE NAVIGATION =====
    // Purpose: Opens and closes the compact navigation menu on smaller screens.
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

    // ===== CONTACT FORM FEEDBACK =====
    // Purpose: Validates the inquiry and confirms capture in this standalone preview.
    // Connect this form to the business's approved form endpoint before publication.
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const status = document.getElementById('formStatus');

      if (!event.currentTarget.checkValidity()) {
        event.currentTarget.reportValidity();
        return;
      }

      status.textContent = 'Thank you. Your inquiry details are ready to be submitted.';
      status.classList.remove('hidden');
    });

// ===== SCROLL REVEALS =====
    // Purpose: Adds restrained entrance motion to supporting content.
    AOS.init({ once: true, duration: 700, offset: 80 });