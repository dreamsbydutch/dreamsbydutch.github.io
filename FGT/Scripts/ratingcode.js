var mySpreadsheetRatings = 'https://docs.google.com/spreadsheets/d/1LyloFyLI-YsPZnAWbmeh6l4KbhMUb1bqHm9Y47-fZOw/edit#gid=1481979688';
var ratingsTemplate = Handlebars.compile($('#ratings-pgcrank-template').html());

$('#ratings-pgcrank').sheetrock({
  url: mySpreadsheetRatings,
  query: "select A,B,C,D,E,F,G,H,I order by A asc",
  rowTemplate: ratingsTemplate
});

$('#ratings-owgr').sheetrock({
  url: mySpreadsheetRatings,
  query: "select A,B,C,D,E,F,G,H,I order by D asc",
  rowTemplate: ratingsTemplate
});

$('#ratings-fedex').sheetrock({
  url: mySpreadsheetRatings,
  query: "select A,B,C,D,E,F,G,H,I order by F asc",
  rowTemplate: ratingsTemplate
});

$('#ratings-strokesgain').sheetrock({
  url: mySpreadsheetRatings,
  query: "select A,B,C,D,E,F,G,H,I order by H asc",
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
