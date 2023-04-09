//import home, menu, and about to cycle through pages
import home from '../pages/home';
import about from '../pages/about';
import menu from '../pages/menu';
import render from './render';

//takes in page string argument and subsequently appends the 'page'.js to the index.html .content div

function pageLoad(page) {

    const content = document.querySelector('#content');

    if(page == 'init') {
        content.appendChild(home());
    }
    else if (page == 'home') {
        content.appendChild(home());
    }
    else if (page == 'about'){
        content.appendChild(about());
    }
    else if (page == 'menu') {
        content.appendChild(menu());
    }

}

export default pageLoad;