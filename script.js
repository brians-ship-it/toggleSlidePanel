$(document).ready(function(){
	$("#left-switch").click(function(){
		$("#left-panel").toggle("slide");
	});

	$("#right-switch").click(function(){ 
		$("#right-panel").toggle("slow");
	});
});

$('.scrollToTop').click(function(){
	$('html, body').animate({scrollTop : 0},800);
	return false;
});

$("a[href='#foot']").click(function() {
	$("html, body").animate({ scrollTop: $(document).height() }, "slow");
  	return false;
});

