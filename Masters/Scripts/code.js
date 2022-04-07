
async function main() {
      const x = await fetchData()
      console.log(x)
      var temp = document.getElementsByTagName("template")[0];
      x.map(obj => {
            var clone = temp.content.cloneNode(true);
            var div = clone.querySelectorAll("div");
            div[0].textContent = obj.Rank;
            div[1].textContent = obj.Team;
            div[2].textContent = obj.Earnings;
            div[3].textContent = obj.Golfer1;
            div[4].textContent = obj.Golfer2;
            div[5].textContent = obj.Golfer3;
            div[6].textContent = obj.Golfer4;
            div[7].textContent = obj.Golfer5;
            div[8].textContent = obj.Golfer6;
            div[9].textContent = obj.Golfer7;
            div[10].textContent = obj.Golfer8;
            div[11].textContent = obj.Golfer9;
            div[12].textContent = obj.Golfer10;
            div[13].textContent = obj.Golfer11;
            div[14].textContent = obj.Golfer12;
            document.getElementById("leaderboard").appendChild(clone);
      })
}



function fetchData() {
      const x = fetch("https://opensheet.elk.sh/1NJZbWIvFYCTIt98BdxOZK1Z43XEOvqU6zqST_KJeJh0/1").then(res => res.json())
      return x
}
main();