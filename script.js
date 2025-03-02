document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll(".progress-bar span").forEach(span => {
		let width = span.getAttribute("data-width");
		setTimeout(() => {
			span.style.width = width;
		}, 500);
	});
});