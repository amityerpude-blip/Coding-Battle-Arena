/* =====================================================
   CODING BATTLE ARENA
   Apprentice Arena - MCQ Engine
   Version: 1.0
===================================================== */


/*
    Each kingdom JSON will contain:

    {
        "topic":"Python Basics",

        "questions":[

            {
                "question":"",
                "options":[],
                "answer":0,
                "explanation":""
            }

        ]

    }

*/



let quizData = [];

let currentQuestion = 0;

let selectedAnswer = null;

let currentScore = 0;



let currentKingdom =
"Python Basics";





/* =========================================
   LOAD KINGDOM QUESTIONS
========================================= */


async function loadQuiz(kingdom){


    currentKingdom = kingdom;


    currentQuestion = 0;

    currentScore = 0;

    selectedAnswer=null;


    resetLives();



    let fileName =

    kingdom

    .toLowerCase()

    .replaceAll(" ","");



    try{


        let response = await fetch(

            `data/${fileName}.json`

        );



        let data = await response.json();



        quizData=data.questions;



        setGameMode(
            "Apprentice Arena"
        );


        showQuestion();



    }

    catch(error){


        console.error(
            "Question loading error:",
            error
        );


        document.getElementById(
            "questionText"
        ).innerText=

        "⚠️ Questions not available yet";


    }


}






/* =========================================
   SHOW QUESTION
========================================= */


function showQuestion(){


    if(currentQuestion >= quizData.length){


        finishQuiz();


        return;


    }



    let question =

    quizData[currentQuestion];



    document.getElementById(
        "questionNumber"
    ).innerText=

    currentQuestion+1;



    document.getElementById(
        "totalQuestions"
    ).innerText=

    quizData.length;



    document.getElementById(
        "battleTitle"
    ).innerText=

    "🏹 Apprentice Battle";



    displayQuestion(question);



    displayOptions(
        question.options
    );



    selectedAnswer=null;


}







/* =========================================
   OPTION CLICK
========================================= */


document.addEventListener(

"click",

function(e){


    if(
        e.target.classList.contains(
            "option"
        )
    ){


        document
        .querySelectorAll(".option")
        .forEach(btn=>{


            btn.classList.remove(
                "selected"
            );


        });



        e.target.classList.add(
            "selected"
        );



        selectedAnswer=

        [...document.querySelectorAll(".option")]
        .indexOf(e.target);



    }


});







/* =========================================
   SUBMIT ANSWER
========================================= */


document.getElementById(
"submitBtn"
)
.addEventListener(

"click",

()=>{


    if(selectedAnswer===null){


        alert(
            "Select an answer first!"
        );


        return;


    }



    checkAnswer();


}

);








/* =========================================
   CHECK ANSWER
========================================= */


function checkAnswer(){


    let question =

    quizData[currentQuestion];



    if(
        selectedAnswer === question.answer
    ){


        currentScore++;


        addXP(10);


        addCoins(5);



        playSound(
            "correct"
        );


        showFeedback(
            "✅ Correct Answer!"
        );


    }

    else{


        let player=getPlayer();


        updateLives(
            player.lives-1
        );



        playSound(
            "wrong"
        );



        showFeedback(

        "❌ Wrong Answer"

        );



    }



    updatePlayerInfo();



    setTimeout(()=>{


        currentQuestion++;


        showQuestion();



    },1200);



}







/* =========================================
   FEEDBACK MESSAGE
========================================= */


function showFeedback(message){


    let box=

    document.getElementById(
        "battleTitle"
    );


    box.innerText=message;


}








/* =========================================
   COMPLETE QUIZ
========================================= */


function finishQuiz(){



    let percentage =

    Math.floor(

    (currentScore/
    quizData.length)*100

    );



    if(percentage>=70){



        completeKingdom(

            currentKingdom,

            "apprentice"

        );



        playSound(
            "victory"
        );


        document.getElementById(
        "questionText"
        ).innerHTML=

        `🎉 Kingdom Completed!<br>
        Score: ${currentScore}/${quizData.length}<br>
        Accuracy: ${percentage}%`;



    }

    else{


        document.getElementById(
        "questionText"
        ).innerHTML=

        `⚔️ Battle Failed<br>
        Score: ${currentScore}/${quizData.length}<br>
        Try Again!`;



    }



    updatePlayerInfo();


}
