'use strict';

var randomInt = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var getMockData = function () {
  var arr = [];
  var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var lastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

  for (var i = 0; i < 4; i++) {
    var obj = {
      'wizard': {
        'name': firstName[randomInt(0, firstName.length - 1)] + ' ' + lastName[randomInt(0, lastName.length - 1)],
        'coatColor': coatColor[randomInt(0, coatColor.length - 1)],
        'eyesColor': eyesColor[randomInt(0, eyesColor.length - 1)]
      }
    };
    arr.push(obj);
  }
  return arr;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function () {
  var wizards = getMockData();

  for (var j = 0; j < wizards.length; j++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[j].wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[j].wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[j].wizard.eyesColor;
    similarListElement.appendChild(wizardElement);
  }
};

renderWizard();
