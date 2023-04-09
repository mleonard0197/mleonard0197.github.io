import sambaOne from '../assets/images/sambaguita.png';
import sambaTwo from '../assets/images/sambaguita.png';



const br = document.write('<br/>');

const about = function() {

    //Create div for the about page to append to
    const aboutC = document.createElement('div');
    aboutC.className = 'about-container';

    //For the about bio on the restaurant
    const bioC = document.createElement('div');
    bioC.className = 'bio-container';
    aboutC.appendChild(bioC);

    const bioH = document.createElement('h2');
    bioH.textContent = 'Our Story';
    bioC.appendChild(bioH);

    const bio = document.createElement('p');
    bio.textContent = 
    "Starting off washing dishes all the way to head chef and restaurateur, Chef Samantha founded Sa Taas with one sole purpose: To spread Filipino culture through cuisine. Originally operating out of Chef Samantha's upstairs apartment, Sa Taas has always been focused on being a beacon of homecoming for her community. From cooking for her neighbordhood to feeding mouths from around the world, Sa Taas continues to bring people together through fresh ingredients, excellent service, and innovative recipes.";
    bio.className = 'div-text';
    bioC.appendChild(bio);

    //For the restaurant's hours
    const hoursC = document.createElement('div');
    hoursC.className = 'hours-container';
    aboutC.appendChild(hoursC);

    const hoursH = document.createElement('h2');
    hoursH.textContent = 'Hours';
    hoursC.appendChild(hoursH);


    const hours = document.createElement('div');
    hours.innerHTML = 
    `Sunday: Closed` + `<br>` + `Monday: 4pm - 11pm` + `<br>` + `Tuesday: 4pm - 11pm` + `<br>` + `Wednesday: 4pm - 11pm` + `<br>` + `Thursday: Closed` + `<br>` + `Friday: 4pm - Midnight` + `<br>` + `Saturday: 12pm - Midnight`;
    hours.className = 'div-text';
    hoursC.appendChild(hours);

    //For the restaurant's location
    const locationC = document.createElement('div');
    locationC.className = 'location-container';
    aboutC.appendChild(locationC);

    const locationH = document.createElement('h2')
    locationH.textContent = 'Location';
    locationC.appendChild(locationH);

    const location = document.createElement('div')
    location.innerHTML = 
    `843 Hillside Street` + `<br>` + `Phoenix, AZ, 85034`;
    location.className = 'div-text';
    locationC.appendChild(location);

    const imgOne = document.createElement('img');
    imgOne.src = sambaOne;
    imgOne.className = 'img-one';
    aboutC.appendChild(imgOne);

    const imgTwo = document.createElement('img');
    imgTwo.src = sambaOne;
    imgTwo.className = 'img-two';
    aboutC.appendChild(imgTwo);

    return aboutC;
}

export default about;