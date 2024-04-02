export default function about() {
    const div = document.createElement('div');

    const container = document.createElement('div');
    container.classList.add('container');

    const title = document.createElement('h2');
    title.textContent = 'About';

    container.appendChild(title);
    div.appendChild(container);

    // append elements to #content
    document.getElementById('content').appendChild(div);
}