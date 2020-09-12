var num_alea;
var intentos;
var pistas;

function jugarQuiz() {

	var nombre=document.getElementById("nombre").value;
	if(nombre=="") {
		alert("Ingresa tu nombre para jugar");
	} else {
		
		//Se deshabilita el boton "Jugar" y la caja de texto "nombre"
		document.getElementById('boton_jugar').disabled = true;
		document.getElementById('nombre').disabled = true;
		document.getElementById("boton_jugar").classList.add("btn-secondary");



		num_alea = Math.round(Math.random() * 3);

		if(num_alea == 0) {
		    document.getElementById("quiz_img").innerHTML = "<img class=\"img-fluid\" src=\"img/ballerina.png\">";
		} else if(num_alea == 1) {
		    document.getElementById("quiz_img").innerHTML = "<img class=\"img-fluid\" src=\"img/stiletto.png\">";
		} else if(num_alea == 2) {
		    document.getElementById("quiz_img").innerHTML = "<img class=\"img-fluid\" src=\"img/peep_toe.png\">";
		} else if(num_alea == 3) {
			document.getElementById("quiz_img").innerHTML = "<img class=\"img-fluid\" src=\"img/pump.png\">";
		}

		//Mostrar opciones y des-chequearlas
		document.getElementById('opt_ballerina_div').classList.remove("invisible");
		document.getElementById('opt_stiletto_div').classList.remove("invisible");
		document.getElementById('opt_peeptoe_div').classList.remove("invisible");
		document.getElementById('opt_pump_div').classList.remove("invisible");
		document.getElementById('opt_ballerina').checked = false;
		document.getElementById('opt_stiletto').checked = false;
		document.getElementById('opt_peeptoe').checked = false;
		document.getElementById('opt_pump').checked = false;

		//borrar alertas anteriores
		document.getElementById("quiz_alerts").innerHTML = "";

		intentos = 3;
		pistas = 1;

	}

}

function validarRespuesta() {
	var acierto = false;
	var nuevo_juego = false;
	var texto_alerta = "";
	var texto_pista = "";

	if(document.getElementById('opt_ballerina').checked == true) {
		if(num_alea == 0) {
            acierto = true;
            document.getElementById('opt_stiletto_div').classList.add("invisible");
            document.getElementById('opt_peeptoe_div').classList.add("invisible");
            document.getElementById('opt_pump_div').classList.add("invisible");
		} else {
			document.getElementById('opt_ballerina_div').classList.add("invisible");
		}
	} else if(document.getElementById('opt_stiletto').checked == true) {
		if(num_alea == 1) {
            acierto = true;
            document.getElementById('opt_peeptoe_div').classList.add("invisible");
            document.getElementById('opt_pump_div').classList.add("invisible");
            document.getElementById('opt_ballerina_div').classList.add("invisible");
		} else {
			document.getElementById('opt_stiletto_div').classList.add("invisible");
		}
	} else if(document.getElementById('opt_peeptoe').checked == true) {
		if(num_alea == 2) {
            acierto = true;
            document.getElementById('opt_stiletto_div').classList.add("invisible");
            document.getElementById('opt_ballerina_div').classList.add("invisible");
            document.getElementById('opt_pump_div').classList.add("invisible");
		} else {
			document.getElementById('opt_peeptoe_div').classList.add("invisible");
		}
	} else if(document.getElementById('opt_pump').checked == true) {
		if(num_alea == 3) {
            acierto = true;
            document.getElementById('opt_stiletto_div').classList.add("invisible");
            document.getElementById('opt_ballerina_div').classList.add("invisible");
            document.getElementById('opt_peeptoe_div').classList.add("invisible");
		} else {
			document.getElementById('opt_pump_div').classList.add("invisible");
		}
	}
	
	if(acierto == true) {
		texto_alerta = "<div class=\"alert alert-success alert-dismissible\"> \
							Muy bien, Acertaste! \
							<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"> \
								<span aria-hidden=\"true\">&times;</span> \
							</button> \
                        </div>";
		
		nuevo_juego = true;

	} else {
		intentos--;
		if(intentos > 0) {
			texto_alerta = "<div class=\"alert alert-warning alert-dismissible\"> \
								Respuesta incorrecta! Intentos restantes: " + intentos + ". \
								<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"> \
									<span aria-hidden=\"true\">&times;</span> \
								</button> \
							</div>";

			if(pistas > 0) {
				pistas--;
				if(num_alea == 0) {
					texto_pista = "Su nombre esta relacionado con la danza";
				} else if(num_alea == 1) {
					texto_pista = "Su nombre es una palabra en Italiano";
				} else if(num_alea == 2) {
					texto_pista = "Contiene el nombre de una parte del pie";
				} else if(num_alea == 3) {
					texto_pista = "Su nombre significa bombear";
				}
				texto_pista = "<div class=\"alert alert-info alert-dismissible\"> \
                                    Pista: " + texto_pista + ". \
                                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"> \
                                        <span aria-hidden=\"true\">&times;</span> \
                                    </button> \
                                </div>";
				texto_alerta = texto_pista + texto_alerta;
			}
		} else {
			texto_alerta = "<div class=\"alert alert-danger alert-dismissible\"> \
								Perdiste! Intentalo de nuevo. \
								<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"> \
									<span aria-hidden=\"true\">&times;</span> \
								</button> \
							</div>";

			nuevo_juego = true;

		}
	}

	document.getElementById("quiz_alerts").innerHTML = texto_alerta + document.getElementById("quiz_alerts").innerHTML;				
	
	if(nuevo_juego == true) {
		document.getElementById('boton_jugar').innerHTML = "Nuevo juego";
		document.getElementById('boton_jugar').disabled = false;
		document.getElementById("boton_jugar").classList.remove("btn-secondary");
	}

}
