$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
	
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
	
// 		$(this).css({
// 			color:"black",
// 			textDecoration:"none"
// 		});
// 	}
// 	else{


// 	$(this).css({
// 		color:"gray",
// 		textDecoration:"line-through"
// 	});
// }
});
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	// when we click on a span event bubbling happens as span is inside of a li so after span is clicked property of li is automatically called
event.stopPropagation();
// stop propgation stops the bubbling of the parent element 
})
$("input[type='text']").keypress(function(event){
	if((event.which) === 13)
	{
		var todo=$(this).val();
	$(this).val("");
	$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todo + " </li>");
	}


});
$(".fa-pencil-alt").on("click",function(){
	$("input").fadeToggle(500);
})