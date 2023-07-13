// función para calcular el pago mensual del préstamo
function calcularPago(monto, tasa, periodo) {
    tasa = tasa / 100 / 12; // convertir la tasa anual a una tasa mensual
    periodo = periodo * 12; // convertir el periodo en años a un periodo en meses
  
    // fórmula para calcular el pago mensual del préstamo
    let pago = monto * tasa / (1 - Math.pow(1/(1 + tasa), periodo));
  
    return pago.toFixed(2); // redondear a 2 decimales
  }
  
  // función para calcular el costo total del crédito
  function calcularCostoTotal(pago, periodo) {
    return (pago * periodo * 12).toFixed(2); // redondear a 2 decimales
  }
  
  // inicio del simulador
  document.getElementById("calcular").addEventListener("click", function() {
    let tipo = document.getElementById("tipo").value;
    let monto = document.getElementById("monto").value;
    let periodo = document.getElementById("periodo").value;
  
    let tasa;
    switch (tipo) {
      case 'personal':
        tasa = 20;
        break;
      case 'automotriz':
        tasa = 2;
        break;
      case 'hipotecario':
        tasa = 15;
        break;
    }
  
    let pago = calcularPago(monto, tasa, periodo);
    let costoTotal = calcularCostoTotal(pago, periodo);
    
    document.getElementById("resultado").innerText = 
      "Pago mensual: $" + pago + "\nCosto total del crédito: $" + costoTotal;
  });
  
  // inicio del envío de información
  document.getElementById("enviar").addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
  
    // aquí iría el código para enviar la información al servidor o por correo electrónico
  
    console.log("Información enviada: ", nombre, email);
  });
  