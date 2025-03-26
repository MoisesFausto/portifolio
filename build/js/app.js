/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/assets/js/app.js":
/*!*********************************!*\
  !*** ./source/assets/js/app.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
    var typed_strings = $('.header .typed-text').text();
    var typed = new Typed('.header h2', {
      strings: typed_strings.split(', '),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true
    });
  }

  // Porfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });
  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');
    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
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
  var currentYear = new Date().getFullYear();
  if (currentYear === 2024) document.getElementById('current-year').innerText = currentYear;else document.getElementById('current-year').innerText = "2024 - ".concat(currentYear);

  // Years of Experience
  var experience = document.getElementById('exp');
  var experienceTotal = currentYear - 2018;
  if (experience) experience.innerText = "".concat(experienceTotal, " anos");

  // Open Modal with the project details
  var btnOpenModal = document.querySelectorAll('.link-preview');
  fetch('/projects.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    return openModalProjects(data);
  })["catch"](function (error) {
    return console.error(error);
  });
  function openModalProjects(data) {
    btnOpenModal.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var modalTitle = document.querySelector('.modal-title');
        var modalBody = document.querySelector('.modal-body');
        var modalFooter = document.querySelector('.modal-footer');

        // Clear the modal content
        modalFooter.innerHTML = '';
        data.forEach(function (project) {
          if (project.name.toLocaleLowerCase() === btn.dataset.project.toLocaleLowerCase()) {
            modalTitle.innerText = project.title;
            modalBody.innerHTML = project.description;
            project.techs.forEach(function (tech) {
              modalFooter.innerHTML += "<span class=\"badge badge-secondary\">".concat(tech, "</span>");
            });
          }
        });
        $('#modal').modal('show');
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
  var tagsPreCode = function tagsPreCode() {
    var tagCodes = document.querySelectorAll('code');
    if (tagCodes) {
      tagCodes.forEach(function (code) {
        code.innerHTML = "<div class=\"menu-code d-flex align-items-center mb-3\"> \n                                <div class=\"menu-close rounded-circle\"></div> \n                                <div class=\"menu-minimize rounded-circle\"></div> \n                                <div class=\"menu-maximize rounded-circle\"></div> \n                              </div>" + code.innerHTML;
      });
    }
  };

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });
  var clientWidth = function clientWidth() {
    var doc = document.querySelector('body');
    return doc.clientWidth;
  };

  // Menu SideBar stay hidden in page Post and Blog
  var hiddenNavBar = function hiddenNavBar() {
    var url = window.location.href;
    var sidebar = document.querySelector('.sidebar');
    var sidebarHeader = document.querySelector('.sidebar-header');
    var content = document.querySelector('.content');
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
  };

  // Send message of the form contact
  var btn = document.getElementById('btnSendMessage');
  if (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var feedback = document.getElementById('message-feedback');
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var subject = document.getElementById('subject').value;
      var message = document.getElementById('message').value;
      var msgFull = encodeURIComponent("Nome:".concat(name, "-Email:").concat(email, "-Aassunto:").concat(subject, "-Mensagem:").concat(message));
      feedback.classList.remove('valid-feedback', 'invalid-feedback');
      feedback.innerText = '';
      if (email == '' && message == '') {
        feedback.classList.add('invalid-feedback', 'd-block');
        feedback.innerText = 'Ops... alguns campos como e-mail e mensagem são obrigatórios.';
        return;
      }
      var url = "https://api.whatsapp.com/send?phone=5521979922199&text=".concat(msgFull);
      window.open(url, '_self');
      feedback.classList.add('valid-feedback', 'd-block');
      feedback.innerText = 'Deve ter aberto uma nova aba para enviar mensagem por Whatsapp...';
    });
  }
  window.addEventListener('load', function () {
    tagsPreCode();
    hiddenNavBar();

    // Eater Egg
    console.clear();
    console.log('%cMoisés Fausto', 'color: #f97316; font-size: 3rem; font-weight: 700');
    console.log('%cFullstack Developer | PHP | Laravel | Vue Js', 'color: #f97316; font-size: 1.25rem; font-weight: 400');
    console.log('%cOuuu, o que cê ta fazendo aqui??? 🫣', 'font-size: 1.25rem; font-weight: 400');
  });
})(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsiJCIsIm9uIiwiZXZlbnQiLCJoYXNoIiwicHJldmVudERlZmF1bHQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwicGFyZW50cyIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwiY2xvc2VzdCIsImFkZENsYXNzIiwidHlwZWRfc3RyaW5ncyIsInRleHQiLCJ0eXBlZCIsIlR5cGVkIiwic3RyaW5ncyIsInNwbGl0IiwidHlwZVNwZWVkIiwiYmFja1NwZWVkIiwic21hcnRCYWNrc3BhY2UiLCJsb29wIiwicG9ydGZvbGlvSXNvdG9wZSIsImlzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJsYXlvdXRNb2RlIiwiZmlsdGVyIiwiZGF0YSIsInNsaWNrIiwiYXV0b3BsYXkiLCJkb3RzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImN1cnJlbnRZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsImNvbmNhdCIsImV4cGVyaWVuY2UiLCJleHBlcmllbmNlVG90YWwiLCJidG5PcGVuTW9kYWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwib3Blbk1vZGFsUHJvamVjdHMiLCJlcnJvciIsImNvbnNvbGUiLCJmb3JFYWNoIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vZGFsVGl0bGUiLCJxdWVyeVNlbGVjdG9yIiwibW9kYWxCb2R5IiwibW9kYWxGb290ZXIiLCJpbm5lckhUTUwiLCJwcm9qZWN0IiwibmFtZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiZGF0YXNldCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0ZWNocyIsInRlY2giLCJtb2RhbCIsImRlc2NyaXB0aW9ucyIsInNsaWNlIiwidGFnc1ByZUNvZGUiLCJ0YWdDb2RlcyIsImNvZGUiLCJ3aW5kb3ciLCJzY3JvbGwiLCJmYWRlSW4iLCJmYWRlT3V0IiwiY2xpY2siLCJjbGllbnRXaWR0aCIsImRvYyIsImhpZGRlbk5hdkJhciIsInVybCIsImxvY2F0aW9uIiwiaHJlZiIsInNpZGViYXIiLCJzaWRlYmFySGVhZGVyIiwiY29udGVudCIsImluY2x1ZGVzIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiZGlzcGxheSIsIndpZHRoIiwiZSIsImZlZWRiYWNrIiwidmFsdWUiLCJlbWFpbCIsInN1YmplY3QiLCJtZXNzYWdlIiwibXNnRnVsbCIsImVuY29kZVVSSUNvbXBvbmVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm9wZW4iLCJjbGVhciIsImxvZyIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLENBQUMsVUFBVUEs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QUFDO0lBQ2Z0RCxPQUFPLENBQUN1RCxHQUFHLENBQUMsaUJBQWlCLEVBQUUsbURBQW1ELENBQUM7SUFDbkZ2RCxPQUFPLENBQUN1RCxHQUFHLENBQUMsZ0RBQWdELEVBQUUsc0RBQXNELENBQUM7SUFDckh2RCxPQUFPLENBQUN1RCxHQUFHLENBQUMsd0NBQXdDLEVBQUUsc0NBQXNDLENBQUM7RUFDL0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxFQUFFQyxNQUFNLENBQUMsQyIsImZpbGUiOiJqcy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zb3VyY2UvYXNzZXRzL2pzL2FwcC5qc1wiKTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBTbW9vdGggc2Nyb2xsaW5nIG9uIHRoZSBuYXZiYXIgbGlua3NcbiAgJChcIi5uYXZiYXItbmF2IGFcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuaGFzaCAhPT0gXCJcIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3A6ICQodGhpcy5oYXNoKS5vZmZzZXQoKS50b3AgLSAzMFxuICAgICAgfSwgMTUwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcblxuICAgICAgaWYgKCQodGhpcykucGFyZW50cygnLm5hdmJhci1uYXYnKS5sZW5ndGgpIHtcbiAgICAgICAgJCgnLm5hdmJhci1uYXYgLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdhJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cblxuICAvLyBUeXBlZCBJbml0aWF0ZVxuICBpZiAoJCgnLmhlYWRlciBoMicpLmxlbmd0aCA9PSAxKSB7XG4gICAgY29uc3QgdHlwZWRfc3RyaW5ncyA9ICQoJy5oZWFkZXIgLnR5cGVkLXRleHQnKS50ZXh0KCk7XG4gICAgY29uc3QgdHlwZWQgPSBuZXcgVHlwZWQoJy5oZWFkZXIgaDInLCB7XG4gICAgICBzdHJpbmdzOiB0eXBlZF9zdHJpbmdzLnNwbGl0KCcsICcpLFxuICAgICAgdHlwZVNwZWVkOiAxMDAsXG4gICAgICBiYWNrU3BlZWQ6IDIwLFxuICAgICAgc21hcnRCYWNrc3BhY2U6IGZhbHNlLFxuICAgICAgbG9vcDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cblxuICAvLyBQb3Jmb2xpbyBpc290b3BlIGFuZCBmaWx0ZXJcbiAgY29uc3QgcG9ydGZvbGlvSXNvdG9wZSA9ICQoJy5wb3J0Zm9saW8tY29udGFpbmVyJykuaXNvdG9wZSh7XG4gICAgaXRlbVNlbGVjdG9yOiAnLnBvcnRmb2xpby1pdGVtJyxcbiAgICBsYXlvdXRNb2RlOiAnZml0Um93cydcbiAgfSk7XG5cbiAgJCgnI3BvcnRmb2xpby1mbHRlcnMgbGknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIiNwb3J0Zm9saW8tZmx0ZXJzIGxpXCIpLnJlbW92ZUNsYXNzKCdmaWx0ZXItYWN0aXZlJyk7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnZmlsdGVyLWFjdGl2ZScpO1xuXG4gICAgcG9ydGZvbGlvSXNvdG9wZS5pc290b3BlKHtmaWx0ZXI6ICQodGhpcykuZGF0YSgnZmlsdGVyJyl9KTtcbiAgfSk7XG5cblxuICAvLyBSZXZpZXcgc2xpZGVyXG4gICQoJy5yZXZpZXctc2xpZGVyJykuc2xpY2soe1xuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMVxuICB9KTtcblxuXG4gIC8vIEN1cnJlbnQgWWVhciBpbiB0aGUgRm9vdGVyXG4gIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG4gIGlmIChjdXJyZW50WWVhciA9PT0gMjAyNClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC15ZWFyJykuaW5uZXJUZXh0ID0gY3VycmVudFllYXI7XG4gIGVsc2VcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC15ZWFyJykuaW5uZXJUZXh0ID0gXCIyMDI0IC0gXCIuY29uY2F0KGN1cnJlbnRZZWFyKTtcblxuICAvLyBZZWFycyBvZiBFeHBlcmllbmNlXG4gIGNvbnN0IGV4cGVyaWVuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwJyk7XG4gIGNvbnN0IGV4cGVyaWVuY2VUb3RhbCA9IGN1cnJlbnRZZWFyIC0gMjAxODtcbiAgaWYgKGV4cGVyaWVuY2UpIGV4cGVyaWVuY2UuaW5uZXJUZXh0ID0gXCJcIi5jb25jYXQoZXhwZXJpZW5jZVRvdGFsLCBcIiBhbm9zXCIpO1xuXG5cblxuICAvLyBPcGVuIE1vZGFsIHdpdGggdGhlIHByb2plY3QgZGV0YWlsc1xuICBjb25zdCBidG5PcGVuTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluay1wcmV2aWV3Jyk7XG5cbiAgZmV0Y2goJy9wcm9qZWN0cy5qc29uJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IG9wZW5Nb2RhbFByb2plY3RzKGRhdGEpKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG5cbiAgZnVuY3Rpb24gb3Blbk1vZGFsUHJvamVjdHMoZGF0YSkge1xuICAgIGJ0bk9wZW5Nb2RhbC5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGl0bGUnKTtcbiAgICAgICAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJvZHknKTtcbiAgICAgICAgY29uc3QgbW9kYWxGb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9vdGVyJyk7XG5cbiAgICAgICAgLy8gQ2xlYXIgdGhlIG1vZGFsIGNvbnRlbnRcbiAgICAgICAgbW9kYWxGb290ZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgIGlmIChwcm9qZWN0Lm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gYnRuLmRhdGFzZXQucHJvamVjdC50b0xvY2FsZUxvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBtb2RhbFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICBtb2RhbEJvZHkuaW5uZXJIVE1MID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcblxuICAgICAgICAgICAgcHJvamVjdC50ZWNocy5mb3JFYWNoKHRlY2ggPT4ge1xuICAgICAgICAgICAgICBtb2RhbEZvb3Rlci5pbm5lckhUTUwgKz0gYDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utc2Vjb25kYXJ5XCI+JHt0ZWNofTwvc3Bhbj5gO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJyNtb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgICB9KTtcbiAgICB9KVxuICB9XG4gIFxuICAvLyBMaW1pdCBUZXh0IGluIEJsb2cgZGVzY3JpcHRpb25cbiAgY29uc3QgZGVzY3JpcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Rlc2NyaXB0aW9uJylcbiAgaWYgKGRlc2NyaXB0aW9ucy5sZW5ndGgpIHtcbiAgICBkZXNjcmlwdGlvbnMuZm9yRWFjaChkZXNjcmlwdGlvbiA9PiB7XG4gICAgICBpZiAoZGVzY3JpcHRpb24uaW5uZXJUZXh0Lmxlbmd0aCA+PSA5NCkgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYCR7ZGVzY3JpcHRpb24uaW5uZXJUZXh0LnNsaWNlKDAsIDk0KX0uLi5gXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHRhZ3NQcmVDb2RlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhZ0NvZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY29kZScpXG5cbiAgICBpZiAodGFnQ29kZXMpIHtcbiAgICAgIHRhZ0NvZGVzLmZvckVhY2goY29kZSA9PiB7XG4gICAgICAgIGNvZGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJtZW51LWNvZGUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0zXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1jbG9zZSByb3VuZGVkLWNpcmNsZVwiPjwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtbWluaW1pemUgcm91bmRlZC1jaXJjbGVcIj48L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LW1heGltaXplIHJvdW5kZWQtY2lyY2xlXCI+PC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YCArIGNvZGUuaW5uZXJIVE1MO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBCYWNrIHRvIHRvcCBidXR0b25cbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcbiAgICAgICQoJy5iYWNrLXRvLXRvcCcpLmZhZGVJbignc2xvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuYmFjay10by10b3AnKS5mYWRlT3V0KCdzbG93Jyk7XG4gICAgfVxuICB9KTtcbiAgJCgnLmJhY2stdG8tdG9wJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCAxNTAwLCAnZWFzZUluT3V0RXhwbycpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIFxuICBcbiAgY29uc3QgY2xpZW50V2lkdGggPSAoKSA9PiB7XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIFxuICAgIHJldHVybiBkb2MuY2xpZW50V2lkdGg7XG4gIH1cbiAgXG4gIFxuICAvLyBNZW51IFNpZGVCYXIgc3RheSBoaWRkZW4gaW4gcGFnZSBQb3N0IGFuZCBCbG9nXG4gIGNvbnN0IGhpZGRlbk5hdkJhciA9ICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IHNpZGViYXJIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1oZWFkZXInKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICAgIGlmICh1cmwuaW5jbHVkZXMoJ2Jsb2cnKSkge1xuICAgICAgXG4gICAgICBpZiAoY2xpZW50V2lkdGgoKSA8PSA0MjUpIHtcbiAgICAgICAgc2lkZWJhci5zdHlsZS5tYXJnaW5MZWZ0ID0gJzAnO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoY2xpZW50V2lkdGgoKSA+IDQyNSAmJiBjbGllbnRXaWR0aCgpIDw9IDc2OCkge1xuICAgICAgICBzaWRlYmFyLnN0eWxlLm1hcmdpbkxlZnQgPSAnLTI1NXB4JztcbiAgICAgICAgc2lkZWJhckhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBjb250ZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoY2xpZW50V2lkdGgoKSA+IDc2OCkge1xuICAgICAgICBzaWRlYmFyLnN0eWxlLm1hcmdpbkxlZnQgPSAnLTI3MHB4JztcbiAgICAgICAgc2lkZWJhckhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBjb250ZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICBjb250ZW50LnN0eWxlLm1hcmdpbkxlZnQgPSAnMCc7IFxuICAgICAgfVxuICAgIH1cbiAgfSAgXG4gIFxuICBcbiAgLy8gU2VuZCBtZXNzYWdlIG9mIHRoZSBmb3JtIGNvbnRhY3RcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blNlbmRNZXNzYWdlJyk7XG4gIGlmIChidG4pIHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBmZWVkYmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWZlZWRiYWNrJyk7XG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcbiAgICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykudmFsdWU7XG4gICAgICBjb25zdCBzdWJqZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YmplY3QnKS52YWx1ZTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpLnZhbHVlO1xuXG4gICAgICBjb25zdCBtc2dGdWxsID0gZW5jb2RlVVJJQ29tcG9uZW50KGBOb21lOiR7bmFtZX0tRW1haWw6JHtlbWFpbH0tQWFzc3VudG86JHtzdWJqZWN0fS1NZW5zYWdlbToke21lc3NhZ2V9YClcblxuICAgICAgZmVlZGJhY2suY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQtZmVlZGJhY2snLCAnaW52YWxpZC1mZWVkYmFjaycpO1xuICAgICAgZmVlZGJhY2suaW5uZXJUZXh0ID0gJyc7XG5cbiAgICAgIGlmIChlbWFpbCA9PSAnJyAmJiBtZXNzYWdlID09ICcnKSB7XG4gICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtZmVlZGJhY2snLCAnZC1ibG9jaycpO1xuICAgICAgICBmZWVkYmFjay5pbm5lclRleHQgPSAnT3BzLi4uIGFsZ3VucyBjYW1wb3MgY29tbyBlLW1haWwgZSBtZW5zYWdlbSBzw6NvIG9icmlnYXTDs3Jpb3MuJztcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT01NTIxOTc5OTIyMTk5JnRleHQ9JHttc2dGdWxsfWBcbiAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19zZWxmJyk7XG5cbiAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkLWZlZWRiYWNrJywgJ2QtYmxvY2snKTtcbiAgICAgIGZlZWRiYWNrLmlubmVyVGV4dCA9ICdEZXZlIHRlciBhYmVydG8gdW1hIG5vdmEgYWJhIHBhcmEgZW52aWFyIG1lbnNhZ2VtIHBvciBXaGF0c2FwcC4uLic7XG4gICAgfSk7XG4gIH1cbiAgIFxuICBcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgdGFnc1ByZUNvZGUoKTtcbiAgICBoaWRkZW5OYXZCYXIoKTtcbiAgICBcbiAgICAvLyBFYXRlciBFZ2dcbiAgICBjb25zb2xlLmNsZWFyKCk7XG4gICAgY29uc29sZS5sb2coJyVjTW9pc8OpcyBGYXVzdG8nLCAnY29sb3I6ICNmOTczMTY7IGZvbnQtc2l6ZTogM3JlbTsgZm9udC13ZWlnaHQ6IDcwMCcpO1xuICAgIGNvbnNvbGUubG9nKCclY0Z1bGxzdGFjayBEZXZlbG9wZXIgfCBQSFAgfCBMYXJhdmVsIHwgVnVlIEpzJywgJ2NvbG9yOiAjZjk3MzE2OyBmb250LXNpemU6IDEuMjVyZW07IGZvbnQtd2VpZ2h0OiA0MDAnKTtcbiAgICBjb25zb2xlLmxvZygnJWNPdXV1LCBvIHF1ZSBjw6ogdGEgZmF6ZW5kbyBhcXVpPz8/IPCfq6MnLCAnZm9udC1zaXplOiAxLjI1cmVtOyBmb250LXdlaWdodDogNDAwJyk7XG4gIH0pO1xufSkoalF1ZXJ5KTsiXSwic291cmNlUm9vdCI6IiJ9