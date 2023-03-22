var botonCalcular = document.getElementById("calcular");
botonCalcular.addEventListener("click", function() {
	var monto = parseFloat(document.getElementById("monto").value);
	var tasa = parseFloat(document.getElementById("tasa").value);
	var plazo = parseInt(document.getElementById("plazo").value);

	if (isNaN(monto) || isNaN(tasa) || isNaN(plazo)) {
		alert("Por favor ingrese un monto, una tasa y un plazo válidos.");
		return;
	}

	var plazoFijo = calcularPlazoFijo(monto, tasa, plazo);
	var interes = plazoFijo - monto;

	var resultado = document.getElementById("resultado");
	resultado.innerHTML = "<p>Después del plazo fijo, su monto será de $" + plazoFijo.toFixed(2) + ".</p>" + 
		"<p>El interés generado será de $" + interes.toFixed(2) + ".</p>";
});

function calcularPlazoFijo(monto, tasa, plazo) {
	var plazoDias = plazo; // días en el plazo fijo
	var tasaDecimal = tasa / 100;
	var interesDiario = monto * (tasaDecimal / 365);
	var interesTotal = interesDiario * plazoDias;
	var plazoFijo = monto + interesTotal;

	return plazoFijo;
}

