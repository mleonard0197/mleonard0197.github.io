


const header = function() {
    const content = document.querySelector('#content');

    const headerBox = document.createElement('div');
    headerBox.className = 'header-box';

    const btnHome = document.createElement('button');
    btnHome.className = 'btn-home';
    btnHome.innerHTML = 'Home';


    const btnAbout = document.createElement('button');
    btnAbout.className = 'btn-about';
    btnAbout.innerHTML = 'About';

    const btnMenu = document.createElement('button');
    btnMenu.className = 'btn-menu';
    btnMenu.innerHTML = 'Menu';

    headerBox.append(btnHome, btnAbout, btnMenu);
    content.appendChild(headerBox);
}

export default header;