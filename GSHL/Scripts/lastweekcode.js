// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1GNYs0bH1wOSqrZEAlH9LtCTlcZ6ruMPrrq15umFAiMQ/edit#gid=1368254096';
var standingTemplate = Handlebars.compile($('#matchups-template').html());

$('#matchups').sheetrock({
      url: mySpreadsheet,
      query: "select B,C,D,E,F,G,H,I,J,K,L,M,N,P,Q,R,S,T,U,V,W,X,Y,AG,AH,AI,AJ,AK,AM,AN,AO,AP,AQ,AR,AS,AT,AU,AV,BD,BE,BF,BG,BH,BI,BJ,BK,BL,BM,BN,BO,BP,BQ,BR,BS,BT,BU,BV,BW where C = 'LW' order by B asc",
      rowTemplate: standingTemplate
});

Handlebars.registerHelper('catWinner', function catWinner(winvar) {
  if (winvar) {
        return 'color:#059d0a;font-weight:bold;';
  } else {
        return '#222';
  }
});

function openSidebar() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
  }
