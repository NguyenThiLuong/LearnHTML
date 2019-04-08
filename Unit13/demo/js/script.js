// $('.counter').counterUp({
//     delay: 10,
//     time: 5000
// });
$(function(){
	$(".btn").on("click", function(){
		Command: toastr["success"]("luong", "Hello")

		toastr.options = {
		  "closeButton": false,
		  "debug": true,
		  "newestOnTop": false,
		  "progressBar": false,
		  "positionClass": "toast-top-right",
		  "preventDuplicates": false,
		  "onclick": null,
		  "showDuration": "300",
		  "hideDuration": "1000",
		  "timeOut": "5000",
		  "extendedTimeOut": "1000",
		  "showEasing": "swing",
		  "hideEasing": "linear",
		  "showMethod": "fadeIn",
		  "hideMethod": "fadeOut"
		}
	})
})