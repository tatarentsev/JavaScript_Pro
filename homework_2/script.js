// 1. Ко всем элементам, имеющим класс dropdown-item, добавьте еще один класс
// super-dropdown. Используйте методы forEach и querySelectorAll, а
// также свойство classList у элементов.

const dropdownElements = document.querySelectorAll('.dropdown-item');
dropdownElements.forEach(element => {
    element.classList.add('super-dropdown')
});

// 2. У элемента с классом btn необходимо убрать класс btn-secondary, если он
// присутствует у этого элемента, либо добавить, если такого класса у элемента
// не было.

const buttonElement = document.querySelector('.btn');
if (buttonElement.classList.contains('btn-secondary')) {
    buttonElement.classList.remove('btn-secondary');
} else {
    buttonElement.classList.add('btn-secondary');
}

// 3. Необходимо удалить класс dropdown-menu у элемента, у которого
// присутствует класс menu.

const menuEl = document.querySelector('.menu');
menuEl.classList.remove('dropdown-menu');

// 4. Используя метод insertAdjacentHTML, добавьте после div с классом
// dropdown следующую разметку: <a href="#">link</a>.

const divElem = document.querySelector('.dropdown');
divElem.nextElementSibling.insertAdjacentHTML('afterEnd', '<a href="#">link</a>');

// 5. У элемента с id="dropdownMenuButton" замените id на superDropdown.
 
const ddMenuElement = document.getElementById('dropdownMenuButton');
ddMenuElement.id = 'superDropdown';
console.log(ddMenuElement);

// 6. Добавьте атрибут data-dd со значением 3 элементу, у которого существует
// атрибут aria-labelledby, равный dropdownMenuButton, используя
// dataset.

const ariaLabelElement = document.querySelector('[aria-labelledby]');
ariaLabelElement.dataset.dd = '3';

// 7. Удалите атрибут type у элемента с классом dropdown-toggle.

const ddToggleElement = document.querySelector('.dropdown-toggle');
ddToggleElement.removeAttribute('type');