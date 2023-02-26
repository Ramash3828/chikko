// When scroll the page change navbar background color
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
	const scrollPosi = window.pageYOffset;
	if (scrollPosi > 10) {
		nav.style.backgroundColor = `rgba(0,0,0,0.4)`;
	} else {
		nav.style.backgroundColor = `transparent`;
	}
});

// Toggle menue

const toggleBtn = document.getElementsByClassName("nav__toggle")[0];
const navMenu = document.getElementsByClassName("nav__toggle-menu")[0];
const menuClose = document.getElementsByClassName("nav__close")[0];

toggleBtn.onclick = function () {
	if (navMenu.style.left == "0px") {
		navMenu.style.left = "-250px";
	} else {
		navMenu.style.left = "0px";
	}
};

menuClose.onclick = function () {
	navMenu.style.left = "-250px";
};

//  Order Slider

$(".order-slider").slick({
	dots: true,
	arrows: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				autoplay: true,
				infinite: true,
			},
		},
	],
});

// Slider item
$(".slider").slick({
	dots: false,
	arrows: true,

	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				autoplay: true,
				infinite: true,
			},
		},
		// {
		// 	breakpoint: 480,
		// 	settings: {
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1,
		// 		arrows: false,
		// 	},
		// },
	],
});
