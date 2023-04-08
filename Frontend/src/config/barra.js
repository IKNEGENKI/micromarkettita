import React, { useState } from 'react';
//Ejecutar función en el evento click

var side_menu = document.getElementById("items");
var btn_open = document.getElementById("oferta");
var body = document.getElementById("body");

btn_open.addEventListener('click',() =>{
    console.log("Se ha registrado un click");
});

function open_close_menu(){
    console.log("Se ha registrado un click");
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
}


if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});