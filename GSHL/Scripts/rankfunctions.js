function showTeam(rank) {
    document.getElementById("slot-"+rank).style.gridtemplaterows = "3%, 2%";
    document.getElementById("slot-"+rank).getElementsByClassName("team-bestplayer").style.visibility ="show";
    document.getElementById("slot-"+rank).getElementsByClassName("team-lastweek").style.visibility ="show";
    document.getElementById("slot-"+rank).getElementsByClassName("team-streak").style.visibility ="show";
}
