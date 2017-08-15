


function move()
{

  var elem = document.getElementById("mybox"); 
    var pos = 0;
    var id = setInterval(frame, 5);


    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
        }
    }
}


function myFunction() {
    document.getElementById("mybox").innerHTML = "Hello World";
}


function resetThis() 
{
    document.getElementById("mybox").innerHTML = "Move Me";
    document.getElementById("mybox").style.left = "0px";
     document.getElementById("mybox").style.top = "0px";
}

function writeThis()
{
 
var name = prompt("what is your name");
var handle = confirm("can you handle javascript?");

if(handle == true)
{
 document.getElementById("txtWriter").value = "Great " + name + " !";
}
else
{
 document.getElementById("txtWriter").value = "No Worries! " + name + " You will soon:)";
}
 console.log("I wrote something in the console log too");
}

//Calculates adding two number

function calculateAdd(x1, x2)
{

document.write(x1 + x2);
}
