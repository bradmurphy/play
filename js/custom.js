console.log("custom.js");


$(document).ready(function(){

		$(function(){
	  		$.scrollIt();
		});

		// FADE IN CIRCLE

		$(".circle").delay(500).animate({
			opacity: 1
		}, 1000);

		// WHERE TO PLAY

		$(".location").hide();
		$(".pop-out").hide();

		var whereStatus = true;
		var popOutStatus = true;

		$("#where").click(function(e) {

			e.preventDefault();

			if (whereStatus) {

					$(this).animate({
					height: "85px",
					width: "125px",
					"padding-top": "40px"
				}, 500);
					$(this).fadeIn(500).css({"-webkit-transform" : "rotate(25deg)"});
					$(this).fadeIn(500).css("background-color", "#e75139");
					$(".location").slideToggle(500);

					whereStatus = false;

			} else {

					$(this).animate({
					height: "55px",
					width: "75px",
					"padding-top": "20px"
				}, 500);
					$(this).fadeIn(500).css({"-webkit-transform" : "rotate(0deg)"});
					$(this).fadeIn(500).css("background-color", "#d6e26f");
					$(".location").slideToggle(500);

					whereStatus = true;

			}
					
		});

		$("#dollar").click(function(e) {

			e.preventDefault();

			if (popOutStatus) {

					$(".pop-out").fadeIn(500);

					popOutStatus = false;

			}

			if (popOutStatus == false) {

				$("#price").click(function(e) {
					e.preventDefault();
					$(".pop-out").fadeOut(500);
				});

				$(".fifty-scratch").click(function() {
					$(".pop-out").fadeOut(500);
				});

				popOutStatus = true;
			
			}
					
		});

		$(".one").parallax("20%", -0.35);

});