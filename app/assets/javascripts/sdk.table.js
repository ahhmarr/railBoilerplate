/*globals lightBox:true,console:true*/
$(function(){
	
});
$(function(){
	$("#sdkResponse").on("change",".importTableCell",function()
	{
		var data,url;
		url="updateXL";
		data={
			id:$(this).attr("data-id"),
			val:$(this).html()
		};
		console.log(url);
		console.log(data);
		$.ajax({method:"post",data:data,url:url,success:function(resp){
			console.log(resp);
		}});
		
	});
});
$(function(){
	$("#sdkResponse").on("change",".importTableCell",function()
	{
		var lght=new lightBox();
	$(".importTableCell").click(function()
	{
		var txt=["<","input type=\"text\"","value=\""+$(this).html()+"\"",
		"class=\"","border-none table-cel-box width-100 padding-small font-bigger strong","\"","/>" ];
		lght.show(txt.join(""),$(this));
	});
	$(".importTableCell").on("blur",function()
	{
		$(this).html($(".content_overlay").children(":first").val());
		$(this).change();
	});
		
	});
});