document.addEventListener('DOMContentLoaded', () => {
	sliders = document.querySelectorAll('.slider__item')
	activeSlider = 0;
	setInterval(() => {
		sliders.forEach(item => {
			item.classList.remove('active')
		})
		sliders[activeSlider].classList.add('active')
		activeSlider++
		if (activeSlider === sliders.length) {
			activeSlider = 0
		}
	}, 3000)	
})