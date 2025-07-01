const page = window;
const labulabu = document.getElementById('labulabu');
const labulabuStyle = labulabu.style;

if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
  let offsetX, offsetY;
  document.body.style.overflowY = "hidden";
  
  page.addEventListener(
    "touchstart",
    function(event) {
      offsetY = event.touches[0].clientY;
      offsetX = event.touches[0].clientX;
    }
  );

  page.addEventListener(
    "touchmove",
    function(event) {
      labulabuStyle.top = (event.changedTouches[0].clientY - offsetY) + "px";
      labulabuStyle.left = (event.changedTouches[0].clientX - offsetX) + "px";
      labulabuStyle.transition = "all 0.5s ease-out";
    }
  );

  page.addEventListener(
    "touchend",
    function(event) {
      	labulabuStyle.top = labulabu.offsetTop+"px";
	labulabuStyle.left = labulabu.offsetLeft+"px";
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
