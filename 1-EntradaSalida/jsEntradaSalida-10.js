/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
Agustin Armando Godoy 
Guia E/S Ej. 10
*/
function mostrarAumento()
{
	let importe;
	let importeFinal;
	let descuento;

	importe = parseFloat(txtIdImporte. value);

	descuento = importe * 0.75;

	importeFinal = importe - descuento;

	txtIdResultado. value = importeFinal
}
