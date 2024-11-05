import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';
import 'flowbite/dist/flowbite.turbo.js'

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');


// Selecteer alle flash-berichten
setTimeout(function () {
    let flashMessages = document.querySelectorAll('.flash-message');
    flashMessages.forEach(function (message) {
        message.style.display = 'none';
    });
}, 10000);

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        const flashMessages = document.querySelectorAll('.flash-message');
        flashMessages.forEach(function (message) {
            message.classList.add('fade-out');
        });
    }, 9000);
});







