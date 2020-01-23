//------- Etapa 1: capturar a opção dE REPRESENTANTE DE PJ escolhido para exibir os campos filhos 

var pj = document.querySelector("#bbb-1");
pj.addEventListener("click", function(){
	var id = this.getAttribute("id");       			// pega o id do select clicado, não da opção
	var qtdOpcoes = this.length;   					 	// quantidade de opções naquele select
	var opcao = this.selectedIndex;         			// indice da opção selecionada dentro do select
	exibeHtmlFilhoDaPJ(qtdOpcoes, opcao, id);
	console.log(opcao);
	
});


//------- Etapa 1: capturar a opção do ADVOGADO escolhido para exibir os campos filhos 

var advogado = document.querySelector("#aaa-1");
advogado.addEventListener("click", function(){
	var id = this.getAttribute("id");       			// pega o id do select clicado, não da opção
	var qtdOpcoes = this.length;   					 	// quantidade de opções naquele select
	var opcao = this.selectedIndex;         			// indice da opção selecionada dentro do select
	exibeHtmlFilhoDaOpcao(qtdOpcoes, opcao, id);
	console.log(opcao);
	
});

//------- Etapa 2 arquivo Protocolar: capturar a opção do TIPO DE PROTOCOLO escolhido para exibir os campos filhos

var tipoProtocolo = document.querySelector("#ccc-1");
tipoProtocolo.addEventListener("click", function(){
	var id = this.getAttribute("id");       			// pega o id do select clicado, não da opção
	var qtdOpcoes = this.length;   					 	// quantidade de opções naquele select
	var opcao = this.selectedIndex;         			// indice da opção selecionada dentro do select
	exibeHtmlFilhoDaPJ(qtdOpcoes, opcao, id);
	console.log("deu");
	//console.log(qtdOpcoes+" ; "+opcao+" ; "+id);
	
});











//--------------------------------------------------- Funções ------------------------------------------------------------------------------------------------



//-------------- Lógica de exibir opção Filha da PJ ----


function exibeHtmlFilhoDaPJ(qtdOpcoes, opcao, id) {
	// verifica se exites opção filha

	var divFilha = document.querySelector("#"+id+"1");
	if (opcao=="1") {
		tornarVisivel(divFilha);		
	} else {
		tornarInvisivel(divFilha);
		}	
}




//-----------Lógica de exibir opção filha para ADVOGADO e contem funções usada pela Lógica de exibir opção filha da PJ

function exibeHtmlFilhoDaOpcao(qtdOpcoes, opcao, id) {
		// verifica se exites opção filha
	
	if (verificaSeTemFilhos(opcao)) {
		var divFilha = document.querySelector("#"+id+"1");
		console.log("divifilhas");
		tornarVisivel(divFilha);
		exibeBotaoContinuar();
	} else {
			
		if(opcao == "2") {
			exibeBotaoContinuar();
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
	console.log("botaaaooo");
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
