// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1t2TfGQPHl7D6LPX7aWeKG6rdVVp2mcTBGrHQX4UHqL0/edit#gid=0';
var rankingTemplate = Handlebars.compile($('#ranking-template').html());

$('#rankings-table').sheetrock({
      url: mySpreadsheet,
      query: "select B,C,D,E,M,N,O,P,Q,U,W,AB,AC order by P desc",
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

function showTeam(rank) {
      var x = document.getElementById("slot-" + rank + "-extras");
      if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
      } else {
            x.className = x.className.replace(" w3-show", "");
      }
}

function openSidebar() {
      document.getElementById("mySidebar").style.display = "block";
}

function closeSidebar() {
      document.getElementById("mySidebar").style.display = "none";
}