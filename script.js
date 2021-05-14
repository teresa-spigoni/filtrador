
function addImg() {
    const filters = document.getElementsByClassName('filters-container')[0];
    const img = document.getElementById('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    filters.style.display = 'flex';
    reader.addEventListener("load", function () {
        img.src = reader.result;

    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }

    filterDefault();
}

function filter() {
    let sepia = document.getElementById('sepia');
    let saturate = document.getElementById('saturate');
    let opacity = document.getElementById('opacity');
    let invert = document.getElementById('invert');
    let hueRotate = document.getElementById('hue-rotate');
    let grayscale = document.getElementById('grayscale');
    let contrast = document.getElementById('contrast');
    let brightness = document.getElementById('brightness');
    let blur = document.getElementById('blur');

    let img = document.getElementById('img');

    img.style.filter =
        `
        sepia(${sepia.value}%)
        invert(${invert.value}%) 
        hue-rotate(${hueRotate.value}deg) 
        grayscale(${grayscale.value}%) 
        blur(${blur.value}px)
        saturate(${saturate.value}%) 
        contrast(${contrast.value}%) 
        brightness(${brightness.value}%) 
        opacity(${opacity.value}%) 
        `;
}

function filterDefault() {
    let sepia = document.getElementById('sepia');
    let saturate = document.getElementById('saturate');
    let opacity = document.getElementById('opacity');
    let invert = document.getElementById('invert');
    let hueRotate = document.getElementById('hue-rotate');
    let grayscale = document.getElementById('grayscale');
    let contrast = document.getElementById('contrast');
    let brightness = document.getElementById('brightness');
    let blur = document.getElementById('blur');

    let img = document.getElementById('img');

    img.style.filter = 'none';

    sepia.value = 0;
    invert.value = 1;
    hueRotate.value = 0;
    grayscale.value = 0;
    blur.value = 0;
    saturate.value = 100;
    contrast.value = 100;
    brightness.value = 100;
    opacity.value = 100;
}