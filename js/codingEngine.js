/* =====================================================
   CODING BATTLE ARENA
   Master Arena - Python Coding Engine
   Version: 1.0
===================================================== */


/*

Master JSON Format:

{
    "topic":"Loops",

    "challenges":[

        {
            "question":"Print numbers 1 to 10",
            "starter":"# Write your code here",
            "expected":"1\n2\n3"
        }

    ]
}

*/


let codingData = [];

let currentCodingQuestion = 0;

let codingKingdom = "";

let pyodide = null;



/* =========================================
   LOAD PYODIDE
========================================= */


async function loadPythonEngine(){


    if(pyodide)

        return;



    pyodide = await loadPyodide();


    console.log(
        "Python Engine Ready"
    );


}







/* =========================================
   LOAD MASTER CHALLENGE
========================================= */


async function loadCodingChallenge(kingdom){


    codingKingdom = kingdom;


    currentCodingQuestion = 0;


    resetLives();


    await loadPythonEngine();



    let fileName =

    kingdom

    .toLowerCase()

    .replaceAll(" ","");



    try{


        let response = await fetch(

        `data/${fileName}_master.json`

        );



        let data = await response.json();



        codingData =
        data.challenges;



        setGameMode(
            "Master Arena"
        );


        showCodingQuestion();


    }


    catch(error){


        console.error(error);



        document.getElementById(
        "questionText"
        ).innerText=

        "⚠️ Coding challenges not found";


    }


}






/* =========================================
   DISPLAY CODING QUESTION
========================================= */


function showCodingQuestion(){



    if(
    currentCodingQuestion >= codingData.length
    ){


        finishCodingBattle();


        return;


    }



    let problem =

    codingData[
    currentCodingQuestion
    ];



    document.getElementById(
    "questionNumber"
    ).innerText=

    currentCodingQuestion+1;



    document.getElementById(
    "totalQuestions"
    ).innerText=

    codingData.length;



    document.getElementById(
    "battleTitle"
    ).innerText=

    "⚔️ Master Arena";



    document.getElementById(
    "questionText"
    ).innerHTML=

    problem.question;



    createCodeEditor(
        problem.starter
    );


}






/* =========================================
   CREATE PYTHON EDITOR
========================================= */


function createCodeEditor(code){



    let area=

    document.getElementById(
    "codingArea"
    );



    area.innerHTML=`

    <textarea
    id="pythonCode"
    class="code-editor">

${code}

    </textarea>


    <div class="code-buttons">


    <button 
    class="run-btn"
    onclick="runPythonCode()">

    ▶️ Run

    </button>


    <button
    class="submit-code-btn"
    onclick="submitCode()">

    ⚔️ Submit

    </button>


    </div>


    <pre 
    id="outputBox"
    class="output-box">

Output...

    </pre>

    `;


}






/* =========================================
   RUN PYTHON CODE
========================================= */


async function runPythonCode(){


    let code =

    document.getElementById(
    "pythonCode"
    ).value;



    let output="";



    try{


        pyodide.runPython(`

import sys

from io import StringIO

sys.stdout = StringIO()

${code}

output=sys.stdout.getvalue()

        `);



        output =

        pyodide.globals
        .get("output");



        document.getElementById(
        "outputBox"
        ).innerText=

        output;


    }


    catch(error){


        document.getElementById(
        "outputBox"
        ).innerText=

        "❌ Error:\n"+error;


    }


}







/* =========================================
   SUBMIT CODE
========================================= */


/* =========================================
   SUBMIT CODE
========================================= */

async function submitCode(){

    // Get current challenge
    let problem = codingData[currentCodingQuestion];

    // Execute student's Python code
    await runPythonCode();

    // Get actual output
    let actualOutput = document
        .getElementById("outputBox")
        .innerText
        .replace(/\r\n/g, "\n")
        .trim();

    // Get expected output
    let expectedOutput = problem.expected
        .replace(/\r\n/g, "\n")
        .trim();

    // Debug (remove later if not needed)
    console.log("Expected:", JSON.stringify(expectedOutput));
    console.log("Actual  :", JSON.stringify(actualOutput));

    // -----------------------------
    // Correct Answer
    // -----------------------------
    if(actualOutput === expectedOutput){

        addXP(20);
        addCoins(10);

        playSound("correct");

        showFeedback("✅ Coding Challenge Passed");

    }

    // -----------------------------
    // Wrong Answer
    // -----------------------------
    else{

        let player = getPlayer();

        let remainingLives = player.lives - 1;

        updateLives(remainingLives);

        playSound("wrong");

        showFeedback("❌ Test Failed");

        // Game Over
        if(remainingLives <= 0){

            setTimeout(()=>{

                alert(
                    "💀 GAME OVER!\n\n" +
                    "You have lost all 3 lives.\n\n" +
                    "Retry the Master Challenge."
                );

                loadCodingChallenge(codingKingdom);

            },1000);

            return;

        }

    }

    // Refresh UI
    updatePlayerInfo();

    // Load next question
    setTimeout(()=>{

        currentCodingQuestion++;

        showCodingQuestion();

    },1500);

}

/* =========================================
   MASTER COMPLETION
========================================= */


function finishCodingBattle(){



    completeKingdom(

        codingKingdom,

        "master"

    );



    playSound(
    "victory"
    );



    document.getElementById(
    "questionText"
    ).innerHTML=

    `👑 Master Arena Completed!<br>
     ⚔️ You have conquered this kingdom!`;



    updatePlayerInfo();


}
