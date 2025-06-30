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

labulabu.addEventListener('dragend',function(event){
  console.log(event.clientX);
  console.log(event.clientY);
  labulabu.style.top = event.clientX+"px";
  labulabu.style.left = event.clientY+"px";
});
