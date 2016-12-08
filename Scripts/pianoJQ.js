$(function () {
	var wave = $('#wave');	
	var container = new Piano($('#container'));
	for (let i = 0; i < pianoKeys.length; i++) {
		for (let j = 0; j < pianoKeys[i].length; j++) {
			container.create(pianoKeys[i][j]);
		}
	}
});

function Piano(container) {
	this.create = function (pianoKeys) {
	
	var pianoKey = $('<div>', {
			'class': pianoKeys.class,
			'keyCode': pianoKeys.keyCode,
			'shiftKey': pianoKeys.shiftKey,
			'fileName': pianoKeys.fileName,
			'key': pianoKeys.key
		})

		var keyboardKey = $('<div>', {
			'html': pianoKeys.key
		});

		var keyTitle = $('<div>', {
			'keyName': pianoKeys.keyName,
			'html': pianoKeys.keyName
		});

		pianoKey.append( keyboardKey );
		pianoKey.append( keyTitle );		
		container.append( pianoKey );

		keyboardKey.css('visibility', 'hidden');							
		keyTitle.css('color', 'transparent');

		switch (pianoKey.attr('class')) {
			case 'black_key':
     		    pianoKey.css('left', WHITE_KEY_WIDTH * pianoKeys.whiteKeys - (BLACK_KEY_WIDTH / 2) +  pianoKeys.shift + LEFT_SHIFT +'px');

				keyboardKey.attr('class','blackKeyboardKey');

				keyTitle.attr('class' ,'black_key_title');	
				keyTitle.css('left', WHITE_KEY_WIDTH * pianoKeys.whiteKeys - (BLACK_KEY_WIDTH / 2) +  pianoKeys.shift +'px');
				break;			
			case 'white_key':
				pianoKey.css('left', WHITE_KEY_WIDTH * pianoKeys.whiteKeys + LEFT_SHIFT + 'px');

				keyboardKey.attr('class','whiteKeyboardKey');

				keyTitle.attr('class' ,'white_key_title');	
				keyTitle.css('left', WHITE_KEY_WIDTH * pianoKeys.whiteKeys +'px');	
		}

		pianoKey.on('click', function mouseClickHandler () {
			 pianoKey.css('top',  PRESSED_KEY_TOP + 'px');
			
			 switch (pianoKey.attr('class')) {
			 	case 'black_key':
				 	pianoKey.css('backgroundImage',"url('Content/imgs/black_activated.png')");  
			 		break;			
			    case 'white_key':
				 	pianoKey.css('backgroundImage',"url('Content/imgs/white_activated.png')");  
		     }			
			 pianoKey.css('backgroundSize', 'cover'); 
	
			var childKeys = pianoKey.children();
			if($(childKeys[1]).css('color') == 'rgba(0, 0, 0, 0)') {
				$('#wave').css('left', pianoKey.css('left'));
				var childrens = $('#wave').children();
				for(var i = 0; i < childrens.length; i++) {	
					switch (pianoKey.attr('class')) {
					case 'black_key':
						$(childrens[i]).css('backgroundColor', 'rgb(128, 128, 128)');
						break;			
					case 'white_key':
						$(childrens[i]).css('backgroundColor', 'white');
					}
					$(childrens[i]).css('animation', 'waves 2s ease-in-out 1');
				}
			}

			var audio = new Audio(); 
			audio.src = 'Content/Sounds/' + pianoKey.attr('fileName');
			audio.autoplay = true;
		});

		pianoKey.on( 'mouseout', function mouseOutHandler () {
			var childrens = $('#wave').children();
			for(var i = 0; i < childrens.length; i++) {	
				$(childrens[i]).css('backgroundColor', 'transparent');
				$(childrens[i]).css('animationName', '');
			}
			pianoKey.css('top', KEY_TOP);
			switch (pianoKey.attr('class')) {
				case 'black_key':
			 		pianoKey.css('backgroundImage', "url('Content/imgs/black_key.png')");  
				 	break;			
				 case 'white_key':
				 	pianoKey.css('backgroundImage', "url('Content/imgs/white_key.png')");  
			}	
			pianoKey.css('backgroundSize', 'cover'); 
		});

		pianoKey.on( 'mouseover', function mouseOverHandler () {
			switch (pianoKey.attr('class')) {
			case 'black_key':
				pianoKey.css('backgroundImage', "url('Content/imgs/black_hover.png')");  
				break;			
			case 'white_key':
				pianoKey.css('backgroundImage', "url('Content/imgs/white_hover.png')");  
			}			
			pianoKey.css('backgroundSize', 'cover'); 
			if (event.which == 1 ) {
				var audio = new Audio(); 
				audio.src = 'Content/Sounds/' + pianoKey.attr('fileName');
				audio.autoplay = true;
			}
		});		
	
		pianoKey.on( 'mouseleave', function mouseLeaveHandler () {
			switch (pianoKey.attr('class')) {
			case 'black_key':
				pianoKey.css('backgroundImage', "url('Content/imgs/black_key.png')");  
				break;			
			case 'white_key':
				pianoKey.css('backgroundImage', "url('Content/imgs/white_key.png')");  
			}			
			pianoKey.css('backgroundSize', 'cover'); 
		});		

		keyTitle.on('click', function keyTitleMouseClickHandler () {
			var blackTitleKeys = $( '.black_key_title' );
			var whiteTitleKeys = $( '.white_key_title' );
			
			if($(blackTitleKeys[1]).css('color') == 'rgba(0, 0, 0, 0)') {
				for(var i = 0; i < blackTitleKeys.length; i++) {	
					$(blackTitleKeys[i]).css('color', 'rgb(128, 128, 128)');
				} 
				for(var i = 0; i < whiteTitleKeys.length; i++) {	
					$(whiteTitleKeys[i]).css('color', 'white');
				} 
			}
			else {
				for(var i = 0; i < blackTitleKeys.length; i++) {	
					$(blackTitleKeys[i]).css('color', 'rgba(0, 0, 0, 0)');
				} 
				for(var i = 0; i < whiteTitleKeys.length; i++) {	
					$(whiteTitleKeys[i]).css('color', 'rgba(0, 0, 0, 0)');
				} 		
			}			   
		});
	}
}

//=========================================================================================================
function handleClickOn() {
    var blackKeyboardKeys = $('.blackKeyboardKey'); 
	blackKeyboardKeys.css('visibility', 'visible');    
	for(var i = 0; i < blackKeyboardKeys.length; i++) {	
		if(i < blackKeyboardKeys.length / 2) {
			moveUp($(blackKeyboardKeys[i]), -8, 30, "black"); 
		}
		else {
			moveUp($(blackKeyboardKeys[i]), 8, 30, "black"); 
		}
	}    

    var whiteKeyboardKeys = $('.whiteKeyboardKey'); 
    whiteKeyboardKeys.css('visibility', 'visible');
	for(var i = 0; i < whiteKeyboardKeys.length; i++) {	
		if(i < whiteKeyboardKeys.length / 2) {
			moveUp($(whiteKeyboardKeys[i]), -8, 170, "white"); 
		}
		else {
			moveUp($(whiteKeyboardKeys[i]), 8, 170, "white"); 
		}				
	} 
}

function handleClickOff() {
    var blackKeyboardKeys = $('.blackKeyboardKey'); 
	for(var i = 0; i < blackKeyboardKeys.length; i++) {	
		if(i < blackKeyboardKeys.length / 2) {
			moveDown($(blackKeyboardKeys[i]), 8, 40, 'black'); 
		}
		else {
			moveDown($(blackKeyboardKeys[i]), -8, 40, 'black'); 
		}		
	} 

    var whiteKeyboardKeys = $('.whiteKeyboardKey'); 
	for(var i = 0; i < whiteKeyboardKeys.length; i++) {	
		if(i < whiteKeyboardKeys.length / 2) {
			moveDown($(whiteKeyboardKeys[i]), 8, 180, 'white'); 
		}
		else {
			moveDown($(whiteKeyboardKeys[i]), -8, 180, 'white'); 
		}			
	} 
}

document.onkeydown = function(e) {
	if(e.shiftKey) {
		var blackKeys = $('.black_key'); 
		 for(var i = 0; i < blackKeys.length; i++) {	
		 	if(e.keyCode == $(blackKeys[i]).attr('keyCode')) {
		 		$(blackKeys[i]).click();
		 		break;
		 	}
		 }
	}
	else {
 		var whiteKeys = $('.white_key'); 
 		var keyTop =  PRESSED_KEY_TOP + 'px';
		for(var i = 0; i < whiteKeys.length; i++) {	
	  	 	if(e.keyCode == $(whiteKeys[i]).attr('keyCode')) {
	 			$(whiteKeys[i]).click();
	 			break;				
	  	 	}						
         }
	}
} 

document.onkeyup = function(e) {
	if(e.shiftKey) {
		var blackKeys = $('.black_key'); 
		 for(var i = 0; i < blackKeys.length; i++) {	
		 	if(e.keyCode == $(blackKeys[i]).attr('keyCode')) {
		 		$(blackKeys[i]).mouseout();
		 		break;
		 	}
		 }
	}
	else {
 		var whiteKeys = $('.white_key'); 
		for(var i = 0; i < whiteKeys.length; i++) {	
	 		if(e.keyCode == $(whiteKeys[i]).attr('keyCode')) {
	 			$(whiteKeys[i]).mouseout();	
	 			break;				
	 		}						
         }
	}
} 

function moveUp(elem, elemLeft, elemTop, key) {
  var id = setInterval(frame, 50);
  function frame() {
    if (elemLeft == 0) {
      clearInterval(id);
    } 
    else 
    {
      if(elemLeft < 0) {
      	elemLeft++;
      	if(key == 'black') {
      		elemTop++;
      	}
      	else {
      		elemTop--;      		
      	}
      }
     else {
      	elemLeft--;
      	if(key == 'black') {
      		elemTop++;
      	}
      	else {
      		elemTop--;      		
      	}
      }
	  elem.css('background', '');	   
	  elem.css('left', elemLeft + 'px');	   
	  elem.css('top', elemTop + 'px');	   
    }
  }
}

function moveDown(elem, elemLeft, elemTop, key) {
  var id = setInterval(frame, 50);
  function frame() {
    if (elemLeft == 0) {
      clearInterval(id);
	  elem.css('visibility', 'hidden');	      
    } 
    else 
    {
      if(elemLeft < 0) {
      	elemLeft++;
      	if(key == 'black') {
      		elemTop--;
      	}
      	else {
      		elemTop++;      		
      	}
      }
     else {
      	elemLeft--;
      	if(key == 'black') {
      		elemTop--;
      	}
      	else {
      		elemTop++;      		
      	}
      }
	  elem.css('background', '');	   
	  elem.css('left', elemLeft + 'px');	   
	  elem.css('top', elemTop + 'px');	   
    }
  }
}