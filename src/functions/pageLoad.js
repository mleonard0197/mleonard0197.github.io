//import home, menu, and about to cycle through pages
import home from '../pages/home';
import render from './render';

//resets page before loading new one

function pageLoad(page) {

    const content = document.querySelector('#content');

    const div = document.createElement('div');
    div.innerHTML = 'i am another page';

    if(page == 'init') {
        content.appendChild(home());
    }
    //removes content's 2nd child to clear page (and keep the header) then appends 'home' page div to 'content' 2nd child
    else if (page == 'home') {
        render();
        content.appendChild(home());
    }

}

export default pageLoad;