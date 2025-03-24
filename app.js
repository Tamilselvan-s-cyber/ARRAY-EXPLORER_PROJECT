let numb = [];
function elements()
{
  const input = document.getElementById("array").value;
  numb = input.split(",").map((num) => parseFloat(num.trim()))

}

function result(text) 
{
  document.getElementById("result").innerText = text;
}

function sort() 
{
elements();
  result("Sorted: " + numb.sort((a,b)=>a-b));
}

function avg()
{
  elements();
  let avg=numb.reduce((acc,num)=>acc+num,0)/numb.length;
  result("Average: "+avg)
}



function reverse() 
{
elements();
  let rev=numb.reverse()
  result("Reversed:"+ rev);
}

function even() 
{
elements();
  let e=numb.filter((num)=>num%2===0)
  result("Evens Numbers: " + e);
}

function odd() 
{
elements();
  let o=numb.filter((num)=>num%2!==0)
  result("Odd Numbers: " + o);
}



function add(){
  elements();
  let sum = numb.reduce((acc,n)=>acc+n,0);
  result("Add: "+sum);
}







