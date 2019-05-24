
// Comment this section out when using real links on the web page
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
	link.addEventListener('click', (e) => e.preventDefault())
});
//////////////////////////////////////////////////////////////////


const arrow = document.querySelector('.arrow-down > a')
console.log(arrow);

arrow.addEventListener('click', (e) => {
	console.log("YO!");
	e.preventDefault();
	document.querySelector('.how-content').scrollIntoView({
            behavior: 'smooth'
        });
});

const input = document.querySelector('.domain');
console.log(input);
