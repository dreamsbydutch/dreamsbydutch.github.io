var mySpreadsheetDraftdayrankings = 'https://docs.google.com/spreadsheets/d/1GNYs0bH1wOSqrZEAlH9LtCTlcZ6ruMPrrq15umFAiMQ/edit#gid=381702375';
var draftdayRankingsTemplate = Handlebars.compile($('#draftday-rankings-overall-template').html());

$('#draftday-rankings-overall').sheetrock({
  url: mySpreadsheetDraftdayrankings,
  query: "select A,B,C,D,E,F,O order by O asc",
  rowTemplate: draftdayRankingsTemplate
});

$('#draftday-rankings-center').sheetrock({
  url: mySpreadsheetDraftdayrankings,
  query: "select A,B,C,D,E,F,O where D contains 'C' order by O asc",
  rowTemplate: draftdayRankingsTemplate
});

$('#draftday-rankings-leftwing').sheetrock({
  url: mySpreadsheetDraftdayrankings,
  query: "select A,B,C,D,E,F,O where D contains 'LW' order by O asc",
  rowTemplate: draftdayRankingsTemplate
});

$('#draftday-rankings-rightwing').sheetrock({
  url: mySpreadsheetDraftdayrankings,
  query: "select A,B,C,D,E,F,O where D contains 'RW' order by O asc",
  rowTemplate: draftdayRankingsTemplate
});

$('#draftday-rankings-defense').sheetrock({
  url: mySpreadsheetDraftdayrankings,
  query: "select A,B,C,D,E,F,O where D contains 'D' order by O asc",
  rowTemplate: draftdayRankingsTemplate
});

$('#draftday-rankings-goalies').sheetrock({
  url: mySpreadsheetDraftdayrankings,
  query: "select A,B,C,D,E,F,O where D contains 'G' order by O asc",
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