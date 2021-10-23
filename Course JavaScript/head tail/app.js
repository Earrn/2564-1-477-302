let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ?")
for(var i = 1; i < round;i++){
    var answer = prompt("หัว หรือ ก้อย พิมพ์มาาาา!!!")
    var random_answer = ""
    if(Math.floor(Math.random() *10) <= 4){
        //หัว
        random_answer = "หัว"
    }
    else{
        //ก้อย
        random_answer = "ก้อย"
    }
    if(answer == random_answer){
        alert("คุณตอบถูกต้อง ยินดีด้วย")
    }
    else{
        alert("คุณตอบถูกผิด เสียใจด้วย")
    }
    console.log(random_answer+ " : " + answer)
    document.getElementById("answer").innerHTML = "คุณตอบทั้งหมด : " + round + "รอบ"
    document.getElementById("game-list").innerHTML += "ครั้งที่ : " + i + "คำตอบของคุณ : " + answer + "คำตอบที่ถูก : " + random_answer + "<br>";

}
    document.getElementById("result").innerHTML = "คุณตอบถูกทั้งหมด : " + score + "รอบ"