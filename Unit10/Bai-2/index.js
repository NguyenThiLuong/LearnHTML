var formDangKy = document.getElementsByTagName("form")[0];
formDangKy.gioiTinh.value='Nam';


formDangKy.addEventListener("submit",function(){

	var tBaoHoTen = document.getElementById("tBaoHoTen");
	var tBaoEmail = document.getElementById("tBaoEmail");
	var tBaoSDT = document.getElementById("tBaoSDT");
	var tBaoMatKhau = document.getElementById("tBaoMatKhau");
	var tBaoXNMK = document.getElementById("tBaoXNMK");

	var emailID = formDangKy.email.value;
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");

	if (formDangKy.hoTen.value == "" || formDangKy.hoTen.value.length<=8) {
		tBaoHoTen.innerHTML = "Yêu cầu nhập đầy đủ họ tên";
		formDangKy.hoTen.focus();
	}

	else if(emailID = "" ||atpos < 1 || ( dotpos - atpos < 2 )) {
		tBaoEmail.innerHTML = "Yêu cầu nhập email";
		formDangKy.email.focus();
	}
	
	else if (formDangKy.sDT.value == "") {
		tBaoSDT.innerHTML = "Yêu cầu nhập số điện thoại";
		formDangKy.sDT.focus();
	}
	else if (isNaN(formDangKy.sDT.value) == true) {
		tBaoSDT.innerHTML = "Yêu cầu nhập số";
		formDangKy.sDT.focus();
	}
	
	else if (formDangKy.matKhau.value == "" || formDangKy.xnmatKhau.value == "") {
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