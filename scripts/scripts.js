$(".notificacao").css("display", "none");

$(".notify").click(function(){

	$(".notificacao").slideToggle();
});

$(".tema").click(function(){

	const darkmode = new Darkmode();
    darkmode.toggle();


});
