// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1RDPMwBI77W_z9CvI2nVG6kTc6Q9J6vYrcE5boD-RiVE/edit#gid=0';
var standingTemplate = Handlebars.compile($('#standing-template').html());

$('#standings-table-sv').sheetrock({
      url: mySpreadsheet,
      query: "select D,E,F,G,H,O,Q,R where F = 'SV' order by Q desc",
      rowTemplate: standingTemplate
});
