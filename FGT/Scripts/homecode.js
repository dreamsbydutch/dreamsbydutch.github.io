var images = ['Images/wallpaper/wallpaper1.jpg', 'Images/wallpaper/wallpaper2.jpg', 'Images/wallpaper/wallpaper3.jpg', 'Images/wallpaper/wallpaper4.jpg', 'Images/wallpaper/wallpaper5.jpg', 'Images/wallpaper/wallpaper6.jpg', 'Images/wallpaper/wallpaper7.jpg'];
$('html').css({'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + '), url(' + images[Math.floor(Math.random() * images.length)] + '), url(' + images[Math.floor(Math.random() * images.length)] + '), url(' + images[Math.floor(Math.random() * images.length)] + ')'});
$('html').css({'background-repeat': 'no-repeat, no-repeat, no-repeat, repeat'});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

var mySpreadsheetOverall = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=0';
var mySpreadsheetSchedule = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=170256726';
var mySpreadsheetWorldRank = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=119653565';
var mySpreadsheetHeadlines = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=1066263828';
var overallStandingsTemplate = Handlebars.compile($('#cup-standings-template').html());
var scheduleTemplate = Handlebars.compile($('#schedule-template').html());
var worldrankTemplate = Handlebars.compile($('#worldrank-template').html());
var headlinesTemplate = Handlebars.compile($('#headlines-template').html());

$('#standings-slots').sheetrock({
  url: mySpreadsheetOverall,
  query: "select A,B,C,D,E,F,G,H where A <= 10 order by A asc",
  rowTemplate: overallStandingsTemplate
});

$('#schedule-listing').sheetrock({
      url: mySpreadsheetSchedule,
      query: "select A,B,C,D",
      rowTemplate: scheduleTemplate
});

$('#worldrank-list').sheetrock({
  url: mySpreadsheetWorldRank,
  query: "select A,B,C,D",
  rowTemplate: worldrankTemplate
});

$('#headlines-list').sheetrock({
  url: mySpreadsheetHeadlines,
  query: "select A,B,C",
  rowTemplate: headlinesTemplate
});

Handlebars.registerHelper('rankColorChange', function rankColorChange(change) {
      var i = parseInt(change);
      if (i > 0) {
            return '#006700';
      } else if (i < 0) {
            return '#9a0000';
      } else {
            return '#222';
      }
});
