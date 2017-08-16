


var myBooksCollection = ["War and Peace", "DaVinci's Code", "Tales of Two Cities", "Catch 22"];


function displayCollection(){




for(var i =0 ;i<myBooksCollection.length;i++)
{

document.getElementById("txtWriter").value = document.getElementById("txtWriter").value  + myBooksCollection[i] + " - ";

console.log(myBooksCollection[i]);
}



}

document.onkeyup = function(event)
{
  
  // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerRandom = Math.floor(Math.random() * myBooksCollection.length);

       alert("Computer picked " + computerRandom);
      document.getElementById("txtRandom").value = myBooksCollection[computerRandom];



}