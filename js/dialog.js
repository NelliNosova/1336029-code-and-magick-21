'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');

  var onSetupPressEsc = function (evt) {
    if (evt.key === 'Escape' && evt.target !== window.form.userNameInput) {
      evt.preventDefault();
      setup.classList.add('hidden');
    }
  };

  var openSetup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', onSetupPressEsc);
  };

  var closeSetup = function () {
    setup.classList.add('hidden');

    document.removeEventListener('keydown', onSetupPressEsc);
  };

  setupOpen.addEventListener('click', function () {
    openSetup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openSetup();
    }
  });

  setupClose.addEventListener('click', function () {
    closeSetup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closeSetup();
    }
  });

})();
