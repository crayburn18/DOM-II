// Your code goes here
const colorChange = document.querySelector('.nav-link');

colorChange.addEventListener("click", function(event){
    event.target.style.color = 'red';
});

const growTitle = document.querySelector('h1');

growTitle.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '8rem';
});

const changeBackground = document.querySelector('body');

window.addEventListener('load', function(event){
    changeBackground.style.background = 'gray';
});

const newPicture = document.querySelector('.intro img');

console.log(newPicture);

newPicture.addEventListener('dblclick', function(event){
    event.target.src = 'https://images.pexels.com/photos/73909/nuclear-weapons-test-nuclear-weapon-weapons-test-explosion-73909.jpeg?cs=srgb&dl=pexels-pixabay-73909.jpg&fm=jpg';
});

const roundIt = document.querySelector('.content-section img');

document.addEventListener('keydown', function(event){
    roundIt.style.borderRadius = '100%';
});

const scaleIt = document.querySelector('h2');

scaleIt.addEventListener('wheel', function(event){
    event.target.style.display = 'none';
});



