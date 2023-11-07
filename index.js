(() => {
	const $ = document.querySelector.bind(document);
	const $$ = document.querySelectorAll.bind(document);
	const log = console.log.bind(console);

	document.addEventListener("DOMContentLoaded", function () {
		log(document.body.scrollHeight);
		const sideline__el = $(".side__line");
		sideline__el.style.width = `${document.body.scrollHeight - 10}px `;
	});
})();
