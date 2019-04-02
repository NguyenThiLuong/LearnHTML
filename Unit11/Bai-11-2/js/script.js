$(function(){
	$('button').click(function(){
		var check = $(this).html();
		if (check == '<span class="fa fa-plus fa-2x"></span>') {
			$(this).html('<span class="fa fa-minus fa-2x"></span>');
			$(this).parent().next().show(500);
			$(this).next().css('color','#BDE453');
		}
		else{
			$(this).html('<span class="fa fa-plus fa-2x"></span>');
			$(this).parent().next() .hide(500);
			$(this).next().css('color','white');
		}
	})
})