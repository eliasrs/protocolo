//------- Etapa 2 arquivo Protocolar: capturar a opção do TIPO DE PROTOCOLO escolhido para exibir os campos filhos

var tipoProtocolo = document.querySelector("#ccc-1");
tipoProtocolo.addEventListener("click", function(){
	var id = this.getAttribute("id");       			// pega o id do select clicado, não da opção
	var qtdOpcoes = this.length;   					 	// quantidade de opções naquele select
	var opcao = this.selectedIndex;
	//console.log(qtdOpcoes+" ; "+opcao+" ; "+id);// indice da opção selecionada dentro do select
	exibeHtmlFilhoDaPJ(qtdOpcoes, opcao, id);
});

//----------------------- botao
var botaoBuscar = document.querySelector("#ccc-111").addEventListener("click", function(event){
	event.preventDefault();
});






//--------------------------------------------------- Funções ------------------------------------------------------------------------------------------------

//-------------- Lógica de exibir opção Filha da PJ ----


function exibeHtmlFilhoDaPJ(qtdOpcoes, opcao, id) {
	// verifica se exites opção filha

		
	for (i=1; i < qtdOpcoes; i++) {
		var divFilha = document.querySelector("#"+id+i);
		//console.log(divFilha);
		if (opcao == i) {		
			//console.log("igual"+i)
			tornarVisivel(divFilha);
			verificaSeExibeMetadados (opcao, divFilha, i, id);
			
		} else {
			//console.log("Diferente"+i);
			tornarInvisivel(divFilha);
			//var divFilha = document.querySelector("#ccc-111");
			//tornarInvisivel(divFilha);
		}	
				
		
	}
}


//--------------------- ações por botão
function exibeFilhoPorBotao(id){
	var divFilha = botaoBuscar = document.querySelector("#"+id);
	tornarVisivel(divFilha);
}


function exibeBotaoProtocolar(){
	//console.log("botaaaooo");
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

function verificaSeExibeMetadados (opcao, divFilha, i, id) {
	if (opcao == 1 || opcao ==2) {
		// exibe dados
		
		// exibe botao continuar
		console.log("exibe metadados");
	
	} else { 
		exibeBotaoProtocolar();
		console.log("não exibe metadados");
	}
}

function myFunction(id) {
	var botaoBuscar = document.querySelector("#ccc-111").addEventListener("click", function(event){
	//alert(id);
	var divFilha = document.querySelector("#"+id);
	tornarVisivel(divFilha);
	})
}

