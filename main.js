$(document).on('ready', function() {



	//////////////////////////////
	/////////  PART 1  ///////////
	//////////////////////////////

	$('.paragraph1').mouseover(function() {
		$('.paragraph1').css('color', 'pink')
	})

	$('.paragraph2').mouseover(function() {
		$('.paragraph2').css('color', 'pink')
	})

	$('.paragraph3').mouseover(function() {
		$('.paragraph3').css('color', 'pink')
	})



	//////////////////////////////
	/////////  PART 2  ///////////
	//////////////////////////////

  	$('.header').append('!')



  	//////////////////////////////
	/////////  PART 3  ///////////
	//////////////////////////////

	$('.link1').click(function(e) {
		var result = confirm('Are you sure you want to leave this page?')
		if(result === false) {
			e.preventDefault()
			$('.link1').remove()
		}
	})

	$('.link2').click(function(e) {
		var result = confirm('Are you sure you want to leave this page?')
		if(result === false) {
			e.preventDefault()
			$('.link2').remove()
		}
	})
});