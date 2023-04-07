import './style.css'
import firstLoad from './functions/firstLoad';
import pageLoad from './functions/pageLoad';
import render from './functions/render';



// function component() {
//     const element = document.createElement('div');
//     element.className = 'example';
//     const btn = document.createElement('button');

//     element.innerHTML = 'Hellooooo';

//     btn.innerHTML = 'click meeeeeeeeeeee';
//     btn.onclick = render;

//     element.appendChild(btn);

//     return element;
// }

firstLoad();

const aboutBtn = document.querySelector('.btn-about');
aboutBtn.addEventListener('click', function() {
    render();
    pageLoad('about');
});

const homeBtn = document.querySelector('.btn-home');
homeBtn.addEventListener('click', function() {
    render();
    pageLoad('home');
});

const menuBtn = document.querySelector('.btn-menu');
menuBtn.addEventListener('click', function() {
    render();
    pageLoad('menu');
});




// document.getElementById('content').appendChild(component());

