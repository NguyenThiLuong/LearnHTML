function enterNumberic(thongBao){
	var n;
	do{
		n=prompt("Nhập "+thongBao+" :");
		n=parseInt(n);
	}
	while (isNaN(n) || n<=0);
	return n;
}
var n;
n=enterNumberic("n");
var sum =0;
for (var i = 2; i <= 2*n; i+=2) {
	sum+=i;
}
//alert("Tổng của "+n+" số chẵn đầu tiên là: "+sum);
document.write("Tổng của "+n+" số chẵn đầu tiên là: "+sum);