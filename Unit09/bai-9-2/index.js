var input = document.getElementsByTagName("input");
var tr = document.getElementsByTagName("tr");

//Su kien check all
document.getElementsByClassName("check")[0].addEventListener("click",function(){
	for (var i = 0; i < input.length; i++) {
		input[i].checked=true;
		tr[i].style.backgroundColor = "#1361b3b0";
	}
});

//su kien uncheck all
document.getElementsByClassName("uncheck")[0].addEventListener("click",function(){
	for (var i = 0; i < input.length; i++) {
		input[i].checked=false;
		tr[i].style.backgroundColor = "#92aecca1";
	}
});

//doi mau dong khi click chuot vao
for (var i = 0; i < tr.length; i++) {
	tr[i].addEventListener("click",function(){
		this.style.backgroundColor = "#1361b3b0";
	});
}