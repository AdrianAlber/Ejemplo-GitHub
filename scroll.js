
$(function(){

	$('.finLinea, #contacto').click(

		function(){
			var vinculo = $(this).attr('href');
			$("body").animate({scrollTop: $(vinculo).offset().top-150}, 1000);}
	);
})
