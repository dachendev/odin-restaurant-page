import onPageLoad from './page-load';
import home from './tabs/home';
import menu from './tabs/menu';
import about from './tabs/about';

const switchTab = (tabContent) => {
    // clear #content
    document.getElementById('content').innerHTML = '';

    /**
     * Handle tab switching
     */
    switch (tabContent) {
        case 'Home':
            home();
            break;
        case 'Menu':
            menu();
            break;
        case 'About':
            about();
            break;
        default:
    }
};

window.onload = () => {
    // Initial load
    onPageLoad();

    /**
     * Register tab click events
     */
    const tabs = document.querySelectorAll('.nav-link');
    for (const tab of tabs) {
        tab.addEventListener('click', (event) => {
            const self = event.currentTarget;
            const tabContent = self.textContent;

            // set active
            const currentActive = document.querySelector('.nav-link.active');
            currentActive.classList.remove('active');
            self.classList.add('active');
            
            // switch tabs
            switchTab(tabContent);
        });
    }
};