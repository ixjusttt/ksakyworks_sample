// 作品詳細 オーバーレイ表示
	$(function(){

		$('.JS_Click_Trigger').on('click', function(){
		  $('.OverLayer').addClass('isShow');
		});

		$('.OverLayer-Mask').on('click', function(){
		  $('.OverLayer').removeClass('isShow');
		});
		
	});