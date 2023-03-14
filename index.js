const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

let query = document.getElementById("mySearch");
let button = document.getElementById("sb");
var str = "";
function noteFun() {
  console.log(query.value);
}
function searchFun() {
  str += query.value;
  console.log(str);
  searchCoin(str);
}
query.addEventListener("keyup", noteFun);
button.addEventListener("click", searchFun);
query.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        str += query.value;
        console.log(str);
        searchCoin(str);
    }
});
let coins = [];
var queryFound = false;
xhr.addEventListener("readystatechange", function () {
if (this.readyState === this.DONE) {
  let json = JSON.parse(this.responseText);
  coins = json.data.coins;
  console.log(coins); 
  }
});

function searchCoin(searchQuery) {
  let info = "";
  for(var i = 0; i < 50; i++) {
    if(coins[i].name.toLowerCase() === searchQuery.toLowerCase() || coins[i].symbol.toLowerCase() === searchQuery.toLowerCase()) {
      queryFound = true;
      let data = `<div id = "infoCard">
        <ul class="list-group">
          <li class="list-group-item">Name of Currency : ${coins[i].name}</li>
          <li class="list-group-item list-group-item-secondary">Symbol of Currency : ${coins[i].symbol}</li>
          <li class="list-group-item">Market Capitalization of Currency : ${coins[i].marketCap} USD</li>
          <li class="list-group-item list-group-item-secondary">Price of Currency : ${coins[i].price} USD</li>
          <li class="list-group-item">Change in Price : ${coins[i].change} %</li>
          <li class="list-group-item list-group-item-secondary">Low-Volume : ${coins[i].lowVolume}</li>
          <li class="list-group-item">24hVolume : ${coins[i]["24hVolume"]}</li>
        </ul>
        </div>
        <br>
        <div class = "text-center">
        <a class="btn btn-primary" href="index.html" role="button">Reset</a>
        </div>`


  info += data;
    }
    infoCard.innerHTML = info;
  };
  if(queryFound === false) {
    console.log("Query Not Found!");
    let info = "";
    let data = `<div class="alert alert-danger" role="alert">
  No data found! Enter a valid currency.
</div>
<br>
<div class = "text-center">
<a class="btn btn-primary" href="index.html" role="button">Reset</a>
</div>`
info += data;
infoCard.innerHTML = info;
  }
}

xhr.open("GET", "https://rahul-joshi2002.github.io/Project-CryptoGURU/https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0");
xhr.setRequestHeader("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");
xhr.setRequestHeader("X-RapidAPI-Key", "235fc32a56msh9cac97b50946d7dp1dde5fjsn3cfb0b04e4c3");

xhr.send(data);
