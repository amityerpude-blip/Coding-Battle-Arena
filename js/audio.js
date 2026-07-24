/* =====================================================
   CODING BATTLE ARENA
   Audio Controller
   Version: 1.0
===================================================== */


/*
    All audio files are stored in one folder:

    audio/

    bgmusic.mp3
    click.mp3
    correct.mp3
    wrong.mp3
    coin.mp3
    victory.mp3
    gameover.mp3
    lifeLost.mp3
    countdown.mp3
    typing.mp3

*/


const AUDIO_FILES = {


    background:

    "audio/bgmusic.mp3",


    click:

    "audio/click.mp3",


    correct:

    "audio/correct.mp3",


    wrong:

    "audio/wrong.mp3",


    coin:

    "audio/coin.mp3",


    victory:

    "audio/victory.mp3",


    gameOver:

    "audio/gameover.mp3",


    lifeLost:

    "audio/lifeLost.mp3",


    countdown:

    "audio/countdown.mp3",


    typing:

    "audio/typing.mp3"


};





/* =========================================
   AUDIO OBJECTS
========================================= */


const sounds = {};



let soundEnabled = true;





/* =========================================
   LOAD AUDIO
========================================= */


function loadAudio(){


    for(let key in AUDIO_FILES){


        sounds[key] = new Audio(

            AUDIO_FILES[key]

        );


        sounds[key].preload="auto";


    }


}





/* =========================================
   PLAY SOUND
========================================= */


function playSound(name){


    if(!soundEnabled)

        return;



    if(sounds[name]){


        sounds[name].currentTime = 0;


        sounds[name].play()

        .catch(()=>{

            // Browser blocks autoplay
            // until user interaction

        });


    }


}






/* =========================================
   BACKGROUND MUSIC
========================================= */


function startBackgroundMusic(){


    if(!soundEnabled)

        return;



    let music=sounds.background;



    if(music){


        music.loop=true;


        music.volume=0.35;


        music.play()

        .catch(()=>{});


    }


}






function stopBackgroundMusic(){


    if(sounds.background){


        sounds.background.pause();


    }


}






/* =========================================
   SOUND ON/OFF
========================================= */


function toggleSound(){


    soundEnabled = !soundEnabled;



    if(!soundEnabled){


        stopBackgroundMusic();


    }

    else{


        startBackgroundMusic();


    }



    return soundEnabled;


}





/* =========================================
   VOLUME CONTROL
========================================= */


function setVolume(level){


    for(let key in sounds){


        sounds[key].volume=level;


    }


}





// Initialize audio

loadAudio();
