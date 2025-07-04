const page = window;
const labulabu = document.getElementById('labulabu');
const labulabuStyle = labulabu.style;
const gq_box = document.getElementById('gq_box');
const gq_close = document.getElementById('gq_close');

if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
  document.body.style.overflowY = "hidden";
  document.body.style.overflowX = "hidden";
	
  page.addEventListener(
    "touchmove",
    function(event) {
      event.preventDefault();
      labulabuStyle.top = labulabu.getBoundingClientRect().top+event.touches[0].clientY + "px";
      labulabuStyle.left = labulabu.getBoundingClientRect().left+event.touches[0].clientX + "px";
      labulabuStyle.transition = "all 0.5s ease-out";
    }
  );  
} else {
  page.addEventListener('scroll', function() {
    if (page.scrollY <= (page.innerWidth - labulabu.offsetWidth)) {
      labulabuStyle.left = ((page.scrollY / page.innerWidth) * 100) + "vw";
    }
    if (page.scrollY === 0) {
      labulabuStyle.left = "2.5vw";
    }
    labulabuStyle.transition = "left 0.5s";
  });
}

window.onload = function() {
	gq_box.style.opacity = "1";
	gq_box.style.transition = "opacity 1.5s ease-in";
};

gq_close.addEventListener('click',function(){
	gq_box.style.opacity = "0";
	gq_box.style.transition = "opacity 1.5 ease-out";
});
