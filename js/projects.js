//--------------------work ends here-------------------//
//--------------------projects start-------------------//
var projects = {
	"projects": [{
		"title": "Assistant Store Manager",
		"dates": "November 2013 - April 2014",
		"description": ["Localize all inventory management to the confines of the inventory room to ensure that all inventory is accounted for, maintained and only accessed in the proper way.",
			"Integrate the DIRECT feedback modle into the every day vinacular and practice.", "Weekly check-in's as well as tracker to ensure every business customer is taken care of as well as managing any oppurtunities"],
		"location": "Studio City, Ca"
	}, {
		"title": "Assistant Store Manager",
		"dates": "April 2014 - Current",
		"description": ["District wide mock audit team.", "Implament TL in every location in the district as well as introduce the use of the DIRECT coaching modle.",
			"Weekly check-in's as well as tracker to ensure every business customer is taken care of as well as managing any oppurtunities"],
		"location": "New York, New York"

	}]
}

	function displayProjects() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".projects-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".projects-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".projects-entry:last").append(formattedDescription);
			var formattedLocation = HTMLprojectLocation.replace("%data%", projects.projects[project].location);
			$(".projects-entry:last").append(formattedLocation);
			if (projects.projects[project], images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", project.project[project].images[image]);
					$(".projects-entry:last").append(formattedImage);
				}
			}
		}
	}
displayProjects();

//--------------------projects end--------------------//
