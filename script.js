//your JS code here. If required.
const div=document.getElementById('sizeInfo');

function screenResize() {
	const heading=document.createElement('h1');

	const x=window.screen.width;
	const y=window.screen.height;
	
	heading.innerHTML=`Width: ${x} and Height: ${y}`

	div.appendChild(heading);
}

window.addEventListener('resize',screenResize);