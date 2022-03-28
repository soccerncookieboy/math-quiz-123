player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");
player1_score = 0;
player2_score = 0;
document.getElementById("player1name").innerHTML = player1_name + " : ";
document.getElementById("player2name").innerHTML = player2_name + " : ";
document.getElementById("player1score").innerHTML = player1_score;
document.getElementById("player2score").innerHTML = player2_score;

function send(){
    get_number = document.getElementById("word").value;
    get2number = document.getElementById("number2").value;
    answer = get_number*get2number
    console.log(get_number + get2number)

    question_word = "<h4 id='word_display'> Q. "+get_number+"x"+get2number+"</h4>";
    input_box ="<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row
    document.getElementById("word").value = "";
}