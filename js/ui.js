/* =====================================================
   CODING BATTLE ARENA
   User Interface Controller
   Version: 1.0
===================================================== */


/* =========================================
   UPDATE PLAYER INFORMATION
========================================= */


function updatePlayerInfo(){


    let player = getPlayer();


console.log(player);
console.log(player.name);
    document.getElementById("playerName")
    .innerText = player.name;



    document.getElementById("xp")
    .innerText = player.xp;



    document.getElementById("coins")
    .innerText = player.coins;



    updateLivesDisplay();


    updateProgressDisplay();


}






/* =========================================
   DISPLAY LIVES
========================================= */


function updateLivesDisplay(){

    let player = getPlayer();

    let lifeBox = document.querySelector(".lives");

    if(!lifeBox) return;

    let hearts = "";

    for(let i=0; i<player.lives; i++){

        hearts += "❤️ ";

    }

    lifeBox.innerHTML = hearts;

}




/* =========================================
   UPDATE PROGRESS
========================================= */


function updateProgressDisplay(){


    let player=getPlayer();



    let total=0;

    let completed=0;



    for(let kingdom in player.progress){


        total +=2;



        if(player.progress[kingdom].apprentice)

            completed++;


        if(player.progress[kingdom].master)

            completed++;


    }



    let percent =

    Math.floor(

        (completed/total)*100

    );



    document.getElementById("progress")
    .innerText = percent+"%";


}







/* =========================================
   CHANGE GAME MODE
========================================= */


function setGameMode(mode){


    document.getElementById("gameMode")
    .innerText=mode;



}






/* =========================================
   KINGDOM SELECTION
========================================= */


function setupKingdomNavigation(){


    let kingdoms =

    document.querySelectorAll(".kingdom");



    kingdoms.forEach(item=>{


        item.addEventListener(

            "click",

            ()=>{


                kingdoms.forEach(k=>{

                    k.classList.remove(
                        "active"
                    );

                });



                item.classList.add(
                    "active"
                );



                let kingdom =

                item.innerText.replace(
                    /🏰|👑/g,
                    ""
                ).trim();



                setCurrentKingdom(
                    kingdom
                );


                loadKingdom(
                    kingdom
                );


            }

        );


    });


}






/* =========================================
   DISPLAY QUESTION
========================================= */


function displayQuestion(data){


    document.getElementById(
        "questionText"
    ).innerText=data.question;



}

/* =========================================
   DISPLAY OPTIONS
========================================= */


function displayOptions(options){


    let box=

    document.getElementById(
        "optionsBox"
    );


    box.innerHTML="";



    options.forEach(

        (option,index)=>{


            let button=

            document.createElement(
                "button"
            );



            button.className="option";


            button.innerText=

            String.fromCharCode(
                65+index
            )
            +". "
            +option;



            box.appendChild(
                button
            );


        }

    );


}

/* =========================================
   CLEAR BATTLE AREA
========================================= */


function clearBattleArea(){


    document.getElementById(
        "optionsBox"
    ).innerHTML="";


    document.getElementById(
        "questionText"
    ).innerHTML="";


}

/* =========================================
   INITIAL UI LOAD
========================================= */


function initializeUI(){


    updatePlayerInfo();


    setupKingdomNavigation();


}
