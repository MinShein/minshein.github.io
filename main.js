var page = window;
var labulabu = document.getElementById('labulabu');
var run_bubu = labulabu.style;

if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
    let offsetX,offsetY;

page.addEventListener(
	"touchstart",
	function(event){
		offsetY = event.touches[0].clientY;
		offsetX = event.touches[0].clientX;
	}
);

page.addEventListener(
	"touchmove",
	function(event){
		labulabu.style.top = (event.changedTouches[0].clientY - offsetY)+"px";
		labulabu.style.left = (event.changedTouches[0].clientX - offsetX) +"px";
		labulabu.style.transition = "all 1s ease-out";
	}
);
} else {
page.addEventListener('scroll',function(){
	if(page.scrollY <= (page.innerWidth - labulabu.offsetWidth)){
		run_bubu.left = ((page.scrollY / page.innerWidth) * 100) +"vw";
	}
	if(page.scrollY == 0){
		run_bubu.left = "2.5vw";
	}
	run_bubu.transition = "all 1s ease-in";
});  
}
