//import home, menu, and about to cycle through pages
import home from '../pages/home';
import render from './render';

//resets page before loading new one

function pageLoad(page) {

    const content = document.querySelector('#content');


    if(page == 'init') {
        content.appendChild(home());
    }
    //removes content's 2nd child to clear page (and keep the header) then appends 'home' page div to 'content' 2nd child
    else if (page == 'home') {
        content.appendChild(home());
    }
    else if (page == 'about'){

    }
    else if (page == 'menu') {
        
    }

}

export default pageLoad;