var mySpreadsheetDraftboardrankings = 'https://docs.google.com/spreadsheets/d/1dxStC3BMhy1ZpiG8Tr5wIkPpZ-Tm0YNYeqjd2PbG5D0/edit#gid=1005494927';
var draftboardRankingsTemplate = Handlebars.compile($('#draftboard-rankings-overall-template').html());

$('#draftboard-rankings-overall').sheetrock({
    url: mySpreadsheetDraftboardrankings,
    query: "select A,B,C,D,E,F,G,H,I where H != Y order by A asc",
    rowTemplate: draftboardRankingsTemplate
});
