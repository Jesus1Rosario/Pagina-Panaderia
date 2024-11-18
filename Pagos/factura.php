<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulario de Contacto - Finalizar Compra</title>
  <style>
    /* Estilos generales */
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f7f7f7;
      margin: 0;
      padding: 20px;
      height: 100vh;
    }
    .form-container {
      max-width: 600px;
      background: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .form-group, .payment-methods, .checkbox-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
    }
    label {
      margin-bottom: 5px;
      font-weight: bold;
    }
    input[type="text"],
    input[type="email"],
    input[type="number"],
    select,
    textarea {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
    }
    .submit-btn { background-color: #28a745; color: white; }
    .cancel-btn { background-color: #dc3545; color: white; margin-left: 10px; }

    /* Tabla de resumen de productos */
    .summary-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    .summary-table th, .summary-table td { padding: 8px; border: 1px solid #ddd; text-align: left; }
    .summary-table th { background-color: #f0f0f0; font-weight: bold; }
  </style>
</head>
<body>

<div class="form-container">
  <h2>Formulario de Contacto - Finalizar Compra</h2>
  <form id="form-compra" action="#" method="POST">
    <div class="form-group">
      <label for="nombre">Nombre Completo</label>
      <input type="text" id="nombre" name="nombre" required>
    </div>
    <div class="form-group">
      <label for="email">Correo Electrónico</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="form-group">
      <label for="telefono">Teléfono</label>
      <input type="number" id="telefono" name="telefono" required>
    </div>

    <div class="payment-methods">
      <label>Método de Pago:</label>
      <label><input type="radio" name="pago" value="Tarjeta de Crédito" required> Tarjeta de Crédito</label>
      <label><input type="radio" name="pago" value="PayPal"> PayPal</label>
      <label><input type="radio" name="pago" value="Transferencia Bancaria"> Transferencia Bancaria</label>
    </div>

    <div class="form-group">
      <label for="direccion">Dirección de Envío</label>
      <textarea id="direccion" name="direccion" rows="3" required></textarea>
    </div>


    <div style="display: flex; margin-top: 20px;">
      <button type="submit" class="submit-btn">Finalizar Compra</button>
      <button type="reset" class="cancel-btn">Cancelar</button>
    </div>
  </form>
</div>

<script>
  // JavaScript para agregar productos seleccionados directamente en la tabla de resumen
  document.addEventListener("DOMContentLoaded", function () {
    // Lista de productos seleccionados (puedes personalizarla según los productos elegidos)
    const productosSeleccionados = [
      { titulo: "Pan Frances", cantidad: 1, precio: "$5.000" },
      { titulo: "Pan de Queso", cantidad: 2, precio: "$4.000" }
    ];

    // Elemento donde se va a mostrar el resumen de productos
    const productSummary = document.getElementById("product-summary");

    // Añadir cada producto seleccionado a la tabla
    productosSeleccionados.forEach(producto => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${producto.titulo}</td>
        <td>${producto.cantidad}</td>
        <td>${producto.precio}</td>
      `;
      productSummary.appendChild(row);
    });

    // Agregar funcionalidad para el botón "Finalizar Compra"
    const formCompra = document.getElementById("form-compra");
    formCompra.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar el envío del formulario para mostrar el mensaje

      // Mostrar el mensaje de agradecimiento
      alert("¡Gracias por su compra!");

      // Redirigir a la página principal (cambia 'index.html' por la URL de tu página principal)
      window.location.href = '../Panaderi/principal.html';
    });

    // Agregar funcionalidad para el botón "Cancelar"
    const cancelarBtn = document.querySelector(".cancel-btn");
    cancelarBtn.addEventListener("click", function() {
      // Mostrar el mensaje de agradecimiento
      alert("¡Gracias por su compra!");

      // Redirigir a la página principal (cambia 'index.html' por la URL de tu página principal)
      window.location.href = '../Panaderi/principal.html';
    });
  });
</script>

</body>
</html>
