$('document').ready(function(){	
	var colorEducation = true;
	$('.toggleEducation').click(function() {
		$('.education').toggle();
		
		if(colorEducation == true) {
			$('.toggleEducation').css("color", "green");
			$('.toggleEducation').html('Education <img src="files/activeState.svg" class="activeState">');
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
			$('.toggleTechSkills').html('Technical Skills <img src="files/activeState.svg" class="activeState">');
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
			$('.toggleWorkExperience').html('Work Experience <img src="files/activeState.svg" class="activeState">');
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
			$('.toggleProjects').html('Projects <img src="files/activeState.svg" class="activeState">');
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
			$('.toggleCoverLetter').html('Cover Letter <img src="files/activeState.svg" class="activeState">');
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
			$('.togglePersonalStatement').html('Personal Statement <img src="files/activeState.svg" class="activeState">');
			colorPersonalStatement = false;
		} else {
			$('.togglePersonalStatement').css("color", "rgba(238, 46, 100, 1)");
			$('.togglePersonalStatement').html('Personal Statement');
			colorPersonalStatement = true;
		}
	});
});