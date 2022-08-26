const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlideNum = 0;

setBgToBody();

function setBgToBody() {
	body.style.backgroundImage = slides[activeSlideNum].style.backgroundImage;
}

function setActiveSlideNum() {
	slides.forEach((slide) => {
		slide.classList.remove('active');

		slides[activeSlideNum].classList.add('active');
	});
}

rightBtn.addEventListener('click', () => {
	activeSlideNum++;
	if (activeSlideNum > slides.length - 1) {
		activeSlideNum = 0;
	}
	setBgToBody();
	setActiveSlideNum();
});

leftBtn.addEventListener('click', () => {
	activeSlideNum--;
	if (activeSlideNum < 0) {
		activeSlideNum = slides.length - 1;
	}
	setBgToBody();
	setActiveSlideNum();
});
