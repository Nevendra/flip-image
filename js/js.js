$(document).ready(function(){
	
var ckbox = $('#squaredTwo');


$('input').on('click',function () {
		var box = $(this).parent().parent().parent().parent();
		if($(this).hasClass('slideBox')){
			$(box.find('.slide')).slideToggle("slow", showImgGallery(box));
			$(this).attr('disabled', true)
		} else if ($(this).hasClass('flipBox')){
			box.find('.card').addClass('flipped')
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




	


