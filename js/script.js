$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html,body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    },1250,'easeInOutExpo');
   
    e.preventDefault();
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

    // portfolio
	if( wScroll > $('.portfolio').offset().top - 600 ) {
		
		$('.portfolio figure').each(function(i) {
			setTimeout(function() {
				$('.portfolio figure').eq(i).addClass('muncul');
			}, 180 * (i+1))

		});

	}

});