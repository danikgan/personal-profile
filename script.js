$('document').ready(function(){	
	/*----------------------------------- Loading -----------------------------------*/
    $(document).ajaxStart(function(){$("#wait").css("display", "block");	$( ".inside" ).html("");});
    $(document).ajaxComplete(function(){$("#wait").css("display", "none");});
	
	
	/*----------------------------------- Content for Smaller Version (loaded externally) -----------------------------------*/
	$.ajaxSetup ({cache: false});
	$('.menPerInfo').click(function() {$( ".inside" ).load( "content/perinfo.html");	$('.featured').toggle();});
	$('.menSum').click(function() {$( ".inside" ).load( "content/summary.html");	$('.featured').toggle();});
	$('.menEdu').click(function() {$( ".inside" ).load( "content/education.html");	$('.featured').toggle();});
	$('.menTechSkills').click(function() {$( ".inside" ).load( "content/techskills.html");	$('.featured').toggle();});	
	$('.menWorkExp').click(function() {$( ".inside" ).load( "content/workexp.html");	$('.featured').toggle();});
	$('.menProj').click(function() {$( ".inside" ).load( "content/proj.html");	$('.featured').toggle();});
	$('.menCovLet').click(function() {$( ".inside" ).load( "content/covlet.html");	$('.featured').toggle();});
	$('.menPerStat').click(function() {$( ".inside" ).load( "content/perstat.html");	$('.featured').toggle();});
	
	
	/*----------------------------------- Simple Transition: when to be closed -----------------------------------*/
	$('.transition').click(function() {$('.featured').toggle();});
	
	
	
	
	
	/*----------------------------------- Content for Larger Version (loaded externally) -----------------------------------*/
	var colorPersonalInfo = true;
	$( ".inside_perinfo" ).load( "content/perinfo.html");
	$('.menPerInfo').click(function() {
		$('.personalinfo').toggle();
		
		if(colorPersonalInfo == true) {
			$(".colorChange_perinfo").css("background", "rgba(0, 255, 255, 0.1)");
			colorPersonalInfo = false;
		} else {
			$(".colorChange_perinfo").css("background", "rgba(255, 0, 255, 0.1)");
			colorPersonalInfo = true;
		}
	});
	
	var colorSummary = true;
	$( ".inside_sum" ).load( "content/summary.html");
	$('.menSum').click(function() {
		$('.summary').toggle();
		
		if(colorSummary == true) {
			$(".colorChange_sum").css("background", "rgba(0, 255, 255, 0.1)");
			colorSummary = false;
		} else {
			$(".colorChange_sum").css("background", "rgba(255, 0, 255, 0.1)");
			colorSummary = true;
		}
	});
	
	var colorEducation = true;
	$('.menEdu').click(function() {
		$( ".inside_edu" ).load( "content/education.html");
		$('.education').toggle();
		
		if(colorEducation == true) {
			$(".colorChange_edu").css("background", "rgba(255, 0, 255, 0.1)");
			colorEducation = false;
		} else {
			$(".colorChange_edu").css("background", "rgba(0, 0, 255, 0.1)");
			colorEducation = true;
		}
	});
	
	var colorTechSkills = true;
	$('.menTechSkills').click(function() {		
		$( ".inside_techskills" ).load( "content/techskills.html");
		$('.techSkills').toggle();
		
		if(colorTechSkills == true) {
			$(".colorChange_techskills").css("background", "rgba(255, 0, 255, 0.1)");
			colorTechSkills = false;
		} else {
			$(".colorChange_techskills").css("background", "rgba(0, 0, 255, 0.1)");
			colorTechSkills = true;
		}
	});
	
	var colorWorkExperience = true;
	$('.menWorkExp').click(function() {
		$( ".inside_workexp" ).load( "content/workexp.html");
		$('.workExperience').toggle();
		
		if(colorWorkExperience == true) {
			$(".colorChange_workexp").css("background", "rgba(255, 0, 255, 0.1)");
			colorWorkExperience = false;
		} else {
			$(".colorChange_workexp").css("background", "rgba(0, 0, 255, 0.1)");
			colorWorkExperience = true;
		}
	});
	
	var colorProjects = true;
	$('.menProj').click(function() {
		$( ".inside_proj" ).load( "content/proj.html");
		$('.projects').toggle();
		
		if(colorProjects == true) {
			$(".colorChange_proj").css("background", "rgba(255, 0, 255, 0.1)");
			colorProjects = false;
		} else {
			$(".colorChange_proj").css("background", "rgba(0, 0, 255, 0.1)");
			colorProjects = true;
		}
	});
	
	var colorCoverLetter = true;
	$('.menCovLet').click(function() {		
		$( ".inside_covlet" ).load( "content/covlet.html");
		$('.coverLetter').toggle();
		
		if(colorCoverLetter == true) {
			$(".colorChange_covlet").css("background", "rgba(255, 0, 255, 0.1)");
			colorCoverLetter = false;
		} else {
			$(".colorChange_covlet").css("background", "rgba(255, 0, 0, 0.1)");
			colorCoverLetter = true;
		}
	});
	
	var colorPersonalStatement = true;
	$('.menPerStat').click(function() {
		$( ".inside_perstat" ).load( "content/perstat.html");
		$('.personalStatement').toggle();
		
		if(colorPersonalStatement == true) {
			$(".colorChange_perstat").css("background", "rgba(255, 0, 255, 0.1)");
			colorPersonalStatement = false;
		} else {
			$(".colorChange_perstat").css("background", "rgba(255, 0, 0, 0.1)");
			colorPersonalStatement = true;
		}
	});
});