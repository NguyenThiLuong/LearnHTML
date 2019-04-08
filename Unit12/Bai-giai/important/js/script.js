$(function(){
	var step = 1;
	$("#next").click(function(){
		if (step==2){
			var error = false;
			if ($("#firstName").val().trim()==""){
				$("#firstName").next().html("Chưa nhập firstName");
				error = true;
			}
			else $("#firstName").next().html("");
			if ($("#lastName").val().trim()==""){
				$("#lastName").next().html("Chưa nhập lastName");
				error = true;
			}
			else $("#lastName").next().html("");
			if ($("#age").val().trim()=="" 
				){
				$("#age").next().html("Thông tin age chưa đúng");
			error = true;
		}
		else $("#age").next().html("");
		if (!error) {
			var age = parseInt($("#age").val());
			if (age>18) {
				step=4;
				$("#step4").addClass("active");
				$("#step2").removeClass("active");
			}
			else{
				step=3;
				$("#step3").addClass("active");
				$("#step2").removeClass("active");
			}


		}
	}
	if (step==1){
		var error = false;
		if ($("#username").val().trim()==""){
			$("#username").next().html("Chưa nhập username");
			error = true;
		}
		else $("#username").next().html("");
		if ($("#password").val().trim()==""){
			$("#password").next().html("Chưa nhập password");
			error = true;
		}
		else $("#password").next().html("");
		if ($("#confirm").val().trim()=="" || 
			$("#confirm").val()!=$("#password").val()
			){
			$("#confirm").next().html("Thông tin confirm chưa đúng");
		error = true;
	}
	else $("#confirm").next().html("");
	if (!error) {
		step++;
		$("#step2").addClass("active");
		$("#step1").removeClass("active");
	}
}
});
})