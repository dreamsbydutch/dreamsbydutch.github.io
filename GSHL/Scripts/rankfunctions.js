function showTeam(rank) {
    document.getElementById("slot-"+rank).style.gridtemplaterows = "3%, 2%";
    document.getElementsByClassName("show-slot-"+rank).style.visibility = "show";
}
