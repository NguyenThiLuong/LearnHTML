$(function(){
	$('#add').click(function(){
		var input = $('#input').val(); //lay gia tri o input
		$('#content').append(`
			<tr class="list">
		 		<td class="checkbox"></td>
		 		<td class="ip">`+input+`</td>
		 		<td class="btn"><span class="fa fa-times"></span></td>
		 	</tr>`);
		var list = $('.list');
		for (var i = 0; i < list.length; i+=2) {
			list[i].style.backgroundColor = "#d6d0d0";
		}
		$('#input').val(''); 
	});

	$('body').on('click','.btn',function(){
		$(this).parent().remove();
	});

	$('body').on('click','tr',function(){
		var check = $(this).children('.checkbox').html();
		if (check == '') {
			$(this).children('.checkbox').html('<span class="fa fa-check"></span>');
			$(this).children('.ip').css('textDecoration','line-through');
			$(this).css('background','#5d5a5a9e');
			$(this).css('color','white');
		}
		else {
			$(this).children('.checkbox').html('');
			$(this).children('.ip').css('textDecoration','none');
			$(this).css('background','#dedbdba8');
			$(this).css('color','black');
		}
	});
});