var formDangKy = document.getElementsByTagName("form")[0];
formDangKy.gioiTinh.value='Nam';


document.getElementsByClassName("dangKy")[0].addEventListener("click",function(){

	var tBaoEmail = document.getElementById("tBaoEmail");
	var tBaoSDT = document.getElementById("tBaoSDT");
	var tBaoMatKhau = document.getElementById("tBaoMatKhau");
	var tBaoXNMK = document.getElementById("tBaoXNMK");

	var emailID = formDangKy.email.value;
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");

	if (formDangKy.hoTen.value == "" || formDangKy.hoTen.value.length<=8) {
		formDangKy.hoTen.parentNode.nextElementSibling.innerHTML = "Nhap 8 ki tu";
	}
	else {
		formDangKy.hoTen.parentNode.nextElementSibling.innerHTML = "";
	}

	if(emailID = "" ||atpos < 1 || ( dotpos - atpos < 2 )) {
		formDangKy.email.parentNode.nextElementSibling.innerHTML = "Yêu cầu nhập email";
		formDangKy.email.focus();
	}
	// regex = /^0\d{9,10}$/g
	// !regex.test(formDangKy.sDT.value)
	if (formDangKy.sDT.value == "") {
		formDangKy.sDT.parentNode.nextElementSibling.innerHTML = "Yêu cầu nhập số điện thoại";
		formDangKy.sDT.focus();
	}
	if (isNaN(formDangKy.sDT.value) == true) {
		formDangKy.sDT.parentNode.nextElementSibling.innerHTML = "Yêu cầu nhập số";
		formDangKy.sDT.focus();
	}
	
	if (formDangKy.matKhau.value == "" || formDangKy.xnmatKhau.value == "") {
		tBaoMatKhau.innerHTML = "Yêu cầu nhập mật khẩu";
		tBaoXNMK.innerHTML = "Yêu cầu nhập mật khẩu xác nhận";
		formDangKy.matKhau.focus();
		formDangKy.xnmatKhau.focus();
	}
	else if (formDangKy.matKhau.value != formDangKy.xnmatKhau.value ) {
		tBaoXNMK.innerHTML = "Xác nhận mật khẩu sai";
		formDangKy.matKhau.focus();
		formDangKy.xnmatKhau.focus();
	}

	else {
		alert("Thành công");
	}
});