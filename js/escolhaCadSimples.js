//------- Etapa 1: capturar a opção do problema escolhido 

var select = document.querySelector("#aaa-1");
select.addEventListener("click", function(){
	var id = this.getAttribute("id");       			// pega o id do select clicado, não da opção
	var qtdOpcoes = this.length;   					 	// quantidade de opções naquele select
	var opcao = this.selectedIndex;         			// indice da opção selecionada dentro do select
	exibeHtmlFilhoDaOpcao(qtdOpcoes, opcao, id);
	console.log("pensei");
	
});









//--------------------------------------------------- Funções ----------------------------------------
function exibeHtmlFilhoDaOpcao(qtdOpcoes, opcao, id) {
		// verifica se exites opção filha
	
	if (verificaSeTemFilhos(opcao)) {
		var divFilha = document.querySelector("#"+id+"1");
		console.log("divifilhas");
		tornarVisivel(divFilha);
		//exibeBotaoContinuar();
	} else {
			
		if(opcao != "0") {
			tornarInvisivel(divFilha);
			//exibeBotaoContinuar();
		}
			
		
	}

		
			
			
}


function verificaSeTemFilhos(opcao) {
	if (opcao=="1"){
		return true;
	} else {
		return false
	}
	
	
	haFilho = document.querySelector("#"+id+opcao); // ao concatenar o id do select clicado com o número da opção, eu otenho o id da div filha, caso exista
	console.log("= "+haFilho+" ; ")
	if (haFilho!= null || opcao=="0") {   // se a opção clicada tem filhos (hafilhos!= null) ou opção clicada não é a primeira (opcao == "0", é uma exceção do índece 0), então returna true pra exibir filhos
		return true;
	} else { 
		return false;
	}
}

function exibeBotaoContinuar(){
	botao = document.querySelector("#btn-finalizar");
	botao.classList.remove("invisivel");
}

function escondeBotaoContinuar(){
	botao = document.querySelector("#btn-finalizar");
	botao.classList.add("invisivel");	
}



function tornarVisivel(divFilha) { // remove a classe "invisivel" da div (opção) clicada. No css essa classe está com diplay: none
	divFilha.classList.remove("invisivel");
	divFilha.classList.add("visivel");
}

function tornarInvisivel(divFilha) {  // adiciona a classe "invisivel" da div (opção) clicada. No css essa classe está com diplay: none
	divFilha.classList.remove("visivel");
	divFilha.classList.add("invisivel");
	
}
