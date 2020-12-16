
	$(function(){

		$('.JS_Click_Trigger').on('click', function(){
			$('.OverLayer').addClass('isShow');
			
			$('body').css({overflow: 'hidden'});
		});
		
		

		$('.OverLayer-Mask').on('click', function(){
			$('.OverLayer').removeClass('isShow');
			
			$('body').css({overflow: ''});
		});
		
		

	});




