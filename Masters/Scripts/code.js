
async function main() {
      const x = await fetchData()
      console.log(x)
      var temp = document.getElementsByTagName("template")[0];
      x.map(obj => {
            var clone = temp.content.cloneNode(true);
            var div = clone.querySelectorAll("div");
            div[0].textContent = obj.rank;
            div[1].textContent = obj.teamName;
            div[2].textContent = formatter.format(obj.earnings);
            div[3].textContent = obj.golferOne.replace(" (","\n(");
            div[4].textContent = obj.golferTwo;
            div[5].textContent = obj.golferThree;
            div[6].textContent = obj.golferFour;
            div[7].textContent = obj.golferFive;
            div[8].textContent = obj.golferSix;
            div[9].textContent = obj.golferSeven;
            div[10].textContent = obj.golferEight;
            div[11].textContent = obj.golferNine;
            div[12].textContent = obj.golferTen;
            div[13].textContent = obj.golferEleven;
            div[14].textContent = obj.golferTwelve;
            document.getElementById("leaderboard").appendChild(clone);
      })
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

function fetchData() {
      const x = fetch("https://opensheet.elk.sh/1TCnrTd9Zt0b4nJjkCIKsL21nbfTU9gOnn9aSu5icMMg/4").then(res => res.json())
      return x
      
}
main();
