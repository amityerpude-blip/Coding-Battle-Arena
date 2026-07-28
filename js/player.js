/* =====================================================
   PLAYER LOGIN CONTROLLER
===================================================== */

document.addEventListener("DOMContentLoaded", function(){

    const popup = document.getElementById("playerPopup");
    const input = document.getElementById("playerInput");
    const startBtn = document.getElementById("startGame");
    const playerName = document.getElementById("playerName");

    let player = getPlayer();

if(player.name !== "Guest"){

    updatePlayerInfo();

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

        let player = getPlayer();

player.name = name;

savePlayer(player);

updatePlayerInfo();

popup.style.display = "none";

startGame();
    });

});
