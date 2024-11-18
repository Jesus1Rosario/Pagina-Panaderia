document.addEventListener('DOMContentLoaded', function() {
    var botonesElegir = document.getElementsByClassName('boton-item');

    for (var i = 0; i < botonesElegir.length; i++) {
        var button = botonesElegir[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }
});

function agregarAlCarritoClicked(event) {
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    console.log(titulo);
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);
    alert('Gracias por su compra');
    window.location = "../index.html";

}