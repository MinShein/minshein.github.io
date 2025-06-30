var page = window;
var labulabu = document.getElementById('labulabu');

page.onscroll = function(){
		if(page.innerHeight == page.scrollY || page.scrollY >= page.innerWidth) {
			labulabu.style.left = "0px";
		}else{
			labulabu.style.left = page.scrollY+"px";
		}
		labulabu.style.transition = "left 3s";		
};