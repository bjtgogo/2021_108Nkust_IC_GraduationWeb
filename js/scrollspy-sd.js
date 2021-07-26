$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: "#body", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#body a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});




/*--------goTop----------*/
$(function(){
	
	$("#goTop").click(function(){

		$("html,body").animate({scrollTop:0},200);

		//$("html,body").animate({scrollTop:0},900,"easeOutBounce");

		return false;

	});

});




$(function(){
	
	$("#goTop1").click(function(){

		$("html,body").animate({scrollTop:0},200);

		//$("html,body").animate({scrollTop:0},900,"easeOutBounce");

		return false;

	});

});


$(function(){
	
	$("#goTop2").click(function(){

		$("html,body").animate({scrollTop:0},200);

		//$("html,body").animate({scrollTop:0},900,"easeOutBounce");

		return false;

	});

});


$(function(){
	
	$("#goTop3").click(function(){

		$("html,body").animate({scrollTop:0},200);

		//$("html,body").animate({scrollTop:0},900,"easeOutBounce");

		return false;

	});

});

$(function(){
	
	$("#goTop4").click(function(){

		$("html,body").animate({scrollTop:0},200);

		//$("html,body").animate({scrollTop:0},900,"easeOutBounce");

		return false;

	});

});


$(function(){
	
	$("#goTop5").click(function(){

		$("html,body").animate({scrollTop:0},200);

		//$("html,body").animate({scrollTop:0},900,"easeOutBounce");

		return false;

	});

});

$(function(){
	
	$("#goTop6").click(function(){

		$("html,body").animate({scrollTop:0},200);

		//$("html,body").animate({scrollTop:0},900,"easeOutBounce");

		return false;

	});

});


$(function(){
	
	$("#goTop7").click(function(){

		$("html,body").animate({scrollTop:0},200);

		//$("html,body").animate({scrollTop:0},900,"easeOutBounce");

		return false;

	});

});




