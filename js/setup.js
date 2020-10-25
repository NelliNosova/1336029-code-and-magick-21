'use strict';
(function () {
  var PLAYER_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var PLAYER_SECOND_NAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг',
  ];

  var PLAYER_COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)',
  ];

  var PLAYER_EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var PLAYER_FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var PLAYER_NUMBER = 4;


  var setupBoxSimilar = document.querySelector('.setup-similar');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarPlayerTemplate = document.querySelector('#similar-wizard-template')
      .content.querySelector('.setup-similar-item');

  var wizardCoatColor = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireballColor = document.querySelector('.setup-fireball-wrap');


  var shuffledPlayerNames = window.util.getShuffleArray(PLAYER_NAMES);
  var shuffledPlayerSecondNames = window.util.getShuffleArray(PLAYER_SECOND_NAMES);
  var shuffledPlayerCoatColors = window.util.getShuffleArray(PLAYER_COAT_COLORS);
  var shuffledPlayerEyesColor = window.util.getShuffleArray(PLAYER_EYES_COLORS);

  var wizards = [];
  var getWizards = function (number) {
    for (var i = 0; i < number; i++) {
      var wizardCard = {
        name: shuffledPlayerNames[i] + ' ' + shuffledPlayerSecondNames[i],
        coatColor: shuffledPlayerCoatColors[i],
        eyesColor: shuffledPlayerEyesColor[i]
      };

      wizards.push(wizardCard);
    }
    return wizards;
  };

  getWizards(PLAYER_NUMBER);

  var renderWizard = function (wizard) {
    var wizardElement = similarPlayerTemplate.cloneNode(true);
    var wizardName = wizardElement.querySelector('.setup-similar-label');
    wizardName.textContent = wizard.name;

    var wizardCoat = wizardElement.querySelector('.wizard-coat');
    wizardCoat.style.fill = wizard.coatColor;

    var wizardEyes = wizardElement.querySelector('.wizard-eyes');
    wizardEyes.style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var getSimilarWizards = function (number) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < number; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };


  setupBoxSimilar.classList.remove('hidden');
  getWizards(PLAYER_NUMBER);
  getSimilarWizards(PLAYER_NUMBER);
  window.util.getFillColor(wizardCoatColor, PLAYER_COAT_COLORS);
  window.util.getFillColor(wizardEyesColor, PLAYER_EYES_COLORS);
  window.util.getBackgroundColor(wizardFireballColor, PLAYER_FIREBALL_COLORS);
})();
