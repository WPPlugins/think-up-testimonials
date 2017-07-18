//Think Up! Testimonials Flexslider
jQuery( document ).ready(function( $ ) {

			var $slider = $('#thinkup-testimonials .slides'),
    		timer = +$slider.data('timer'),
				autoplay = +$slider.data('autoplay');

			$('#thinkup-testimonials').flexslider({
				slideshow: autoplay,
				animationDuration: 200,
				slideshowSpeed: timer
			});
		});
