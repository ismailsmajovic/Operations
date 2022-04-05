function racunaj(){
    var b1=parseInt(document.getElementById("b1").value);
    var b2=parseInt(document.getElementById("b2").value);
    var sum = b1+b2;
    document.getElementById("b3").innerHTML=sum;

    if(sum > 5){
        alert("good");
        return false;
    }
    else{
        alert("LOSE");
    }
}
/*var dugme = document.getElementbyClass("dugme");

dugme.addEventListener("click", racunaj());*/ 
function racunaj2(){
    var b4=parseInt(document.getElementById("b4").value);
    var b5=parseInt(document.getElementById("b5").value);
    var mul = b4 * b5;
    document.getElementById("b6").innerHTML=mul;

    if(mul > 50){
        alert("good");
        return false;
    }
    else{
       document.write("<h1>Bezao si sa matematike</h1>");
    }
}