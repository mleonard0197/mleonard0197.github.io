import menuOne from '../assets/images/menu-1.png'
import menuTwo from '../assets/images/menu-2.png'
import menuThree from '../assets/images/menu-3.png'




const menu = function() {

    //menu container
    const menuC = document.createElement('div');
    menuC.className = 'menu-container'

    //First menu item - Chicken Adobo
    const foodOne = document.createElement('div');
    foodOne.className = 'food-container';
    menuC.appendChild(foodOne);

    const imgOne = document.createElement('img');
    imgOne.src = menuOne;
    foodOne.appendChild(imgOne);

    const infoOne = document.createElement('div');
    infoOne.className = 'info-container';
    foodOne.appendChild(infoOne);
    
    const titleOne = document.createElement('h2');
    titleOne.textContent = 'Chicken Adobo'
    infoOne.appendChild(titleOne);

    const priceOne = document.createElement('p');
    priceOne.textContent = '$16'
    infoOne.appendChild(priceOne);

    const desOne = document.createElement('p');
    desOne.innerHTML = 'Delicious chicken thighs and drumsticks covered in a thick garlic-soy saunce!';
    infoOne.appendChild(desOne);



    //Second menu item - Sisig
    const foodTwo = document.createElement('div');
    foodTwo.className = 'food-container';
    menuC.appendChild(foodTwo);
    
    const imgTwo = document.createElement('img');
    imgTwo.src = menuTwo;
    foodTwo.appendChild(imgTwo);

    const infoTwo = document.createElement('div');
    infoTwo.className = 'info-container';
    foodTwo.appendChild(infoTwo);
    
    const titleTwo = document.createElement('h2');
    titleTwo.textContent = 'Sizzling Sisig'
    infoTwo.appendChild(titleTwo);

    const priceTwo = document.createElement('p');
    priceTwo.textContent = '$18'
    infoTwo.appendChild(priceTwo);

    const desTwo = document.createElement('p');
    desTwo.innerHTML = 'Pork belly and chicken liver seasoned with calamansi, onions, and chili peppers all cooked to perfection!';
    infoTwo.appendChild(desTwo);

    //Third menu item - Halo Halo

    const foodThree = document.createElement('div');
    foodThree.className = 'food-container';
    menuC.appendChild(foodThree);
    
    const imgThree = document.createElement('img');
    imgThree.src = menuThree;
    foodThree.appendChild(imgThree);

    const infoThree = document.createElement('div');
    infoThree.className = 'info-container';
    foodThree.appendChild(infoThree);
    
    const titleThree = document.createElement('h2');
    titleThree.textContent = 'Halo Halo'
    infoThree.appendChild(titleThree);

    const priceThree = document.createElement('p');
    priceThree.textContent = '$12'
    infoThree.appendChild(priceThree);

    const desThree = document.createElement('p');
    desThree.innerHTML = "A Filipino-styled shaved ice. It's a cold and refreshing treat you'll want year-round!";
    infoThree.appendChild(desThree);

    return menuC
}

export default menu;