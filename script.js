alert("Potato");

function dropdown() {
	var x = document.getElementsByClassName("dropdown-content");
	for (var i = 0; i < x.length; i++) {
		if (x[i].style.display === "none") { 
			x[i].style.display = "block";
		}
		else {
			x[i].style.display = "none";
		}
	}
}
