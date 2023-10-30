console.log("hallo");

// logic respondsive

const btnRes = document.querySelector(".nav-btn-responsive");
const menu = document.querySelector(".nav-menu");

btnRes.addEventListener("click", () => {
	menu.classList.toggle("active");
	btnRes.classList.toggle("cross");
});

// Section Service

const image = document.querySelector(".img-service");
const subtextListItems = document.querySelectorAll(".subtext-list-display");

let activeSubtextListItem = null; // Menyimpan referensi ke elemen yang sedang aktif

// Aktifkan subtext-list "Advertisements Production" saat halaman dimuat pertama kali
const defaultSubtextListItem = subtextListItems[0];
defaultSubtextListItem.classList.add("active");
activeSubtextListItem = defaultSubtextListItem;

defaultSubtextListItem.addEventListener("mouseenter", () => {
	changeImage(defaultSubtextListItem);
});

subtextListItems.forEach((item) => {
	item.addEventListener("mouseenter", () => {
		changeImage(item);
	});

	item.addEventListener("click", (e) => {
		e.preventDefault();

		// Cek jika elemen yang diklik adalah elemen yang sudah aktif, maka jangan lakukan apa-apa
		if (activeSubtextListItem === item) {
			return;
		}

		// Non-active elemen "Advertisements Production" yang sebelumnya aktif
		if (activeSubtextListItem) {
			activeSubtextListItem.classList.remove("active");
		}

		// Aktifkan elemen yang baru diklik
		item.classList.add("active");
		activeSubtextListItem = item;
	});
});

function changeImage(item) {
	const imagePath = item.getAttribute("data-image");

	image.style.opacity = 0;
	image.style.transform = "scale(0)";

	setTimeout(() => {
		image.src = imagePath;
		image.style.opacity = 1;
		image.style.transform = "scale(1)";
	}, 300); // Mengatur `setTimeout` menjadi hanya 1 milidetik
}


$(document).ready(function () {
	$(".work-slider").slick({
		variableWidth: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
				}
			}
		]
	});
});

// AOS
AOS.init({
	disable: function () {
		var maxWidth = 800;
		return window.innerWidth < maxWidth;
	},
	duration: 1200,
	easing: "ease-in-out", // default easing for AOS animations
	once: true, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: "top-bottom",
});

//refresh animations
$(window).on('load', function () {
	AOS.refresh();
});

// logic copy clipboard

const copyButtonLabel = "Components";

// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
    // only add button if browser supports Clipboard API
    if (navigator.clipboard) {
        let button = document.createElement("button");

        button.innerText = copyButtonLabel;
        block.appendChild(button);

        button.addEventListener("click", async () => {
            await copyCode(block, button);
        });
    }
});

async function copyCode(block, button) {
    let code = block.querySelector("code");
    let text = code.innerText;

    await navigator.clipboard.writeText(text);

    // visual feedback that task is completed
    button.innerText = "Code Copied!";

    setTimeout(() => {
        button.innerText = copyButtonLabel;
    }, 700);
}