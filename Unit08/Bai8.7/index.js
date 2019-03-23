
function enterNumberic(thongBao){
	var n;
	do{
		n=prompt("Nhập "+thongBao+" :");
		n=parseInt(n);
	}
	while (isNaN(n) || n<=0);
	return n;
}
function hinh1(n){
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n; j++) {
			if (j<=i) {
				document.write("*");
			}
			else{
				document.write(" ");
			}
		}
		document.write("<br>");
	}
}
function hinh2(n){
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n; j++) {
			document.write("*");
		}
		document.write("<br>");
	}
}
function hinh3(n){
	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= n; j++) {
			if (i==1||j==1||i==n||j==n) {
				document.write("*");
			}
			else{
				document.write("&nbsp ");
			}
		}
		document.write("<br>");
	}
}
function hinh4(n){
	for (var i = 1; i <= n; i++) {
		for (var j = n; j >= 1; j--) {
			if (j>=i) {
				document.write("*");
			}
			else{
				document.write(" ");
			}
		}
		document.write("<br>");
	}
}

var n;
n=enterNumberic("n");
hinh1(n);
document.write("<br>");
hinh2(n);
document.write("<br>");
hinh3(n);
document.write("<br>");
hinh4(n);

// var n;
// n=enterNumberic("n");

// for (var i = 1; i <= n; i++) {
// 	for (var j = 1; j <= 25; j++) {
// 		if (j>=1 && j<=7) {
// 			//hinh 1: tam giac
// 			if (j<=i) {
// 				document.write("*");
// 			}
// 			else{
// 				document.write("&nbsp ");
// 			}
// 		}
// 		//khoang trang
// 		else if (j>=8 && j<9) {
// 			document.write("&nbsp ");
// 		}
// 		//hinh 2: chu nhat dac
// 		else if (j>=9 && j<=15) {
// 			document.write("*");
// 		}
// 		//khoang trang
// 		else if (j>=16 && j<17) {
// 			document.write("&nbsp ");
// 		}
// 		//hinh 3: chu nhat rong
// 		else if (j>=17 && j<=23) {
// 			if (i==1||j==17||i==n||j==23) {
// 				document.write("*");
// 			}
// 			else{
// 				document.write("&nbsp ");
// 			}
// 			//document.write("<br>");
// 		}
// 		// khoảng trắng
// 		else if (j>=24 && j<25) {
// 			document.write("&nbsp ");
// 		}
// 		//hình 4: hình tam giác
// 		else if (j=25) {
// 			for (var k = n; k >=1; k--){
// 				if (k>=i) {
// 					document.write("*");
// 				}
// 				else{
// 					document.write("&nbsp ");
// 				}
// 			}
// 		}
// 	}
// 	document.write("<br>");
// }