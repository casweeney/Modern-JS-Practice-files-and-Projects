const card = document.querySelector('.card');
const btn = document.querySelector('.clear-tasks');
const heading = document.querySelector('h5');

card.addEventListener('mousemove', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}