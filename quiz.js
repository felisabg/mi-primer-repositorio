function jugarQuiz() {

    var nombre=document.getElementById("nombre").value;
    if(nombre=="") {
        alert("Ingresa tu nombre para jugar");
    } else {
        var num_alea = Math.round(Math.random() * 3);

        if(num_alea == 0) {
            document.getElementById("imgquiz").setAttribute("src","img/ballerina.png");
        } else if(num_alea == 1) {
            document.getElementById("imgquiz").setAttribute("src","img/stiletto.png");
        } else if(num_alea == 2) {
            document.getElementById("imgquiz").setAttribute("src","img/peep_toe.png");
        } else if(num_alea == 3) {
            document.getElementById("imgquiz").setAttribute("src","img/pump.png");
        } 

        var cant_intentos = 4;

        while(cant_intentos > 0) {
					cant_intentos--;
                    numero= parseInt( prompt("0 Ballerina \n 1 Stiletto"));
        }
    }

}