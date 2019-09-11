const numero = document.querySelector("#valor");
const hora = document.querySelector("#hora");
const minuto = document.querySelector("#minuto");
const segundo = document.querySelector("#segundo");

var intervalo;
var op=0;

//numero.innerText = hora.value+":"+minuto.value+":"+segundo.value;

const valendo = function(v){
	var segundos=segundo.value;
	var minutos=minuto.value;
	var horas=hora.value;

	op = v;


	intervalo = setInterval(function(){
		if(op == 1){
			parar(horas, minutos, segundos);
		}else if(op == 0){

			if(minutos == 0 && segundos == 0 && horas == 0){
						numero.innerText = horas+":"+minutos+":"+segundos;
						clearInterval(intervalo);
			}else{ 
				if(segundos >= 0 && segundos < 60){
					if(segundos > 0){
						numero.innerText = horas+":"+minutos+":"+segundos;
						segundos--;
					}else if(segundos == 0){
						if(minutos == 0 && segundos == 0 && horas != 0){
							numero.innerText = horas+":"+minutos+":"+segundos;

							segundos = 59;
							minutos = 59;
							horas--;
						}else{
							numero.innerText = horas+":"+minutos+":"+segundos;

							segundos = 59;
							minutos--;
						}
					}
				}
			}
		}

	},1000);
}

const parar = function(h, m, s){
	if(s <= 9){
		s = "0"+s;
	}
	if (m <= 9) {
		m = "0"+m;
	}
	if (h <= 9) {
		h = "0"+h;
	}

	numero.innerText = h+":"+m+":"+s;

	clearInterval(intervalo);
}
