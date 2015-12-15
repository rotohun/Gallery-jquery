$(document).ready(function($) {

	$('.gallery-items').on('mouseenter', function() {
		
		var title = $(this).data('title');
		var desc = $(this).data('desc');

		if (desc == null) {
			desc = 'Click To Enlarge';
		}

		if (title == null) {
			title = '';
		};

		//create Overlay div and output titles

		$(this).append('<div class="overlay"></div>');

		var overlay = $(this).children('.overlay');

		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

		overlay.fadeIn(800);

	});


	// Mouse leave overlay
	$('.gallery-items').mouseleave(function() {

		var overlay = $(this).children('.overlay');
		
		overlay.fadeOut( 400, function(e) {
			
			e.remove();

		});;
	});

});