const scree = document.querySelector("#luz");
const bot = document.querySelector("#acender");

let acend = false;

const acao = function(){
	if(!acend){
		acend = true;
		scree.src = "acesa.jpg";
		bot.innerText = "Desligar";

	}else{
		acend = false;
		scree.src = "apagada.jpg";
		bot.innerText = "Ligar";

	}
}
