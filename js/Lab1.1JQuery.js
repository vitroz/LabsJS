 $( "#btnQ1" ).click(function() {
	function calcularLanche(){
	 	$("#ErrosQ1").text("");
	 	$("#valorLanche").text("");
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
		 		$("#valorLanche").text('Valor a ser pago: ' +valorLanche.toFixed(2) + ' reais');
		 	}else{
		 		$("#ErrosQ1").text('Codigo de lanche não cadastrado');
		 	}
	 	}else{
	 		$("#ErrosQ1").text('Preencha os campos Corretamente.');
	 	}
	 }
	 calcularLanche();	
});

  $( "#btnQ2" ).click(function() {
	function tabelaOperacoes(){
	 	var num1 = $('#num1').val();
	 	var num2 = $('#num2').val();

	 	if(num1 != '' && num2 != ''){
		 	num1 = parseFloat(num1);
		 	num2 = parseFloat(num2);

		 	$("#operacaoSoma").text(num1 + ' + ' + num2) 
		 	$("#resultadoSoma").text(num1 + num2) 

		 	$("#operacaoMult").text(num1 + ' * ' + num2) 
		 	$("#resultadoMult").text(num1 * num2) 

		 	$("#operacaoDiv").text(num1 + ' / ' + num2) 
		 	$("#resultadoDiv").text(num1 / num2) 

		 	$("#operacaoRest").text(num1 + ' % ' + num2) 
		 	$("#resultadoRest").text(num1 % num2) 	 		
	 	}else{
	 		alert('Preencha todos os campos com os numeros para gerar a Tabela de Operações.');
	 	}
	 }
	 tabelaOperacoes();

  });

  $( "#btnQ3" ).click(function() {
  	 function calcularConta(){
	 	$("#valorConta").text('');
		 qtdKhw = $('#qtdKhw').val();
		 valorUn = $('#valorUn').val();

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
	 		
	 		$("#valorConta").text('Valor da conta: ' +valorConta.toFixed(2) + ' reais');

	 	}else{
	 		alert('Preencha todos os campos com os numeros para calcular a conta.');
	 	}
	 }
	 calcularConta();
  });

/*Questão 4*/

  $( "#data" ).change(function() {
  	function converterData(){
	 	data = $('#data').val();
	 	data = data.split('-');
	 	dia = data[2];
	 	mes = data[1];
	 	ano = data[0];

	 	dicMeses = {'01' : 'Janeiro', '02' : 'Fevereiro', '03' : 'Março' , '04' : 'Abril', '05' : 'Maio', 
	 				'06' : 'Junho', '07' : 'Julho', '08' : 'Agosto', '09' : 'Setembro', '10' : 'Outubro', 
	 				'11' : 'Novembro','12' : 'Dezembro',}

	 	$("#dataExtenso").text(dia + ' de ' + dicMeses[mes] + ' de ' + ano) 
	 }
	 converterData();
  });


 function setNumero(valorBotao){
 	$("#resultadoCalc").val($("#resultadoCalc").val() + valorBotao + '');
 }

 function limparCalc(limpeza){
 	$("#resultadoCalc").val('');
 }

 $( "#btnQ5" ).click(function() {

 	function calculadora(){
	 	var operacao = $("#resultadoCalc").val();

	 	try{
	 		resultado = eval(operacao);
	 	}catch(e){
	 		 if (e instanceof ReferenceError) {
		        resultado = 'Operação Invalida'
		    }
	 	}

	 	$("#resultadoCalc").val(resultado);
	 }
	 calculadora();

 });

/*Questao 6*/

 var opcao = $("#btnPar").val();

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

 	$('#inputUsuario').html('');

 	var usuarioEscolha = '';
 	var pc = '';

 	if(opcao == 'par'){
 		usuarioEscolha = 'par';
 		$("#btnPar").css("background-color",'C5C5C5');
 		$("#btnImpar").css("background-color", '');
 		pc = 'impar';
 	}else{
 		usuarioEscolha = 'impar'
 		$("#btnPar").css("background-color", '');
 		$("#btnImpar").css("background-color", 'C5C5C5');
 		pc = 'par';
 	}


 	var div = $('#inputUsuario');
 	$('#inputUsuario').append('<input type="number" id="numeroUsuario"></input>');
 	$('#inputUsuario').append('<span>Escolha um numero para Jogar:</span>');
 	$('#inputUsuario').append('<button id="jogar">Jogar</button>');
 	var span = document.createElement('span');
 	var button = document.createElement('button');

 	$('#jogar').click(function Jogar(){
 		var numeroUsuario = $("#numeroUsuario").val();
 		if(numeroUsuario != ''){

		 	var numeroPc = Math.floor((Math.random() * 999) + 0);
		 	var numeroUsuario = $("#numeroUsuario").val();
		 	numeroUsuario = parseFloat(numeroUsuario);

			$("#inputPc").text('Numero randômico escolhido pelo PC: ' + numeroPc); 
			resultado = numeroUsuario + numeroPc;
			$("#resultadoJogo").text('Soma: ' + numeroUsuario + ' + ' + numeroPc + ' = ' + resultado); 


			if(usuarioEscolha == 'par' && checkParOuImpar(resultado)){
				alert('Usuario Venceu!!');
				contVitoriasUser = contVitoriasUser + 1;
				$("#contVitoriasUser").text('Você :' + contVitoriasUser); 
			}else if(usuarioEscolha == 'impar' && !checkParOuImpar(resultado)){
				alert('Usuario Venceu!!');
				contVitoriasUser = contVitoriasUser + 1;
				$("#contVitoriasUser").text('Você :' + contVitoriasUser);
			}
			
			else{
				alert('PC Venceu!!');
				contVitoriasPC = contVitoriasPC + 1;
				$("#contVitoriasPC").text('PC :' +contVitoriasPC);
			}

			if(contVitoriasUser == contVitoriasPC){
				$("#Q6").css("background-color","white");
				$("#Q6").css("color", "black");
			}else if(contVitoriasUser > contVitoriasPC){
				$("#Q6").css("background-color", "#66FF33"); //verde
			}else if(contVitoriasUser < contVitoriasPC){
				$("#Q6").css("background-color", "#BB2828"); //vermelho
				$("#Q6").css("color", "white"); //verde
			}

 		}else{
 			alert('Informe um numero para jogar par ou impar.')
 		}

	});	
  }
