
async function main() {
      const x = await fetchData()
      console.log(x)
      var temp = document.getElementsByTagName("template")[0];
      x.map(obj => {
            var clone = temp.content.cloneNode(true);
            var div = clone.querySelectorAll("div");
            div[1].textContent = obj.rank;
            div[2].textContent = obj.teamName;
            div[3].textContent = obj.earnings;
            div[4].textContent = obj.golferOne;
            div[5].textContent = obj.golferTwo;
            div[6].textContent = obj.golferThree;
            div[7].textContent = obj.golferFour;
            div[8].textContent = obj.golferFive;
            div[9].textContent = obj.golferSix;
            div[10].textContent = obj.golferSeven;
            div[11].textContent = obj.golferEight;
            div[12].textContent = obj.golferNine;
            div[13].textContent = obj.golferTen;
            div[14].textContent = obj.golferEleven;
            div[15].textContent = obj.golferTwelve;
            document.getElementById("leaderboard").appendChild(clone);
      })
}



function fetchData() {
      const x = fetch("https://opensheet.elk.sh/1TCnrTd9Zt0b4nJjkCIKsL21nbfTU9gOnn9aSu5icMMg/4").then(res => res.json())
      return x
      
}
main();
