// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1RDPMwBI77W_z9CvI2nVG6kTc6Q9J6vYrcE5boD-RiVE/edit#gid=0';

// Load an entire worksheet.
sheetrock({
  url: mySpreadsheet,
  query: "select A where B = '2'",
  target: document.getElementById('thirdTeamName')
});
