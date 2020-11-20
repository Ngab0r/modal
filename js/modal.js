'use strict';

const modalWindow = document.querySelector('.modal');
const modalButton = document.querySelector('#modalButton');
const main = document.querySelector('.main');
const closeX = document.querySelectorAll('.closeX');

(function addModalButtonEvent() {
    modalButton.addEventListener('click', function() {
        if (modalWindow.classList.contains('hide')) {
            showModalWindow();
        } else {
            hideModalWindow();
        }
    })
})()

function addCloseXEvent() {
    for (let i = 0; i < closeX.length; i++) {
        closeX[i].addEventListener('click', () => hideModalWindow());
    }
}
addCloseXEvent();

function showModalWindow() {
    modalWindow.classList.remove('hide');
    modalWindow.classList.add('show');
    main.classList.remove('noOverlay');
    main.classList.add('overlay');
    window.onclick = function(event) {
        if (event.target == main ||
            (event.target.parentNode.className.includes('main') &&
                !event.target.className.includes('button'))) {
            hideModalWindow();
        }
    }
}

function hideModalWindow() {
    modalWindow.classList.remove('show');
    modalWindow.classList.add('hide');
    main.classList.remove('overlay');
    main.classList.add('noOverlay');

}