(function ($) {
  "use strict";

  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 30
      }, 1500, 'easeInOutExpo');

      if ($(this).parents('.navbar-nav').length) {
        $('.navbar-nav .active').removeClass('active');
        $(this).closest('a').addClass('active');
      }
    }
  });


  // Typed Initiate
  if ($('.header h2').length == 1) {
    const typed_strings = $('.header .typed-text').text();
    const typed = new Typed('.header h2', {
      strings: typed_strings.split(', '),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true
    });
  }


  // Porfolio isotope and filter
  const portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({filter: $(this).data('filter')});
  });


  // Review slider
  $('.review-slider').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });


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



  // Open Modal with the project details
  const btnOpenModal = document.querySelectorAll('.link-preview');

  fetch('/projects.json')
    .then(response => response.json())
    .then((data) => openModalProjects(data))
    .catch(error => console.error(error));

  function openModalProjects(data) {
    btnOpenModal.forEach(btn => {
      btn.addEventListener('click', () => {
        const modalTitle = document.querySelector('.modal-title');
        const modalBody = document.querySelector('.modal-body');
        const modalFooter = document.querySelector('.modal-footer');

        // Clear the modal content
        modalFooter.innerHTML = '';

        data.forEach(project => {
          if (project.name.toLocaleLowerCase() === btn.dataset.project.toLocaleLowerCase()) {
            modalTitle.innerText = project.title;
            modalBody.innerHTML = project.description;

            project.techs.forEach(tech => {
              modalFooter.innerHTML += `<span class="badge badge-secondary">${tech}</span>`;
            })
          }
        });

        $('#modal').modal('show');
      });
    })
  }
  
  // Limit Text in Blog description
  const descriptions = document.querySelectorAll('#description')
  if (descriptions.length) {
    descriptions.forEach(description => {
      if (description.innerText.length >= 94) description.innerText = `${description.innerText.slice(0, 94)}...`
    })
  }

  const tagsPreCode = () => {
    const tagCodes = document.querySelectorAll('code')

    if (tagCodes) {
      tagCodes.forEach(code => {
        code.innerHTML = `<div class="menu-code d-flex align-items-center mb-3"> 
                                <div class="menu-close rounded-circle"></div> 
                                <div class="menu-minimize rounded-circle"></div> 
                                <div class="menu-maximize rounded-circle"></div> 
                              </div>` + code.innerHTML;
      })
    }
  }

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
  });
  
  
  const clientWidth = () => {
    const doc = document.querySelector('body');
    
    return doc.clientWidth;
  }
  
  
  // Menu SideBar stay hidden in page Post and Blog
  const hiddenNavBar = () => {
    const url = window.location.href;

    const sidebar = document.querySelector('.sidebar');
    const sidebarHeader = document.querySelector('.sidebar-header');
    const content = document.querySelector('.content');

    if (url.includes('blog')) {
      
      if (clientWidth() <= 425) {
        sidebar.style.marginLeft = '0';
      }
      
      if (clientWidth() > 425 && clientWidth() <= 768) {
        sidebar.style.marginLeft = '-255px';
        sidebarHeader.style.display = 'none';
        content.style.width = '100%';
      }
      
      if (clientWidth() > 768) {
        sidebar.style.marginLeft = '-270px';
        sidebarHeader.style.display = 'none';
        content.style.width = '100%';
        content.style.marginLeft = '0'; 
      }
    }
  }  
  
  
  // Send message of the form contact
  const btn = document.getElementById('btnSendMessage');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const feedback = document.getElementById('message-feedback');
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      const msgFull = encodeURIComponent(`Nome:${name}-Email:${email}-Aassunto:${subject}-Mensagem:${message}`)

      feedback.classList.remove('valid-feedback', 'invalid-feedback');
      feedback.innerText = '';

      if (email == '' && message == '') {
        feedback.classList.add('invalid-feedback', 'd-block');
        feedback.innerText = 'Ops... alguns campos como e-mail e mensagem são obrigatórios.';

        return;
      }

      const url = `https://api.whatsapp.com/send?phone=5521979922199&text=${msgFull}`
      window.open(url, '_self');

      feedback.classList.add('valid-feedback', 'd-block');
      feedback.innerText = 'Deve ter aberto uma nova aba para enviar mensagem por Whatsapp...';
    });
  }
   
  
  window.addEventListener('load', () => {
    tagsPreCode();
    hiddenNavBar();
    
    // Eater Egg
    console.clear();
    console.log('%cMoisés Fausto', 'color: #f97316; font-size: 3rem; font-weight: 700');
    console.log('%cFullstack Developer | PHP | Laravel | Vue Js', 'color: #f97316; font-size: 1.25rem; font-weight: 400');
    console.log('%cOuuu, o que cê ta fazendo aqui??? 🫣', 'font-size: 1.25rem; font-weight: 400');
  });
})(jQuery);