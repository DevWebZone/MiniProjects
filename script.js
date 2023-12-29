var first = document.querySelectorAll(".number-top");
var next = document.querySelectorAll(".number-bottom");
var inputNumber = document.getElementsByTagName("input");

console.log(first);
var nextNumber = 0;
let i = 4;
function startCounter(){
    inputNumber[0].readOnly = true;
    var number = inputNumber[0].value;
    var interval = setInterval(
        function(){
            if(parseInt(nextNumber) >= parseInt(number)){
                clearInterval(interval);
                inputNumber[0].readOnly = false;
                alert("Counter timit reached");
                first[i].textContent = 0;
                next[i].textContent = 1;
                nextNumber=0
                return;
            }
            nextNumber++;
            changedigit(i, nextNumber);
        }, 1000);
}

function changedigit(i, changeNumber){
    if (changeNumber < 10)
        {
            animate(i, changeNumber);
            return;
        }
    if (parseInt(changeNumber/10) > 0)
    {
        if(changeNumber%10 ===0)
            changedigit(i-1, parseInt(changeNumber/10));
        animate(i, parseInt(changeNumber%10));
    }
}




// inputNumber[0]
// console.log(inputNumber[0].value);
// var nextNumber = 0;
// function startCounter(){
//     inputNumber[0].readOnly = true;
//     var maxCount = inputNumber[0].value;
//     var interval = setInterval(
//         function(){
//             if(parseInt(nextNumber) >= parseInt(maxCount)){
//                 clearInterval(interval);
//                 inputNumber[0].readOnly = false;
//                 alert("Counter timit reached");
//                 first.textContent = 0;
//                 next.textContent = 1;
//                 nextNumber=0
//                 return;
//             }
//             animate();
//         }, 1000);
// }
function animate(i , animateNo){
    next[i].textContent = parseInt(animateNo);
    next[i].classList.add("animate");
    setTimeout(function(){
        //animateNo = next[i].textContent;
        first[i].textContent = parseInt(animateNo);
        next[i].classList.remove("animate");
    }, 500);
}
