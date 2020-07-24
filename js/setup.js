'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var QUANTITY_WIZARD = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarList = document.querySelector('.setup-similar');
var similarListElement = document.querySelector('.setup-similar-list');
var dialogOpenButton = document.querySelector('.setup-open');
var dialogCloseButton = userDialog.querySelector('.setup-close');
var dialogUserName = userDialog.querySelector('.setup-user-name');
var dialogWizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
var dialogWizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
var dialogFireball = userDialog.querySelector('.setup-fireball-wrap');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

var randomInt = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var getNextElement = function (elements, currentElement) {
  var index = elements.indexOf(currentElement);
  if (index === elements.length - 1) {
    return elements[0];
  }
  return elements[index + 1];
};

var onDialogEscPress = function (evt) {
  if (evt.key === 'Escape' && document.activeElement !== dialogUserName) {
    evt.preventDefault();
    hideDialog();
  }
};

var showDialog = function () {
  userDialog.classList.remove('hidden');
  similarList.classList.remove('hidden');
  document.addEventListener('keydown', onDialogEscPress);
};

var hideDialog = function () {
  userDialog.classList.add('hidden');
  similarList.classList.add('hidden');

  document.removeEventListener('keydown', onDialogEscPress);
};

dialogOpenButton.addEventListener('click', function () {
  showDialog();
});

dialogOpenButton.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    showDialog();
  }
});

dialogCloseButton.addEventListener('click', function () {
  hideDialog();
});

dialogCloseButton.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    hideDialog();
  }
});

dialogWizardCoat.addEventListener('click', function () {
  changeWizardCoat();
});

dialogWizardEyes.addEventListener('click', function () {
  changeWizardEyes();
});

dialogFireball.addEventListener('click', function () {
  changeFireball();
});

var changeWizardCoat = function () {
  var colorInput = document.querySelector('[name="coat-color"]');
  var color = colorInput.value;
  var newColor = getNextElement(COAT_COLORS, color);
  colorInput.value = newColor;
  dialogWizardCoat.style.fill = newColor;
};

var changeWizardEyes = function () {
  var colorInput = document.querySelector('[name="eyes-color"]');
  var color = colorInput.value;
  var newColor = getNextElement(EYES_COLORS, color);
  colorInput.value = newColor;
  dialogWizardEyes.style.fill = newColor;
};

var changeFireball = function () {
  var colorInput = document.querySelector('[name="fireball-color"]');
  var color = colorInput.value;
  var newColor = getNextElement(FIREBALL_COLORS, color);
  colorInput.value = newColor;
  dialogFireball.style.backgroundColor = newColor;
};

var getMockData = function () {
  var wizards = [];

  for (var i = 0; i < QUANTITY_WIZARD; i++) {
    wizards.push({
      'name': FIRST_NAMES[randomInt(0, FIRST_NAMES.length - 1)] + ' ' + LAST_NAMES[randomInt(0, LAST_NAMES.length - 1)],
      'coatColor': COAT_COLORS[randomInt(0, COAT_COLORS.length - 1)],
      'eyesColor': EYES_COLORS[randomInt(0, EYES_COLORS.length - 1)]
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
