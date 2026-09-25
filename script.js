const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

// Field validation helper
function validateInputs() {
  let isValid = true;
  const nameInput = form.querySelector('#inquiryName');
  const emailInput = form.querySelector('#inquiryEmail');
  const phoneInput = form.querySelector('#inquiryPhone');
  const messageInput = form.querySelector('#inquiryMessage');

  // Name check
  if (nameInput && nameInput.value.trim().length < 2) {
    nameInput.classList.add('is-invalid');
    isValid = false;
  } else if (nameInput) {
    nameInput.classList.remove('is-invalid');
    nameInput.classList.add('is-valid');
  }

  // Email check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput && !emailRegex.test(emailInput.value.trim())) {
    emailInput.classList.add('is-invalid');
    isValid = false;
  } else if (emailInput) {
    emailInput.classList.remove('is-invalid');
    emailInput.classList.add('is-valid');
  }

  // Phone check
  const phoneDigits = phoneInput ? phoneInput.value.replace(/\D/g, '') : '';
  if (phoneInput && (phoneDigits.length < 7 || phoneDigits.length > 15)) {
    phoneInput.classList.add('is-invalid');
    isValid = false;
  } else if (phoneInput) {
    phoneInput.classList.remove('is-invalid');
    phoneInput.classList.add('is-valid');
  }

  // Message check
  if (messageInput && messageInput.value.trim().length < 10) {
    messageInput.classList.add('is-invalid');
    isValid = false;
  } else if (messageInput) {
    messageInput.classList.remove('is-invalid');
    messageInput.classList.add('is-valid');
  }

  return isValid;
}

// Attach live input feedback
const inputsToWatch = form.querySelectorAll('input, select, textarea');
inputsToWatch.forEach((el) => {
  el.addEventListener('input', () => {
    el.classList.remove('is-invalid');
  });
});

// Quick inquiry templates
const quickTemplateButtons = document.querySelectorAll('[data-template]');
quickTemplateButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const templateType = btn.getAttribute('data-template');
    const subjectSelect = document.getElementById('inquirySubject');
    const messageInput = document.getElementById('inquiryMessage');
    if (!subjectSelect || !messageInput) return;

    if (templateType === 'training') {
      subjectSelect.value = 'Vocational Training & Skill Development';
      messageInput.value = 'Namaste, I would like to inquire about upcoming vocational skill trainings (incense making, tailoring, weaving) for persons with disabilities.';
    } else if (templateType === 'health') {
      subjectSelect.value = 'Health Camp & Medical Support';
      messageInput.value = 'Namaste, I am reaching out regarding free medical camps, screening, and healthcare initiatives conducted by Human Social Service Nepal.';
    } else if (templateType === 'seed_capital') {
      subjectSelect.value = 'Seed Capital & Entrepreneurship Assistance';
      messageInput.value = 'Namaste, I would like to learn more about the Community-Based Rehabilitation (CBR) seed capital support for entrepreneurs with disabilities.';
    } else if (templateType === 'volunteer') {
      subjectSelect.value = 'Volunteer & Community Engagement';
      messageInput.value = 'Hello HSSN team, I am interested in volunteering with Human Social Service Nepal to support community advocacy and disability empowerment programs.';
    } else if (templateType === 'partnership') {
      subjectSelect.value = 'Institutional Partnership & CSR';
      messageInput.value = 'Greetings, our organization would like to explore institutional partnership and CSR collaboration with Human Social Service Nepal.';
    }

    messageInput.focus();
    const formSection = document.getElementById('inquiry');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form Submission handling with exact Web3Forms key
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", "d73fcdc5-6657-4312-a451-089d34a13470");

    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok && data.success) {
            alert("Success! Your message has been sent to Human Social Service Nepal.");
            form.reset();
            inputsToWatch.forEach((el) => el.classList.remove('is-valid', 'is-invalid'));
        } else {
            alert("Error: " + (data.message || "Failed to submit. Please try again."));
        }

    } catch (error) {
        alert("Something went wrong. Please check your connection and try again.");
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
});

// Auto-collapse navbar on mobile link click
const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn');
const navbarCollapse = document.getElementById('navbarContent');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) bsCollapse.hide();
    }
  });
});

// Floating Back to Top Button
const backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', () => {
  if (backToTopBtn) {
    if (window.scrollY > 350) {
      backToTopBtn.classList.remove('d-none');
    } else {
      backToTopBtn.classList.add('d-none');
    }
  }
});

if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
