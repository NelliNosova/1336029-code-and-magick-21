'use strict';

(function () {
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;

  var userNameInput = document.querySelector('.setup-user-name');

  userNameInput.addEventListener('input', function (evt) {
    var valueLength = evt.target.value.length;
    if (valueLength < MIN_NAME_LENGTH) {
      evt.target.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > MAX_NAME_LENGTH) {
      evt.target.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
    } else {
      evt.target.setCustomValidity('');
    }

    evt.target.reportValidity();
  });

  window.form = {
    userNameInput: userNameInput
  };
})();
