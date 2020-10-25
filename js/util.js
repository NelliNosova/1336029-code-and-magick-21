'use strict';

(function () {
  var MIN_ARRAY_INDEX = 0;

  var getRandomIndex = function (array) {
    return Math.floor(Math.random() * (array.length - MIN_ARRAY_INDEX) + MIN_ARRAY_INDEX);
  };

  var getFillColor = function (elem, array) {
    elem.addEventListener('click', function () {
      var indexColor = getRandomIndex(array);
      elem.style.fill = array[indexColor];
      elem.value = array[indexColor];
    });
  };

  var getBackgroundColor = function (elem, array) {
    elem.addEventListener('click', function () {
      var indexColor = getRandomIndex(array);
      elem.style.backgroundColor = array[indexColor];
      elem.value = array[indexColor];
    });
  };

  var getShuffleArray = function (array) {
    var shuffledArray = array.slice();
    for (var i = shuffledArray.length - 1; i > 0; i--) {
      var temp;
      var j = Math.floor(Math.random() * (i + 1));
      temp = shuffledArray[j];
      shuffledArray[j] = shuffledArray[i];
      shuffledArray[i] = temp;
    }
    return shuffledArray;
  };

  window.util = {
    getFillColor: getFillColor,
    getBackgroundColor: getBackgroundColor,
    getShuffleArray: getShuffleArray
  };
})();
