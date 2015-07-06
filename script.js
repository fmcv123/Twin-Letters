function reroll(){	/* funçao para preencher as div com as letras*/

		var alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
		
		$( ".cell" ).each(function( index ) { /*ciclo for each para cada div com a class "cell"*/
			var adquereletra = alfabeto[Math.floor(Math.random()*alfabeto.length)];
			var alfabetoindex = alfabeto.indexOf(adquereletra); /*index da letra escolhida*/
			
			$(this).empty();	 /*limpa essas divs*/
			$(this).append(adquereletra); /*adiciona as letras ás divs*/
		
			alfabeto.splice( alfabetoindex, 1); /*Remove a letra escolhida do alfabeto*/
		});
	}
	

/*#####################################################################*/

$(document).ready(function(){
	$(reroll); /*ao fazer load da pagina é logo preenchida com as letras*/

});
	
