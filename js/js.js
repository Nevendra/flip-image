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
        if (ckbox.is(':checked')) {
	        if(box.find('.card').hasClass('flipped')){
	        	box.find('.card').removeClass('flipped');
	        } else {
	        	box.find('.card').addClass('flipped');
	        }
        }
    });

});



	


