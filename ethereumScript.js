const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		let json = JSON.parse(this.responseText);
		let coins = json.data.coins;
		console.log(coins);

		let info = "";
   for(var i = 0; i < 1; i++) {
   let data = `<div id = "infoDisplay">
    <ul class="list-group">
      <li class="list-group-item">Name of Currency : ${coins[1].name}</li>
      <li class="list-group-item list-group-item-secondary">Symbol of Currency : ${coins[1].symbol}</li>
      <li class="list-group-item">Market Capitalization of Currency : ${coins[1].marketCap} USD</li>
      <li class="list-group-item list-group-item-secondary">Price of Currency : ${coins[1].price} USD</li>
      <li class="list-group-item">Change in Price : ${coins[1].change} %</li>
      <li class="list-group-item list-group-item-secondary">Low-Volume : ${coins[1].lowVolume}</li>
      <li class="list-group-item">24 hour Volume : ${coins[1]["24hVolume"]} USD</li>
    </ul>
    </div>`


  info += data;
		};

		infoDisplay.innerHTML = info;
	}

});

xhr.open("GET", "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0");
xhr.setRequestHeader("x-rapidapi-host", "coinranking1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "235fc32a56msh9cac97b50946d7dp1dde5fjsn3cfb0b04e4c3");

xhr.send(data);
