/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio = {

	"name": "Warren Adams",
	"role": "Web developer",
	"contacts": {
		"mobile": "289-388-8460",
		"email": "warren.e.adams@gmail.com",
		"github": "WarrenAdams",
		"twitter": "N/A",
		"location": "Toronto,Ontario"
	},
	"biopic": "https://s-media-cache-ak0.pinimg.com/236x/e8/55/b1/e855b1e6487c88393d8d2c6d54aabec7.jpg",
	"welcomemessage": "welcome to my resume",
	"skills": ["JavaScript", "HTML", "CSS", "Problem solving"]
};

var work = {
  "jobs":[
    {
      "employer": "Wal-Mart",
      "title": "Front-End Associate",
      "dates": "Sept 2012 - current",
      "description": "- Ensure excellent customer service by maintaining store maintenance and cleanliness standards in a safe and efficient manner.<br>- Consistently demonstrate and exceeds the expected service standards during internal and external customer interactions while executing client requests in a professional manner.<br>- Build effective relationships with internal and external customers and employees to achieve individual and organizational sales goals and objectives.<br>- Consistently demonstrates the behavioral competencies of accuracy and thoroughness, teamwork and results focus.<br>- First point of contact for welcoming clients and guests at reception and escorting them to the appropriate location as required.<br>- Respond to queries and redirect other requests as appropriate.<br>- Verify receipts to the merchandise purchased by customers when completing client request including but not limited to painting, small repairs and weed trimming as needed.",
      "location": "Pickering,Ontario"
    },
    {
      "employer": "Elections Canada",
      "title": "Deputy Returning Officer (DRO)",
      "dates": "October 2011",
      "description": "- Ensured that voting proceeds in an orderly fashion while ensuring that confidentiality is maintained.<br>- Responsible for setting up and disassembling the assigned poll and assisting the Supervising Deputy Returning Officer with the overall set up of the multiple polls.<br>- Processing and issue ballots to electors eligible to vote at the poll.<br>- Completed all paperwork for the polling station including balancing the results and returning all materials to the returning office as directed by the Returning Officer.",
      "location": "Whitby,Ontario"
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "University of Ontario Institute of Technology",
      "location":"Oshawa,Ontario",
      "degree":"Commerce",
      "major":["General Business"],
      "dates": 2015,
      "url": "www.uoit.ca/"
    }
  ],
  "onlineCourses" : [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school" : "Udacity",
      "dates" : "June 2016",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Portfolio website",
      "dates": "2016",
      "description": "I was provided with a design mockup as a PDF-file and i was tasked to replicate that design in HTML and CSS. The site i developed was responsive that displayed images, descriptions and links to each of the portfolio projects that i will complete throughout the course of the Front-End Web Developer Nanodegree.",
      "images":[
        "https://avatars3.githubusercontent.com/u/1916665?v=3&s=400"
      ]
    }
  ]
};


bio.display = function(){

  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomemessage);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedBiopic);
  $("#header").append(formattedWelcomeMsg);

  displayContacts("#topContacts");

  if(bio.skills.length > 0){
   $("#header").append(HTMLskillsStart);
   var formattedSkill;
   bio.skills.forEach(function(val){
     formattedSkill = HTMLskills.replace("%data%", val);
     $("#skills").append(formattedSkill);
   });
  }
}


function displayContacts(location){
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);

  $(location).append(formattedMobile);
  $(location).append(formattedEmail);
  $(location).append(formattedTwitter);
  $(location).append(formattedGithub);
}


work.display = function() {
  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}


projects.display = function(){
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);

    var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
    $(".project-entry:last").append(formattedProjectImage);
  }
}


education.display = function(){
  for(school in education.schools){
    $("#education").append(HTMLschoolStart);

    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolDegree = formattedSchool + formattedDegree;

    $(".education-entry:last").append(formattedSchoolDegree);

    var formattedSchoolDate = HTMLschoolDates.replace("%data%",education.schools[school].dates);

    $(".education-entry:last").append(formattedSchoolDate);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);

    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);

    $(".education-entry:last").append(formattedSchoolMajor);

  }
  for(course in education.onlineCourses){
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;

    $(".education-entry:last").append(formattedTitleSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedOnlineDates);

    var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedOnlineUrl);
  }
}

function displayMap(){
  $("#mapDiv").append(googleMap);
}

bio.display();
work.display();
projects.display();
education.display();
displayContacts("#footerContacts");
displayMap();
