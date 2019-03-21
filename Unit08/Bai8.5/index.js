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
n = enterNumberic("n");
var sum = 0.0;
for (var i = 1; i <= n ; i++) {
	sum = sum + 1/i;
}
alert("Tổng các số là: "+sum);