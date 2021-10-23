// //Return
// function HeyEarn(){
//     return "Hello Earn"
// }
// function getAgg(){
//     return 21
// }
// alert(HeyEarn())
// alert(getAgg() + 10)

//Param
function HeyEarn(userName, userLastname){
    return "Hello Earn " + userName +" " + userLastname
}
function getAgg(){
    return 21
}
let userInput = prompt("Input your name : ")
alert(HeyEarn(userInput, "Wang"))