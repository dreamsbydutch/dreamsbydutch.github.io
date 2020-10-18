// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1RDPMwBI77W_z9CvI2nVG6kTc6Q9J6vYrcE5boD-RiVE/edit#gid=0';
var rankingTemplate = Handlebars.compile($('#ranking-template').html());

$('#rankings-table').sheetrock({
      url: mySpreadsheet,
      query: "select A,B,C,D,E,F,H,I,P,R order by A asc",
      rowTemplate: rankingTemplate
});

Handlebars.registerHelper('dynamicRankChange', function dynamicRankChange(change) {
      var i = parseInt(change);
      if (i > 0) {
            return '#006700';
      } else if (i < 0) {
            return '#9a0000';
      } else {
            return '#222';
      }
});
