$('document').ready(function(){	
	var colorEducation = true;
	$('.toggleEducation').click(function() {
		$('.education').toggle();
		
		if(colorEducation == true) {
			$('.toggleEducation').css("color", "green");
			colorEducation = false;
		} else {
			$('.toggleEducation').css("color", "rgba(238, 46, 100, 1)");
			colorEducation = true;
		}
	});
	
	var colorTechSkills = true;
	$('.toggleTechSkills').click(function() {
		$('.techSkills').toggle();
		
		if(colorTechSkills == true) {
			$('.toggleTechSkills').css("color", "green");
			colorTechSkills = false;
		} else {
			$('.toggleTechSkills').css("color", "rgba(238, 46, 100, 1)");
			colorTechSkills = true;
		}
	});
	
	var colorWorkExperience = true;
	$('.toggleWorkExperience').click(function() {
		$('.workExperience').toggle();
		
		if(colorWorkExperience == true) {
			$('.toggleWorkExperience').css("color", "green");
			colorWorkExperience = false;
		} else {
			$('.toggleWorkExperience').css("color", "rgba(238, 46, 100, 1)");
			colorWorkExperience = true;
		}
	});
	
	var colorProjects = true;
	$('.toggleProjects').click(function() {
		$('.projects').toggle();
		
		if(colorProjects == true) {
			$('.toggleProjects').css("color", "green");
			colorProjects = false;
		} else {
			$('.toggleProjects').css("color", "rgba(238, 46, 100, 1)");
			colorProjects = true;
		}
	});
	
	var colorCoverLetter = true;
	$('.toggleCoverLetter').click(function() {
		$('.coverLetter').toggle();
		
		if(colorCoverLetter == true) {
			$('.toggleCoverLetter').css("color", "green");
			colorCoverLetter = false;
		} else {
			$('.toggleCoverLetter').css("color", "rgba(238, 46, 100, 1)");
			colorCoverLetter = true;
		}
	});
	
	var colorPersonalStatement = true;
	$('.togglePersonalStatement').click(function() {
		$('.personalStatement').toggle();
		
		if(colorPersonalStatement == true) {
			$('.togglePersonalStatement').css("color", "green");
			colorPersonalStatement = false;
		} else {
			$('.togglePersonalStatement').css("color", "rgba(238, 46, 100, 1)");
			colorPersonalStatement = true;
		}
	});
});