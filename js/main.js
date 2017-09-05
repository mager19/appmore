$( document ).ready(function() {
   	// Video cover play 
   	$('.video').click(function(){this.paused?this.play():this.pause();});
   	//slide Features
	$('.features__slide').slick({
		  dots: false,
		  arrows: true,
		  infinite: false,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  fade:true,
		  mobilefirst:true,
		  responsive: [
            {
                breakpoint: 1280,
                settings: "slick"
            },
            {
                breakpoint: 800,
                settings: "slick"
            }
          ]
		  
		  
	});
	// Dots navigation Slide Features
	$('a[data-slide]').click(function(e) {
	   e.preventDefault();
	   var slideno = $(this).data('slide');
	   $('.features__slide').slick('slickGoTo', slideno - 1);
	});

	$('.team__member[data-member]').click(function(){
		var member = $(this).data('member');
		$('.team__member__right[data-member-right]').addClass("team__member--active");

		$('.team__member--active h3').css('opacity', '0.2');

	});


});