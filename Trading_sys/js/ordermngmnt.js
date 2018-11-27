'use strict'

var timer = new Date();

var form = document.querySelector("#order_form");
var ask = document.querySelector("#ask_price");
var bid = document.querySelector("#bid_price");
var latest = document.querySelector("#latest_price");
var baseURL = 'http://localhost:8080/';
var latest = document.querySelector("#latest_price");
var pairTitle = document.querySelector("#pairTitle");
var selectPair = document.querySelector("#pairSelect");

form.addEventListener('submit', (event)=>{
	  	alert( "Handler for .submit() called." );  		
  		console.log("submit event");
});

var pair = ["EUR","ETH"];

function setPairFunction(){
	let pairSelection = selectPair.options[selectPair.selectedIndex].value;	
	pair=pairSelection.split("-");
	pairTitle.innerHTML = "Showing " + pair[0]+"-"+pair[1];
	console.log(pairTitle.innerHTML);
}

var interval = setInterval(()=>{ 
	let query = baseURL +'price?crypto='+pair[1]+'&currency='+pair[0];
	console.log(query);
	fetch(query).then((response)=>{
		return response.json();				
	}).then((respJson)=>{
		ask.innerHTML = respJson.result.ask;
		bid.innerHTML = respJson.result.bid;
		latest.innerHTML = respJson.result.latest;		
	});
	/*fetch(baseURL + 'price?typeOrd=bid&crypto='+pair[1]+'&currency='+pair[0]).then((response)=>{
		return response.json();				
	}).then((respJson)=>{
		bid.innerHTML = respJson.EUR;		
	});
	fetch(baseURL + 'price?typeOrd=latest&crypto='+pair[1]+'&currency='+pair[0]).then((response)=>{
		latest.innerHTML = ;	
	});*/
}, 5000);

function myStopFunction() {	
    clearInterval(interval);
    console.log("interval cleared");
}
