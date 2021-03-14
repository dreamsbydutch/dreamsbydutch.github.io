// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1t2TfGQPHl7D6LPX7aWeKG6rdVVp2mcTBGrHQX4UHqL0/edit#gid=0';
var standingTemplate = Handlebars.compile($('#standing-template').html());

$('#standings-table-sv').sheetrock({
      url: mySpreadsheet,
      query: "select B,C,D,E,H,I,M,N,O,P,Q,Y where D = 'SV' order by Y asc",
      rowTemplate: standingTemplate
});

$('#standings-table-hh').sheetrock({
      url: mySpreadsheet,
      query: "select B,C,D,E,H,I,M,N,O,P,Q,Y where D = 'HH' order by Y asc",
      rowTemplate: standingTemplate
});

$('#standings-table-wc').sheetrock({
      url: mySpreadsheet,
      query: "select A,B,C,D,E,I,K,O,Q,R,U where Q > 0 order by Q asc",
      rowTemplate: standingTemplate
});

Handlebars.registerHelper('dynamicStreakColor', function dynamicStreakColor(winLoss) {
      s = winLoss.toString();
      s = s.charAt(1);
      if (s == "W") {
            return '#006700';
      } else if (s == "L") {
            return '#9a0000';
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