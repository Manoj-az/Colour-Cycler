'use strict'

var colors=["red","green","violet","yellow","pink","white","orange"];
var length=colors.length-1;

var btn=document.getElementById("btn1");
var span=document.getElementById("sp");

btn.addEventListener('click',() => {
    var index=generateRandomNum();
    document.body.style.backgroundColor=colors[index];
    span.textContent=colors[index];
});

function generateRandomNum()
{
    return Math.round(Math.random() * length);
}

