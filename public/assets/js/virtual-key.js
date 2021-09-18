$(document).ready(function(){
	$('.table_teclado tr td').click(function(){
		var number = $(this).text();
		
		if (number == '')
		{
			$('#_indicador').val($('#_indicador').val().substr(0, $('#_indicador').val().length - 1)).focus();
		}
		else
		{
			$('#_indicador').val($('#_indicador').val() + number).focus();
		}

	});
});
