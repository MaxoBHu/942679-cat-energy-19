// Меню
"use strict";
(window.onload = function () {
  document.querySelector(".main-nav--open").classList.remove("main-nav--open");
  document.querySelector(".main-nav__menu-toggle").style.opacity = 1;
}),
  (document.querySelector(".main-nav__menu-toggle").onclick = function (n) {
    var e = document.querySelector(".main-nav");
    this.classList.toggle("main-nav__menu-toggle--active"),
      e.classList.toggle("main-nav--open"),
      n.preventDefault();
  }),
  window.addEventListener("resize", function (n) {
    docWidth < tabletWidth &&
      (document
        .querySelector(".main-nav--open")
        .classList.remove("main-nav--open"),
      (document.querySelector(".main-nav__menu-toggle").onclick = function (n) {
        var e = document.querySelector(".main-nav");
        this.classList.toggle("main-nav__menu-toggle--active"),
          e.classList.toggle("main-nav--open"),
          n.preventDefault();
      }));
  });

// Слайдер

  (function () {
    var MIN_LEVEL = 0;
    var MAX_LEVEL = 100;
    var SHIFT = 34;
    var SHIFT_PERCENT = 3.73;
    var TABLET_WIDTH = 768;
    var catBefore = document.querySelector('.slider__image-wrapper--before');
    var catAfter = document.querySelector('.slider__image-wrapper--after');
    var bar = document.querySelector('.slider__bar');
    var toggle = document.querySelector('.slider__toggle');
    var toggleBefore = document.querySelector('.slider__button--before');
    var toggleAfter = document.querySelector('.slider__button--after');

    var switchSlide = function (before, after) {
      if (catAfter.classList.contains('slider__image-wrapper--visible') && before) {
        catBefore.classList.add('slider__image-wrapper--visible');
        catAfter.classList.remove('slider__image-wrapper--visible');
        toggle.setAttribute('style', 'left: 7px; right: auto');

      } else if (catBefore.classList.contains('slider__image-wrapper--visible') && after) {
        catAfter.classList.add('slider__image-wrapper--visible');
        catBefore.classList.remove('slider__image-wrapper--visible');
        toggle.setAttribute('style', 'right: 7px; left: auto');
      }
    };

    var moveSlide = function (evt, elem, parent, firstWrap, secondWrap, mainWrap) {
      evt.preventDefault();

      var currentX = evt.clientX;

      var mousemoveHandler = function (moveEvt) {
        moveEvt.preventDefault();

        var shift = currentX - moveEvt.clientX;
        currentX = moveEvt.clientX;

        var elementShift = elem.offsetLeft - shift;
        var firstWrapShift = firstWrap.offsetWidth - shift;
        var secondWrapShift = secondWrap.offsetWidth - shift;

        if (elementShift <= parent.offsetWidth - SHIFT && elementShift >= MIN_LEVEL) {
          elem.style.left = (elementShift * MAX_LEVEL / parent.offsetWidth) + '%';
          firstWrap.style.width = MAX_LEVEL - (elementShift * MAX_LEVEL / parent.offsetWidth) - SHIFT_PERCENT + '%';
          secondWrap.style.width = (elementShift * MAX_LEVEL / parent.offsetWidth) + SHIFT_PERCENT + '%';
        }
      };

      var mouseupHandler = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', mousemoveHandler);
        document.removeEventListener('mouseup', mouseupHandler);
      };

      document.addEventListener('mousemove', mousemoveHandler);
      document.addEventListener('mouseup', mouseupHandler);
    };

    if (toggle) {
      toggle.addEventListener('mousedown', function (evt) {
        if (window.innerWidth >= TABLET_WIDTH) {
          moveSlide(evt, toggle, bar, catBefore, catAfter);
        }
      });
    }

    if (bar) {
      bar.addEventListener('click', function () {
        if (window.innerWidth < TABLET_WIDTH) {
          switchSlide(true, true);
        }
      });
    }

    if (toggleBefore) {
      toggleBefore.addEventListener('click', function () {
        if (window.innerWidth < TABLET_WIDTH) {
          switchSlide(true, false);
        } else {
          catBefore.style.width = '100%'
          catAfter.style.width = '0%'
          toggle.style.left = '0%';
        }
      });
    }

    if (toggleAfter) {
      toggleAfter.addEventListener('click', function () {
        if (window.innerWidth < TABLET_WIDTH) {
          switchSlide(false, true);
        } else {
          catBefore.style.width = '0%'
          catAfter.style.width = '100%'
          toggle.style.left = '92%';
        }
      });
    }

    if (catBefore) {
      window.addEventListener('resize', function (evt) {
        if (window.innerWidth < TABLET_WIDTH) {
          catBefore.classList.add('slider__image-wrapper--visible');
          catAfter.classList.remove('slider__image-wrapper--visible');
          catBefore.style.width = '';
          catAfter.style.width = '';
          toggle.style.left = '';
        }
      });
    }
  })();