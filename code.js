// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1RDPMwBI77W_z9CvI2nVG6kTc6Q9J6vYrcE5boD-RiVE/edit#gid=0';
var i;
var textID;

for (i = 1; i < 17; i++) {
  // Load an entire worksheet.
  $('#teamName'+i).sheetrock({
    url: mySpreadsheet,
    query: "select A where B = " + i,
    callback: function (error, options, response) {
      console.log(error, options, response);
    }
  });
}
