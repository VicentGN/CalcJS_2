/* 
Variables destacadas:
	punto = tiene en cuenta si el punto decimal ha sido utilizado previamente
	resultado = tiene en cuenta si el número que aparece en el screen es un resultado de una operación. De ser así, no se le podrán añadir nuevos numeros ni decimales (congelación del número)
*/

let array, suma = false, resta = false, multi = false, division = false, porcentaje = false, punto = false, resultado = false;

array = []; /* Almacena operandos y resultados generados a lo largo de la operación */

/* Eventos */

/* Puesta a punto de la aplicación */

init();

/* Botones - números */

$("#btn0").click(function(){
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(0);
	}
});

$("#btn1").click(function(){
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(1);
	}
});

$("#btn2").click(function(){
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(2);
	}
});

$("#btn3").click(function(){
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(3);
	}
});

$("#btn4").click(function(){
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(4);
	}
});

$("#btn5").click(function(){
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(5);
	}
});

$("#btn6").click(function(){
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(6);
	}
});

$("#btn7").click(function(){
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(7);
	}
});

$("#btn8").click(function(){
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(8);
	}
});

$("#btn9").click(function(){
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(9);
	}
});


$("#btnPnt").click(function(){
		if (punto == false && comprobarLong() && $("#screen").text() != "" && resultado == false) {
		introducirNumero(".");
		punto = true;
	}
});

/* Botones - operadores */

$("#btnSum").click(function(){
	array.push($("#screen").text());
	vaciarScreen();
	suma = true;
	punto = false;
	resultado = false;
});

$("#btnRes").click(function(){
	array.push($("#screen").text());
	vaciarScreen();
	resta = true;
	punto = false;
	resultado = false;
});

$("#btnProd").click(function(){
	array.push($("#screen").text());
	vaciarScreen();
	multi = true;
	punto = false;
	resultado = false;
});

$("#btnDiv").click(function(){
	array.push($("#screen").text());
	vaciarScreen();
	division = true;
	punto = false;
	resultado = false;
});

$("#btnIgu").click(function(){
	if (resultado == false){
		array.push($("#screen").text());
		vaciarScreen();
		calcularOperacion();
		punto = false;
		resultado = true;
	}	
});

/* Botón reiniciar */

$("#inicio").click(function(){
	reset();
});


/* Funciones */

function comprobarLong(){
	let valido = false;
	if ($("#screen").text().length < 20){
		valido = true;
	}
	return valido;
}

function introducirNumero(num){
	$("#screen").text($("#screen").text() + num.toString());
}

function vaciarScreen(){
	$("#screen").text("");
}

function calcularOperacion(){
	if (suma){
		let sumador = 0;
		for (let i = 0; i < array.length; i++){
			if (array[i] != "")
				sumador = sumador + parseFloat(array[i]);
		}
		$("#screen").text(sumador);
		array = [];
		suma = false;
	} else if (resta){
		let restador = array[0];
		for (let i = 1; i < array.length; i++){
			if (array[i] != "")
				restador = restador - parseFloat(array[i]);
		}
		$("#screen").text(restador);
		array = [];
		resta = false;
	} else if (multi) {
		let producto = array[0];
		for (let i = 1; i < array.length; i++){
			if (array[i] != "")
				producto = producto * parseFloat(array[i]);
		}
		$("#screen").text(producto);
		array = [];
		multi = false;
	} else if (division){
		let dividendo = array[0];
		for (let i = 1; i < array.length; i++){
			if (array[i] != "")
				dividendo = dividendo / parseFloat(array[i]);
		}
		$("#screen").text(dividendo);
		array = [];
		division = false;		
	}
}

function reset(){
	$("#screen").text("");
	array = [];
	suma = false;
	resta = false;
	producto = false;
	division = false;
	porcentaje = false;
	punto = false;
	resultado = false;
}

/* Detectar navegador para configurar menú desplegable oculto */

function detectarNavegador() {
	if (navigator.vendor === "") {
		if (window.screen.width > 1366) {
			$("ul:nth-child(2)").css("margin-top", "148px");
		} else {
			$("ul:nth-child(2)").css("margin-top", "106px");
		}
	} else if (navigator.vendor === "Google Inc.") {
		if (window.screen.width > 1366) {
			$("ul:nth-child(2)").css("margin-top", "74px");
		} else {
			$("ul:nth-child(2)").css("margin-top", "52px");
		}	
	}		 
};

function init(){
	reset();
	detectarNavegador();
}









