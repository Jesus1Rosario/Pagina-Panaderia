//variables que mantienen el estado visible del carrito//
var carritoVisible = false;

//esperar que los elementos cargen//
if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}


function ready(){
    //funcion de lo botones//
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar')
    for(var i=0; i < botonesEliminarItem.length;i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click', eliminarItemCarrito)
    }

    //funcionalidad de boton sumar cantidad//
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0; i < botonesSumarCantidad.length;i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click', sumarCantidad);
    }

    //funcionalidad de boton restar cantidad//
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0; i < botonesRestarCantidad.length;i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click', restarCantidad);
    }

    //agrego funcion al boton agregar al carrito//
    var botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for(var i=0; i<botonesAgregarAlCarrito.length;i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
    }

    //agregar funcionalidad
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click', pagarClicked)
}

//elimino el item//
function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();

//actualizamos el total de la compra//
actualizarTotalCarriro();
//Control de ocultar el carrito//
ocultarCarrito();
}

//actualizar el carrito//
function actualizarTotalCarriro(){
    //se selecciona el contenedor del carrito//
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;

    //recorremosdemos cada elemento del carrito//
    for(var i=0; i < carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        console.log(precioElemento);
        //quitamos el punto y el simbolo//
        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        console.log(precio)
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        var cantidad = cantidadItem.value;
        console.log(cantidad);
        total = total + (precio * cantidad);
    }
    total = Math.round(total*100)/100;
    document.getElementsByClassName('carrito-precio-total')[0].innerText = total;
}



function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRiht = '-100%';
        carrito.style.opacity='0';
        carritoVisible = false;

        //maximo el contenedor
        var items = document.getElementsByClassName('contenedor-items')[0];
        items.style.width = '100%'
    }
}
//aumento del boton
function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    console.log(cantidadActual);
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    //actualizamos el total
    actualizarTotalCarriro();
}

function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    console.log(cantidadActual);
    cantidadActual--;

     //controlamos lo menor q 1
     if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        //actualizamos el total
        actualizarTotalCarriro();
     }
}

function agregarAlCarritoClicked(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    console.log(titulo);
    var precio = item.getElementsByClassName('precio-item')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);

    //agrega el elemento//
    agregarItemAlCarrito(titulo, precio, imagenSrc);


    //visible carro
    hacerVisibleCarrito();
}

function agregarItemAlCarrito(titulo, precio, imagenSrc){
    var item = document.createElement('div');
    item.classList.add = 'item';
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    //controlar que no se repita
    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(var i=0; i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("ELEMENTO YA REGISTRADO EN EL CARRITO");
            return;
        }
    }

    var itemCarritoContenido = `
    <div class="carrito-item">
        <img src="${imagenSrc}" alt=""  width="80px">
        <div class="carrito-item-detalles">
            <span class="carrito-item-titulo">${titulo}</span>
            <div class="selector-cantidad">
                <i class="fa-solid fa-minus restar-cantidad"></i>
                <input type="text" value="1" class="carrito-item-cantidad" disabled>
                <i class="fa-solid fa-plus sumar-cantidad"></i>
            </div>   
            <span class="carrito-item-precio">${precio}</span>
        </div>  
        <span class="btn-eliminar">
            <i class="fa-solid fa-trash"></i>
        </span> 
    </div>  
    `
     item.innerHTML = itemCarritoContenido;
     itemsCarrito.append(item);

     //agrega la funcion de eliminar al nuevo btn
     item.getElementsByClassName('btn-eliminar')[0].addEventListener('click',eliminarItemCarrito);

     //funcio de sumar
     var botonesSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
     botonesSumarCantidad.addEventListener('click', sumarCantidad);

     //funcio de restar
     var botonesRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
     botonesRestarCantidad.addEventListener('click', restarCantidadCantidad);

}


function pagarClicked(event){
    alert('Gracias por su compra')
    window.location = "../Pagos/factura.php";
    //eliminito todos los elemntos 
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while(carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    actualizarTotalCarriro();


    //ocultar carrito
    ocultarCarrito();
}


function hacerVisibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRiht = '0';
    carrito.style.opacity= '1';

    var items = document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '60%';
}

