$(function(){
	$(".AIC").change(function()
	{
		var url="app/appInfoUpdate";
		var data={
			appID :$("#appAbsID").val(),
			field :$(this).attr("name"),
			val	  :	$(this).val()
		};
		$.ajax({method:"post",data:data,url:url,success:function(resp){

		}});
	});
	$(".AICLabel").click(function()
	{
		chkID=$(this).attr("for");
		chk=$("#"+chkID);
		val=(chk.is(":checked"))?"0":"1";
		
		if(chk.is(":disabled"))
		{
			alertify.error("not allowed");
			return;
		}
		if(chkID=="grapAssign")
		{
			if(!$("#gDesigner").val() || !$("#gAssign").is(":checked") || !$("#graphics").val() )
			{
				alertify.error("unmet dependencies");
				chk.prop("checked", "false");
				return;
			}

		}
		if(chkID=="gAssign")
		{
			if(!$("#gDesigner").val())
			{
				alertify.error("graphic designer can't be empty");
				chk.prop("checked", "false");
				return;
			}
			if(val && !$("#graphics").val()) //update with the unique graphic name if assgned
			{
				grp=$("#graphics").attr("data-unqiue");
				designer=$("#gDesigner").val();
				$("#graphics").val(grp+designer);
				$("#graphics").change();
			}
		}
		if(chkID=="asoAssign")
		{
			if(!$("#aspRsch").val())
			{
				alertify.error("aso researcher can't be empty");
				chk.prop("checked", "false");
				return;
			}
		}
		if(chkID=="apInforComplete")
		{
			aspRsch=$("#aspRsch").val();asoAssign=$("#asoAssign").is(":checked");aso=$("#aso").val();
			apFree=$("#appNmFree").val();apPro=$("#appNmPro").val();
			if(!aspRsch || !asoAssign || !aso || !aspRsch || !apFree || ($("#appNmPro").is(":visible") && !apPro))
			{
				alertify.error("unmet dependencies");
				chk.prop("checked", "false");
				return;
			}	
		}
		var url="app/appInfoUpdate";
		var data={
			appID :$("#appAbsID").val(),
			field :chk.attr("name"),
			val	  : val
		};
		console.log(data);
		$.ajax({method:"post",data:data,url:url,success:function(resp){

		}});

	});
});