/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	
	let NumeroUno;
	let NumeroDos;
	let resultado;

	NumeroUno = txtIdNumeroUno.value;
	NumeroUno = parseInt(NumeroUno)

	NumeroDos = txtIdNumeroDos.value;
	NumeroDos = parseInt(NumeroDos)

	resultado= NumeroUno - NumeroDos;

	alert("El resultado es: " + resultado);
}

function multiplicar()
{ 
	
	let NumeroUno;
	let NumeroDos;
	let resultado;

	NumeroUno = txtIdNumeroUno.value;
	NumeroUno = parseInt(NumeroUno)

	NumeroDos = txtIdNumeroDos.value;
	NumeroDos = parseInt(NumeroDos)

	resultado= NumeroUno * NumeroDos;

	alert("El resultado es: " + resultado);
}

function dividir()
{
	
	let NumeroUno;
	let NumeroDos;
	let resultado;

	NumeroUno = txtIdNumeroUno.value;
	NumeroUno = parseInt(NumeroUno)

	NumeroDos = txtIdNumeroDos.value;
	NumeroDos = parseInt(NumeroDos)

	resultado= NumeroUno / NumeroDos;

	alert("El resultado es: " + resultado);
}

