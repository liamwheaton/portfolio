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

	$('.picture').each(function() {
		var $pic = $(this),
			getItems = function() {
				var items = [];
				$pic.find('a').each(function() {
					var $href = $(this).attr('href'),
						$size = $(this).data('size').split('x'),
						$width = $size[0],
						$height = $size[1];

					var item = {
						src : $href,
						w : $width,
						h : $height
					}

					items.push(item);
				});
				return items;
			}

		var items = getItems();

		var $pswp = $('.pswp')[0];

		$pic.on('click', 'figure', function(event) {
			event.preventDefault();

			var $index = $(this).index();
			var options = {
				index: $index,
				bgOpacity: 0.7,
				showHideOpacity: true,
				counterEl: false,
				tapToClose: true,
				closeEl: true,
				fullscreenE1: false,
				shareE1: false
			}
			var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
			lightBox.init();
		})
	});

	$('.btt').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 700);
		return false;
	});
	
});