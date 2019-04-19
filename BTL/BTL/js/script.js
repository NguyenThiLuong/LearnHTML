new WOW().init();
$('.home-button').click(function(){
	$('#home-button').css('display','block');
	new WOW().init();
	$(this).parent().addClass(' active');
	$('.gallery-button').parent().removeClass(' active');
	$('#gallery-button').css('display','none');
})
$('.gallery-button').click(function(){
	$('#gallery-button').css('display','block');
	$('#home-button').css('display','none');
	$(this).parent().addClass(' active');
	$('.home-button').parent().removeClass(' active');
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
})


var f = $('.filtr-container').filterizr({ controlsSelector: '.fltr-controls' });
window.filterizr = f;
$('.simplefilter li').click(function() {
	$('.simplefilter li').removeClass('active');
	$(this).addClass('active');
});
//Multifilter controls
$('.multifilter li').click(function() {
	$(this).toggleClass('active');
});
//Shuffle control
$('.shuffle-btn').click(function() {
	$('.sort-btn').removeClass('active');
});
//Sort controls
$('.sort-btn').click(function() {
	$('.sort-btn').removeClass('active');
	$(this).addClass('active');
});


$(document).ready(function(){
	loadGallery(true, 'a.thumbnail');
	function disableButtons(counter_max, counter_current){        
		$('#show-previous-image, #show-next-image').show();        
		if(counter_max == counter_current){            
			$('#show-next-image').hide();        
		} 
		else if (counter_current == 1){            
			$('#show-previous-image').hide();        
		}    
	}
	function loadGallery(setIDs, setClickAttr){        
		var current_image,            
		selector,            
		counter = 0;
		$('#show-next-image, #show-previous-image').click(function(){            
			if($(this).attr('id') == 'show-previous-image'){                
				current_image--;            
			}
			else {                
				current_image++;            
			}

			selector = $('[data-image-id="' + current_image + '"]');            
			updateGallery(selector);        
		});
		function updateGallery(selector) {            
			var $sel = selector;            
			current_image = $sel.data('image-id');            
			$('#image-gallery-caption').text($sel.data('caption'));            
			$('#image-gallery-title').text($sel.data('title'));            
			$('#image-gallery-image').attr('src', $sel.data('image'));            
			disableButtons(counter, $sel.data('image-id'));        
		}
		if(setIDs == true){            
			$('[data-image-id]').each(function(){                
				counter++;                
				$(this).attr('data-image-id',counter);            
			});        
		}        
		$(setClickAttr).on('click',function(){            
			updateGallery($(this));        
		});    
	}});


$('#exampleModal').on('show.bs.modal', function (event) {
var button = $(event.relatedTarget) // Button that triggered the modal
var recipient = button.data('whatever') // Extract info from data-* attributes
// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
var modal = $(this)
modal.find('.modal-title').text(recipient)
})

$('.counter').counterUp({
	delay: 10,
	time: 1000
});
