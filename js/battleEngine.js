/* =====================================================
   CODING BATTLE ARENA
   Main Battle Controller
   Version: 1.0
===================================================== */


/*

Battle Engine Controls:

1. Selected Kingdom
2. Current Mode
3. Loading Questions
4. Loading Coding Challenges
5. Battle Reset

*/


let selectedKingdom = "Python Basics";

let selectedMode = "Apprentice";





/* =========================================
   SELECT KINGDOM
========================================= */


function loadKingdom(kingdom){


    selectedKingdom = kingdom;


    setCurrentKingdom(
        kingdom
    );


    resetBattle();



    // Default start

    startApprenticeBattle();



}







/* =========================================
   START APPRENTICE ARENA
========================================= */


function startApprenticeBattle(){


    selectedMode="Apprentice";


    setGameMode(
        "🏹 Apprentice Arena"
    );


    clearCodingArea();


    loadQuiz(
        selectedKingdom
    );


}







/* =========================================
   START MASTER ARENA
========================================= */


function startMasterBattle(){


    selectedMode="Master";


    setGameMode(
        "⚔️ Master Arena"
    );


    clearOptions();



    loadCodingChallenge(

        selectedKingdom

    );


}







/* =========================================
   RESET BATTLE
========================================= */


function resetBattle(){


    resetLives();


    currentQuestion=0;


    currentCodingQuestion=0;



    updatePlayerInfo();


}







/* =========================================
   CLEAR MCQ AREA
========================================= */


function clearOptions(){


    let box=

    document.getElementById(
        "optionsBox"
    );


    if(box)

        box.innerHTML="";


}







/* =========================================
   CLEAR CODING AREA
========================================= */


function clearCodingArea(){


    let area=

    document.getElementById(
        "codingArea"
    );



    if(area)

        area.innerHTML="";


}







/* =========================================
   SWITCH ARENA BUTTONS
========================================= */


function createArenaButtons(){


    let title=

    document.querySelector(
        ".battle-top"
    );



    let buttons=document.createElement(
        "div"
    );



    buttons.className="arena-buttons";



    buttons.innerHTML=`

    <button 
    class="primary-btn"
    id="apprenticeBtn">

    🏹 Apprentice Arena

    </button>


    <button
    class="battle-btn"
    id="masterBtn">

    ⚔️ Master Arena

    </button>

    `;



    title.appendChild(
        buttons
    );



    document
    .getElementById(
        "apprenticeBtn"
    )
    .onclick=()=>{


        startApprenticeBattle();


    };



    document
    .getElementById(
        "masterBtn"
    )
    .onclick=()=>{


        startMasterBattle();


    };


}







/* =========================================
   CHECK KINGDOM STATUS
========================================= */


function getKingdomStatus(kingdom){


    let player=getPlayer();



    return player.progress[
        kingdom
    ];



}







/* =========================================
   INITIAL BATTLE SETUP
========================================= */


function initializeBattle(){


    createArenaButtons();


    updatePlayerInfo();


}
