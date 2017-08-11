


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


function resetthis() 
{
    document.getElementById("mybox").innerHTML = "Move Me";
    document.getElementById("mybox").style.left = "0px";
     document.getElementById("mybox").style.top = "0px";
}
