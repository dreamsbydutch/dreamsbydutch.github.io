var mySpreadsheetDraftboard = 'https://docs.google.com/spreadsheets/d/1dxStC3BMhy1ZpiG8Tr5wIkPpZ-Tm0YNYeqjd2PbG5D0/edit#gid=306525779';
var draftboardHeaderTemplate = Handlebars.compile($('#draftboard-header-template').html());
var draftboardTemplate = Handlebars.compile($('#draftboard-template').html());

$('#draftboard-header').sheetrock({
      url: mySpreadsheetDraftboard,
      query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q where A = 0 order by A asc",
      rowTemplate: draftboardHeaderTemplate
});

$('#draftboard').sheetrock({
      url: mySpreadsheetDraftboard,
      query: "select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q where A > 0 order by A asc",
      rowTemplate: draftboardTemplate
});