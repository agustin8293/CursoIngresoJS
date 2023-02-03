/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
Agustin Armando Godoy
Guia E/S Ej. 4 
*/
function mostrar()
{
	let nombreIngresado;
	
	nombreIngresado = prompt ("Ingrese su nombre");


	document.getElementById("txtIdNombre").value = nombreIngresado; 

	//alert(nombre);
}

