const heading=document.getElementsByTagName('h1')[0];

function screenResize() {
	// const heading=document.createElement('h1');
	// div.innerHTML='';
	const x=window.screen.width;
	const y=window.screen.height;
	
	heading.textContent=`Width: ${x} and Height: ${y}`

	// div.appendChild(heading);
}

window.addEventListener('resize',screenResize);