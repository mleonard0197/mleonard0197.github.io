//import header, home, and pageLoad
import pageLoad from '../functions/pageLoad';


function firstLoad() {
    const content = document.querySelector('#content');

    //content.appendChild(header)
    //pageLoad func for homepage
    pageLoad('init');
}

export default firstLoad;