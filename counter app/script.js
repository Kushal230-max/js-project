let count=0;

const counterDisplay=document.getElementById("counter");
const increaseBtn=document.getElementById("increase");
const decreaseBtn=document.getElementById("decrease");
const resetBtn=document.getElementById("reset");

increaseBtn.addEventListener('click',() => {
    count++;
    display();
})
decreaseBtn.addEventListener('click',() => {
    count--;
    if(count>=0){
        display();
    }
    else{
        count=0;
        display();
    }
})
resetBtn.addEventListener('click',() => {
    count=0;
    display();
})
function display(){
    counterDisplay.textContent=count;
}