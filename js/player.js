/* =====================================================
   PLAYER LOGIN CONTROLLER
===================================================== */

document.addEventListener("DOMContentLoaded", function(){

    const popup = document.getElementById("playerPopup");
    const input = document.getElementById("playerInput");
    const startBtn = document.getElementById("startGame");
    const playerName = document.getElementById("playerName");

    let savedName = localStorage.getItem("playerName");

    // Existing player
    if(savedName){

        playerName.innerText = savedName;

        popup.style.display = "none";

        startGame();

        return;
    }

    // New player
    startBtn.addEventListener("click", function(){

        let name = input.value.trim();

        if(name === ""){

            alert("Please enter your name.");

            input.focus();

            return;
        }

        localStorage.setItem("playerName", name);

        playerName.innerText = name;

        popup.style.display = "none";

        startGame();
    });

});
