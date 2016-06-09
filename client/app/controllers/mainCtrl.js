angular.module('app.controllers')

.controller('mainCtrl', function($scope) {

	$scope.siteTitle = 'Liam Wheaton';

	var $window = $(window);

	function check_if_in_view() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height + 150);


		if (window_top_position > 300) {
			$('.btt').fadeIn('slow');
		} else {
			$('.btt').fadeOut('slow');
		}
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

	$('#dli').click(function () {

		var pswpElement = $('.pswp')[0];

		var items = [ {
				src: '../../assets/img/dli_1.png',
				w: 524,
				h: 744
			},
			{
				src: '../../assets/img/dli_2.png',
				w: 524,
				h: 744
			},
			{
				src: '../../assets/img/dli_3.png',
				w: 524,
				h: 744
			},
			{
				src: '../../assets/img/dli_4.png',
				w: 524,
				h: 744
			},
			{
				src: '../../assets/img/dli_5.png',
				w: 744,
				h: 524
			},
			{
				src: '../../assets/img/dli_6.png',
				w: 744,
				h: 524
			}
		];

		var options = {

			history: false,
	      	focus: false,

	        showAnimationDuration: 0,
	        hideAnimationDuration: 0

		};

		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    	gallery.init();


	});

	$('#logo').click(function () {

		var pswpElement = $('.pswp')[0];

		var items = [ {
				src: '../../assets/img/logo_1.png',
				w: 600,
				h: 635
			},
			{
				src: '../../assets/img/logo_2.png',
				w: 707,
				h: 608
			},
			{
				src: '../../assets/img/logo_3.png',
				w: 690,
				h: 609
			},
			{
				src: '../../assets/img/logo_4.png',
				w: 608,
				h: 278
			},
			{
				src: '../../assets/img/logo_5.png',
				w: 612,
				h: 609
			}
		];

		var options = {

			history: false,
	      	focus: false,

	        showAnimationDuration: 0,
	        hideAnimationDuration: 0

		};

		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    	gallery.init();


	});

	$('.btt').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 700);
		return false;
	});
	
});