export default function menu() {
    const div = document.createElement('div');

    const container = document.createElement('div');
    container.classList.add('container');

    const title = document.createElement('h2');
    title.textContent = 'Menu';

    container.appendChild(title);
    div.appendChild(container);

    // append elements to #content
    document.getElementById('content').appendChild(div);
}