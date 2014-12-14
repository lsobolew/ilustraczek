$(document).ready(function(){
$('#fullpage').fullpage({
	navigation: true,
        navigationPosition: 'right',
        loopBottom: true,
        loopTop: true,
        resize:false,
        easingcss3: 'ease'
});

	  $('.ilustracje li div').on('click', function() {
	    $(this).addClass('animated rubberBand');
	    
	  }).on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	     $(this).removeClass('animated rubberBand');   
	  });


	var player = new MediaElementPlayer('#player');
	player.container.hide()
	$('.ilustracje li div').on('click', function() {
	    player.pause();
	    player.setSrc($(this).data('audio'));
	    // player.setSrc('http://www.voicerss.org/controls/speech.ashx?hl=pl-pl&src=' + $(this).data('text') + '&c=mp3');
	    player.play();
	});

})

  
// $(window).on('load', function() {     
// var colorThief = new ColorThief();
//   $('[data-src]').each(function(){
//         var image = new Image();
//         image.src = $(this).data('src');
//         var imageMainColor = colorThief.getColor(image); 
//         var imageMainColorHEX = $c.rgb2hex(imageMainColor[0], imageMainColor[1], imageMainColor[2]);
//         // console.log(imageMainColorHEX);
//         var bgColor = $c.complement(imageMainColor);
//         var bgColorHEX = $c.rgb2hex(bgColor.R, bgColor.G, bgColor.B);

//         $(this).css('background-color', 'rgba(' + bgColor.R + ',' + bgColor.G + ',' + bgColor.B + ', .9)');
//         $(this).find('span').css('color', 'rgba(' + bgColor.R + ',' + bgColor.G + ',' + bgColor.B + ', 1)');
//         $(this).css('border-color', imageMainColorHEX);
//   })
// })
