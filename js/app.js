/* =====================================================
   CODING BATTLE ARENA
   Main Application Controller
   Version: 1.0
===================================================== */


/*

    Application Flow:

    Open Game
        |
        ↓
    Load Player
        |
        ↓
    Initialize UI
        |
        ↓
    Initialize Battle Engine
        |
        ↓
    Ready for Battle


*/





/* =========================================
   GAME START
========================================= */


function startGame(){


    console.log(
        "⚔️ Coding Battle Arena Started"
    );



    // Load saved player

    let player = getPlayer();



    console.log(
        "Player:",
        player.name
    );



    // Update interface

    initializeUI();



    // Setup battle system

    initializeBattle();



    // Start music after user interaction

    document.addEventListener(

        "click",

        function startMusicOnce(){


            startBackgroundMusic();


            document.removeEventListener(
                "click",
                startMusicOnce
            );


        }

    );



}







/* =========================================
   SOUND BUTTON
========================================= */


document.addEventListener(

"DOMContentLoaded",

()=>{


    let soundButton =

    document.getElementById(
        "soundBtn"
    );



    if(soundButton){


        soundButton.onclick=()=>{


            let status =
            toggleSound();



            soundButton.innerText =

            status ? "🔊" : "🔇";


        };


    }



});







/* =========================================
   DARK MODE
========================================= */


document.addEventListener(

"DOMContentLoaded",

()=>{


    let themeButton =

    document.getElementById(
        "themeBtn"
    );



    if(themeButton){


        themeButton.onclick=()=>{


            document.body
            .classList.toggle(
                "dark-mode"
            );



            themeButton.innerText =

            document.body.classList
            .contains("dark-mode")

            ?

            "☀️"

            :

            "🌙";


        };


    }


});







/* =========================================
   START WHEN PAGE LOADS
========================================= */



