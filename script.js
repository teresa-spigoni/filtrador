// todo:
// aggiungere il pulsante download, 
// percentuale sui filtri,
// far comparire il range solo al click del nome del filtro,
// far eliminare la foto,
// mettere una foto di default,
// fare un menu con immagini già modificate.. (?)

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

function filter(nomeFiltro) {
    if (nomeFiltro === 'hue-rotate') {
        img.style.filter = `${nomeFiltro}(${hueRotate.value}deg)`;
    } else if (nomeFiltro === 'blur') {
        img.style.filter = `${nomeFiltro}(${blur.value}px)`;
    } else {
        img.style.filter = `${nomeFiltro}(${document.getElementById(nomeFiltro).value}%)`;
    }
}

function filterDefault() {
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

function addImg() {
    const filters = document.getElementsByClassName('filters-container')[0];
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