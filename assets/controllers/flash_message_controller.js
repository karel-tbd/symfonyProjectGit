import {Controller} from '@hotwired/stimulus';

export default class extends Controller {
    connect() {
        console.log(this.element)
        setTimeout(function () {
            this.element.style.display = 'none';
            this.element.classList.add('fade-out');
        }, 5000);

    }
}
