'use strict';

var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var QUANTITY_WIZARD = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

var randomInt = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var getMockData = function () {
  var wizards = [];

  for (var i = 0; i < QUANTITY_WIZARD; i++) {
    wizards.push({
      'name': FIRST_NAME[randomInt(0, FIRST_NAME.length - 1)] + ' ' + LAST_NAME[randomInt(0, LAST_NAME.length - 1)],
      'coatColor': COAT_COLOR[randomInt(0, COAT_COLOR.length - 1)],
      'eyesColor': EYES_COLOR[randomInt(0, EYES_COLOR.length - 1)]
    });
  }
  return wizards;
};

var renderWizard = function (wizards, count) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[count].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[count].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[count].eyesColor;
  return wizardElement;
};

var renderWizards = function () {
  var wizards = getMockData();

  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards, j));
  }
  similarListElement.appendChild(fragment);
};

renderWizards();
