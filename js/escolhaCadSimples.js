//------- Etapa 1: capturar a opção do problema escolhido 

var todosSelect = document.querySelectorAll("select"); 		// seleciona todas os elementos <Select> da pagina
for (var i = 1; i < 4; i++) {				// para cada select, desconsiderando o primeiro (0), pq ele não precisa de comportamento, faça:
	todosSelect[i].addEventListener("click", function(){    // escuta o evento de click em cada select (todosSelect[i]) e define função anonima para pegar dados
		var id = this.getAttribute("id");       			// pega o id do select clicado, não da opção
		var qtdOpcoes = this.length;   					 	// quantidade de opções naquele select
		var opcao = this.selectedIndex;         			// indice da opção selecionada dentro do select
		//exibeHtmlFilhoDaOpcao(qtdOpcoes, opcao, id);

	});
};


//--------------------------------------------------- Funções ----------------------------------------
function exibeHtmlFilhoDaOpcao(qtdOpcoes, opcao, id) {
		// verifica se exites opção filha
	console.log("tá chamando a funçaõ");
	
	/** if (verificaSeTemFilhos(opcao, id)) { // se existir select filho (true) da opção clicada, faz rotina pra exibir
		escondeBotaoContinuar(); // serve para esconder o botão quando já tinha sido exibido e a pessoa mudou de opção, e a opção tem select filhos;

		for  (var i = 1; i < qtdOpcoes ; i++) { //para cada opção, desconsidera o 0, seleciona por id
			var idFilho = [id]+[i];				// monta o id do select filho, sendo que os filhos possuem o dígito a mais: 'id do selecionado' + 'i'.
			var divFilha = document.querySelector("#"+idFilho).parentNode;  // monta o id a ser pesquisado e pega o elemento pai, que é a DIV
			
			if (i == opcao) {  // se o i for igual a opção clicada chama função pra tornar visível
				tornarVisivel(divFilha);
			} else {
				tornarInvisivel(divFilha); // se o i for diferente da clicada,  tem que fazer as outras ficarem INvisivel, para os casos em que mudou de opção. logo, sempre fica visivel a clicada e torna as outras opçoes invisiveis, mesmo que já estejam invisiveis.
			}
		}		

	} else {
		exibeBotaoContinuar(); // se não há select filho, chama função para exibir o botão continuar
	}**/
} 


function verificaSeTemFilhos(opcao, id) {
	haFilho = document.querySelector("#"+id+opcao); // ao concatenar o id do select clicado com o número da opção, eu otenho o id da div filha, caso exista
	console.log("= "+haFilho+" ; ")
	if (haFilho!= null || opcao=="0") {   // se a opção clicada tem filhos (hafilhos!= null) ou opção clicada não é a primeira (opcao == "0", é uma exceção do índece 0), então returna true pra exibir filhos
		return true;
	} else { 
		return false;
	}
}

function exibeBotaoContinuar(){
	botao = document.querySelector("#btn-continuar");
	botao.classList.remove("invisivel");
}

function escondeBotaoContinuar(){
	botao = document.querySelector("#btn-continuar");
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
