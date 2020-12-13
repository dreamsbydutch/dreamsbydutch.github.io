var mySpreadsheetDraftdayrankings = 'https://docs.google.com/spreadsheets/d/1dxStC3BMhy1ZpiG8Tr5wIkPpZ-Tm0YNYeqjd2PbG5D0/edit#gid=1005494927';
var draftdayRankingsTemplate = Handlebars.compile($('#draftday-rankings-overall-template').html());

$('#draftday-rankings-overall').sheetrock({
    url: mySpreadsheetDraftdayrankings,
    query: "select A,B,C,D,E,F,G,H,I order by A asc",
    rowTemplate: draftdayRankingsTemplate
});

$('#draftday-rankings-center').sheetrock({
    url: mySpreadsheetDraftdayrankings,
    query: "select A,B,C,D,E,F,G,H,I where H = 'C' order by A asc",
    rowTemplate: draftdayRankingsTemplate
});

$('#draftday-rankings-leftwing').sheetrock({
    url: mySpreadsheetDraftdayrankings,
    query: "select A,B,C,D,E,F,G,H,I where H = 'LW' order by A asc",
    rowTemplate: draftdayRankingsTemplate
});

$('#draftday-rankings-rightwing').sheetrock({
    url: mySpreadsheetDraftdayrankings,
    query: "select A,B,C,D,E,F,G,H,I where H = 'RW' order by A asc",
    rowTemplate: draftdayRankingsTemplate
});

$('#draftday-rankings-defense').sheetrock({
    url: mySpreadsheetDraftdayrankings,
    query: "select A,B,C,D,E,F,G,H,I where H = 'D' order by A asc",
    rowTemplate: draftdayRankingsTemplate
});

$('#draftday-rankings-goalies').sheetrock({
    url: mySpreadsheetDraftdayrankings,
    query: "select A,B,C,D,E,F,G,H,I where H = 'G' order by A asc",
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