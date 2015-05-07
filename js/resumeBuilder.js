

var bio = {
	"name" : "Barbara Fergus",
	"role" : "Web Developer",
		"contacts" : {
		"mobile" : "301-346-2833",
		"email" : "barvincy@gmail.com",
		"github" : "bavincy",
		"twitter" : "@bavincy",
		"location" : "Washington DC"
	},
"welcomeMessage" : "Have more than you show, speak less than you know",
"skills": ["Programming", "Project Management","Database Design", "System Analysis"],
"biopic": "file:///Users/bvincy/Documents/portfolio/Project%202/images/fry.jpg"
};

function displayBio() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

//var formattedBlog = HTMLblog.replace("%data%", bio.blog);
//$("#header").append(formattedBlog);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedbioPic);

	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);
	$("#header").append(HTMLskillsStart);

	var formattedskills = HTMLskills.replace("%data%", bio.skills[0]);
	formattedskills += HTMLskills.replace("%data%", bio.skills[1]);
	formattedskills += HTMLskills.replace("%data%", bio.skills[2]);
	formattedskills += HTMLskills.replace("%data%", bio.skills[3]);
	$("#header").append(formattedskills);
}
displayBio();

var work = {
	"jobs": [
		{
		"employer": "U.S Dept of the Interior",
		"title": "IT Project Manager",
		"location": "Washington DC",
		"dates": "August 2008-Present",
		"description": "Coordinated with system managers nationally, to create, modify, and update systems information in EA Repository, and maintained EA artifacts. "
	},
	{
		"employer": "US Dept of Agriculture",
		"title": "IT Specialist",
		"location": "Washington DC",
		"dates": "1999-2008",
		"description": "Evaluated IT needs and presented solutions and alternatives to Business owners and engage in discussions to ensure they are satisfied with the proposed product or service."
	}
	]
};

for (var job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle=formattedEmployer + formattedLocation + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}


//--------------------projects start-------------------//
var projects = {
	"projects": [{
		"title": "Electronic Records",
		"dates": "November 2012 - Jan 2015",
		"description": ["Member of the task force to build Policy documents for Standards and Operating Policy Procedures.",
			"Update the DM-380 Manual, and update Records Management Standards and Operating Policy Procedures (Vital Records)"],
		"location": "Washington DC",
		"images": "file:///Users/bvincy/Documents/portfolio/Project%202/images/project.jpg"
	}]
}

	function displayProjects() {
		for (projt in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[projt].title);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[projt].dates);
			$(".project-entry:last").append(formattedProjectDates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[projt].description);
			$(".project-entry:last").append(formattedProjectDescription);
			//var formattedProjectLocation = HTMLprojectLocation.replace("%data%", projects.projects[projt].location);
			//$(".project-entry:last").append(formattedProjectLocation);
			if (projects.projects[projt].images.length > 0) {
				//for (image in projects.projects[projt].images) {

					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[projt].images);
					$(".project-entry:last").append(formattedProjectImage);
				//}
			}
		}
	}

displayProjects();

//--------------------projects end--------education begin------------//



var education = {
	"schools": [
		{
			"name": "University of Maryland",
			"city": "College Park, MD, US",
			"location": "College Park, MD, US",
			"degree": "BA",
			"majors": ["CMIS"],
			"date": 2000,
			"url": "www.umuc.edu"
		},
		{
			"name": "University of Maryland",
			"city": "College Park, MD, US",
			"location": "College Park, MD, US",
			"degree": "Masters",
			"majors": ["Computer Systems Management"],
			"date": 2005,
			"url": "www.umuc.edu"
		}
	],
	"onlineClasses": [
		{
			"title": "Developing Iphone Apps",
			"school": "University of Maryland",
			"date": 2014,
			"url": "http://umuc.edu"
		},
		{
			"title": "Frontend Web Developer",
			"school": "Udacity",
			"date": 2015,
			"url": "http://udacity.com"
		}
	]
}; // end of EDUCATION JSON!



//--------------------------------------education end------------//


education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("%url%", education.schools[school].url) +
    							HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:first").append(formattedSchoolName);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
    $(".education-entry:first").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedMajor);

  };

 	 $("#education").append(HTMLonlineClasses);

	for (course in education.onlineClasses) {

	var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[course].title) +
	HTMLonlineSchool.replace("%data%", education.onlineClasses[course].school);
       $("#education").append(formattedonlineTitle);

	var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineClasses[course].date);
 	$("#education").append(formattedonlineDate);

	var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[course].url);
	$("#education").append(formattedonlineURL);
	}

  };

education.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});
/**
name[0] = name[0].slice(0,1).toUpperCase() + name[0]


$("#main").append(internationalizeButton);
**/

// see the map
$("#mapDiv").append(googleMap);






