const form = document.querySelector('.form-talk');
const formMask = document.querySelector('.form-mask');

function buttonClick() {
	form.style.left = '50%';
	form.style.transform = 'translateX(-50%)';
	formMask.style.visibility = 'visible';
}

function offMask() {
	form.style.left = '-300px';
	form.style.transform = 'translateX(0)';
	formMask.style.visibility = 'hidden';
}
