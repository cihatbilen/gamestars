function showPrices(id){

    document.getElementById(id+"-text").style.display = "block";
}

function hidePrices(id){
  document.getElementById(id+"-text").style.display = "none";
}


document.getElementById("item-1").addEventListener('mouseover', function(event){showPrices(event.target.id);});

document.getElementById('item-1').addEventListener('mouseout', function(event){hidePrices(event.target.id);});

document.getElementById("item-2").addEventListener('mouseover', function(event){showPrices(event.target.id);});

document.getElementById('item-2').addEventListener('mouseout', function(event){hidePrices(event.target.id);});

document.getElementById("item-3").addEventListener('mouseover', function(event){showPrices(event.target.id);});

document.getElementById('item-3').addEventListener('mouseout', function(event){hidePrices(event.target.id);});

document.getElementById("item-4").addEventListener('mouseover', function(event){showPrices(event.target.id);});

document.getElementById('item-4').addEventListener('mouseout', function(event){hidePrices(event.target.id);});


//
// function showPrice1(){
//   document.getElementById("item-1-text").style.display = "block";
// }
//
// document.getElementById("item-1").addEventListener('mouseover', function(event){showPrice1; console.log(event.target.id)}, false);
//
// function hidePrice1(){
//
//     document.getElementById("item-1-text").style.display = "none";
// }
//
// document.getElementById('item-1').addEventListener('mouseout', hidePrice1);
//
//
//
//
//
//
// function showPrice2(){
//   document.getElementById("item-2-text").style.display = "block";
// }
// document.getElementById("item-2").addEventListener('mouseover', showPrice2);
//
// function hidePrice2(){
//
//     document.getElementById("item-2-text").style.display = "none";
// }
//
// document.getElementById('item-2').addEventListener('mouseout', hidePrice2);
//
//
//
//
//
//
//
// function showPrice3(){
//   document.getElementById("item-3-text").style.display = "block";
// }
// document.getElementById("item-3").addEventListener('mouseover', showPrice3);
//
// function hidePrice3(){
//
//     document.getElementById("item-3-text").style.display = "none";
// }
//
// document.getElementById('item-3').addEventListener('mouseout', hidePrice3);
//
//
//
//
//
//
//
// function showPrice4(){
//   document.getElementById("item-4-text").style.display = "block";
// }
// document.getElementById("item-4").addEventListener('mouseover', showPrice4);
//
// function hidePrice4(){
//
//     document.getElementById("item-4-text").style.display = "none";
// }
//
// document.getElementById('item-4').addEventListener('mouseout', hidePrice4);
