player1_name = localStorage.getItem("player1Name");
player2_name = localStorage.getItem("player2Name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = " " + player1_score;
document.getElementById("player2_score").innerHTML = " " + player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    number1 = document.getElementById("Number 1").value;
    number2 = document.getElementById("Number 2").value;
    actual_answer = parseInt(number1) * parseInt(number2);  

    question_number = "<h4>" + number1 + "X" + get_number2 + "</h4>";
    inputBox = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + inputBox + check_button;
    console.log(row);
    
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number 1").value = "Number 1";
    document.getElementById("Number 2").value = "Number 2";
    

}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer_final= get_number1 * get_number2;
    console.log(answer);
    
    if (answer == answer_final)
    {    
        if (answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1")
    {
       question_turn = "player2";
       document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
     }

     if (answer_turn == "player1")
    {
       answer_turn = "player2";
       document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
     }

    }
