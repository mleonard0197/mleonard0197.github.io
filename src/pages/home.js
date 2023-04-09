import logoImage from '../assets/images/sa-itaas-logo-ps.png';
import foodOne from '../assets/images/food-1.png'
import foodTwo from '../assets/images/food-2.png'


const home = function() {

    const homeC = document.createElement('div');
    homeC.className = 'home-content';
    
    //logo
    const logo = document.createElement('img');
    logo.src = logoImage;
    logo.className = 'logo-img';
    homeC.appendChild(logo);

    //tag line bottom
    const title = document.createElement('h2');
    title.textContent = 'Welcome to paradise.'
    homeC.appendChild(title);

    //bottom left image
    const loadOne = document.createElement('img');
    loadOne.src = foodOne;
    loadOne.className = 'load-food';
    loadOne.id = 'load-one'
    homeC.appendChild(loadOne);


    //top right image
    const loadTwo = document.createElement('img');
    loadTwo.src = foodTwo;
    loadTwo.className = 'load-food';
    loadTwo.id = 'load-two'
    homeC.appendChild(loadTwo);


    return homeC;
}

export default home;