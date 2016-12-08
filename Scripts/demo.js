function playMusic() {
var whiteKeys = document.getElementsByClassName('white_key');

setTimeout(function(){ new Audio('Content/Sounds/piano_c4.mp3').play(); whiteKeys[23].mouseClickHandler();}, 0); 	 
setTimeout(function(){ new Audio('Content/Sounds/piano_c4.mp3').play(); whiteKeys[23].mouseOutHandler(); whiteKeys[23].mouseClickHandler();}, 500); 	 
setTimeout(function(){ new Audio('Content/Sounds/piano_d4.mp3').play(); whiteKeys[23].mouseOutHandler(); whiteKeys[24].mouseClickHandler();}, 1000); 	 
setTimeout(function(){ new Audio('Content/Sounds/piano_c4.mp3').play(); whiteKeys[24].mouseOutHandler(); whiteKeys[23].mouseClickHandler();}, 1500); 	 
setTimeout(function(){ new Audio('Content/Sounds/piano_f4.mp3').play(); whiteKeys[23].mouseOutHandler(); whiteKeys[26].mouseClickHandler();}, 2000); 	 
setTimeout(function(){ new Audio('Content/Sounds/piano_e4.mp3').play(); whiteKeys[26].mouseOutHandler(); whiteKeys[25].mouseClickHandler();}, 2500); 

setTimeout(function(){ new Audio('Content/Sounds/piano_c4.mp3').play(); whiteKeys[25].mouseOutHandler(); whiteKeys[23].mouseClickHandler();}, 4500); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_c4.mp3').play(); whiteKeys[23].mouseOutHandler(); whiteKeys[23].mouseClickHandler();}, 5000); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_d4.mp3').play(); whiteKeys[23].mouseOutHandler(); whiteKeys[24].mouseClickHandler();}, 5500); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_c4.mp3').play(); whiteKeys[24].mouseOutHandler(); whiteKeys[23].mouseClickHandler();}, 6000); 	 
setTimeout(function(){ new Audio('Content/Sounds/piano_g4.mp3').play(); whiteKeys[23].mouseOutHandler(); whiteKeys[27].mouseClickHandler();}, 6500); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_f4.mp3').play(); whiteKeys[27].mouseOutHandler(); whiteKeys[26].mouseClickHandler();}, 7000);

setTimeout(function(){ new Audio('Content/Sounds/piano_c4.mp3').play(); whiteKeys[26].mouseOutHandler(); whiteKeys[23].mouseClickHandler();}, 9000); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_c4.mp3').play(); whiteKeys[23].mouseOutHandler(); whiteKeys[23].mouseClickHandler();}, 9500); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_c5.mp3').play(); whiteKeys[23].mouseOutHandler(); whiteKeys[30].mouseClickHandler();}, 10000); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_a4.mp3').play(); whiteKeys[30].mouseOutHandler(); whiteKeys[28].mouseClickHandler();}, 10500); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_f4.mp3').play(); whiteKeys[28].mouseOutHandler(); whiteKeys[26].mouseClickHandler();}, 11000); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_e4.mp3').play(); whiteKeys[26].mouseOutHandler(); whiteKeys[25].mouseClickHandler();}, 11500); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_d4.mp3').play(); whiteKeys[25].mouseOutHandler(); whiteKeys[24].mouseClickHandler();}, 12000); 

setTimeout(function(){ new Audio('Content/Sounds/piano_a4.mp3').play(); whiteKeys[24].mouseOutHandler(); whiteKeys[28].mouseClickHandler();}, 14000); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_a4.mp3').play(); whiteKeys[28].mouseOutHandler(); whiteKeys[28].mouseClickHandler();}, 14500); 
// //var a22 = new Audio('Content/Sounds/piano_a4.mp3'); setTimeout(function(){ a22.play();}, 15500); 
setTimeout(function(){ new Audio('Content/Sounds/piano_f4.mp3').play(); whiteKeys[28].mouseOutHandler(); whiteKeys[26].mouseClickHandler();}, 15000); 
setTimeout(function(){ new Audio('Content/Sounds/piano_g4.mp3').play(); whiteKeys[26].mouseOutHandler(); whiteKeys[27].mouseClickHandler();}, 15500); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_f4.mp3').play(); whiteKeys[27].mouseOutHandler(); whiteKeys[26].mouseClickHandler();}, 16000); 
setTimeout(function(){ whiteKeys[26].mouseOutHandler();}, 17000); 			
	

 }
function playMusicJQ() {
var whiteKeys = $('.white_key');

setTimeout(function(){ new Audio('Content/Sounds/piano_c4.mp3').play(); $(whiteKeys[23]).click();}, 0); 	 
setTimeout(function(){ new Audio('Content/Sounds/piano_c4.mp3').play(); $(whiteKeys[23]).mouseout(); $(whiteKeys[23]).click();}, 500); 	 
setTimeout(function(){ new Audio('Content/Sounds/piano_d4.mp3').play(); $(whiteKeys[23]).mouseout(); $(whiteKeys[24]).click();}, 1000); 	 
setTimeout(function(){ new Audio('Content/Sounds/piano_c4.mp3').play(); $(whiteKeys[24]).mouseout(); $(whiteKeys[23]).click();}, 1500); 	 
setTimeout(function(){ new Audio('Content/Sounds/piano_f4.mp3').play(); $(whiteKeys[23]).mouseout(); $(whiteKeys[26]).click();}, 2000); 	 
setTimeout(function(){ new Audio('Content/Sounds/piano_e4.mp3').play(); $(whiteKeys[26]).mouseout(); $(whiteKeys[25]).click();}, 2500); 

setTimeout(function(){ new Audio('Content/Sounds/piano_c4.mp3').play(); $(whiteKeys[25]).mouseout(); $(whiteKeys[23]).click();}, 4500); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_c4.mp3').play(); $(whiteKeys[23]).mouseout(); $(whiteKeys[23]).click();}, 5000); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_d4.mp3').play(); $(whiteKeys[23]).mouseout(); $(whiteKeys[24]).click();}, 5500); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_c4.mp3').play(); $(whiteKeys[24]).mouseout(); $(whiteKeys[23]).click();}, 6000); 	 
setTimeout(function(){ new Audio('Content/Sounds/piano_g4.mp3').play(); $(whiteKeys[23]).mouseout(); $(whiteKeys[27]).click();}, 6500); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_f4.mp3').play(); $(whiteKeys[27]).mouseout(); $(whiteKeys[26]).click();}, 7000);

setTimeout(function(){ new Audio('Content/Sounds/piano_c4.mp3').play(); $(whiteKeys[26]).mouseout(); $(whiteKeys[23]).click();}, 9000); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_c4.mp3').play(); $(whiteKeys[23]).mouseout(); $(whiteKeys[23]).click();}, 9500); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_c5.mp3').play(); $(whiteKeys[23]).mouseout(); $(whiteKeys[30]).click();}, 10000); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_a4.mp3').play(); $(whiteKeys[30]).mouseout(); $(whiteKeys[28]).click();}, 10500); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_f4.mp3').play(); $(whiteKeys[28]).mouseout(); $(whiteKeys[26]).click();}, 11000); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_e4.mp3').play(); $(whiteKeys[26]).mouseout(); $(whiteKeys[25]).click();}, 11500); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_d4.mp3').play(); $(whiteKeys[25]).mouseout(); $(whiteKeys[24]).click();}, 12000); 

setTimeout(function(){ new Audio('Content/Sounds/piano_a4.mp3').play(); $(whiteKeys[24]).mouseout(); $(whiteKeys[28]).click();}, 14000); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_a4.mp3').play(); $(whiteKeys[28]).mouseout(); $(whiteKeys[28]).click();}, 14500); 
// //var a22 = new Audio('Content/Sounds/piano_a4.mp3'); setTimeout(function(){ a22.play();}, 15500); 
setTimeout(function(){ new Audio('Content/Sounds/piano_f4.mp3').play(); $(whiteKeys[28]).mouseout(); $(whiteKeys[26]).click();}, 15000); 
setTimeout(function(){ new Audio('Content/Sounds/piano_g4.mp3').play(); $(whiteKeys[26]).mouseout(); $(whiteKeys[27]).click();}, 15500); 	
setTimeout(function(){ new Audio('Content/Sounds/piano_f4.mp3').play(); $(whiteKeys[27]).mouseout(); $(whiteKeys[26]).click();}, 16000); 
setTimeout(function(){ $(whiteKeys[26]).mouseout();}, 17000); 			
	

 }
