/* =====================================================
   CODING BATTLE ARENA
   Local Storage Manager
   Version: 1.0
===================================================== */


/*
    Storage Key

    All game data will be stored under
    one key inside browser storage.
*/

const STORAGE_KEY = "codingBattleArenaData";





/* =========================================
   DEFAULT PLAYER PROFILE
========================================= */


const defaultPlayer = {

    name: "Guest",

    xp: 0,

    coins: 0,

    lives: 3,


    currentKingdom: "Python Basics",


    progress: {


        "Python Basics": {

            apprentice:false,

            master:false

        },


        "If Else": {

            apprentice:false,

            master:false

        },


        "Loops": {

            apprentice:false,

            master:false

        },


        "Functions": {

            apprentice:false,

            master:false

        },


        "Strings": {

            apprentice:false,

            master:false

        },


        "Lists": {

            apprentice:false,

            master:false

        },


        "Tuples": {

            apprentice:false,

            master:false

        },


        "Dictionaries": {

            apprentice:false,

            master:false

        },


        "Text Files": {

            apprentice:false,

            master:false

        },


        "CSV Files": {

            apprentice:false,

            master:false

        },


        "Pandas": {

            apprentice:false,

            master:false

        },


        "SQL": {

            apprentice:false,

            master:false

        },


        "Computer Networks": {

            apprentice:false,

            master:false

        },


        "Python Master Challenge": {

            apprentice:false,

            master:false

        }

    },


    achievements: [],


    statistics:{


        totalQuestions:0,

        correctAnswers:0,

        wrongAnswers:0


    }



};







/* =========================================
   CREATE NEW PROFILE
========================================= */


function createPlayer(name){


    let player = structuredClone(defaultPlayer);


    player.name = name;


    savePlayer(player);


    return player;


}






/* =========================================
   SAVE PLAYER DATA
========================================= */


function savePlayer(player){


    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(player)

    );


}






/* =========================================
   LOAD PLAYER DATA
========================================= */


function loadPlayer(){


    let data =

    localStorage.getItem(STORAGE_KEY);



    if(data){


        return JSON.parse(data);


    }



    return null;


}






/* =========================================
   GET CURRENT PLAYER
========================================= */


function getPlayer(){


    let player = loadPlayer();



    if(player){


        return player;


    }


    return createPlayer("Guest");


}






/* =========================================
   UPDATE XP
========================================= */


function addXP(points){


    let player = getPlayer();


    player.xp += points;


    savePlayer(player);


}





/* =========================================
   UPDATE COINS
========================================= */


function addCoins(amount){


    let player = getPlayer();


    player.coins += amount;


    savePlayer(player);


}






/* =========================================
   UPDATE LIVES
========================================= */


function updateLives(value){


    let player = getPlayer();


    player.lives = value;


    savePlayer(player);


}






/* =========================================
   RESET LIVES
========================================= */


function resetLives(){


    updateLives(3);


}






/* =========================================
   COMPLETE KINGDOM
========================================= */


function completeKingdom(

    kingdom,

    mode

){


    let player = getPlayer();



    if(player.progress[kingdom]){


        player.progress[kingdom][mode]=true;


    }



    savePlayer(player);


}






/* =========================================
   CHANGE CURRENT KINGDOM
========================================= */


function setCurrentKingdom(kingdom){


    let player=getPlayer();


    player.currentKingdom=kingdom;


    savePlayer(player);


}






/* =========================================
   RESET GAME
========================================= */


function resetGame(){


    localStorage.removeItem(STORAGE_KEY);


}
