import {Controller} from '@hotwired/stimulus';

/* stimulusFetch: 'lazy' */
export default class extends Controller {
    connect() {
        let page = 2;
        const blogContainer = document.querySelector('tbody');
        const loading = document.getElementById('loading');

        window.addEventListener('scroll', () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                loading.style.display = 'block';
                fetch(`/blog/overview?page=${page++}`)
                    .then(response => response.json())
                    .then(json => {
                        blogContainer.insertAdjacentHTML('beforeend', json);
                        loading.style.display = 'none';
                    })
                    .catch(error => {
                        console.error('Error loading more blogs:', error);
                        loading.style.display = 'none';
                    })
                ;
            }
        });
    }
}
