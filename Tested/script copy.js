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
	var colorEducation = true;
	$('.colorEdu').click(function() {
		$( ".inside_edu" ).load( "content/education.html");
		$('.education').toggle();
		
		if(colorEducation == true) {
			$('.colorEdu').html('<li class="modifications" type="disc">Education</li>');
			colorEducation = false;
		} else {
			$('.colorEdu').html('<li class="modifications">Education</li>');
			colorEducation = true;
		}
	});
	
	var colorTechSkills = true;
	$('.colorTechSkills').click(function() {		
		$( ".inside_techskills" ).load( "content/techskills.html");
		$('.techSkills').toggle();
		
		if(colorTechSkills == true) {
			$('.colorTechSkills').html('<li class="modifications" type="disc">Technical Skills</li>');
			colorTechSkills = false;
		} else {
			$('.colorTechSkills').html('<li class="modifications">Technical Skills</li>');
			colorTechSkills = true;
		}
	});
	
	var colorWorkExperience = true;
	$('.colorWorkExperience').click(function() {
		$( ".inside_workexp" ).load( "content/workexp.html");
		$('.workExperience').toggle();
		
		if(colorWorkExperience == true) {
			$('.colorWorkExperience').html('<li class="modifications" type="disc">Work Experience</li>');
			colorWorkExperience = false;
		} else {
			$('.colorWorkExperience').html('<li class="modifications">Work Experience</li>');
			colorWorkExperience = true;
		}
	});
	
	var colorProjects = true;
	$('.colorProjects').click(function() {
		$( ".inside_proj" ).load( "content/proj.html");
		$('.projects').toggle();
		
		if(colorProjects == true) {
			$('.colorProjects').html('<li class="modifications" type="disc">Projects</li>');
			colorProjects = false;
		} else {
			$('.colorProjects').html('<li class="modifications">Projects</li>');
			colorProjects = true;
		}
	});
	
	var colorCoverLetter = true;
	$('.colorCoverLetter').click(function() {		
		$( ".inside_covlet" ).load( "content/covlet.html");
		$('.coverLetter').toggle();
		
		if(colorCoverLetter == true) {
			$('.colorCoverLetter').html('<li class="modifications" type="disc">Cover Letter</li>');
			colorCoverLetter = false;
		} else {
			$('.colorCoverLetter').html('<li class="modifications">Cover Letter</li>');
			colorCoverLetter = true;
		}
	});
	
	var colorPersonalStatement = true;
	$('.colorPersonalStatement').click(function() {
		$( ".inside_perstat" ).load( "content/perstat.html");
		$('.personalStatement').toggle();
		
		if(colorPersonalStatement == true) {
			$('.colorPersonalStatement').html('<li class="modifications" type="disc">Personal Statement</li>');
			colorPersonalStatement = false;
		} else {
			$('.colorPersonalStatement').html('<li class="modifications">Personal Statement</li>');
			colorPersonalStatement = true;
		}
	});
});