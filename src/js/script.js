const burger = document.querySelector('.burger'),
	menu = document.querySelector('.menu'),
	close = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
	menu.classList.add('active');
});

close.addEventListener('click', () => {
	menu.classList.remove('active');
});

const values = document.querySelectorAll('.item-progress__value'),
	lines = document.querySelectorAll('.item-progress__graphic span');

values.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
})