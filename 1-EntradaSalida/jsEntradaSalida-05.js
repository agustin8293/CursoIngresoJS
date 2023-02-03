/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 
Agustin Armando Godoy 
Guia E/S Ej. 5
*/
function mostrar()
{	
	let nombre;
	let edad; 

	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;

	alert("Usted se llama " + nombre + " y tiene " + edad + " años" )
}

