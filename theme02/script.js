$('document').ready(function(){
	
	/*----------------------------------- Loading -----------------------------------*/
    $(document).ajaxStart(function(){$("#wait").css("display", "block");$( ".inside" ).html("Loading...");});
    $(document).ajaxComplete(function(){$("#wait").css("display", "none");});
	
	
	/*----------------------------------- Content (loaded externally) -----------------------------------*/
	$.ajaxSetup ({cache: false});
	$('.menEdu').click(function() {$( ".inside" ).load( "../content/content.html #education");	$('.featured').toggle();});
	$('.menTechSkills').click(function() {$( ".inside" ).load( "../content/content.html #techskills");	$('.featured').toggle();});	
	$('.menWorkExp').click(function() {$( ".inside" ).load( "../content/content.html #workexp");	$('.featured').toggle();});
	$('.menProj').click(function() {$( ".inside" ).load( "../content/content.html #proj");	$('.featured').toggle();});
	$('.menCovLet').click(function() {$( ".inside" ).load( "../content/content.html #covlet");	$('.featured').toggle();});
	$('.menPerStat').click(function() {$( ".inside" ).load( "../content/content.html #perstat");	$('.featured').toggle();});
	
	
	/*----------------------------------- Simple Transition: when to be closed -----------------------------------*/
	$('.transition').click(function() {$('.featured').toggle();});
	$('.transition_back').click(function() {$('.featured_return').toggle();});
});		
