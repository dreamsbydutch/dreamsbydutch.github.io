// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1RDPMwBI77W_z9CvI2nVG6kTc6Q9J6vYrcE5boD-RiVE/edit#gid=0';
var standingTemplate = Handlebars.compile($('#standing-template').html());
var standingTemplateWild = Handlebars.compile($('#standing-template-wc').html());

$('#standings-table-sv').sheetrock({
      url: mySpreadsheet,
      query: "select D,E,F,G,H,O,Q,R where F = 'SV' order by O asc",
      rowTemplate: standingTemplate
});

$('#standings-table-hh').sheetrock({
      url: mySpreadsheet,
      query: "select D,E,F,G,H,O,Q,R where F = 'HH' order by O asc",
      rowTemplate: standingTemplate
});

$('#standings-table-wc').sheetrock({
      url: mySpreadsheet,
      query: "select D,E,F,G,H,P,Q,R where P > 0 order by P asc",
      rowTemplate: standingTemplateWild
});

Handlebars.registerHelper('confTextColour', function confTextColour(conf) {
      if (conf === "HH") {
            return '#77261c';
      } else if (conf === "SV") {
            return '#1a4c83';
      } else {
            return '#222';
      }
});
