// alert('Hello world');


// var val;
// val =confirm("How are you");
// if(val == true){
// 	alert("good");
// }
// else{
// 	alert("not good");
// }


// var val;
// val = prompt("Nhap ho va ten:");
// alert("Ten cua ban la "+ val);

// var val;
// val = prompt("Nhap ho va ten:");
// if (val != null) {
// 	// console.log();
// 	document.write("<b style='color:red'>" + val+"</b>");
// }
// else alert("Nhap ho ten");

//var a=prompt("Nhap a:");
//var b=prompt("Nhap b:");
//a=parseFloat(a);
///while (isNaN(a)) { //is not number
//	a=prompt("Nhap a:");
//}
//b=parseFloat(b);
//while (isNaN(b)) { //is not number
//	b=prompt("Nhap b:");
//}
//parseInt("3") =>3; //ham chuyen doi tu chuoi string sang so
//parseFloat("3.2")


// var a;
// var b;
// do{
// 	a=prompt("Nhap a:");
// 	a=parseFloat(a);
// }
// while(isNaN(a));
// do{
// 	b=prompt("Nhap b:");
// 	b=parseFloat(b);
// }
// while(isNaN(b));
// if(a==0 && b==0){
// 	alert("phuong trinh vo so nghiem");
// }
// else if(a==0 && b!=0){
// 	alert("phuong trinh vo nghiem");
// }
// else{
// 	alert("phuong trinh co nghiem"+(-b/a));
// }

//tinh tong 1/2+2/3+3/4+...+100/101
// var n;
// do{
// 	n=prompt("Nhap n:");
// 	n=parseInt(n);
// }
// while (isNaN(n) || n<=0);
// var sum=0.0;
// for (var i = 0; i < n; i++) {
// 	sum=sum+(i+1)/(i+2);
// }
// alert(sum);

//var mang = [];
//mang.push(3); // day gia tri vao mang
//mang = new Array(10); //c2 tao mang khi biet truoc so phan tu
//mang[i] //phan tu thu i cua mang

// var n;
// do{
// 	n=prompt("Nhap n:");
// 	n=parseInt(n);
// }
// while (isNaN(n) || n<=0);

// var mang = new Array(n);

// for (var i = 0; i < n; i++) {
// 	do{
// 		mang[i]=prompt("Nhap phan tu thu:" + (i+1));
// 		mang[i]=parseInt(mang[i]);
// 	}
// 	while (isNaN(mang[i]) || mang[i]<=0);
// }
// var sum = 0;
// for (var i = 0; i < n; i++) {
// 	sum = sum +mang[i];
// }
// alert(sum);

//function

function enterNumberic(thongBao){
	var n;
	do{
		n=prompt("Nhap "+thongBao+" :");
		n=parseInt(n);
	}
	while (isNaN(n) || n<=0);
	return n;
}

var n;

n=enterNumberic("n");

var mang = new Array(n);

for (var i = 0; i < n; i++) {
	mang[i]=enterNumberic("phan tu thu "+(i+1));
}
var sum = 0;
for (var i = 0; i < n; i++) {
	sum = sum +mang[i];
}
alert(sum);