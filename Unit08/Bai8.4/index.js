function enterNumberic(thongBao){
	var n;
	do{
		n=prompt("Nhập "+thongBao+" :");
		n=parseInt(n);
	}
	while (isNaN(n) || n<=0);
	return n;
}
var n,m,k;
n = enterNumberic("n");
m = enterNumberic("m");
k = enterNumberic("k");
while (n>m) {
	alert("Nhập lại n<=m");
	n = enterNumberic("n");
	m = enterNumberic("m");
}
var sum = 0;
for (var i = n; i <= m; i++) {
	if(i%k==0){
		sum = sum + i;
	}
}
alert("Tổng các số từ "+n+" đến "+m+" chia hết cho "+k+" là: "+sum);