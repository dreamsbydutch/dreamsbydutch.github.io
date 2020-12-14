var mySpreadsheetDraftdayrankings = 'https://docs.google.com/spreadsheets/d/1RDPMwBI77W_z9CvI2nVG6kTc6Q9J6vYrcE5boD-RiVE/edit#gid=331802598';
var draftdayRankingsTemplate = Handlebars.compile($('#draftday-rankings-overall-template').html());

$('#draftday-rankings-overall').sheetrock({
    url: mySpreadsheetDraftdayrankings,
    query: "select A,B,C,D,V,W order by A asc",
    rowTemplate: draftdayRankingsTemplate
});

$('#draftday-rankings-center').sheetrock({
    url: mySpreadsheetDraftdayrankings,
    query: "select A,B,C,D,V,W where contains(D,'C') order by A asc",
    rowTemplate: draftdayRankingsTemplate
});

$('#draftday-rankings-leftwing').sheetrock({
    url: mySpreadsheetDraftdayrankings,
    query: "select A,B,C,D,V,W where D = 'LW' order by A asc",
    rowTemplate: draftdayRankingsTemplate
});

$('#draftday-rankings-rightwing').sheetrock({
    url: mySpreadsheetDraftdayrankings,
    query: "select A,B,C,D,V,W where D = 'RW' order by A asc",
    rowTemplate: draftdayRankingsTemplate
});

$('#draftday-rankings-defense').sheetrock({
    url: mySpreadsheetDraftdayrankings,
    query: "select A,B,C,D,V,W where D = 'D' order by A asc",
    rowTemplate: draftdayRankingsTemplate
});

$('#draftday-rankings-goalies').sheetrock({
    url: mySpreadsheetDraftdayrankings,
    query: "select A,B,C,D,V,W where D = 'G' order by A asc",
    rowTemplate: draftdayRankingsTemplate
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