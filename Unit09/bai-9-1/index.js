var button = document.getElementsByTagName("button");
var content = document.getElementsByTagName("p");
for (var i = 0; i < button.length; i++) {
	button[i].addEventListener("click",function(){
		for (var j = 0; j < content.length; j++) {
			content[j].style.display = "none";
		}
		this.nextElementSibling.style.display = "block";
	})
}
for (var i = 0; i < button.length; i++) {
	button[i].addEventListener("click",function(){
		for (var j = 0; j < button.length; j++) {
			button[j].style.backgroundColor = "#5e615d";
			button[j].style.color = "white";
		}
		this.style.backgroundColor = "#f3f3f2";
		this.style.color = "black";
	})
}
