(function ($) {
  "use strict";

  // Open Menu
  $(document).ready(function () {
    // rounded-lg bg-white p-4 absolute top-[60px] left-0
    const btn = document.getElementById('menu');
    const menu = document.getElementById('navbar-default');

    btn.addEventListener('click', function () {
      btn.setAttribute('aria-expanded', btn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    
      menu.classList.toggle('hidden');
      menu.classList.add(
        'absolute',
        'top-[60px]',
        'left-0',
        'rounded-lg',
        'bg-white',
        'p-4',
        'shadow-lg',
        'z-50');
    });

  });

  // Typed Initiate
  const typedElement = document.querySelector('.description h2');
  if (typedElement) {
    const typed_strings = $('.description .typed-text').text();
    new Typed(typedElement, {
      strings: typed_strings.split(', '),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true
    });
  }

  // Current Year in the Footer
  const currentYear = new Date().getFullYear();

  if (currentYear === 2024)
    document.getElementById('current-year').innerText = currentYear;
  else
    document.getElementById('current-year').innerText = "2024 - ".concat(currentYear);

  // Years of Experience
  const experience = document.getElementById('exp');
  const experienceTotal = currentYear - 2018;
  if (experience) experience.innerText = "".concat(experienceTotal, " anos");


  // Fade-in animado nas seções ao rolar
  function onScrollFadeIn() {
    document.querySelectorAll('.fade-in').forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', onScrollFadeIn);
  window.addEventListener('DOMContentLoaded', onScrollFadeIn);

  // Menu ativo ao rolar
  const sections = ['home', 'sobre', 'servicos', 'portfolio', 'blog', 'depoimentos', 'experiencia', 'contato'];
  window.addEventListener('scroll', function () {
    let scrollPos = window.scrollY + 120;
    sections.forEach(id => {
      const sec = document.getElementById(id);
      if (sec && sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('text-orange-100', 'font-bold'));
        const active = document.querySelector('.nav-link[href="#' + id + '"]');
        if (active) { active.classList.add('text-orange-100', 'font-bold'); }
      }
    });
  });

  // Feedback do formulário
  const contactForm = document.getElementById('formContato');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const btnEnviar = document.getElementById('btn-enviar');
      const messageFeedback = document.getElementById('message-feedback');

      const data = new FormData(contactForm);
      const object = Object.fromEntries(data);
      const json = JSON.stringify(object);

      btnEnviar.innerText = 'Aguarde...';
      btnEnviar.disabled = true;

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: json
      })
      .then(async (response) => {
        let data = await response.json();

        if (response.status === 200) {
          messageFeedback.innerText = 'Mensagem enviada com sucesso!';
          messageFeedback.classList.remove('bg-red-50', 'text-red-800', 'block');
          messageFeedback.classList.add('bg-green-50', 'text-green-800', 'block');
          contactForm.reset();
        } else {
          messageFeedback.innerText = 'Erro ao enviar a mensagem. Por favor, tente novamente.';
          messageFeedback.classList.remove('bg-green-50', 'text-green-800', 'block');
          messageFeedback.classList.add('bg-red-50', 'text-red-800', 'block');
        }
      })
      .catch(error => {
        console.error(error);

        messageFeedback.innerText = error;
        messageFeedback.classList.remove('bg-green-50', 'text-green-800', 'block');
        messageFeedback.classList.add('bg-red-50', 'text-red-800', 'block');
      })
      .finally(() => {
        btnEnviar.innerText = 'Enviar';
        btnEnviar.disabled = false;

        setTimeout(() => {
          messageFeedback.classList.remove('block');
        }, 5000);        
      });
    });
  }

  // Init Particles.js
  const particles = document.getElementById('particles-js');
  if (particles) particlesJS.load('particles-js', '../assets/particlesjs-config.json');

  // Owl Carousel
  const about = document.getElementById('sobre');
  if (about) { 
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        items: 12,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
      });
    });
  }


    // Limit Text in Blog description
  var descriptions = document.querySelectorAll('#description');
  if (descriptions.length) {
    descriptions.forEach(function (description) {
      if (description.innerText.length >= 94) description.innerText = "".concat(description.innerText.slice(0, 94), "...");
    });
  }

  // Add menu fake buttons to code blocks
  $(document).ready(function () {
    var tagCodes = document.querySelectorAll('code');
    if (tagCodes) {
      tagCodes.forEach(function (code) {
        code.innerHTML = `<div class="menu-code flex items-center mb-3">
          <div class="menu-close rounded-full"></div>
          <div class="menu-minimize rounded-full"></div>
          <div class="menu-maximize rounded-full"></div>
        </div>` + code.innerHTML;
      });
    }
  });

  // Eater Egg
  console.clear();
  console.log('%cMoisés Fausto', 'color: #f97316; font-size: 3rem; font-weight: 700');
  console.log('%cFullstack Developer | PHP | Laravel | Vue Js', 'color: #f97316; font-size: 1.25rem; font-weight: 400');
  console.log('%cOuuu, o que cê ta fazendo aqui??? 🫣', 'font-size: 1.25rem; font-weight: 400');
})(jQuery);