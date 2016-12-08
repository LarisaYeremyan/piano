onload = function () {
	var wave = document.getElementsByClassName('wave');	
	var container = new Piano(document.getElementById('container'));
	for (var i = 0; i < pianoKeys.length; i++) {
		for (var j = 0; j < pianoKeys[i].length; j++) {
			container.create(pianoKeys[i][j]);
		}
	}
}

function Piano(container) {
	this.create = function (pianoKeys) {
		var pianoKey = document.createElement('div');
		pianoKey.className = pianoKeys.class;
		pianoKey.keyCode = pianoKeys.keyCode;
		pianoKey.shiftKey = pianoKeys.shiftKey;	
		pianoKey.fileName = pianoKeys.fileName;
		pianoKey.key = pianoKeys.key;

		var keyboardKey = document.createElement('div');
		var keyTitle = document.createElement('div');

		switch (pianoKey.className) {
			case 'black_key':
				pianoKey.style.left = WHITE_KEY_WIDTH * pianoKeys.whiteKeys - (BLACK_KEY_WIDTH / 2) +  pianoKeys.shift + LEFT_SHIFT +'px';	
				keyboardKey.className = 'blackKeyboardKey';	
				keyTitle.className = 'black_key_title';	
				keyTitle.style.left = pianoKey.style.left - LEFT_SHIFT +'px';
				break			
			case 'white_key':
				pianoKey.style.left = WHITE_KEY_WIDTH * pianoKeys.whiteKeys + LEFT_SHIFT + 'px';
				keyboardKey.className = 'whiteKeyboardKey';	
				keyTitle.className = 'white_key_title';	
				keyTitle.style.left = "WHITE_KEY_WIDTH * pianoKeys.whiteKeys +'px'";		
		}

		keyboardKey.innerHTML = pianoKeys.key;			
		keyboardKey.style.visibility = "hidden";
		keyTitle.keyName = pianoKeys.keyName;	
		keyTitle.innerHTML = pianoKeys.keyName;	
		keyTitle.style.color = "transparent";				
		keyTitle.addEventListener('click', keyTitleMouseClickHandler);

		pianoKey.addEventListener('click', mouseClickHandler);
		pianoKey.addEventListener('mouseout', mouseOutHandler);
		pianoKey.addEventListener('mouseover', mouseOverHandler);
		pianoKey.addEventListener('mouseleave', mouseLeaveHandler);

		pianoKey.mouseClickHandler = mouseClickHandler;
		pianoKey.mouseOutHandler = mouseOutHandler;
			
		pianoKey.appendChild(keyboardKey);
		pianoKey.appendChild(keyTitle);		
		container.appendChild(pianoKey);

		function mouseClickHandler() {
			this.style.top = PRESSED_KEY_TOP + "px";
			switch (this.className) {
			case 'black_key':
				this.style.backgroundImage = "url('Content/imgs/black_activated.png')";  
				break;			
			case 'white_key':
				this.style.backgroundImage = "url('Content/imgs/white_activated.png')";  
				break;	
			}			
			this.style.backgroundSize = 'cover'; 

			var childKeys = this.children;
			if(childKeys[1].style.color == 'transparent') {
				var div = document.getElementById('wave');
				div.style.left = this.style.left;	
				var childrens = div.children;
				for(var i = 0; i < childrens.length; i++) {	
					var child = childrens[i].style;	
					switch (this.className) {
					case 'black_key':
						child.backgroundColor = 'rgb(128, 128, 128)';
						break			
					case 'white_key':
						child.backgroundColor = 'white';
					}
					child.animation = "waves 2s ease-in-out 1";
				}
			}
			var audio = new Audio(); 
			audio.src = 'Content/Sounds/' + this.fileName;
			audio.autoplay = true;
		}

		function mouseOutHandler() {
			var div = document.getElementById('wave');
			var childrens = div.children;
			for(var i = 0; i < childrens.length; i++) {	
				childrens[i].style.backgroundColor = 'transparent';
				childrens[i].style.animationName = '';
			}
			this.style.top = KEY_TOP + "px";
			switch (this.className) {
			case 'black_key':
				this.style.backgroundImage = "url('Content/imgs/black_key.png')";  
				break;			
			case 'white_key':
				this.style.backgroundImage = "url('Content/imgs/white_key.png')";  
				break;	
			}			
			this.style.backgroundSize = 'cover'; 
		}

		function mouseOverHandler() {
			switch (this.className) {
			case 'black_key':
				this.style.backgroundImage = "url('Content/imgs/black_hover.png')";  
				break;			
			case 'white_key':
				this.style.backgroundImage = "url('Content/imgs/white_hover.png')";  
				break;	
			}			
			this.style.backgroundSize = 'cover';
			if (event.which == 1 ) {
				var audio = new Audio(); 
				audio.src = 'Content/Sounds/' + this.fileName;
				audio.autoplay = true;
			}
		}

		function mouseLeaveHandler() {
			switch (this.className) {
			case 'black_key':
				this.style.backgroundImage = "url('Content/imgs/black_key.png')";  
				break;			
			case 'white_key':
				this.style.backgroundImage = "url('Content/imgs/white_key.png')";  
				break;	
			}			
			this.style.backgroundSize = 'cover'; 
		}

		function keyTitleMouseClickHandler() {
			var blackTitleKeys = document.getElementsByClassName('black_key_title');	
			var whiteTitleKeys = document.getElementsByClassName('white_key_title');

			if(this.style.color == 'transparent') {
				for(var i = 0; i < blackTitleKeys.length; i++) {	
					blackTitleKeys[i].style.color = 'rgb(128, 128, 128)';
				} 
				for(var i = 0; i < whiteTitleKeys.length; i++) {	
					whiteTitleKeys[i].style.color = 'white';
				} 
			}
			else {
				for(var i = 0; i < blackTitleKeys.length; i++) {	
					blackTitleKeys[i].style.color = 'transparent';
				} 
				for(var i = 0; i < whiteTitleKeys.length; i++) {	
					whiteTitleKeys[i].style.color = 'transparent';
				} 
			}			
		}
	}
}

function handleClickOn() {
    var blackKeyboardKeys = document.getElementsByClassName('blackKeyboardKey');
	for(var i = 0; i < blackKeyboardKeys.length; i++) {	
		var key = blackKeyboardKeys[i].style;
		key.visibility = 'visible';
		if(i < blackKeyboardKeys.length / 2) {
			moveUp(blackKeyboardKeys[i], -8, 30, "black"); 
		}
		else {
			moveUp(blackKeyboardKeys[i], 8, 30, "black"); 
		}
	}    

    var whiteKeyboardKeys = document.getElementsByClassName('whiteKeyboardKey');
	for(var i = 0; i < whiteKeyboardKeys.length; i++) {	
		var key = whiteKeyboardKeys[i].style;
		key.visibility = 'visible';
		if(i < whiteKeyboardKeys.length / 2) {
			moveUp(whiteKeyboardKeys[i], -8, 170, "white"); 
		}
		else {
			moveUp(whiteKeyboardKeys[i], 8, 170, "white"); 
		}				
	} 
}
function handleClickOff() {
    var blackKeyboardKeys = document.getElementsByClassName('blackKeyboardKey');
	for(var i = 0; i < blackKeyboardKeys.length; i++) {	
		var key = blackKeyboardKeys[i].style;
		if(i < blackKeyboardKeys.length / 2) {
			moveDown(blackKeyboardKeys[i], 8, 40, "black"); 
		}
		else {
			moveDown(blackKeyboardKeys[i], -8, 40, "black"); 
		}		
	} 

    var whiteKeyboardKeys = document.getElementsByClassName('whiteKeyboardKey');
	for(var i = 0; i < whiteKeyboardKeys.length; i++) {	
		var key = whiteKeyboardKeys[i].style;
		if(i < whiteKeyboardKeys.length / 2) {
			moveDown(whiteKeyboardKeys[i], 8, 180, "white"); 
		}
		else {
			moveDown(whiteKeyboardKeys[i], -8, 180, "white"); 
		}			
	} 
}

document.onkeydown = function(e) {
	if(e.shiftKey) {
		var blackKeys = document.getElementsByClassName('black_key');	
		 for(var i = 0; i < blackKeys.length; i++) {	
		 	if(e.keyCode == blackKeys[i].keyCode) {
		 		blackKeys[i].mouseClickHandler();
		 		break;
		 	}
		 }
	}
	else {
 		var whiteKeys = document.getElementsByClassName('white_key');
		for(var i = 0; i < whiteKeys.length; i++) {	
			if (whiteKeys[i].shiftKey == false) {
		 		if(e.keyCode == whiteKeys[i].keyCode) {
		 			var key = whiteKeys[i].style;
		 			key.top = PRESSED_KEY_TOP + "px"; 
					key.backgroundImage = "url(Content/imgs/white_activated.png)"; 
					key.backgroundSize = "cover";		 			
		 			whiteKeys[i].mouseClickHandler();	
		 			break;				
		 		}						
		 	}
         }
	}
} 

document.onkeyup = function(e) {
	if(e.shiftKey) {
		var blackKeys = document.getElementsByClassName('black_key');	
		 for(var i = 0; i < blackKeys.length; i++) {	
		 	if(e.keyCode == blackKeys[i].keyCode) {
		 		blackKeys[i].mouseOutHandler();
		 		break;
		 	}
		 }
	}
	else {
 		var whiteKeys = document.getElementsByClassName('white_key');
		for(var i = 0; i < whiteKeys.length; i++) {	
			if (whiteKeys[i].shiftKey == false) {
		 		if(e.keyCode == whiteKeys[i].keyCode) {
		 			whiteKeys[i].mouseOutHandler();	
		 			break;				
		 		}						
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
      	if(key == "black") {
      		elemTop++;
      	}
      	else {
      		elemTop--;      		
      	}
      }
     else {
      	elemLeft--;
      	if(key == "black") {
      		elemTop++;
      	}
      	else {
      		elemTop--;      		
      	}
      }
	elem.style.background = "";
	elem.style.left = elemLeft + 'px';
	elem.style.top = elemTop + 'px';
    }
  }
}

function moveDown(elem, elemLeft, elemTop, key) {
  var id = setInterval(frame, 50);
  function frame() {
    if (elemLeft == 0) {
      clearInterval(id);
      elem.style.visibility = 'hidden';	
    } 
    else 
    {
      if(elemLeft < 0) {
      	elemLeft++;
      	if(key == "black") {
      		elemTop--;
      	}
      	else {
      		elemTop++;      		
      	}
      }
     else {
      	elemLeft--;
      	if(key == "black") {
      		elemTop--;
      	}
      	else {
      		elemTop++;      		
      	}
      }
	elem.style.background = "";
	elem.style.left = elemLeft + 'px';
	elem.style.top = elemTop + 'px';
    }
  }
}