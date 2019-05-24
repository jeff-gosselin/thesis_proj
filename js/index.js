
// Comment this section out when using real links on the web page
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
	link.addEventListener('click', (e) => e.preventDefault())
});
//////////////////////////////////////////////////////////////////

// Hamburger Menu

const burger = document.querySelector('label');
const toggle = document.querySelector('#toggle:checked + div.overlay');
const nav = document.querySelector('.nav-list');
const ol = document.querySelector('.overlay');

burger.addEventListener('click', (e) => {
	console.log(toggle);
	// if (!toggle.checked) {
	// 	ol.style.display = "block";
	// 	nav.style.display = "block";
	// } else if (window.innerWidth < 720){
	// 	ol.style.display = "none";
	// 	nav.style.display = "none";
	// };
})



//////////////////////////////////////////////////////////////////

// Arrow Button Scroll
const arrow = document.querySelector('.arrow-down > a')

arrow.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelector('.how-content').scrollIntoView({
            behavior: 'smooth'
        });
});
///////////////////////////////////////////////////////////////////

// Form Validation
const form = document.querySelector('form');
const input = document.querySelector('.domain');
input.value = "";
const validate = /^([a-z\d-\.]+)\.([a-z]){2,8}$/;

const validation = (inputField, regex) => {
	if (regex.test(inputField.value)) {
		inputField.className = 'domain valid';
		inputField.value = 'Submitted.'
	} else {
		inputField.className = 'domain invalid';
		inputField.value = "";
		inputField.placeholder = 'Invalid: (e.g. mydomain.com)'
	};
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	validation(input, validate)
})
