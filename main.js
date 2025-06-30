var page = window;
var labulabu = document.getElementById('labulabu');
var run_bubu = labulabu.style;

page.addEventListener('scroll',function(){
	if(page.scrollY <= (page.innerWidth - labulabu.offsetWidth)){
		run_bubu.left = ((page.scrollY / page.innerWidth) * 100) +"vw";
	}
	if(page.scrollY == 0){
		run_bubu.left = "2.5vw";
	}
	run_bubu.transition = "left 0.5s";
});

let offsetX,offsetY;

page.addEventListener(
	"touchstart",
	function(event){
		offsetY = event.clientY - labulabu.offsetTop;
		offsetX = event.clientX - labulabu.offsetLeft;
	}
);

page.addEventListener(
	"touchmove",
	function(event){
		labulabu.style.top = (event.clientY - offsetY)+"px";
		labulabu.style.left = (event.clientX - offsetX)+"px";
	}
);
