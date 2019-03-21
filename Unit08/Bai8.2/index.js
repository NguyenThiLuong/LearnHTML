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

var sum=0;
var i=1;
do{
	sum = sum + i;
	i++;
}
while (i <= n);
alert("Tổng các số từ 1 đến "+n+" là: "+sum);