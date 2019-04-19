new WOW().init();
function randomNumber(){
	return Math.floor(Math.random()*256);
}
$(function(){
	$(".rec").each(function(){
		var red = randomNumber();
		var green = randomNumber();
		var blue = randomNumber();
		$(this).css('background','rgb('+red+','+green+','+blue+')');
		$(this).addClass("group"+Math.floor(Math.random()*3));
	})
	$("button").click(function(){
		new WOW().init();
		var group = $(this).attr("filter");
		if(group == 'all'){
			$(".rec").hide();
			$(".rec").show();
		}
		else{
			$(".rec").hide();
			var clazz = '.'+group;
			$(clazz).show();
		}
	})
})