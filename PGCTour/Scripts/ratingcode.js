var mySpreadsheetRatings = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=1481979688';
var ratingsTemplate = Handlebars.compile($('#ratings-pgcrank-template').html());
var owgrTemplate = Handlebars.compile($('#ratings-owgr-template').html());

$('#ratings-pgcrank').sheetrock({
  url: mySpreadsheetRatings,
  query: "select A,B,C,J where B!='' order by A asc",
  rowTemplate: ratingsTemplate
});

$('#ratings-owgr').sheetrock({
  url: mySpreadsheetRatings,
  query: "select B,C,D,J where B!='' and D>0 order by D asc",
  rowTemplate: owgrTemplate
});

$('#ratings-fedex').sheetrock({
  url: mySpreadsheetRatings,
  query: "select B,C,F,J where B!='' and F>0 order by F asc",
  rowTemplate: owgrTemplate
});

$('#ratings-strokesgain').sheetrock({
  url: mySpreadsheetRatings,
  query: "select B,C,H,J where B!='' and H>0 order by H asc",
  rowTemplate: owgrTemplate
});

$('#ratings-field').sheetrock({
  url: mySpreadsheetRatings,
  query: "select A,B,C,J where J='Y' order by A asc",
  rowTemplate: ratingsTemplate
});

function openCity(positionId) {
  var i;
  var x = document.getElementsByClassName("tab-listing");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(positionId).style.display = "block";  
}

function openSidebar() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
  }
