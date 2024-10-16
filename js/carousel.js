const slides = [
	{
		"image":"../img/carousel1.png",
	},
	{
		"image":"../img/carousel2.png",
	},
	{
		"image":"../img/carousel3.png",
	},
	{
		"image":"../img/carousel4.png",
	},
    {
		"image":"../img/carousel5.png",
	},
	{
		"image":"../img/carousel6.png",
	},
	{
		"image":"../img/carousel7.png",
	},
	{
		"image":"../img/carousel8.png",
	},
    {
		"image":"../img/carousel9.png",
	},
]

const dotsContainer = document.querySelector('.dots');
const imgBanner = document.querySelector(".carousel__all-img");
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

let currentIndex = 0;

function updateCarouselContent() {
	imgBanner.innerHTML = `<img src=${slides[currentIndex].image} alt="Slide ${currentIndex + 1}" class="banner-img">`;
}

function createDots() {
	for (let i=0; i < slides.length; i++) {
		let bulletElement = document.createElement("a");
		bulletElement.href = '#';
		bulletElement.classList.add("dot");
		dotsContainer.appendChild(bulletElement);
	}
}

function updateDots() {
	const dotElements = document.querySelectorAll('.dot');
	dotElements.forEach((dot, index) =>  {
		dot.classList.toggle('dot_selected', index === currentIndex);
	});
}

function changeSlide(direction) {
	if (direction === 'right') {
		currentIndex = (currentIndex + 1) % slides.length;
	} else {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	}
	updateCarouselContent();
	updateDots();
}

arrowRight.addEventListener('click', () => {
	changeSlide('right');
});

arrowLeft.addEventListener('click', () => {
	changeSlide('left');
});

createDots();
updateCarouselContent();
updateDots();
