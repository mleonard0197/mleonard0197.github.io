function startupAlert() {
    alert('The server is live!');
}

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = 'Hellooooo';

    btn.innerHTML = 'click me';
    btn.onclick = startupAlert;

    element.appendChild(btn);

    return element;
}


document.getElementById('content').appendChild(component());