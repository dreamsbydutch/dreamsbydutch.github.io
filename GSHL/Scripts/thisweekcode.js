// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1GNYs0bH1wOSqrZEAlH9LtCTlcZ6ruMPrrq15umFAiMQ/edit#gid=1368254096';
var standingTemplate = Handlebars.compile($('#matchups-template').html());

$('#matchups').sheetrock({
      url: mySpreadsheet,
      query: "select B,C,J,K,L,O,AA,AB,AC,AD,AE,AF,AG,AH,AI,AL,AX,AY,AZ,BA,BB,BC,BD where C = 'TW' order by B asc",
      rowTemplate: standingTemplate
});


function openSidebar() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
  }
