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


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
