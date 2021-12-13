window.addEventListener('DOMContentLoaded', function() {
	const clWidth = document.documentElement.clientWidth;

	const buyerList = document.querySelector('.approach__list--buyer');
	const sellerList = document.querySelector('.approach__list--seller');

	if(buyerList !== null) {
		window.addEventListener('scroll', function() {
			//throttle 
			if(window.pageYOffset > 350) {
				buyerList.classList.add('fadeInLeft');
				sellerList.classList.add('fadeInRight');
			}
		});

		if(clWidth > 768) {
			window.addEventListener("mousemove", function(e) {
				parallax(e, '.intro__beforeElement');
				parallax(e, '.intro__afterElement');
				parallax(e, '.robot__parallax');
				parallax(e, '.robot__img');
			});
		}
	}
});

function parallax(e, selector) {
	const elem = document.querySelector(selector);
    let _w = window.innerWidth/2;
    let _h = window.innerHeight/2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
   	let _depth = `${(_mouseX - _w) * 0.016}%, ${(_mouseY - _h) * 0.016}%`;
	elem.style.transform = `translate(${_depth})`;
}