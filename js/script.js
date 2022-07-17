// Automatically change copyright year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation via JS

const allLinks = document.querySelectorAll("a:link");
// selects all the a elements with links that bear href information
// console.log(allLinks);
allLinks.forEach((link) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const href = link.getAttribute("href");
		// console.log(href);

		//Scroll to top
		if (href === "#")
			// scrollTo requires a coordinate input - WebAPI
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});

		//Scroll to other links
		if (href !== "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href);
			// console.log(sectionEl);
			// scrollIntoView as we do not know exact position to scroll to instread point the element - WebAPI
			sectionEl.scrollIntoView({ behavior: "smooth" });
		}

		//Close mobile navigation
		if (link.classList.contains("main-nav-link"))
			headerEl.classList.toggle("nav-open");
	});
});
