const input= document.getElementById("input")
const counter = document.getElementById("counter")
const addition= document.getElementById("addition")
const subtraction= document.getElementById("subtraction")
let count= 0
 addition.addEventListener("click", ()=>{
    count += addNumber();
    counter.innerHTML = count;
    changeColor();
 });

 subtraction.addEventListener("click", ()=>{
    count -= addNumber();
    counter.innerHTML = count;
    changeColor();
 })
function addNumber(){
    return parseInt(input.value)
}
function changeColor(){
if(count < 0){
    console.log('negative');
    counter.style.color="red";
}else{
    console.log('no color change');
}
}
