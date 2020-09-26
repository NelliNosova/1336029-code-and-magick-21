'use strict';

var setupBox = document.querySelector('.setup');
setupBox.classList.remove('hidden');

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

var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var getRandomItem = function (array) {
  var index = getRandomInt(0, array.length);
  return array[index];
};


var PLAYERS = [];
for (var i = 0; i < PLAYER_NUMBER; i++) {
  var PLAYER = {
    name: getRandomItem(PLAYER_NAMES) + ' ' + getRandomItem(PLAYER_SECOND_NAMES),
    coatColor: getRandomItem(PLAYER_COAT_COLORS),
    eyesColor: getRandomItem(PLAYER_EYES_COLORS)
  };

  PLAYERS.push(PLAYER);
}


document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarPlayerTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var j = 0; j < PLAYER_NUMBER; j++) {
  var playerElement = similarPlayerTemplate.cloneNode(true);

  var wizardName = playerElement.querySelector('.setup-similar-label');
  wizardName.textContent = PLAYERS[j].name;

  var wizardCoat = playerElement.querySelector('.wizard-coat');
  wizardCoat.style.fill = PLAYERS[j].coatColor;

  var wizardEyes = playerElement.querySelector('.wizard-eyes');
  wizardEyes.style.fill = PLAYERS[j].eyesColor;

  similarListElement.appendChild(playerElement);
}
