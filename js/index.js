document.addEventListener("DOMContentLoaded", function () {
  const tipoPrestamoInput = document.getElementById("tipoPrestamo");
  const montoInput = document.getElementById("monto");
  const calcularButton = document.getElementById("calcular");
  const resultadoDiv = document.getElementById("resultado");
  const cuotaParagraph = document.getElementById("cuota");
  const totalParagraph = document.getElementById("total");

  calcularButton.addEventListener("click", function () {
      const tipoPrestamo = tipoPrestamoInput.value;
      const monto = parseFloat(montoInput.value);

      let tasaAnual;
      switch (tipoPrestamo) {
          case "personal":
              tasaAnual = 0.20;
              break;
          case "automotriz":
              tasaAnual = 0.02;
              break;
          case "hipotecario":
              tasaAnual = 0.15;
              break;
      }

      const cuotaMensual = calcularCuotaMensual(monto, tasaAnual);
      const costoTotal = cuotaMensual * 12 * 5; // Pago mensual por 5 años

      cuotaParagraph.textContent = `Cuota Mensual: $${cuotaMensual.toFixed(2)}`;
      totalParagraph.textContent = `Costo Total del Préstamo: $${costoTotal.toFixed(2)}`;

      resultadoDiv.style.display = "block";
  });

  function calcularCuotaMensual(monto, tasaAnual) {
      const tasaMensual = tasaAnual / 12;
      const plazoMeses = 60; // 5 años
      const cuota = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazoMeses));
      return cuota;
  }
});
