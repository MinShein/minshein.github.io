const page = window;
const labulabu = document.getElementById('labulabu');
const labulabuStyle = labulabu.style;

if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
  document.body.style.overflowY = "hidden";
  document.body.style.overflowX = "hidden";
	
  page.addEventListener(
    "touchmove",
    function(event) {
      event.preventDefault();
      labulabuStyle.top = event.touches[0].clientY + "px";
      labulabuStyle.left = event.touches[0].clientX + "px";
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
