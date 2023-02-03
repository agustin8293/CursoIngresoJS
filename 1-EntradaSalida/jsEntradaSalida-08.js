/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
Agustin Armando Godoy 
Guia E/S Ej. 8
*/
function SacarResto()
{
	let NumeroDividendodo;
	let NumeroDivisor;
	let resultado;

	NumeroDividendo = txtIdNumeroDividendo.value;
	NumeroDividendo = parseInt(NumeroDividendo)

	NumeroDivisor = txtIdNumeroDivisor.value;
	NumeroDivisor = parseInt(NumeroDivisor)

	resultado= NumeroDividendo % NumeroDivisor;

	alert("El resto es: " + resultado);
}
