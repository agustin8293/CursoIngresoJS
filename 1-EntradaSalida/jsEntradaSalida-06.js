/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
Agustin Armando Godoy 
Guia E/S Ej. 6
*/
function sumar()
{
	let NumeroUno;
	let NumeroDos;
	let resultado;

	NumeroUno = txtIdNumeroUno.value;
	NumeroUno = parseInt(NumeroUno)

	NumeroDos = txtIdNumeroDos.value;
	NumeroDos = parseInt(NumeroDos)

	resultado= NumeroUno + NumeroDos;

	alert("El resultado es: " + resultado);
}

