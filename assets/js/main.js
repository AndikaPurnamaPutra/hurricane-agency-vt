console.log("hallo");

// Navbar Mobile
const navbarToggler = document.querySelector(".nav-btn-responsive");

navbarToggler.addEventListener("click", function () {
	document.querySelector(".nav-office").classList.toggle("active");
});

// logic respondsive

// const btnRes = document.querySelector('.nav-btn-respondsive');
// const menu = document.querySelector('.nav-menu');

// btnRes.addEventListener('click', () => {
//   menu.classList.toggle('active');
//   btnRes.classList.toggle('cross');
// });

// Section Service

const image = document.querySelector(".img-service");
const subtextListItems = document.querySelectorAll(".subtext-list-display");

// Aktifkan subtext-list default saat halaman dimuat pertama kali
const defaultSubtextListItem = subtextListItems[0];
defaultSubtextListItem.classList.add("active");

defaultSubtextListItem.addEventListener("click", () => {
	// Hapus kelas 'active' dari semua subtext-list
	subtextListItems.forEach((subtextItem) =>
		subtextItem.classList.remove("active")
	);

	// Tambahkan kelas 'active' hanya untuk subtext-list default
	defaultSubtextListItem.classList.add("active");
	changeImage(defaultSubtextListItem);
});

subtextListItems.forEach((item) => {
	item.addEventListener("mouseenter", () => {
		const imagePath = item.getAttribute("data-image");
        
		image.style.opacity = 0;
        image.style.transform = "scale(0)";

		setTimeout(() => {
			image.src = imagePath;
		}, 300);

		setTimeout(() => {
			image.style.opacity = 1;
            image.style.transform = "scale(1)";
		}, 310);

		// Hapus kelas 'active' dari semua subtext-list
		subtextListItems.forEach((subtextItem) =>
			subtextItem.classList.remove("active")
		);

		// Tambahkan kelas 'active' hanya untuk subtext-list yang diklik
		item.classList.add("active");
	});
});

$(document).ready(function () {
	$(".work-slider").slick({
		variableWidth: true,
		// autoplay: true,
		arrows: false,
		// autoplaySpeed: 0,
		// slidesToShow: 1,
		// speed: 5000,
		// // responsive: [
		// // 	{
		// // 		breakpoint: 480,
		// // 		settings: {
		// // 			speed: 5000,
		// // 		},
		// // 	},
		// // ],
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});
});
