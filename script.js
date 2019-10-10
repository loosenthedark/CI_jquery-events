$(document).ready(function() {
 
	// $("#stream1_btn").on('click', function() {
 //	$("#stream1").click(function() {
 //		$(".stream1-card").removeClass('highlight_stream');
	// 	$(".stream2-card").removeClass('highlight_stream');
	// 	$(".stream3-card").removeClass('highlight_stream');
	//   	$(".stream1-card").addClass('highlight_stream');
	// });
	// $("#stream2").on("click", function() {
	// 	$(".stream1-card").removeClass('highlight_stream');
	// 	$(".stream2-card").removeClass('highlight_stream');
	// 	$(".stream3-card").removeClass('highlight_stream');
	//   	$(".stream2-card").addClass('highlight_stream');
	// });
	// $("#stream3").on("click", function() {
	// 	$(".stream1-card").removeClass('highlight_stream');
	// 	$(".stream2-card").removeClass('highlight_stream');
	// 	$(".stream3-card").removeClass('highlight_stream');
	//   	$(".stream3-card").addClass('highlight_stream');
	// });
	
	$('.stream-nav').click(function(){
		var allStreamsCardsSelector = '.card';
		var thisStreamCardsSelector = '.' + this.id + '-card';
		$(allStreamsCardsSelector).removeClass('highlight_stream');
		$(thisStreamCardsSelector).addClass('highlight_stream');
	});
	
	$('p').click(function(){
		$(this).children('a').toggleClass('link_highlighter');
	});
	
	$('#button1').click(function(){
		$(this).next().slideToggle('slow');
	});
	
	$('img').click(function(){
		$('img').next().children('p').slideDown(3000);
	});
	
	$('.card').click(function(){
		$(this).toggleClass('card_highlighter');
	});
	
	$('#select').click(function(){
		$('.card:not(.card_highlighter)').hide();
	});
	
	$('#all').click(function(){
		$('.card').show();
	});

	$('p').click(function() {
		$('p').addClass('redpara');	
	});
	
	$('h2').hover(function() {
		$('h2').addClass('bg_lightblue');	
	});
	
	$('#h2_1').hover(function() {
		$('#h2_2').removeClass('bigheader');
		$('#h2_3').removeClass('bigheader');
		$('#h2_4').removeClass('bigheader');
		$('#h2_5').removeClass('bigheader');
		$('#h2_6').removeClass('bigheader');
		$('#h2_1').addClass('bigheader');
	});
	
	$('#h2_2').hover(function() {
		$('#h2_1').removeClass('bigheader');
		$('#h2_3').removeClass('bigheader');
		$('#h2_4').removeClass('bigheader');
		$('#h2_5').removeClass('bigheader');
		$('#h2_6').removeClass('bigheader');
		$('#h2_2').addClass('bigheader');
	});
	
	$('#h2_3').hover(function() {
		$('#h2_1').removeClass('bigheader');
		$('#h2_2').removeClass('bigheader');
		$('#h2_4').removeClass('bigheader');
		$('#h2_5').removeClass('bigheader');
		$('#h2_6').removeClass('bigheader');
		$('#h2_3').addClass('bigheader');
	});
	
	$('#h2_4').hover(function() {
		$('#h2_1').removeClass('bigheader');
		$('#h2_2').removeClass('bigheader');
		$('#h2_3').removeClass('bigheader');
		$('#h2_5').removeClass('bigheader');
		$('#h2_6').removeClass('bigheader');
		$('#h2_4').addClass('bigheader');
	});
	
	$('#h2_5').hover(function() {
		$('#h2_1').removeClass('bigheader');
		$('#h2_2').removeClass('bigheader');
		$('#h2_3').removeClass('bigheader');
		$('#h2_4').removeClass('bigheader');
		$('#h2_6').removeClass('bigheader');
		$('#h2_5').addClass('bigheader');
	});
	
	$('#h2_6').hover(function() {
		$('#h2_1').removeClass('bigheader');
		$('#h2_2').removeClass('bigheader');
		$('#h2_3').removeClass('bigheader');
		$('#h2_4').removeClass('bigheader');
		$('#h2_5').removeClass('bigheader');
		$('#h2_6').addClass('bigheader');
	});
	
	$('.bottom_button').hover(function() {
		$('body').css('background', 'black');
	});
	
	$('.bottom_button').mouseleave(function() {
		$('body').css('background', '#eee');
	});
	
	// $('#firstbutton').click(function() {
	//     $('#firstbutton').hide(3000);
	// });

	$('#firstbutton').click(function() {
	    $('#firstpara').slideToggle(1000, 'linear');
	});
	
	$('#secondbutton').click(function() {
	    $('#secondpara').slideToggle(1000, 'linear');
	});
	
	$('#thirdbutton').click(function() {
	    $('#thirdpara').slideToggle(1000, 'linear');
	});
	
	$('#fourthbutton').click(function() {
	    $('#fourthpara').slideToggle(500, 'linear');
	});
	
	$('#fifthbutton').click(function() {
	    $('#fifthpara').slideToggle(500, 'linear');
	});
	
	$('#sixthbutton').click(function() {
	    $('#sixthpara').slideToggle(500, 'linear');
	});
	
	$('#firstbutton').mouseenter(function() {
		$('#firstbutton').fadeTo(1000, 0.5);
	});
	
	$('#firstbutton').mouseleave(function() {
		$('#firstbutton').fadeTo(1000, 1);
	});
	
	$('#secondbutton').mouseenter(function() {
		$('#secondbutton').fadeTo(1000, 0.5);
	});
	
	$('#secondbutton').mouseleave(function() {
		$('#secondbutton').fadeTo(1000, 1);
	});
	
	$('#thirdbutton').mouseenter(function() {
		$('#thirdbutton').fadeTo(1000, 0.5);
	});
	
	$('#thirdbutton').mouseleave(function() {
		$('#thirdbutton').fadeTo(1000, 1);
	});
	
	$('#fourthbutton').mouseenter(function() {
		$('#fourthbutton').fadeTo(1000, 0.5);
	});
	
	$('#fourthbutton').mouseleave(function() {
		$('#fourthbutton').fadeTo(1000, 1);
	});
	
	$('#fifthbutton').mouseenter(function() {
		$('#fifthbutton').fadeTo(1000, 0.5);
	});
	
	$('#fifthbutton').mouseleave(function() {
		$('#fifthbutton').fadeTo(1000, 1);
	});
	
	$('#sixthbutton').mouseenter(function() {
		$('#sixthbutton').fadeTo(1000, 0.5);
	});
	
	$('#sixthbutton').mouseleave(function() {
		$('#sixthbutton').fadeTo(1000, 1);
	});
	
});
