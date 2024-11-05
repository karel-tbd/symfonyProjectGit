import {Controller} from '@hotwired/stimulus';

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    connect() {
        // this.element
        let modal = new Modal(this.element)

        let closeModalButton = document.querySelectorAll(".closeModalButton")
        closeModalButton.forEach(function (button) {

            button.addEventListener('click', function () {
                console.log("close modal")
                modal.hide()
            })

        });

        document.addEventListener('modal:close', function () {
            modal.hide()
        });

        let openModalButton = document.getElementById('open-modal')
        openModalButton.addEventListener('click', function () {
            console.log('open modal')
            modal.show()
        })
    }
}
