$(document).ready(function(){
	
 $('.flip').click(function(){
        if($(this).find('.card').hasClass('flipped')){
        	$(this).find('.card').removeClass('flipped');
        } else {
        	$(this).find('.card').addClass('flipped');
        }
 });


});



	


