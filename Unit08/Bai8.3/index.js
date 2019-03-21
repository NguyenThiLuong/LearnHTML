function enterNumberic(thongBao){
	var n;
	do{
		n=prompt("Nhập "+thongBao+" :");
		n=parseInt(n);
	}
	while (isNaN(n) || n<=0);
	return n;
}

function giaiThua(n){
	var tmp=1;
	for (var i = 1; i <= n; i++) {
		tmp = tmp*i;
	}
	return tmp;
}

var n;

n=enterNumberic("n");

var sum = 0.0;

for (var i = 1; i <= n; i++) {
	sum = sum + i/giaiThua(i);
}
alert("Tổng là: "+sum);