$('document').ready(function(){	
	var colorEducation = true;
	$('.toggleEducation').click(function() {
		$('.education').toggle();
		
		if(colorEducation == true) {
			$('.toggleEducation').css("color", "green");
			$('.toggleEducation').html('Education <sup>(active)</sup>');
			colorEducation = false;
		} else {
			$('.toggleEducation').css("color", "rgba(238, 46, 100, 1)");
			$('.toggleEducation').html('Education');
			colorEducation = true;
		}
	});
	
	var colorTechSkills = true;
	$('.toggleTechSkills').click(function() {
		$('.techSkills').toggle();
		
		if(colorTechSkills == true) {
			$('.toggleTechSkills').css("color", "green");
			$('.toggleTechSkills').html('Technical Skills <sup>(active)</sup>');
			colorTechSkills = false;
		} else {
			$('.toggleTechSkills').css("color", "rgba(238, 46, 100, 1)");
			$('.toggleTechSkills').html('Technical Skills');
			colorTechSkills = true;
		}
	});
	
	var colorWorkExperience = true;
	$('.toggleWorkExperience').click(function() {
		$('.workExperience').toggle();
		
		if(colorWorkExperience == true) {
			$('.toggleWorkExperience').css("color", "green");
			$('.toggleWorkExperience').html('Work Experience <sup>(active)</sup>');
			colorWorkExperience = false;
		} else {
			$('.toggleWorkExperience').css("color", "rgba(238, 46, 100, 1)");
			$('.toggleWorkExperience').html('Work Experience');
			colorWorkExperience = true;
		}
	});
	
	var colorProjects = true;
	$('.toggleProjects').click(function() {
		$('.projects').toggle();
		
		if(colorProjects == true) {
			$('.toggleProjects').css("color", "green");
			$('.toggleProjects').html('Projects <sup>(active)</sup>');
			colorProjects = false;
		} else {
			$('.toggleProjects').css("color", "rgba(238, 46, 100, 1)");
			$('.toggleProjects').html('Projects');
			colorProjects = true;
		}
	});
	
	var colorCoverLetter = true;
	$('.toggleCoverLetter').click(function() {
		$('.coverLetter').toggle();
		
		if(colorCoverLetter == true) {
			$('.toggleCoverLetter').css("color", "green");
			$('.toggleCoverLetter').html('Cover Letter <sup>(active)</sup>');
			colorCoverLetter = false;
		} else {
			$('.toggleCoverLetter').css("color", "rgba(238, 46, 100, 1)");
			$('.toggleCoverLetter').html('Cover Letter');
			colorCoverLetter = true;
		}
	});
	
	var colorPersonalStatement = true;
	$('.togglePersonalStatement').click(function() {
		$('.personalStatement').toggle();
		
		if(colorPersonalStatement == true) {
			$('.togglePersonalStatement').css("color", "green");
			$('.togglePersonalStatement').html('Personal Statement <sup>(active)</sup>');
			colorPersonalStatement = false;
		} else {
			$('.togglePersonalStatement').css("color", "rgba(238, 46, 100, 1)");
			$('.togglePersonalStatement').html('Personal Statement');
			colorPersonalStatement = true;
		}
	});
});