import Swiper from 'swiper';

var sliderSwiper = new Swiper('.swiper-container', {
	updateOnWindowResize: true,
	spaceBetween: 20,
	effect: 'slide',
	slidesPerView: 4,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		430: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		650: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		886: {
			slidesPerView: 4,
			spaceBetween: 40
		}
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});



export {sliderSwiper};
