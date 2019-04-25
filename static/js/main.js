window.onload = function () {
	var go_menu = document.getElementsByClassName("go-menu");
	var go_zfx = document.getElementsByClassName("go-zfx");
	go_zfx[0].onclick = function(){
		var has_menu_active = hasClass(go_menu[0], 'active');
		if (has_menu_active) {
			go_menu[0].classList.remove('active');
		} else {
			go_menu[0].classList.add('active');
		}
	}
	
}
function hasClass(element, cls) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}