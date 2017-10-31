var pressed = [];
var secretCode = "george";
var h = document.getElementById('typed');


window.addEventListener('keyup', (e) => {
	pressed.push(e.key);
	h.innerHTML = e.key;
	pressed = pressed.splice(-secretCode.length);

	if(pressed.join('').includes(secretCode)){
		cornify_add();

	}

});