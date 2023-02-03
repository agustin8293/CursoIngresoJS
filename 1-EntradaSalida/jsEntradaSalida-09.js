/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Agustin Armando Godoy 
Guia E/S Ej. 9
*/
function mostrarAumento()
{

	let sueldo;
	let nuevoSueldo;
	let aumento;

	sueldo = parseFloat(txtIdSueldo. value);

	aumento = sueldo * 10/100;

	nuevoSueldo = sueldo + aumento;

	txtIdResultado. value = nuevoSueldo

}
