$(document).ready(function(){
	$(".read-more").click(function(){
		$("#show-this-on-click").slidedown();
		$(".read-more").hide();
		$(".read-less hide").show();
			event.preventdefault();
		});
	$(".read-less hide").click(function(){
		$("#show-this-on-click").slideup();
		$(".read-more").show();
		$(".read-less hide").hide();
		event.preventdefault();
	})
	$(".learn-more").click(function(){
		$("#learn-more-text").show();
		$("#learn-more").hide();
		event.preventdefault();
	});
});	