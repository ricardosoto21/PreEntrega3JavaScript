// Actualizar detalles de préstamo según el tipo de crédito seleccionado
function updateLoanDetails() {
  var creditType = document.getElementById('creditType').value;
  var rateInput = document.getElementById('rate');
  var termSelect = document.getElementById('term');
  termSelect.innerHTML = ''; // Limpiar opciones existentes

  if (creditType === 'hipotecario') {
      rateInput.value = 3.5; // Tasa para crédito hipotecario
      for (var i = 10; i <= 30; i++) {
          termSelect.innerHTML += '<option value="' + i * 12 + '">' + i + ' años</option>';
      }
  } else if (creditType === 'consumo') {
      rateInput.value = 7.0; // Tasa para crédito de consumo
      for (var i = 1; i <= 5; i++) {
          termSelect.innerHTML += '<option value="' + i * 12 + '">' + i + ' años</option>';
      }
  } else if (creditType === 'automotriz') {
      rateInput.value = 5.0; // Tasa para crédito automotriz
      for (var i = 1; i <= 3; i++) {
          termSelect.innerHTML += '<option value="' + i * 12 + '">' + i + ' años</option>';
      }
  }
}

// Función JavaScript para calcular el crédito
function calculateLoan() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var amount = parseFloat(document.getElementById('amount').value);
  var rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
  var term = parseFloat(document.getElementById('term').value);
  var monthlyPayment = amount * rate / (1 - Math.pow(1 + rate, -term));
  var totalInterest = monthlyPayment * term - amount;
  var totalPayment = monthlyPayment * term;

  // Mostrar los resultados en el DOM
  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '<p>Pago Mensual: $' + monthlyPayment.toFixed(2) + '</p>';
  resultDiv.innerHTML += '<p>Total en Intereses: $' + totalInterest.toFixed(2) + '</p>';
  resultDiv.innerHTML += '<p>Total Pagado: $' + totalPayment.toFixed(2) + '</p>';

  // Almacenar en el local storage
  var loanData = {name: name, email: email, amount: amount, rate: rate, term: term, monthlyPayment: monthlyPayment, totalInterest: totalInterest, totalPayment: totalPayment};
  localStorage.setItem('loanData', JSON.stringify(loanData));
}

// Inicializar los detalles del préstamo en la carga de la página
window.onload = updateLoanDetails;
