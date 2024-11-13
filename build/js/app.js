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
  tabElements[0].classList.replace('opacity-0', 'opacity-100');
  brandings[0].classList.add('border-orange-500');
  companies.style.height = "".concat(heightCompaniesSections + tabElements[0].getBoundingClientRect().height, "px");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qcy9uYXYuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImRhdGUiLCJEYXRlIiwiY3VycmVudFllYXIiLCJnZXRGdWxsWWVhciIsImV4cCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJleHBUb3QiLCJpbm5lclRleHQiLCJjb25jYXQiLCJtZW51QnRuIiwibmF2YmFyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImRlc2NyaXB0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJmb3JFYWNoIiwiZGVzY3JpcHRpb24iLCJzbGljZSIsImpvYnMiLCJ3aW5kb3ciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ5IiwiY291bnQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInRhZ3NQcmVDb2RlIiwidGFnQ29kZXMiLCJjb2RlIiwiaW5uZXJIVE1MIiwibG9hZGluZyIsInBpcGUiLCJwdXNoIiwiY29uc29sZSIsImNsZWFyIiwibG9nIiwiam9pbiIsIm9wZW5UYWJzIiwiYnJhbmRpbmdzIiwidGFicyIsImNvbXBhbmllcyIsImhlaWdodENvbXBhbmllc1NlY3Rpb25zIiwiaGVpZ2h0IiwidGFiRWxlbWVudHMiLCJBcnJheSIsImZyb20iLCJjaGlsZHJlbiIsInJlcGxhY2UiLCJhZGQiLCJzdHlsZSIsImJyYW5kaW5nIiwiZSIsInRhYiIsInJlbW92ZSIsInRhcmdldFRhYiIsIm5hbWVkSXRlbSIsImRhdGFzZXQiLCJuYW1lIiwiaXRlbSIsImNvbnRhaW5zIiwiaGVpZ2h0VGFiQ29tcGFuaWVzIiwiJG5hdmJhckJ1cmdlcnMiLCJwcm90b3R5cGUiLCJjYWxsIiwiJGVsIiwiJHRhcmdldCJdLCJtYXBwaW5ncyI6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QUFDLENBQUM7RUFFVkosT0FBTyxDQUFDQyxLQUFLLENBQUMsQ0FBQztFQUNmRCxPQUFPLENBQUNFLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxtREFBbUQsQ0FBQztFQUNuRkYsT0FBTyxDQUFDRSxHQUFHLENBQUMsaURBQWlELEVBQUUsc0RBQXNELENBQUM7RUFDdEhGLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDLHdDQUF3QyxFQUFFLHNDQUFzQyxDQUFDO0FBQ2pHLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7OztBQy9JRjtBQUNBO0FBQ0FqQyxRQUFRLENBQUNPLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFFdEQ7RUFDQSxJQUFJb0QsY0FBYyxHQUFHakIsS0FBSyxDQUFDa0IsU0FBUyxDQUFDN0MsS0FBSyxDQUFDOEMsSUFBSSxDQUFDN0QsUUFBUSxDQUFDVyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7RUFFL0Y7RUFDQSxJQUFJZ0QsY0FBYyxDQUFDL0MsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUUzQjtJQUNBK0MsY0FBYyxDQUFDOUMsT0FBTyxDQUFDLFVBQVVpRCxHQUFHLEVBQUU7TUFDbENBLEdBQUcsQ0FBQ3ZELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO1FBRXRDO1FBQ0EsSUFBSXdELE9BQU8sR0FBRy9ELFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQzs7UUFFakQ7UUFDQThELE9BQU8sQ0FBQ3ZELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUV0QyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTjtBQUVKLENBQUMsQ0FBQyxDIiwiZmlsZSI6ImpzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NvdXJjZS9hc3NldHMvanMvYXBwLmpzXCIpO1xuIiwicmVxdWlyZSgnLi9uYXYnKTtcblxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlO1xuY29uc3QgY3VycmVudFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcblxuLy8gQmxvY28gSG9tZVxuY29uc3QgZXhwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cCcpXG5jb25zdCBleHBUb3QgPSAgY3VycmVudFllYXIgLSAyMDE4O1xuaWYoZXhwKSBleHAuaW5uZXJUZXh0ID0gYCR7ZXhwVG90fSBhbm9zYFxuXG4vLyBCbG9jbyBGb290ZXJcbmlmIChjdXJyZW50WWVhciA9PT0gMjAyNClcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC15ZWFyJykuaW5uZXJUZXh0ID0gY3VycmVudFllYXJcbmVsc2VcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC15ZWFyJykuaW5uZXJUZXh0ID0gYDIwMjQgLSAke2N1cnJlbnRZZWFyfWBcblxuXG4vLyBNZW51XG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtY29sbGFwc2UnKVxuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhci1kZWZhdWx0Jylcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG59KVxuXG4vLyBMaW1pdGUgZGUgdGV4dG9cbmNvbnN0IGRlc2NyaXB0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNkZXNjcmlwdGlvbicpXG5pZiAoZGVzY3JpcHRpb25zLmxlbmd0aCkge1xuICAgIGRlc2NyaXB0aW9ucy5mb3JFYWNoKGRlc2NyaXB0aW9uID0+IHtcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uLmlubmVyVGV4dC5sZW5ndGggPj0gOTQpIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGAke2Rlc2NyaXB0aW9uLmlubmVyVGV4dC5zbGljZSgwLCA5NCl9Li4uYFxuICAgIH0pXG59XG5cbi8vIEluY3JlbWVudGEgSm9ic1xuY29uc3Qgam9icyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqb2JzJyk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgIGlmIChqb2JzICYmIGpvYnMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSA+PSA5NzApIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb3VudCA9IGNvdW50ICsgMTtcbiAgICAgICAgICAgIGpvYnMuaW5uZXJUZXh0ID0gYCR7Y291bnR9K2A7XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMTApIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9LCAxNTApO1xuICAgIH1cbn0pXG5cbmNvbnN0IHRhZ3NQcmVDb2RlID0gKCkgPT4ge1xuICAgIHRhZ0NvZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY29kZScpXG5cbiAgICBpZiAodGFnQ29kZXMpIHtcbiAgICAgICAgdGFnQ29kZXMuZm9yRWFjaChjb2RlID0+IHtcbiAgICAgICAgICAgIGNvZGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IG1iLTRcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTMgaC0zIHJvdW5kZWQtZnVsbCBiZy1bI0Y3Nzk2M11cIj48L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTMgaC0zIHJvdW5kZWQtZnVsbCBiZy1bI0Y4OUI0QV1cIj48L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTMgaC0zIHJvdW5kZWQtZnVsbCBiZy1bIzQxQzY2Ml1cIj48L2Rpdj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gICsgY29kZS5pbm5lckhUTUw7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vLyBFYXN0ZXIgRWdnXG5jb25zdCBsb2FkaW5nID0gKCkgPT4ge1xuICAgIGxldCBwaXBlID0gW11cbiAgICBsZXQgY291bnQgPSAwXG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY291bnQrKztcbiAgICAgICAgcGlwZS5wdXNoKCd8Jyk7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coYCVjQmFpeGFuZG8uLi4gJHtwaXBlLmpvaW4oJ3wnKX1gLCAnZm9udC1zaXplOiAuNjc1cmVtOyBmb250LXdlaWdodDogNzAwJylcblxuICAgICAgICBpZiAoY291bnQgPT09IDEwKSBjbGVhckludGVydmFsKGludGVydmFsKVxuICAgIH0sIDMwMClcbn1cblxuY29uc3Qgb3BlblRhYnMgPSAoKSA9PiB7XG4gICAgY29uc3QgYnJhbmRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJyYW5kaW5nJyk7XG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJzLWNvbXBhbmllcycpO1xuICAgIGNvbnN0IGNvbXBhbmllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wYW5pZXMnKTtcblxuICAgIC8vIFBlZ2EgYSBhbHR1cmEgcGFkcsOjbyBkYSBTZWN0aW9uXG4gICAgbGV0IGhlaWdodENvbXBhbmllc1NlY3Rpb25zID0gMDtcbiAgICBpZiAoY29tcGFuaWVzKVxuICAgICAgICBoZWlnaHRDb21wYW5pZXNTZWN0aW9ucyA9IGNvbXBhbmllcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAvLyBQcsOpLWNhY2hlaWEgb3MgZWxlbWVudG9zIGRlIHRhYlxuICAgIGxldCB0YWJFbGVtZW50cztcbiAgICBpZiAodGFicylcbiAgICAgICAgdGFiRWxlbWVudHMgPSBBcnJheS5mcm9tKHRhYnMuY2hpbGRyZW4pO1xuXG4gICAgdGFiRWxlbWVudHNbMF0uY2xhc3NMaXN0LnJlcGxhY2UoJ29wYWNpdHktMCcsICdvcGFjaXR5LTEwMCcpO1xuICAgIGJyYW5kaW5nc1swXS5jbGFzc0xpc3QuYWRkKCdib3JkZXItb3JhbmdlLTUwMCcpO1xuICAgIGNvbXBhbmllcy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHRDb21wYW5pZXNTZWN0aW9ucyArIHRhYkVsZW1lbnRzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodH1weGA7XG5cbiAgICAvLyBBZGljaW9uYSBvIGV2ZW50byBkZSBjbGljayBlbSBjYWRhIGJyYW5kaW5nXG4gICAgYnJhbmRpbmdzLmZvckVhY2goYnJhbmRpbmcgPT4ge1xuICAgICAgICBicmFuZGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBSZXNldGEgYSBhbHR1cmEgZGEgU2VjdGlvblxuICAgICAgICAgICAgY29tcGFuaWVzLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcblxuICAgICAgICAgICAgLy8gRXNjb25kZSB0b2RhcyBhcyB0YWJzIGFiZXJ0YXNcbiAgICAgICAgICAgIHRhYkVsZW1lbnRzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZXBsYWNlKCdvcGFjaXR5LTEwMCcsICdvcGFjaXR5LTAnKVxuICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnei0xMCcpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFBlZ2EgbyBub21lIGRhIHRhYiBhIHNlciBleGliaWRhXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRUYWIgPSB0YWJzLmNoaWxkcmVuLm5hbWVkSXRlbShicmFuZGluZy5kYXRhc2V0Lm5hbWUpO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgYSBjbGFzc2UgZGUgc2VsZcOnw6NvIGRlIHRvZG9zIG9zIGVsZW1lbnRvc1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbXBhbmllcyAuY3Vyc29yLXBvaW50ZXInKS5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdib3JkZXItb3JhbmdlLTUwMCcpKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldFRhYiAmJiAhdGFyZ2V0VGFiLmNsYXNzTGlzdC5jb250YWlucygnb3BhY2l0eS0xMDAnKSkge1xuICAgICAgICAgICAgICAgIC8vIFBlZ2EgYSBhbHR1cmEgZGEgVGFiIHNlbGVjaW9uYWRhXG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0VGFiQ29tcGFuaWVzID0gdGFyZ2V0VGFiLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgICAgICAgICAgICAgIC8vIEFqdXN0YSBkaW5hbWljYW1lbnRlIGEgYWx0dXJhIGRhIHNlY3Rpb25cbiAgICAgICAgICAgICAgICBjb21wYW5pZXMuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0Q29tcGFuaWVzU2VjdGlvbnMgKyBoZWlnaHRUYWJDb21wYW5pZXN9cHhgO1xuXG4gICAgICAgICAgICAgICAgLy8gTWFyY2EgbyBicmFuZGluZyBjb21vIHNlbGVjaW9uYWRvXG4gICAgICAgICAgICAgICAgYnJhbmRpbmcuY2xhc3NMaXN0LmFkZCgnYm9yZGVyLW9yYW5nZS01MDAnKTtcblxuICAgICAgICAgICAgICAgIC8vIEV4aWJlIGEgdGFiIGNvcnJlc3BvbmRlbnRlXG4gICAgICAgICAgICAgICAgdGFyZ2V0VGFiLmNsYXNzTGlzdC5yZXBsYWNlKCdvcGFjaXR5LTAnLCAnb3BhY2l0eS0xMDAnKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRUYWIuY2xhc3NMaXN0LmFkZCgnei0xMCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTZSBqw6EgZXN0aXZlciB2aXPDrXZlbCwgb2N1bHRhIGEgdGFiXG4gICAgICAgICAgICAgICAgdGFyZ2V0VGFiLmNsYXNzTGlzdC5yZXBsYWNlKCdvcGFjaXR5LTEwMCcsICdvcGFjaXR5LTAnKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRUYWIuY2xhc3NMaXN0LnJlbW92ZSgnei0xMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuLy8gSW5pdCBGdW5jdGlvbnNcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIHRhZ3NQcmVDb2RlKCk7XG4gICAgb3BlblRhYnMoKTtcblxuICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICBjb25zb2xlLmxvZygnJWNNb2lzw6lzIEZhdXN0bycsICdjb2xvcjogI2Y5NzMxNjsgZm9udC1zaXplOiAzcmVtOyBmb250LXdlaWdodDogNzAwJylcbiAgICBjb25zb2xlLmxvZygnJWNGdWxsIFN0YWNrIERldmVsb3BlciB8IFBIUCB8IExhcmF2ZWwgfCBWdWUgSnMnLCAnY29sb3I6ICNmOTczMTY7IGZvbnQtc2l6ZTogMS4yNXJlbTsgZm9udC13ZWlnaHQ6IDQwMCcpXG4gICAgY29uc29sZS5sb2coJyVjT3V1dSwgbyBxdWUgY8OqIHRhIGZhemVuZG8gYXF1aT8/PyDwn6ujJywgJ2ZvbnQtc2l6ZTogMS4yNXJlbTsgZm9udC13ZWlnaHQ6IDQwMCcpXG59KSIsIi8vIE5hdmJhciBUb2dnbGVcbi8vIHByb3ZpZGVkIGJ5OiBodHRwczovL215ZG5pYy5iZS9wb3N0L3Jlc3BvbnNpdmUtbmF2aWdhdGlvbi1iYXItd2l0aC10YWlsd2luZC1jc3MtYW5kLWEtZHJvcC1vZi1qYXZhc2NyaXB0XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gR2V0IGFsbCBcIm5hdmJhci1idXJnZXJcIiBlbGVtZW50c1xuICAgIHZhciAkbmF2YmFyQnVyZ2VycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZiYXItYnVyZ2VyJyksIDApO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBuYXZiYXIgYnVyZ2Vyc1xuICAgIGlmICgkbmF2YmFyQnVyZ2Vycy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgLy8gQWRkIGEgY2xpY2sgZXZlbnQgb24gZWFjaCBvZiB0aGVtXG4gICAgICAgICRuYXZiYXJCdXJnZXJzLmZvckVhY2goZnVuY3Rpb24gKCRlbCkge1xuICAgICAgICAgICAgJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBcIm1haW4tbmF2XCIgZWxlbWVudFxuICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tbmF2Jyk7XG5cbiAgICAgICAgICAgICAgICAvLyBUb2dnbGUgdGhlIGNsYXNzIG9uIFwibWFpbi1uYXZcIlxuICAgICAgICAgICAgICAgICR0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=