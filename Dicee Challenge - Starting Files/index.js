var num = Math.floor(Math.random()*6)+1;

var num2=Math.floor(Math.random()*6)+1;

var newimg="images/dice" + num +".png";

var ele=document.querySelectorAll("img")[0];

ele.setAttribute("src",newimg);


var num1 = Math.floor(Math.random()*6)+1;

;

var newimgs="images/dice" + num1+".png";

var elem=document.querySelectorAll("img")[1];

elem.setAttribute("src",newimgs);

if(num>num1)
{
    document.querySelector("h1").innerHTML="Player 1 won ";
}
else if(num<num1)
{
    document.querySelector("h1").innerHTML="Player 2 won ";
}else{
    document.querySelector("h1").innerHTML="Tie ";
}






