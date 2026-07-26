/* =====================================
        PLAYER LOGIN
====================================== */

window.onload=function(){

    let player=

    localStorage.getItem(
        "playerName"
    );

    if(player){

        document
        .getElementById("playerPopup")
        .style.display="none";

        document
        .getElementById("playerName")
        .innerText=player;

    }

}



document
.getElementById("startGame")
.onclick=function(){

    let name=

    document
    .getElementById("playerInput")
    .value
    .trim();

    if(name===""){

        alert("Please enter your name.");

        return;

    }

    localStorage.setItem(
        "playerName",
        name
    );

    document
    .getElementById("playerName")
    .innerText=name;

    document
    .getElementById("playerPopup")
    .style.display="none";

}
