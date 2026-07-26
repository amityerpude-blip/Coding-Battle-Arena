/* =====================================================
   PLAYER LOGIN POPUP
===================================================== */

.popup-overlay{

    position:fixed;

    top:0;
    left:0;

    width:100%;
    height:100%;

    background:rgba(0,0,0,0.85);

    display:flex;

    justify-content:center;

    align-items:center;

    z-index:9999;

    padding:20px;

}



.popup-card{

    width:100%;

    max-width:420px;

    background:#1f2937;

    color:white;

    border-radius:20px;

    padding:40px 30px;

    text-align:center;

    box-shadow:0 0 30px rgba(0,0,0,0.6);

}



.popup-card h1{

    margin-bottom:15px;

    font-size:32px;

}



.popup-card p{

    margin-bottom:25px;

    font-size:18px;

    color:#dddddd;

}



.popup-card input{

    width:100%;

    padding:14px;

    font-size:18px;

    border:none;

    border-radius:12px;

    outline:none;

    margin-bottom:20px;

    box-sizing:border-box;

}



.popup-card button{

    width:100%;

    padding:14px;

    border:none;

    border-radius:12px;

    background:#4CAF50;

    color:white;

    font-size:18px;

    font-weight:bold;

    cursor:pointer;

    transition:0.3s;

}



.popup-card button:hover{

    background:#43a047;

    transform:scale(1.03);

}



.popup-card button:active{

    transform:scale(0.98);

}



/* Mobile */

@media(max-width:600px){

    .popup-card{

        padding:30px 20px;

    }

    .popup-card h1{

        font-size:26px;

    }

    .popup-card p{

        font-size:16px;

    }

    .popup-card input,

    .popup-card button{

        font-size:16px;

    }

}
