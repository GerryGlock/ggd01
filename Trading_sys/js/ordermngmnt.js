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
var buySellSelector = document.querySelector(#order_type);

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

var interval = 0;

function setResetInterval(bool){

	if(bool){
		interval =	setInterval(()=>{ 
			console.log(pair[1]+" "+pair[0]);
			let query = baseURL +'price?crypto='+pair[1]+'&currency='+pair[0];
			console.log(query);
			fetch(query).then((response)=>{
				return response.json();				
			}).then((respJson)=>{
				console.log(respJson);
				ask.innerHTML = respJson.result.Ask;
				bid.innerHTML = respJson.result.Bid;
				latest.innerHTML = respJson.result.Last;		
			});			
		}, 5000);
	}else{
		clearInterval(interval)
	}
}

setResetInterval(true);



