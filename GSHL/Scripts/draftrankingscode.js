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

var mySpreadsheetDraftboardrankings = 'https://docs.google.com/spreadsheets/d/1dxStC3BMhy1ZpiG8Tr5wIkPpZ-Tm0YNYeqjd2PbG5D0/edit#gid=1005494927';
var draftboardRankingsTemplate = Handlebars.compile($('#draftboard-rankings-overall-template').html());

$('#draftboard-rankings-overall').sheetrock({
    url: mySpreadsheetDraftboardrankings,
    query: "select A,B,C,D,E,F,G,H,I order by A asc",
    rowTemplate: draftboardRankingsTemplate
});

$('#draftboard-rankings-center').sheetrock({
    url: mySpreadsheetDraftboardrankings,
    query: "select A,B,C,D,E,F,G,H,I where H = 'C' order by A asc",
    rowTemplate: draftboardRankingsTemplate
});

$('#draftboard-rankings-leftwing').sheetrock({
    url: mySpreadsheetDraftboardrankings,
    query: "select A,B,C,D,E,F,G,H,I where H = 'LW' order by A asc",
    rowTemplate: draftboardRankingsTemplate
});

$('#draftboard-rankings-rightwing').sheetrock({
    url: mySpreadsheetDraftboardrankings,
    query: "select A,B,C,D,E,F,G,H,I where H = 'RW' order by A asc",
    rowTemplate: draftboardRankingsTemplate
});

$('#draftboard-rankings-defense').sheetrock({
    url: mySpreadsheetDraftboardrankings,
    query: "select A,B,C,D,E,F,G,H,I where H = 'D' order by A asc",
    rowTemplate: draftboardRankingsTemplate
});

$('#draftboard-rankings-goalies').sheetrock({
    url: mySpreadsheetDraftboardrankings,
    query: "select A,B,C,D,E,F,G,H,I where H = 'G' order by A asc",
    rowTemplate: draftboardRankingsTemplate
});

function openCity(positionId) {
  var i;
  var x = document.getElementsByClassName("listing");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(positionId).style.display = "block";  
}