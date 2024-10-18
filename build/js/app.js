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
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./nav */ "./source/assets/js/nav.js");
var date = new Date();
var currentYear = date.getFullYear();

// Bloco Home
var exp = document.getElementById('exp');
var expTot = currentYear - 2018;
if (exp) exp.innerText = "".concat(expTot, " anos");

// Bloco Footer
if (currentYear === 2024) document.getElementById('current-year').innerText = currentYear;else document.getElementById('current-year').innerText = "2024 - ".concat(currentYear);

// Menu
var menuBtn = document.getElementById('menu-collapse');
var navbar = document.getElementById('navbar-default');
menuBtn.addEventListener('click', function () {
  navbar.classList.toggle('hidden');
});

// Limite de texto
var descriptions = document.querySelectorAll('#description');
if (descriptions.length) {
  descriptions.forEach(function (description) {
    if (description.innerText.length >= 94) description.innerText = "".concat(description.innerText.slice(0, 94), "...");
  });
}

// Incrementa Jobs
var jobs = document.getElementById('jobs');
window.addEventListener('scroll', function () {
  if (jobs && jobs.getBoundingClientRect().y >= 970) {
    var count = 0;
    var interval = setInterval(function () {
      count = count + 1;
      jobs.innerText = "".concat(count, "+");
      if (count === 10) clearInterval(interval);
    }, 150);
  }
});
var tagsPreCode = function tagsPreCode() {
  tagCodes = document.querySelectorAll('code');
  if (tagCodes) {
    tagCodes.forEach(function (code) {
      code.innerHTML = "<div class=\"flex items-center gap-1.5 mb-4\"> \n                                <div class=\"w-3 h-3 rounded-full bg-[#F77963]\"></div> \n                                <div class=\"w-3 h-3 rounded-full bg-[#F89B4A]\"></div> \n                                <div class=\"w-3 h-3 rounded-full bg-[#41C662]\"></div> \n                              </div>" + code.innerHTML;
    });
  }
};

// Easter Egg
var loading = function loading() {
  var pipe = [];
  var count = 0;
  var interval = setInterval(function () {
    count++;
    pipe.push('|');
    console.clear();
    console.log("%cBaixando... ".concat(pipe.join('|')), 'font-size: .675rem; font-weight: 700');
    if (count === 10) clearInterval(interval);
  }, 300);
};
var openTabs = function openTabs() {
  var brandings = document.querySelectorAll('.branding');
  var tabs = document.getElementById('tabs-companies');
  var companies = document.getElementById('companies');

  // Pega a altura padrão da Section
  var heightCompaniesSections = 0;
  if (companies) heightCompaniesSections = companies.getBoundingClientRect().height;

  // Pré-cacheia os elementos de tab
  var tabElements;
  if (tabs) tabElements = Array.from(tabs.children);

  // Adiciona o evento de click em cada branding
  brandings.forEach(function (branding) {
    branding.addEventListener('click', function (e) {
      // Reseta a altura da Section
      companies.style.height = 'auto';

      // Esconde todas as tabs abertas
      tabElements.forEach(function (tab) {
        tab.classList.replace('opacity-100', 'opacity-0');
        tab.classList.remove('z-10');
      });

      // Pega o nome da tab a ser exibida
      var targetTab = tabs.children.namedItem(branding.dataset.name);

      // Remove a classe de seleção de todos os elementos
      document.querySelectorAll('#companies .cursor-pointer').forEach(function (item) {
        return item.classList.remove('border-orange-500');
      });
      if (targetTab && !targetTab.classList.contains('opacity-100')) {
        // Pega a altura da Tab selecionada
        var heightTabCompanies = targetTab.getBoundingClientRect().height;

        // Ajusta dinamicamente a altura da section
        companies.style.height = "".concat(heightCompaniesSections + heightTabCompanies, "px");

        // Marca o branding como selecionado
        branding.classList.add('border-orange-500');

        // Exibe a tab correspondente
        targetTab.classList.replace('opacity-0', 'opacity-100');
        targetTab.classList.add('z-10');
      } else {
        // Se já estiver visível, oculta a tab
        targetTab.classList.replace('opacity-100', 'opacity-0');
        targetTab.classList.remove('z-10');
      }
    });
  });
};

// Init Functions
window.addEventListener('load', function () {
  tagsPreCode();
  openTabs();
  console.clear();
  console.log('%cMoisés Fausto', 'color: #f97316; font-size: 3rem; font-weight: 700');
  console.log('%cFull Stack Developer | PHP | Laravel | Vue Js', 'color: #f97316; font-size: 1.25rem; font-weight: 400');
  console.log('%cOuuu, o que cê ta fazendo aqui??? 🫣', 'font-size: 1.25rem; font-weight: 400');
});

/***/ }),

/***/ "./source/assets/js/nav.js":
/*!*********************************!*\
  !*** ./source/assets/js/nav.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Navbar Toggle
// provided by: https://mydnic.be/post/responsive-navigation-bar-with-tailwind-css-and-a-drop-of-javascript
document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        // Get the "main-nav" element
        var $target = document.getElementById('main-nav');

        // Toggle the class on "main-nav"
        $target.classList.toggle('hidden');
      });
    });
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qcy9uYXYuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImRhdGUiLCJEYXRlIiwiY3VycmVudFllYXIiLCJnZXRGdWxsWWVhciIsImV4cCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJleHBUb3QiLCJpbm5lclRleHQiLCJjb25jYXQiLCJtZW51QnRuIiwibmF2YmFyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImRlc2NyaXB0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJmb3JFYWNoIiwiZGVzY3JpcHRpb24iLCJzbGljZSIsImpvYnMiLCJ3aW5kb3ciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ5IiwiY291bnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInRhZ3NQcmVDb2RlIiwidGFnQ29kZXMiLCJjb2RlIiwiaW5uZXJIVE1MIiwibG9hZGluZyIsInBpcGUiLCJwdXNoIiwiY29uc29sZSIsImNsZWFyIiwibG9nIiwiam9pbiIsIm9wZW5UYWJzIiwiYnJhbmRpbmdzIiwidGFicyIsImNvbXBhbmllcyIsImhlaWdodENvbXBhbmllc1NlY3Rpb25zIiwiaGVpZ2h0IiwidGFiRWxlbWVudHMiLCJBcnJheSIsImZyb20iLCJjaGlsZHJlbiIsImJyYW5kaW5nIiwiZSIsInN0eWxlIiwidGFiIiwicmVwbGFjZSIsInJlbW92ZSIsInRhcmdldFRhYiIsIm5hbWVkSXRlbSIsImRhdGFzZXQiLCJuYW1lIiwiaXRlbSIsImNvbnRhaW5zIiwiaGVpZ2h0VGFiQ29tcGFuaWVzIiwiYWRkIiwiJG5hdmJhckJ1cmdlcnMiLCJwcm90b3R5cGUiLCJjYWxsIiwiJGVsIiwiJHRhcmdldCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBQSxtQkFBTyxDQUFDLHdDQUFPLENBQUM7QUFFaEIsSUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUksQ0FBRCxDQUFDO0FBQ3JCLElBQU1DLFdBQVcsR0FBR0YsSUFBSSxDQUFDRyxXQUFXLENBQUMsQ0FBQzs7QUFFdEM7QUFDQSxJQUFNQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUMxQyxJQUFNQyxNQUFNLEdBQUlMLFdBQVcsR0FBRyxJQUFJO0FBQ2xDLElBQUdFLEdBQUcsRUFBRUEsR0FBRyxDQUFDSSxTQUFTLE1BQUFDLE1BQUEsQ0FBTUYsTUFBTSxVQUFPOztBQUV4QztBQUNBLElBQUlMLFdBQVcsS0FBSyxJQUFJLEVBQ3BCRyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQ0UsU0FBUyxHQUFHTixXQUFXLE1BRS9ERyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQ0UsU0FBUyxhQUFBQyxNQUFBLENBQWFQLFdBQVcsQ0FBRTs7QUFHL0U7QUFDQSxJQUFNUSxPQUFPLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQztBQUN4RCxJQUFNSyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGdCQUFnQixDQUFDO0FBQ3hESSxPQUFPLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ3BDRCxNQUFNLENBQUNFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUNyQyxDQUFDLENBQUM7O0FBRUY7QUFDQSxJQUFNQyxZQUFZLEdBQUdWLFFBQVEsQ0FBQ1csZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0FBQzlELElBQUlELFlBQVksQ0FBQ0UsTUFBTSxFQUFFO0VBQ3JCRixZQUFZLENBQUNHLE9BQU8sQ0FBQyxVQUFBQyxXQUFXLEVBQUk7SUFDaEMsSUFBSUEsV0FBVyxDQUFDWCxTQUFTLENBQUNTLE1BQU0sSUFBSSxFQUFFLEVBQUVFLFdBQVcsQ0FBQ1gsU0FBUyxNQUFBQyxNQUFBLENBQU1VLFdBQVcsQ0FBQ1gsU0FBUyxDQUFDWSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFLO0VBQzlHLENBQUMsQ0FBQztBQUNOOztBQUVBO0FBQ0EsSUFBTUMsSUFBSSxHQUFHaEIsUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDO0FBQzVDZ0IsTUFBTSxDQUFDVixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtFQUNwQyxJQUFJUyxJQUFJLElBQUlBLElBQUksQ0FBQ0UscUJBQXFCLENBQUMsQ0FBQyxDQUFDQyxDQUFDLElBQUksR0FBRyxFQUFFO0lBQy9DLElBQUlDLEtBQUssR0FBRyxDQUFDO0lBQ2IsSUFBTUMsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtNQUMvQkYsS0FBSyxHQUFHQSxLQUFLLEdBQUcsQ0FBQztNQUNqQkosSUFBSSxDQUFDYixTQUFTLE1BQUFDLE1BQUEsQ0FBTWdCLEtBQUssTUFBRztNQUU1QixJQUFJQSxLQUFLLEtBQUssRUFBRSxFQUFFRyxhQUFhLENBQUNGLFFBQVEsQ0FBQztJQUM3QyxDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ1g7QUFDSixDQUFDLENBQUM7QUFFRixJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0VBQ3RCQyxRQUFRLEdBQUd6QixRQUFRLENBQUNXLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztFQUU1QyxJQUFJYyxRQUFRLEVBQUU7SUFDVkEsUUFBUSxDQUFDWixPQUFPLENBQUMsVUFBQWEsSUFBSSxFQUFJO01BQ3JCQSxJQUFJLENBQUNDLFNBQVMsR0FBRyx3V0FJV0QsSUFBSSxDQUFDQyxTQUFTO0lBQzlDLENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQzs7QUFFRDtBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQVM7RUFDbEIsSUFBSUMsSUFBSSxHQUFHLEVBQUU7RUFDYixJQUFJVCxLQUFLLEdBQUcsQ0FBQztFQUViLElBQU1DLFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQU07SUFDL0JGLEtBQUssRUFBRTtJQUNQUyxJQUFJLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDZEMsT0FBTyxDQUFDQyxLQUFLLENBQUMsQ0FBQztJQUNmRCxPQUFPLENBQUNFLEdBQUcsa0JBQUE3QixNQUFBLENBQWtCeUIsSUFBSSxDQUFDSyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUksc0NBQXNDLENBQUM7SUFFdEYsSUFBSWQsS0FBSyxLQUFLLEVBQUUsRUFBRUcsYUFBYSxDQUFDRixRQUFRLENBQUM7RUFDN0MsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUNYLENBQUM7QUFFRCxJQUFNYyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBQ25CLElBQU1DLFNBQVMsR0FBR3BDLFFBQVEsQ0FBQ1csZ0JBQWdCLENBQUMsV0FBVyxDQUFDO0VBQ3hELElBQU0wQixJQUFJLEdBQUdyQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztFQUN0RCxJQUFNcUMsU0FBUyxHQUFHdEMsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDOztFQUV0RDtFQUNBLElBQUlzQyx1QkFBdUIsR0FBRyxDQUFDO0VBQy9CLElBQUlELFNBQVMsRUFDVEMsdUJBQXVCLEdBQUdELFNBQVMsQ0FBQ3BCLHFCQUFxQixDQUFDLENBQUMsQ0FBQ3NCLE1BQU07O0VBRXRFO0VBQ0EsSUFBSUMsV0FBVztFQUNmLElBQUlKLElBQUksRUFDSkksV0FBVyxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQ04sSUFBSSxDQUFDTyxRQUFRLENBQUM7O0VBRTNDO0VBQ0FSLFNBQVMsQ0FBQ3ZCLE9BQU8sQ0FBQyxVQUFBZ0MsUUFBUSxFQUFJO0lBQzFCQSxRQUFRLENBQUN0QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ3VDLENBQUMsRUFBSztNQUN0QztNQUNBUixTQUFTLENBQUNTLEtBQUssQ0FBQ1AsTUFBTSxHQUFHLE1BQU07O01BRS9CO01BQ0FDLFdBQVcsQ0FBQzVCLE9BQU8sQ0FBQyxVQUFBbUMsR0FBRyxFQUFJO1FBQ3pCQSxHQUFHLENBQUN4QyxTQUFTLENBQUN5QyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQztRQUNqREQsR0FBRyxDQUFDeEMsU0FBUyxDQUFDMEMsTUFBTSxDQUFDLE1BQU0sQ0FBQztNQUM5QixDQUFDLENBQUM7O01BRUY7TUFDQSxJQUFNQyxTQUFTLEdBQUdkLElBQUksQ0FBQ08sUUFBUSxDQUFDUSxTQUFTLENBQUNQLFFBQVEsQ0FBQ1EsT0FBTyxDQUFDQyxJQUFJLENBQUM7O01BRWhFO01BQ0F0RCxRQUFRLENBQUNXLGdCQUFnQixDQUFDLDRCQUE0QixDQUFDLENBQUNFLE9BQU8sQ0FBQyxVQUFBMEMsSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQy9DLFNBQVMsQ0FBQzBDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztNQUFBLEVBQUM7TUFFbkgsSUFBSUMsU0FBUyxJQUFJLENBQUNBLFNBQVMsQ0FBQzNDLFNBQVMsQ0FBQ2dELFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUMzRDtRQUNBLElBQU1DLGtCQUFrQixHQUFHTixTQUFTLENBQUNqQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUNzQixNQUFNOztRQUVuRTtRQUNBRixTQUFTLENBQUNTLEtBQUssQ0FBQ1AsTUFBTSxNQUFBcEMsTUFBQSxDQUFNbUMsdUJBQXVCLEdBQUdrQixrQkFBa0IsT0FBSTs7UUFFNUU7UUFDQVosUUFBUSxDQUFDckMsU0FBUyxDQUFDa0QsR0FBRyxDQUFDLG1CQUFtQixDQUFDOztRQUUzQztRQUNBUCxTQUFTLENBQUMzQyxTQUFTLENBQUN5QyxPQUFPLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQztRQUN2REUsU0FBUyxDQUFDM0MsU0FBUyxDQUFDa0QsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUNuQyxDQUFDLE1BQU07UUFDSDtRQUNBUCxTQUFTLENBQUMzQyxTQUFTLENBQUN5QyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQztRQUN2REUsU0FBUyxDQUFDM0MsU0FBUyxDQUFDMEMsTUFBTSxDQUFDLE1BQU0sQ0FBQztNQUN0QztJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOLENBQUM7O0FBRUQ7QUFDQWpDLE1BQU0sQ0FBQ1YsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQU07RUFDbENpQixXQUFXLENBQUMsQ0FBQztFQUNiVyxRQUFRLENBQUMsQ0FBQztFQUVWSixPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUFDO0VBQ2ZELE9BQU8sQ0FBQ0UsR0FBRyxDQUFDLGlCQUFpQixFQUFFLG1EQUFtRCxDQUFDO0VBQ25GRixPQUFPLENBQUNFLEdBQUcsQ0FBQyxpREFBaUQsRUFBRSxzREFBc0QsQ0FBQztFQUN0SEYsT0FBTyxDQUFDRSxHQUFHLENBQUMsd0NBQXdDLEVBQUUsc0NBQXNDLENBQUM7QUFDakcsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7O0FDM0lGO0FBQ0E7QUFDQWpDLFFBQVEsQ0FBQ08sZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUV0RDtFQUNBLElBQUlvRCxjQUFjLEdBQUdqQixLQUFLLENBQUNrQixTQUFTLENBQUM3QyxLQUFLLENBQUM4QyxJQUFJLENBQUM3RCxRQUFRLENBQUNXLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDOztFQUUvRjtFQUNBLElBQUlnRCxjQUFjLENBQUMvQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBRTNCO0lBQ0ErQyxjQUFjLENBQUM5QyxPQUFPLENBQUMsVUFBVWlELEdBQUcsRUFBRTtNQUNsQ0EsR0FBRyxDQUFDdkQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7UUFFdEM7UUFDQSxJQUFJd0QsT0FBTyxHQUFHL0QsUUFBUSxDQUFDQyxjQUFjLENBQUMsVUFBVSxDQUFDOztRQUVqRDtRQUNBOEQsT0FBTyxDQUFDdkQsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO01BRXRDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0FBRUosQ0FBQyxDQUFDLEMiLCJmaWxlIjoianMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc291cmNlL2Fzc2V0cy9qcy9hcHAuanNcIik7XG4iLCJyZXF1aXJlKCcuL25hdicpO1xuXG5jb25zdCBkYXRlID0gbmV3IERhdGU7XG5jb25zdCBjdXJyZW50WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuXG4vLyBCbG9jbyBIb21lXG5jb25zdCBleHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwJylcbmNvbnN0IGV4cFRvdCA9ICBjdXJyZW50WWVhciAtIDIwMTg7XG5pZihleHApIGV4cC5pbm5lclRleHQgPSBgJHtleHBUb3R9IGFub3NgXG5cbi8vIEJsb2NvIEZvb3RlclxuaWYgKGN1cnJlbnRZZWFyID09PSAyMDI0KVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXllYXInKS5pbm5lclRleHQgPSBjdXJyZW50WWVhclxuZWxzZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50LXllYXInKS5pbm5lclRleHQgPSBgMjAyNCAtICR7Y3VycmVudFllYXJ9YFxuXG5cbi8vIE1lbnVcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1jb2xsYXBzZScpXG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyLWRlZmF1bHQnKVxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbn0pXG5cbi8vIExpbWl0ZSBkZSB0ZXh0b1xuY29uc3QgZGVzY3JpcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Rlc2NyaXB0aW9uJylcbmlmIChkZXNjcmlwdGlvbnMubGVuZ3RoKSB7XG4gICAgZGVzY3JpcHRpb25zLmZvckVhY2goZGVzY3JpcHRpb24gPT4ge1xuICAgICAgICBpZiAoZGVzY3JpcHRpb24uaW5uZXJUZXh0Lmxlbmd0aCA+PSA5NCkgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gYCR7ZGVzY3JpcHRpb24uaW5uZXJUZXh0LnNsaWNlKDAsIDk0KX0uLi5gXG4gICAgfSlcbn1cblxuLy8gSW5jcmVtZW50YSBKb2JzXG5jb25zdCBqb2JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pvYnMnKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgaWYgKGpvYnMgJiYgam9icy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55ID49IDk3MCkge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvdW50ID0gY291bnQgKyAxO1xuICAgICAgICAgICAgam9icy5pbm5lclRleHQgPSBgJHtjb3VudH0rYDtcblxuICAgICAgICAgICAgaWYgKGNvdW50ID09PSAxMCkgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH0sIDE1MCk7XG4gICAgfVxufSlcblxuY29uc3QgdGFnc1ByZUNvZGUgPSAoKSA9PiB7XG4gICAgdGFnQ29kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjb2RlJylcblxuICAgIGlmICh0YWdDb2Rlcykge1xuICAgICAgICB0YWdDb2Rlcy5mb3JFYWNoKGNvZGUgPT4ge1xuICAgICAgICAgICAgY29kZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgbWItNFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMyBoLTMgcm91bmRlZC1mdWxsIGJnLVsjRjc3OTYzXVwiPjwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMyBoLTMgcm91bmRlZC1mdWxsIGJnLVsjRjg5QjRBXVwiPjwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMyBoLTMgcm91bmRlZC1mdWxsIGJnLVsjNDFDNjYyXVwiPjwvZGl2PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmAgKyBjb2RlLmlubmVySFRNTDtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbi8vIEVhc3RlciBFZ2dcbmNvbnN0IGxvYWRpbmcgPSAoKSA9PiB7XG4gICAgbGV0IHBpcGUgPSBbXVxuICAgIGxldCBjb3VudCA9IDBcblxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjb3VudCsrO1xuICAgICAgICBwaXBlLnB1c2goJ3wnKTtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICBjb25zb2xlLmxvZyhgJWNCYWl4YW5kby4uLiAke3BpcGUuam9pbignfCcpfWAsICdmb250LXNpemU6IC42NzVyZW07IGZvbnQtd2VpZ2h0OiA3MDAnKVxuXG4gICAgICAgIGlmIChjb3VudCA9PT0gMTApIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gICAgfSwgMzAwKVxufVxuXG5jb25zdCBvcGVuVGFicyA9ICgpID0+IHtcbiAgICBjb25zdCBicmFuZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnJhbmRpbmcnKTtcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYnMtY29tcGFuaWVzJyk7XG4gICAgY29uc3QgY29tcGFuaWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBhbmllcycpO1xuXG4gICAgLy8gUGVnYSBhIGFsdHVyYSBwYWRyw6NvIGRhIFNlY3Rpb25cbiAgICBsZXQgaGVpZ2h0Q29tcGFuaWVzU2VjdGlvbnMgPSAwO1xuICAgIGlmIChjb21wYW5pZXMpXG4gICAgICAgIGhlaWdodENvbXBhbmllc1NlY3Rpb25zID0gY29tcGFuaWVzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIC8vIFByw6ktY2FjaGVpYSBvcyBlbGVtZW50b3MgZGUgdGFiXG4gICAgbGV0IHRhYkVsZW1lbnRzO1xuICAgIGlmICh0YWJzKVxuICAgICAgICB0YWJFbGVtZW50cyA9IEFycmF5LmZyb20odGFicy5jaGlsZHJlbik7XG5cbiAgICAvLyBBZGljaW9uYSBvIGV2ZW50byBkZSBjbGljayBlbSBjYWRhIGJyYW5kaW5nXG4gICAgYnJhbmRpbmdzLmZvckVhY2goYnJhbmRpbmcgPT4ge1xuICAgICAgICBicmFuZGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBSZXNldGEgYSBhbHR1cmEgZGEgU2VjdGlvblxuICAgICAgICAgICAgY29tcGFuaWVzLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcblxuICAgICAgICAgICAgLy8gRXNjb25kZSB0b2RhcyBhcyB0YWJzIGFiZXJ0YXNcbiAgICAgICAgICAgIHRhYkVsZW1lbnRzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZXBsYWNlKCdvcGFjaXR5LTEwMCcsICdvcGFjaXR5LTAnKVxuICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnei0xMCcpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFBlZ2EgbyBub21lIGRhIHRhYiBhIHNlciBleGliaWRhXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRUYWIgPSB0YWJzLmNoaWxkcmVuLm5hbWVkSXRlbShicmFuZGluZy5kYXRhc2V0Lm5hbWUpO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgYSBjbGFzc2UgZGUgc2VsZcOnw6NvIGRlIHRvZG9zIG9zIGVsZW1lbnRvc1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbXBhbmllcyAuY3Vyc29yLXBvaW50ZXInKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdib3JkZXItb3JhbmdlLTUwMCcpKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldFRhYiAmJiAhdGFyZ2V0VGFiLmNsYXNzTGlzdC5jb250YWlucygnb3BhY2l0eS0xMDAnKSkge1xuICAgICAgICAgICAgICAgIC8vIFBlZ2EgYSBhbHR1cmEgZGEgVGFiIHNlbGVjaW9uYWRhXG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0VGFiQ29tcGFuaWVzID0gdGFyZ2V0VGFiLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgICAgICAgICAgICAgIC8vIEFqdXN0YSBkaW5hbWljYW1lbnRlIGEgYWx0dXJhIGRhIHNlY3Rpb25cbiAgICAgICAgICAgICAgICBjb21wYW5pZXMuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0Q29tcGFuaWVzU2VjdGlvbnMgKyBoZWlnaHRUYWJDb21wYW5pZXN9cHhgO1xuXG4gICAgICAgICAgICAgICAgLy8gTWFyY2EgbyBicmFuZGluZyBjb21vIHNlbGVjaW9uYWRvXG4gICAgICAgICAgICAgICAgYnJhbmRpbmcuY2xhc3NMaXN0LmFkZCgnYm9yZGVyLW9yYW5nZS01MDAnKTtcblxuICAgICAgICAgICAgICAgIC8vIEV4aWJlIGEgdGFiIGNvcnJlc3BvbmRlbnRlXG4gICAgICAgICAgICAgICAgdGFyZ2V0VGFiLmNsYXNzTGlzdC5yZXBsYWNlKCdvcGFjaXR5LTAnLCAnb3BhY2l0eS0xMDAnKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRUYWIuY2xhc3NMaXN0LmFkZCgnei0xMCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTZSBqw6EgZXN0aXZlciB2aXPDrXZlbCwgb2N1bHRhIGEgdGFiXG4gICAgICAgICAgICAgICAgdGFyZ2V0VGFiLmNsYXNzTGlzdC5yZXBsYWNlKCdvcGFjaXR5LTEwMCcsICdvcGFjaXR5LTAnKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRUYWIuY2xhc3NMaXN0LnJlbW92ZSgnei0xMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuLy8gSW5pdCBGdW5jdGlvbnNcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIHRhZ3NQcmVDb2RlKCk7XG4gICAgb3BlblRhYnMoKTtcblxuICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICBjb25zb2xlLmxvZygnJWNNb2lzw6lzIEZhdXN0bycsICdjb2xvcjogI2Y5NzMxNjsgZm9udC1zaXplOiAzcmVtOyBmb250LXdlaWdodDogNzAwJylcbiAgICBjb25zb2xlLmxvZygnJWNGdWxsIFN0YWNrIERldmVsb3BlciB8IFBIUCB8IExhcmF2ZWwgfCBWdWUgSnMnLCAnY29sb3I6ICNmOTczMTY7IGZvbnQtc2l6ZTogMS4yNXJlbTsgZm9udC13ZWlnaHQ6IDQwMCcpXG4gICAgY29uc29sZS5sb2coJyVjT3V1dSwgbyBxdWUgY8OqIHRhIGZhemVuZG8gYXF1aT8/PyDwn6ujJywgJ2ZvbnQtc2l6ZTogMS4yNXJlbTsgZm9udC13ZWlnaHQ6IDQwMCcpXG59KSIsIi8vIE5hdmJhciBUb2dnbGVcbi8vIHByb3ZpZGVkIGJ5OiBodHRwczovL215ZG5pYy5iZS9wb3N0L3Jlc3BvbnNpdmUtbmF2aWdhdGlvbi1iYXItd2l0aC10YWlsd2luZC1jc3MtYW5kLWEtZHJvcC1vZi1qYXZhc2NyaXB0XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gR2V0IGFsbCBcIm5hdmJhci1idXJnZXJcIiBlbGVtZW50c1xuICAgIHZhciAkbmF2YmFyQnVyZ2VycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXItYnVyZ2VyJyksIDApO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBuYXZiYXIgYnVyZ2Vyc1xuICAgIGlmICgkbmF2YmFyQnVyZ2Vycy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgLy8gQWRkIGEgY2xpY2sgZXZlbnQgb24gZWFjaCBvZiB0aGVtXG4gICAgICAgICRuYXZiYXJCdXJnZXJzLmZvckVhY2goZnVuY3Rpb24gKCRlbCkge1xuICAgICAgICAgICAgJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBcIm1haW4tbmF2XCIgZWxlbWVudFxuICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tbmF2Jyk7XG5cbiAgICAgICAgICAgICAgICAvLyBUb2dnbGUgdGhlIGNsYXNzIG9uIFwibWFpbi1uYXZcIlxuICAgICAgICAgICAgICAgICR0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=