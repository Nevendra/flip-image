$(document).ready(function(){
	
 // $('.flip').click(function(){
 //        if($(this).find('.card').hasClass('flipped')){
 //        	$(this).find('.card').removeClass('flipped');
 //        } else {
 //        	$(this).find('.card').addClass('flipped');
 //        }
 // });



 //  $('#squaredTwo').click(function(){
 //        if($(this).find('.card').hasClass('flipped')){
 //        	$(this).find('.card').removeClass('flipped');
 //        } else {
 //        	$(this).find('.card').addClass('flipped');
 //        }
 // });

var ckbox = $('#squaredTwo');

$('input').on('click',function () {
		var box = $(this).parent().parent().parent();
        if ($(this).is(':checked') && $(this).hasClass('flipBox')) {
	        if(box.find('.card').hasClass('flipped')){
	        	box.find('.card').removeClass('flipped');
	        } else {
	        	box.find('.card').addClass('flipped');
	        	$(this).attr('disabled', true)
	        }
        }
    });

$('input').on('click',function () {
		var box = $(this).parent().parent().parent();
        if ($(this).is(':checked') && $(this).hasClass('slideBox')) {
	        if(box.find('.imgGallery').hasClass('slideImg')){
	        	box.find('.imgGallery').removeClass('slideImg');
	        } else {
	        	box.find('.imgGallery').addClass('slideImg');
	        	if(box.find('.imgGallery').hasClass('slideImg')) {
	        		$(box.find('.imgGallery')).animate({height: '700px'}, 'slow')
	        		$(box.find('.slide')).animate({height: '800px'}, 'slow', showImgGallery(box));
	        	}
	        	$(this).attr('disabled', true)
	        }
        }
    });

function showImgGallery(box) {
	console.log("hey")
	$(box.find('.imgDisplay')).fadeIn(3000);
}

$(".thumbnail").click(function(){
		var thumb = $(this).parent().parent().parent()
		$(thumb.find('.bigImg').children()).attr("src", $(this).attr("src"));
		console.log($(this).attr("src"));
	});

$(".startAnimation").click(function(){
	$(".transitionAnimation").css("display", "block");
		function fades(){
			$(".animationImage").fadeIn(2000, function(){
				$(".animationImage").fadeOut(1000, function(){
					$(".transitionAnimation").stop().fadeOut('slow');
					$('.animationLeft').css("left", "-50%");
					$('.animationRight').css("right", "-50%");
					$(".transitionAnimation").stop().fadeOut(3000);
				});/////// end of fade out
			});/////end of fadeIn
		}//// end of fades
		$('.animationLeft').animate({left: "0px"}, 500);
		$('.animationRight').animate({right: "0px"}, 500, fades);
});

});




	


