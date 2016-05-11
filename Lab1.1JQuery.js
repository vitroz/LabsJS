
$( "#btnQ1" ).click(function() {
	function calcularLanche(){
	 	$("#ErrosQ1").txt = '';
	 	$("#valorLanche").txt = '';
	 	var cdgItem = $('#cdgItem').val();
	 	var qtdItem = $('#qtdItem').val();

	 	if(cdgItem != '' && qtdItem != '' && qtdItem > 0){
		 	var arrayLanches = { "100": 1.20,
		 						 "101": 1.30,
		 						 "102": 1.50,
		 						 "103": 1.20,
		 						 "104": 1.30,
		 						 "105":	1.00
		 						};

		 	if(arrayLanches[cdgItem] != undefined){
		 		var valorLanche = arrayLanches[cdgItem].toFixed(2) * qtdItem;
		 		$("#valorLanche").textContent = 'Valor a ser pago: ' +valorLanche.toFixed(2) + ' reais';
		 	}else{
		 		$("#ErrosQ1").txt = 'Codigo de lanche não cadastrado';
		 	}
	 	}else{
	 		$("#ErrosQ1").txt = 'Preencha os campos Corretamente.'	 		
	 	}
	 }
	 calcularLanche();	
});



document.getElementById("btnQ2").onclick = function() {
	 function tabelaOperacoes(){
	 	var num1 = document.getElementById('num1').value;
	 	var num2 = document.getElementById('num2').value;

	 	if(num1 != '' && num2 != ''){
		 	num1 = parseFloat(num1);
		 	num2 = parseFloat(num2);

		 	document.getElementById("operacaoSoma").textContent = num1 + ' + ' + num2;
		 	document.getElementById("resultadoSoma").textContent = num1 + num2;

		 	document.getElementById("operacaoMult").textContent = num1 + ' * ' + num2;
		 	document.getElementById("resultadoMult").textContent = num1 * num2;

		 	document.getElementById("operacaoDiv").textContent = num1 + ' / ' + num2;
		 	document.getElementById("resultadoDiv").textContent = num1 / num2;

		 	document.getElementById("operacaoRest").textContent = num1 + ' % ' + num2;
		 	document.getElementById("resultadoRest").textContent = num1 % num2;	 		
	 	}else{
	 		alert('Preencha todos os campos com os numeros para gerar a Tabela de Operações.');
	 	}
	 }
	 tabelaOperacoes();
};

document.getElementById("btnQ3").onclick = function() {
	 function calcularConta(){
	 	document.getElementById("valorConta").textContent = '';
		 qtdKhw = document.getElementById('qtdKhw').value;
		 valorUn = document.getElementById('valorUn').value;

	 	if(qtdKhw != '' && valorUn != ''){
	 		qtdKhw = parseFloat(qtdKhw);
	 		valorUn = parseFloat(valorUn);

	 		if(qtdKhw >= 100 && qtdKhw < 200){
	 			valorUn += valorUn * 0.25;
	 		}
	 		if(qtdKhw >= 200){
	 			valorUn += valorUn * 0.50;
	 		}

	 		valorConta = qtdKhw * valorUn;
	 		
	 		document.getElementById("valorConta").textContent = 'Valor da conta: ' +valorConta.toFixed(2) + ' reais';

	 	}else{
	 		alert('Preencha todos os campos com os numeros para calcular a conta.')
	 	}
	 }
	 calcularConta();
};

/*Questão 4*/
document.getElementById("data").onchange = function() {
	 function converterData(){
	 	data = document.getElementById('data').value;
	 	data = data.split('-');
	 	dia = data[2];
	 	mes = data[1];
	 	ano = data[0];

	 	dicMeses = {'01' : 'Janeiro', '02' : 'Fevereiro', '03' : 'Março' , '04' : 'Abril', '05' : 'Maio', 
	 				'06' : 'Junho', '07' : 'Julho', '08' : 'Agosto', '09' : 'Setembro', '10' : 'Outubro', 
	 				'11' : 'Novembro','12' : 'Dezembro',}

	 	document.getElementById("dataExtenso").textContent = dia + ' de ' + dicMeses[mes] + ' de ' + ano;
	 }
	 converterData();
};

 function setNumero(valorBotao){
 	document.getElementById("resultadoCalc").value += valorBotao + '';
 }

 function limparCalc(limpeza){
 	document.getElementById("resultadoCalc").value = '';
 }

document.getElementById("btnQ5").onclick = function(event) {

	 function calculadora(){
	 	var operacao = document.getElementById("resultadoCalc").value;

	 	try{
	 		resultado = eval(operacao);
	 	}catch(e){
	 		 if (e instanceof ReferenceError) {
		        resultado = 'Operação Invalida'
		    }
	 	}

	 	document.getElementById("resultadoCalc").value = resultado;
	 }
	 calculadora();
};


 var opcao = document.getElementById("btnPar").value;

 function checkParOuImpar(numero){
 	if(numero%2 == 0){
 		return true;
 	}else{
 		return false;
 	}
 }

 window.contVitoriasUser = 0;
 window.contVitoriasPC = 0;

 function ParOuImpar(opcao){

 	document.getElementById('inputUsuario').innerHTML = '';

 	var usuarioEscolha = '';
 	var pc = '';

 	if(opcao == 'par'){
 		usuarioEscolha = 'par';
 		document.getElementById("btnPar").style["background-color"] = 'C5C5C5';
 		document.getElementById("btnImpar").style["background-color"] = '';
 		pc = 'impar';
 	}else{
 		usuarioEscolha = 'impar'
 		document.getElementById("btnPar").style["background-color"] = '';
 		document.getElementById("btnImpar").style["background-color"] = 'C5C5C5';
 		pc = 'par';
 	}


 	var div = document.getElementById('inputUsuario');
 	var input = document.createElement('input');
 	input.id = 'numeroUsuario';
 	var span = document.createElement('span');
 	var button = document.createElement('button');

 	span.innerHTML = 'Escolha um numero para Jogar:';
 	input.innerHTML = '';
 	input.type = 'number';
 	button.innerHTML = 'Jogar';

 	div.appendChild(span);
 	div.appendChild(input);
 	div.appendChild(button);

 	button.onclick = function Jogar(){
 		var numeroUsuario = document.getElementById("numeroUsuario").value;
 		if(numeroUsuario != ''){

		 	var numeroPc = Math.floor((Math.random() * 999) + 0);
		 	var numeroUsuario = document.getElementById("numeroUsuario").value;
		 	numeroUsuario = parseFloat(numeroUsuario);

			document.getElementById("inputPc").textContent = 'Numero randômico escolhido pelo PC: ' + numeroPc;
			resultado = numeroUsuario + numeroPc;
			document.getElementById("resultadoJogo").textContent = 'Soma: ' + numeroUsuario + ' + ' + numeroPc + ' = ' + resultado;


			if(usuarioEscolha == 'par' && checkParOuImpar(resultado)){
				alert('Usuario Venceu!!');
				contVitoriasUser = contVitoriasUser + 1;
				document.getElementById("contVitoriasUser").textContent = 'Você :' + contVitoriasUser; 
			}else if(usuarioEscolha == 'impar' && !checkParOuImpar(resultado)){
				alert('Usuario Venceu!!');
				contVitoriasUser = contVitoriasUser + 1;
				document.getElementById("contVitoriasUser").textContent = 'Você :' + contVitoriasUser; 
			}
			
			else{
				alert('PC Venceu!!');
				contVitoriasPC = contVitoriasPC + 1;
				document.getElementById("contVitoriasPC").textContent = 'PC :' +contVitoriasPC; 
			}

			if(contVitoriasUser == contVitoriasPC){
				document.getElementById("Q6").style["background-color"] = "white";
				document.getElementById("Q6").style["color"] = "black";
			}else if(contVitoriasUser > contVitoriasPC){
				document.getElementById("Q6").style["background-color"] = "#66FF33"; //verde
			}else if(contVitoriasUser < contVitoriasPC){
				document.getElementById("Q6").style["background-color"] = "#BB2828"; //vermelho
				document.getElementById("Q6").style["color"] = "white"; //verde
			}

 		}else{
 			alert('Informe um numero para jogar par ou impar.')
 		}

	}	
  }
