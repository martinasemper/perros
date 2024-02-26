let imagen = document.querySelector('img')
let Anterior = document.querySelector('#Anterior')
let Siguiente = document.querySelector('#Siguiente')
let titulo = document.querySelector('h1')
let archivo = 'labradoodle.jpg'

Siguiente.onclick = function() {
    //Si el archivo de imagen, es un Golden, entonces mostramos el siguiente
    if (archivo == 'labradoodle.jpg') {
        //el siguiente va a ser Perro
        imagen.src = 'border.jpg'
        titulo.textContent = 'es un border colllie'
        archivo = 'border.jpg'
    } else if (archivo == 'border.jpg') {
        imagen.src = 'caniche.jpg'
        titulo.textContent = 'Caniche'
        archivo = 'caniche.jpg'
    } else if (archivo == 'caniche.jpg') {
        imagen.src = 'sharpei.jpg'
        titulo.textContent = 'es un shar pei'
        archivo = 'sharpei.jpg'
    } else {
        imagen.src = 'labradoodle.jpg'
        titulo.textContent = 'labradoodle'
        archivo = 'labradoodle.jpg'
    }
}


Anterior.onclick = function() {

    if (archivo == 'labradoodle.jpg') {
        
        imagen.src = 'sharpei.jpg'
        titulo.textContent = 'shar pei'
        archivo = 'sharpei.jpg'
    } else if (archivo == 'border.jpg') {
        imagen.src = 'labradoodle.jpg'
        titulo.textContent = 'labradoodle'
        archivo = 'labradoodle.jpg'
    } else if (archivo == 'caniche.jpg') {
        imagen.src = 'border.jpg'
        titulo.textContent = 'border collie'
        archivo = 'perro.jpg'
    } else {
        imagen.src = 'caniche.jpg'
        titulo.textContent = 'Caniche'
        archivo = 'caniche.jpg'
    }
}

