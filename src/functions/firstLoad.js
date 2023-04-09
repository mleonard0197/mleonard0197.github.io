//import header, home, and pageLoad
import pageLoad from '../functions/pageLoad';
import header from '../pages/header';


function firstLoad() {
    // const content = document.querySelector('#content');
    //Appends header as first child of the content element
    header();
    //pageLoad func for homepage
    pageLoad('home');
}

export default firstLoad;