const div=document.getElementById('sizeInfo');

function screenResize() {
	const heading=document.createElement('h1');
	div.innerHTML='';
	const x=window.screen.width;
	const y=window.screen.height;
	
	heading.innerHTML=`Width: ${x} and Height: ${y}`

	div.appendChild(heading);
}

window.addEventListener('resize',screenResize);