//var awesomeThoughts = "I am awesome";
//[string].replace([old],[new])
//awesomeThoughts.replace("awesome", "wonderful");
//$("#main").append(awesomeThoughts);


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
"biopic": "images/fry.jpg";
//"display": function() {

//}
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);


//var skills =
//["programming", "JavaScript", "JQuery"];
//$("#main").append(skills);

//$("#main").append(skills[0]);
//var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts);
//$("#topContacts").append(formattedContact);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

//var formattedBlog = HTMLblog.replace("%data%", bio.blog);
//$("#topContacts").append(formattedBlog);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);


//var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
//$("#topContacts").append(formattedbioPic);

//var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMsg);
//$("#topContacts").append(formattedWelcomeMsg);

//var formattedskillsStart = HTMLskillsStart.replace("%data%", bio.skills);
//$("#topContacts").append(formattedskillsStart);

//var formattedskills = HTMLskills.replace("%data%", bio.skills);
//$("#topContacts").append(formattedskills);






