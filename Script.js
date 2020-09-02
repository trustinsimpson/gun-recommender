// Dropdown for home page
function dropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
}

function dropdown2() {
	document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		let dropdowns = document.getElementsByClassName("dropdown-content");
		let i;
		for (i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.toggle('show');
			}
		}
	}
	if (!event.target.matches('.dropbtn2')) {
        let dropdowns2 = document.getElementsByClassName("dropdown-content2");
        let i;
        for (i = 0; i < dropdowns2.length; i++) {
            let openDropdown = dropdowns2[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
