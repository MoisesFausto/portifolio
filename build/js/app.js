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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsiJCIsIm9uIiwiZXZlbnQiLCJoYXNoIiwicHJldmVudERlZmF1bHQiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwicGFyZW50cyIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwiY2xvc2VzdCIsImFkZENsYXNzIiwidHlwZWRfc3RyaW5ncyIsInRleHQiLCJ0eXBlZCIsIlR5cGVkIiwic3RyaW5ncyIsInNwbGl0IiwidHlwZVNwZWVkIiwiYmFja1NwZWVkIiwic21hcnRCYWNrc3BhY2UiLCJsb29wIiwicG9ydGZvbGlvSXNvdG9wZSIsImlzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJsYXlvdXRNb2RlIiwiZmlsdGVyIiwiZGF0YSIsImN1cnJlbnRZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsImNvbmNhdCIsImV4cGVyaWVuY2UiLCJleHBlcmllbmNlVG90YWwiLCJidG5PcGVuTW9kYWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwib3Blbk1vZGFsUHJvamVjdHMiLCJlcnJvciIsImNvbnNvbGUiLCJmb3JFYWNoIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vZGFsVGl0bGUiLCJxdWVyeVNlbGVjdG9yIiwibW9kYWxCb2R5IiwibW9kYWxGb290ZXIiLCJpbm5lckhUTUwiLCJwcm9qZWN0IiwibmFtZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiZGF0YXNldCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0ZWNocyIsInRlY2giLCJtb2RhbCIsImRlc2NyaXB0aW9ucyIsInNsaWNlIiwidGFnc1ByZUNvZGUiLCJ0YWdDb2RlcyIsImNvZGUiLCJ3aW5kb3ciLCJzY3JvbGwiLCJmYWRlSW4iLCJmYWRlT3V0IiwiY2xpY2siLCJjbGllbnRXaWR0aCIsImRvYyIsImhpZGRlbk5hdkJhciIsInVybCIsImxvY2F0aW9uIiwiaHJlZiIsInNpZGViYXIiLCJzaWRlYmFySGVhZGVyIiwiY29udGVudCIsImluY2x1ZGVzIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwiZGlzcGxheSIsIndpZHRoIiwiZSIsImZlZWRiYWNrIiwidmFsdWUiLCJlbWFpbCIsInN1YmplY3QiLCJtZXNzYWdlIiwibXNnRnVsbCIsImVuY29kZVVSSUNvbXBvbmVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm9wZW4iLCJjbGVhciIsImxvZyIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLENBQUMsVUFBVUEsQ0FBQyxFQUFFO0VBQ1osWUFBWTs7RUFFWjtFQUNBQSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNDLEVBQUUsQ0FBQyxP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dGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zb3VyY2UvYXNzZXRzL2pzL2FwcC5qc1wiKTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBTbW9vdGggc2Nyb2xsaW5nIG9uIHRoZSBuYXZiYXIgbGlua3NcbiAgJChcIi5uYXZiYXItbmF2IGFcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuaGFzaCAhPT0gXCJcIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3A6ICQodGhpcy5oYXNoKS5vZmZzZXQoKS50b3AgLSAzMFxuICAgICAgfSwgMTUwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcblxuICAgICAgaWYgKCQodGhpcykucGFyZW50cygnLm5hdmJhci1uYXYnKS5sZW5ndGgpIHtcbiAgICAgICAgJCgnLm5hdmJhci1uYXYgLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCdhJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cblxuICAvLyBUeXBlZCBJbml0aWF0ZVxuICBpZiAoJCgnLmhlYWRlciBoMicpLmxlbmd0aCA9PSAxKSB7XG4gICAgY29uc3QgdHlwZWRfc3RyaW5ncyA9ICQoJy5oZWFkZXIgLnR5cGVkLXRleHQnKS50ZXh0KCk7XG4gICAgY29uc3QgdHlwZWQgPSBuZXcgVHlwZWQoJy5oZWFkZXIgaDInLCB7XG4gICAgICBzdHJpbmdzOiB0eXBlZF9zdHJpbmdzLnNwbGl0KCcsICcpLFxuICAgICAgdHlwZVNwZWVkOiAxMDAsXG4gICAgICBiYWNrU3BlZWQ6IDIwLFxuICAgICAgc21hcnRCYWNrc3BhY2U6IGZhbHNlLFxuICAgICAgbG9vcDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cblxuICAvLyBQb3Jmb2xpbyBpc290b3BlIGFuZCBmaWx0ZXJcbiAgY29uc3QgcG9ydGZvbGlvSXNvdG9wZSA9ICQoJy5wb3J0Zm9saW8tY29udGFpbmVyJykuaXNvdG9wZSh7XG4gICAgaXRlbVNlbGVjdG9yOiAnLnBvcnRmb2xpby1pdGVtJyxcbiAgICBsYXlvdXRNb2RlOiAnZml0Um93cydcbiAgfSk7XG5cbiAgJCgnI3BvcnRmb2xpby1mbHRlcnMgbGknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIiNwb3J0Zm9saW8tZmx0ZXJzIGxpXCIpLnJlbW92ZUNsYXNzKCdmaWx0ZXItYWN0aXZlJyk7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnZmlsdGVyLWFjdGl2ZScpO1xuXG4gICAgcG9ydGZvbGlvSXNvdG9wZS5pc290b3BlKHtmaWx0ZXI6ICQodGhpcykuZGF0YSgnZmlsdGVyJyl9KTtcbiAgfSk7XG5cblxuICAvLyBDdXJyZW50IFllYXIgaW4gdGhlIEZvb3RlclxuICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuICBpZiAoY3VycmVudFllYXIgPT09IDIwMjQpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQteWVhcicpLmlubmVyVGV4dCA9IGN1cnJlbnRZZWFyO1xuICBlbHNlXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQteWVhcicpLmlubmVyVGV4dCA9IFwiMjAyNCAtIFwiLmNvbmNhdChjdXJyZW50WWVhcik7XG5cbiAgLy8gWWVhcnMgb2YgRXhwZXJpZW5jZVxuICBjb25zdCBleHBlcmllbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cCcpO1xuICBjb25zdCBleHBlcmllbmNlVG90YWwgPSBjdXJyZW50WWVhciAtIDIwMTg7XG4gIGlmIChleHBlcmllbmNlKSBleHBlcmllbmNlLmlubmVyVGV4dCA9IFwiXCIuY29uY2F0KGV4cGVyaWVuY2VUb3RhbCwgXCIgYW5vc1wiKTtcblxuXG5cbiAgLy8gT3BlbiBNb2RhbCB3aXRoIHRoZSBwcm9qZWN0IGRldGFpbHNcbiAgY29uc3QgYnRuT3Blbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmstcHJldmlldycpO1xuXG4gIGZldGNoKCcvcHJvamVjdHMuanNvbicpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiBvcGVuTW9kYWxQcm9qZWN0cyhkYXRhKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuXG4gIGZ1bmN0aW9uIG9wZW5Nb2RhbFByb2plY3RzKGRhdGEpIHtcbiAgICBidG5PcGVuTW9kYWwuZm9yRWFjaChidG4gPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1ib2R5Jyk7XG4gICAgICAgIGNvbnN0IG1vZGFsRm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvb3RlcicpO1xuXG4gICAgICAgIC8vIENsZWFyIHRoZSBtb2RhbCBjb250ZW50XG4gICAgICAgIG1vZGFsRm9vdGVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIGRhdGEuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICBpZiAocHJvamVjdC5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGJ0bi5kYXRhc2V0LnByb2plY3QudG9Mb2NhbGVMb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgbW9kYWxUaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICAgICAgbW9kYWxCb2R5LmlubmVySFRNTCA9IHByb2plY3QuZGVzY3JpcHRpb247XG5cbiAgICAgICAgICAgIHByb2plY3QudGVjaHMuZm9yRWFjaCh0ZWNoID0+IHtcbiAgICAgICAgICAgICAgbW9kYWxGb290ZXIuaW5uZXJIVE1MICs9IGA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXNlY29uZGFyeVwiPiR7dGVjaH08L3NwYW4+YDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcjbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuICBcbiAgLy8gTGltaXQgVGV4dCBpbiBCbG9nIGRlc2NyaXB0aW9uXG4gIGNvbnN0IGRlc2NyaXB0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNkZXNjcmlwdGlvbicpXG4gIGlmIChkZXNjcmlwdGlvbnMubGVuZ3RoKSB7XG4gICAgZGVzY3JpcHRpb25zLmZvckVhY2goZGVzY3JpcHRpb24gPT4ge1xuICAgICAgaWYgKGRlc2NyaXB0aW9uLmlubmVyVGV4dC5sZW5ndGggPj0gOTQpIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGAke2Rlc2NyaXB0aW9uLmlubmVyVGV4dC5zbGljZSgwLCA5NCl9Li4uYFxuICAgIH0pXG4gIH1cblxuICBjb25zdCB0YWdzUHJlQ29kZSA9ICgpID0+IHtcbiAgICBjb25zdCB0YWdDb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NvZGUnKVxuXG4gICAgaWYgKHRhZ0NvZGVzKSB7XG4gICAgICB0YWdDb2Rlcy5mb3JFYWNoKGNvZGUgPT4ge1xuICAgICAgICBjb2RlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibWVudS1jb2RlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItM1wiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtY2xvc2Ugcm91bmRlZC1jaXJjbGVcIj48L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LW1pbmltaXplIHJvdW5kZWQtY2lyY2xlXCI+PC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1tYXhpbWl6ZSByb3VuZGVkLWNpcmNsZVwiPjwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmAgKyBjb2RlLmlubmVySFRNTDtcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gQmFjayB0byB0b3AgYnV0dG9uXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTAwKSB7XG4gICAgICAkKCcuYmFjay10by10b3AnKS5mYWRlSW4oJ3Nsb3cnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLmJhY2stdG8tdG9wJykuZmFkZU91dCgnc2xvdycpO1xuICAgIH1cbiAgfSk7XG4gICQoJy5iYWNrLXRvLXRvcCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgMTUwMCwgJ2Vhc2VJbk91dEV4cG8nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICBcbiAgXG4gIGNvbnN0IGNsaWVudFdpZHRoID0gKCkgPT4ge1xuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBcbiAgICByZXR1cm4gZG9jLmNsaWVudFdpZHRoO1xuICB9XG4gIFxuICBcbiAgLy8gTWVudSBTaWRlQmFyIHN0YXkgaGlkZGVuIGluIHBhZ2UgUG9zdCBhbmQgQmxvZ1xuICBjb25zdCBoaWRkZW5OYXZCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBzaWRlYmFySGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItaGVhZGVyJyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBpZiAodXJsLmluY2x1ZGVzKCdibG9nJykpIHtcbiAgICAgIFxuICAgICAgaWYgKGNsaWVudFdpZHRoKCkgPD0gNDI1KSB7XG4gICAgICAgIHNpZGViYXIuc3R5bGUubWFyZ2luTGVmdCA9ICcwJztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGNsaWVudFdpZHRoKCkgPiA0MjUgJiYgY2xpZW50V2lkdGgoKSA8PSA3NjgpIHtcbiAgICAgICAgc2lkZWJhci5zdHlsZS5tYXJnaW5MZWZ0ID0gJy0yNTVweCc7XG4gICAgICAgIHNpZGViYXJIZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgY29udGVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGNsaWVudFdpZHRoKCkgPiA3NjgpIHtcbiAgICAgICAgc2lkZWJhci5zdHlsZS5tYXJnaW5MZWZ0ID0gJy0yNzBweCc7XG4gICAgICAgIHNpZGViYXJIZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgY29udGVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgY29udGVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzAnOyBcbiAgICAgIH1cbiAgICB9XG4gIH0gIFxuICBcbiAgXG4gIC8vIFNlbmQgbWVzc2FnZSBvZiB0aGUgZm9ybSBjb250YWN0XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5TZW5kTWVzc2FnZScpO1xuICBpZiAoYnRuKSB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgZmVlZGJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZS1mZWVkYmFjaycpO1xuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG4gICAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLnZhbHVlO1xuICAgICAgY29uc3Qgc3ViamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJqZWN0JykudmFsdWU7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKS52YWx1ZTtcblxuICAgICAgY29uc3QgbXNnRnVsbCA9IGVuY29kZVVSSUNvbXBvbmVudChgTm9tZToke25hbWV9LUVtYWlsOiR7ZW1haWx9LUFhc3N1bnRvOiR7c3ViamVjdH0tTWVuc2FnZW06JHttZXNzYWdlfWApXG5cbiAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkLWZlZWRiYWNrJywgJ2ludmFsaWQtZmVlZGJhY2snKTtcbiAgICAgIGZlZWRiYWNrLmlubmVyVGV4dCA9ICcnO1xuXG4gICAgICBpZiAoZW1haWwgPT0gJycgJiYgbWVzc2FnZSA9PSAnJykge1xuICAgICAgICBmZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWZlZWRiYWNrJywgJ2QtYmxvY2snKTtcbiAgICAgICAgZmVlZGJhY2suaW5uZXJUZXh0ID0gJ09wcy4uLiBhbGd1bnMgY2FtcG9zIGNvbW8gZS1tYWlsIGUgbWVuc2FnZW0gc8OjbyBvYnJpZ2F0w7NyaW9zLic7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTUyMTk3OTkyMjE5OSZ0ZXh0PSR7bXNnRnVsbH1gXG4gICAgICB3aW5kb3cub3Blbih1cmwsICdfc2VsZicpO1xuXG4gICAgICBmZWVkYmFjay5jbGFzc0xpc3QuYWRkKCd2YWxpZC1mZWVkYmFjaycsICdkLWJsb2NrJyk7XG4gICAgICBmZWVkYmFjay5pbm5lclRleHQgPSAnRGV2ZSB0ZXIgYWJlcnRvIHVtYSBub3ZhIGFiYSBwYXJhIGVudmlhciBtZW5zYWdlbSBwb3IgV2hhdHNhcHAuLi4nO1xuICAgIH0pO1xuICB9XG4gICBcbiAgXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIHRhZ3NQcmVDb2RlKCk7XG4gICAgaGlkZGVuTmF2QmFyKCk7XG4gICAgXG4gICAgLy8gRWF0ZXIgRWdnXG4gICAgY29uc29sZS5jbGVhcigpO1xuICAgIGNvbnNvbGUubG9nKCclY01vaXPDqXMgRmF1c3RvJywgJ2NvbG9yOiAjZjk3MzE2OyBmb250LXNpemU6IDNyZW07IGZvbnQtd2VpZ2h0OiA3MDAnKTtcbiAgICBjb25zb2xlLmxvZygnJWNGdWxsc3RhY2sgRGV2ZWxvcGVyIHwgUEhQIHwgTGFyYXZlbCB8IFZ1ZSBKcycsICdjb2xvcjogI2Y5NzMxNjsgZm9udC1zaXplOiAxLjI1cmVtOyBmb250LXdlaWdodDogNDAwJyk7XG4gICAgY29uc29sZS5sb2coJyVjT3V1dSwgbyBxdWUgY8OqIHRhIGZhemVuZG8gYXF1aT8/PyDwn6ujJywgJ2ZvbnQtc2l6ZTogMS4yNXJlbTsgZm9udC13ZWlnaHQ6IDQwMCcpO1xuICB9KTtcbn0pKGpRdWVyeSk7Il0sInNvdXJjZVJvb3QiOiIifQ==