var mySpreadsheetDraftboard = 'https://docs.google.com/spreadsheets/d/1dxStC3BMhy1ZpiG8Tr5wIkPpZ-Tm0YNYeqjd2PbG5D0/edit#gid=306525779';
var draftboardHeaderTemplate = Handlebars.compile($('#draftboard-header-template').html());
var draftboardTemplate = Handlebars.compile($('#draftboard-template').html());

$('#draftboard-header').sheetrock({
      url: mySpreadsheetDraftboard,
      query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q where A = 0 order by A asc",
      rowTemplate: draftboardHeaderTemplate
});

$('#draftboard-listing').sheetrock({
      url: mySpreadsheetDraftboard,
      query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q where A > 0 order by A asc",
      rowTemplate: draftboardTemplate
});

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