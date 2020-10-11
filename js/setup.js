'use strict';

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

var PLAYER_NUMBER = 4;

var setup = document.querySelector('.setup');
// var setupBoxSimilar = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var similarPlayerTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');

var onSetupPressEsc = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    setup.classList.add('hidden');
  }
};

var openSetup = function() {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onSetupPressEsc);
};

var closeSetup = function() {
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


var shuffledPlayerNames = getShuffleArray(PLAYER_NAMES);
var shuffledPlayerSecondNames = getShuffleArray(PLAYER_SECOND_NAMES);
var shuffledPlayerCoatColors = getShuffleArray(PLAYER_COAT_COLORS);
var shuffledPlayerEyesColor = getShuffleArray(PLAYER_EYES_COLORS);


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

// setupBoxSimilar.classList.remove('hidden');


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

getSimilarWizards(PLAYER_NUMBER);

