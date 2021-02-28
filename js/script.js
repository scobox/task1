

window.addEventListener('resize', changeViewportSize);

let viewPortHight;
viewPortHight = window.innerHeight;
document.getElementById('pagediv').style.height = `${viewPortHight-40}px`;

function changeViewportSize(){
	viewPortHight = window.innerHeight;
	document.getElementById('pagediv').style.height = `${viewPortHight-40}px`;
}