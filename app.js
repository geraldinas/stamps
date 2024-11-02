
let imageCounter = null;
let catImage = 'cat1.svg';
let breadImage = 'bread-creature.png'
let catImage2 = 'cat-2.svg'
let catImage3 = 'cat-3.svg'
let catImage4 = 'cat-4.svg'
let currentStamp = catImage;
let stamps = [breadImage,catImage, catImage2, catImage4, catImage3];

function getRandomImage() {
    return stamps[Math.floor(Math.random() * stamps.length)];
}

function createStampElement() {
    const stampedElement = document.createElement('img');
    stampedElement.className = 'stamped-image'; // image class for styling NOTE: make glow or give shadow
    stampedElement.src = currentStamp;
    currentStamp = 
    imageCounter <= 6 ? catImage :
    // imageCounter >= 7 ? breadImage :
    // imageCounter >= 15 ? catImage :
    currentStamp = getRandomImage();
    imageCounter += 1
    // console.log(imageCounter, stamp);
    return stampedElement; 
}

// position the stamped image at the clicked coordinates && Center the Stamps
function positionStamp(element, x, y) {
    element.style.left = `${x - (element.width / 2)}px`; 
    element.style.top = `${y - (element.height / 2)}px`; 
}

function handleMouseClick(event) {
    let mouseX = event.clientX; 
    let mouseY = event.clientY; 
    // to handle space press
    if (typeof mouseX === 'undefined'){
        mouseX = Math.floor(Math.random()* window.innerWidth);
        mouseY = Math.floor(Math.random()* window.innerWidth);
        console.log('axis', mouseX, mouseY);
    }
    const stampedElement = createStampElement(); 
    document.body.appendChild(stampedElement); 
    positionStamp(stampedElement, mouseX, mouseY); // Image Position
    // take into account space bar press

}

function debounce(callbackFunc, wait = 100) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => callbackFunc.apply(this, args), wait);
    };
}

// Create a debounced version of the handleMouseClick function with a 100ms delay prevents AS frequent calls to the window object.
const debouncedHandleMouseClick = debounce(handleMouseClick);

// Set up event listener for mouse down & //  touch on mobile
document.addEventListener('touchstart', debouncedHandleMouseClick);
window.addEventListener('mousedown', debouncedHandleMouseClick);
window.addEventListener('keydown', debouncedHandleMouseClick);
