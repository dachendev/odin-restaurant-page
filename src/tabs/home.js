function hours() {
    const div = document.createElement('div');
    div.classList.add('section');

    const title = document.createElement('h3');
    title.textContent = 'Our Hours';

    const list = document.createElement('ul');

    const listItems = [
        'Monday - Friday: 7am - noon',
        'Saturday & Sunday: 7am - 4pm',
    ];

    for (const item of listItems) {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    }

    // append items to div
    div.appendChild(title);
    div.appendChild(list);

    return div;
}

function location() {
    const div = document.createElement('div');
    div.classList.add('section');

    const title = document.createElement('h3');
    title.textContent = 'Location';

    const p = document.createElement('p');
    p.textContent = '1600 Pennsylvania Avenue, Washington, DC';

    // append elements to div
    div.appendChild(title);
    div.appendChild(p);

    return div;
}

export default function home() {
    const div = document.createElement('div');

    const container = document.createElement('div');
    container.classList.add('container');

    const tagline = document.createElement('h2');
    tagline.textContent = `Flippin' Fantastic Flapjacks Since... Well, We Lost Count!`;

    const summary = document.createElement('p');
    summary.textContent = `At Jack's, we're flipping flapjack perfection! Since forever, we've crafted mouthwatering stacks that redefine breakfast. From classic buttermilk to innovative twists, there's a pancake for every craving. Join us for a syrupy, fruity, or chocolatey delight - Jack's is where flapjack dreams come true!`;

    const image = document.createElement('img');
    image.src = '../assets/images/portuguese-gravity-qq3hT-CYD1I-unsplash.jpg';
    image.style.height = '350px';
    image.style.width = '100%';
    image.style.objectFit = 'cover';

    // append elements to div
    container.appendChild(tagline);
    container.appendChild(summary);
    container.appendChild(image);
    container.appendChild(hours());
    container.appendChild(location());
    div.appendChild(container);

    // append elements to #content
    document.getElementById('content').appendChild(div);
};