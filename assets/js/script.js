$(document).ready(function(){
	
	$('.grid').imagesLoaded(function() {
		$('.grid').masonry({
		  itemSelector: '.grid-item',
		  columnWidth: '.grid-item-sizer',
		  percentPosition: true
		});
	});

	$('.description-tabs').tabs();

	$('.each-product').on('click', function () {
		$('.product-holder').animate(
		{ left: "0%" }, 
		{
			duration: 2000,
			easing: "easeInOutCubic"
		});

		setTimeout(function(){ 
			$('.product-close').animate({
				left: "0px"
			}, 1000);			
		}, 1000);

		$('body').css('overflow-y', 'hidden');
	});

	$('.product-close-btn').on('click', function(){
		$('.product-close').animate({
			left: "291px"
		}, 500);

		$('.product-holder').animate(
		{ left: "100%" }, 
		{
			duration: 2000,
			easing: "easeInOutCubic"
		});

		$('body').css('overflow-y', 'visible');
	});

});