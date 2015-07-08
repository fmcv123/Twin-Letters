/*####################Funçoes*#######################################*/
	
function tl(){ //funçao que escolhe a letra que repete, escolhe a possiçao e coloca aleatoriamente as restantes letras 
		
		var alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	 	var adquereletra = alfabeto[Math.floor(Math.random()*alfabeto.length)];
		
		var alfabetoindex = alfabeto.indexOf(adquereletra); /*index da letra escolhida*/
		alfabeto.splice( alfabetoindex, 1); /*Remove a letra escolhida do array alfabeto*/
		
		
		var linha1 = [1, 2, 3, 4];
		var linha2 = [5, 6, 7, 8];
		var linha3 = [9, 10, 11, 12];
		var linha4 = [13, 14, 15, 16];
		var linha5 = [1, 5, 9, 13];
		var linha6 = [2, 6, 10, 14];
		var linha7 = [3, 7, 11, 15];
		var linha8 = [4, 8, 12, 16];
		
		var picklinha = Math.floor((Math.random() * 8) + 1); //escolhe a linha onde se vao repetir as letras
		var linhaindex;
		console.log(picklinha);
		var p1;
		var p2;
		
		
		$( ".master" ).each(function( index ) {
			$(this).removeClass("checkcell")
			$(this).removeClass("here")
			$(this).removeClass("cell").addClass( "cell" );
			$(this).empty();				
		});
		
		
		if(picklinha == 1){
			
			p1 = linha1[Math.floor(Math.random()*linha1.length)];
			
			linhaindex = linha1.indexOf(p1); /*index da linha escolhida*/
			linha1.splice( linhaindex, 1); 
			
			p2 = linha1[Math.floor(Math.random()*linha1.length)];
			
			$('.cell' + p1).append(adquereletra);
			$('.cell' + p2).append(adquereletra);
			
			$( ".cell" + p1 ).removeClass( "cell" ).addClass("here");
			$( ".cell" + p2 ).removeClass( "cell" ).addClass("here");
		
		}
		else if (picklinha == 2) {
			p1 = linha2[Math.floor(Math.random()*linha2.length)];
			
			linhaindex = linha2.indexOf(p1); /*index da linha escolhida*/
			linha2.splice( linhaindex, 1); 
			
			p2 = linha2[Math.floor(Math.random()*linha2.length)];

			$('.cell' + p1).append(adquereletra);
			$('.cell' + p2).append(adquereletra);
			
			$( ".cell" + p1 ).removeClass( "cell" ).addClass("here");
			$( ".cell" + p2 ).removeClass( "cell" ).addClass("here");

		}
		else if (picklinha == 3) {
			p1 = linha3[Math.floor(Math.random()*linha3.length)];
			
			linhaindex = linha3.indexOf(p1); /*index da linha escolhida*/
			linha3.splice( linhaindex, 1); 
			
			p2 = linha3[Math.floor(Math.random()*linha3.length)];

			$('.cell' + p1).append(adquereletra);
			$('.cell' + p2).append(adquereletra);
			
			$( ".cell" + p1 ).removeClass( "cell" ).addClass("here");
			$( ".cell" + p2 ).removeClass( "cell" ).addClass("here");

			
		}
		else if (picklinha == 4) {
			p1 = linha4[Math.floor(Math.random()*linha4.length)];
			
			linhaindex = linha4.indexOf(p1); /*index da linha escolhida*/
			linha4.splice( linhaindex, 1); 
			
			p2 = linha4[Math.floor(Math.random()*linha4.length)];

			$('.cell' + p1).append(adquereletra);
			$('.cell' + p2).append(adquereletra);
			
			$( ".cell" + p1 ).removeClass( "cell" ).addClass("here");
			$( ".cell" + p2 ).removeClass( "cell" ).addClass("here");

		}		
		else if (picklinha == 5) {
			p1 = linha5[Math.floor(Math.random()*linha5.length)];
			
			linhaindex = linha5.indexOf(p1); /*index da linha escolhida*/
			linha5.splice( linhaindex, 1); 
			
			p2 = linha5[Math.floor(Math.random()*linha5.length)];

			$('.cell' + p1).append(adquereletra);
			$('.cell' + p2).append(adquereletra);	
			
			$( ".cell" + p1 ).removeClass( "cell" ).addClass("here");
			$( ".cell" + p2 ).removeClass( "cell" ).addClass("here");

		}		
		else if (picklinha == 6) {
			p1 = linha6[Math.floor(Math.random()*linha6.length)];
			
			linhaindex = linha6.indexOf(p1); /*index da linha escolhida*/
			linha6.splice( linhaindex, 1); 
			
			p2 = linha6[Math.floor(Math.random()*linha6.length)];

			$('.cell' + p1).append(adquereletra);
			$('.cell' + p2).append(adquereletra);
			
			$( ".cell" + p1 ).removeClass( "cell" ).addClass("here");
			$( ".cell" + p2 ).removeClass( "cell" ).addClass("here");
		
		}		
		else if (picklinha == 7) {
			p1 = linha7[Math.floor(Math.random()*linha7.length)];
			
			linhaindex = linha7.indexOf(p1); /*index da linha escolhida*/
			linha7.splice( linhaindex, 1); 
			
			p2 = linha7[Math.floor(Math.random()*linha7.length)];

			$('.cell' + p1).append(adquereletra);
			$('.cell' + p2).append(adquereletra);
			
			$( ".cell" + p1 ).removeClass( "cell" ).addClass("here");
			$( ".cell" + p2 ).removeClass( "cell" ).addClass("here");

		}		
		else {
			p1 = linha8[Math.floor(Math.random()*linha8.length)];
			
			linhaindex = linha8.indexOf(p1); /*index da linha escolhida*/
			linha8.splice( linhaindex, 1); 
			
			p2 = linha8[Math.floor(Math.random()*linha8.length)];

			$('.cell' + p1).append(adquereletra);
			$('.cell' + p2).append(adquereletra);

			$( ".cell" + p1 ).removeClass( "cell" ).addClass("here");
			$( ".cell" + p2 ).removeClass( "cell" ).addClass("here");
	
		}
		
		$( ".cell" ).each(function( index ) { /*ciclo for each para cada div com a class "cell"*/
			var adquereletra2 = alfabeto[Math.floor(Math.random()*alfabeto.length)];
			var alfabetoindex2 = alfabeto.indexOf(adquereletra2); /*index da letra escolhida*/
			
			$(this).append(adquereletra2); /*adiciona as letras ás divs*/
		
			alfabeto.splice( alfabetoindex2, 1); /*Remove a letra escolhida do array alfabeto*/
		});
	
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function btn1(){
	$(".cell1").addClass("checkcell");
	$(".cell2").addClass("checkcell")
	$(".cell3").addClass("checkcell")
	$(".cell4").addClass("checkcell")
	
	var countcells = 0;
	
	$(".checkcell").each(function(index){
		if($(this).hasClass("here")){
			countcells++;
		}
	});
	
	if(countcells == 2){
		alert("WIN!");
		tl();
	}
	else{
		alert("LOSE!");          
		tl();
	}
	console.log(countcells)
};
function btn2(){
	$(".cell5").addClass("checkcell");
	$(".cell6").addClass("checkcell")
	$(".cell7").addClass("checkcell")
	$(".cell8").addClass("checkcell")
	
	var countcells = 0;
	
	$(".checkcell").each(function(index){
		if($(this).hasClass("here")){
			countcells++;
		}
	});
	
	if(countcells == 2){
		alert("WIN!");
		tl();
	}
	else{
		alert("LOSE!");          
		tl();
	}
	console.log(countcells)	
};
function btn3(){
	$(".cell9").addClass("checkcell");
	$(".cell10").addClass("checkcell")
	$(".cell11").addClass("checkcell")
	$(".cell12").addClass("checkcell")
	
	var countcells = 0;
	
	$(".checkcell").each(function(index){
		if($(this).hasClass("here")){
			countcells++;
		}
	});
	
	if(countcells == 2){
		alert("WIN!");
		tl();
	}
	else{
		alert("LOSE!");          
		tl();
	}
	console.log(countcells)	
};
function btn4(){
	$(".cell13").addClass("checkcell");
	$(".cell14").addClass("checkcell")
	$(".cell15").addClass("checkcell")
	$(".cell16").addClass("checkcell")
	
	var countcells = 0;
	
	$(".checkcell").each(function(index){
		if($(this).hasClass("here")){
			countcells++;
		}
	});
	
	if(countcells == 2){
		alert("WIN!");
		tl();
	}
	else{
		alert("LOSE!");          
		tl();
	}	
	console.log(countcells)
};
function btn5(){
	$(".cell1").addClass("checkcell");
	$(".cell5").addClass("checkcell")
	$(".cell9").addClass("checkcell")
	$(".cell13").addClass("checkcell")
	
	var countcells = 0;
	
	$(".checkcell").each(function(index){
		if($(this).hasClass("here")){
			countcells++;
		}
	});
	if(countcells == 2){
		alert("WIN!");
		tl();
	}
	else{
		alert("LOSE!");          
		tl();
	}	
	console.log(countcells)
};
function btn6(){
	$(".cell2").addClass("checkcell");
	$(".cell6").addClass("checkcell")
	$(".cell10").addClass("checkcell")
	$(".cell14").addClass("checkcell")
	
	var countcells = 0;
	
	$(".checkcell").each(function(index){
		if($(this).hasClass("here")){
			countcells++;
		}
	});
	
	if(countcells == 2){
		alert("WIN!");
		tl();
	}
	else{
		alert("LOSE!");          
		tl();
	}	
	console.log(countcells)
};
function btn7(){
	$(".cell3").addClass("checkcell");
	$(".cell7").addClass("checkcell")
	$(".cell11").addClass("checkcell")
	$(".cell15").addClass("checkcell")
	
	var countcells = 0;
	
	$(".checkcell").each(function(index){
		if($(this).hasClass("here")){
			countcells++;
		}
	});
	console.log(countcells)
	if(countcells == 2){
		alert("WIN!");
		tl();
	}
	else{
		alert("LOSE!");          
		tl();
	}	
	console.log(countcells)
};
function btn8(){
	$(".cell4").addClass("checkcell");
	$(".cell8").addClass("checkcell")
	$(".cell12").addClass("checkcell")
	$(".cell16").addClass("checkcell")
	
	var countcells = 0;
	
	$(".checkcell").each(function(index){
		if($(this).hasClass("here")){
			countcells++;
		}
	});
	
	if(countcells == 2){
		alert("WIN!");
		tl();
	}
	else{
		alert("LOSE!");          
		tl();
	}
	console.log(countcells)	
};
	
	
/*#####################################################################*/

$(document).ready(function(){
	$(tl); /*ao fazer load da pagina é logo preenchida com as letras*/

});
	
