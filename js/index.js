//Your code goes here
let atags = document.querySelectorAll("a");
let main = document.querySelector('.home');
let body = document.querySelector("body");
let timer = -1;
let dragged;

atags.forEach(i =>{ 
    i.addEventListener("click", event => {event.preventDefault()}); //prevents reload on anchor tags
    i.draggable = true;
});

function squeeze(){
    main.style.width = "40%";
    if(timer != -1)
        clearTimeout(timer);
    timer = window.setTimeout("scrollFinished()", 250);
}

function scrollFinished(){
    main.style.width = "50%";
}

window.addEventListener('scroll', squeeze);

document.addEventListener("dragstart", function(event){
    dragged = event.target;
}, false);

document.addEventListener("dragover", function( event ) {
    event.preventDefault();// prevent default to allow drop
}, false);

document.addEventListener("drop", function( event ) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if(event.target === dragged){
        return;
    }
    if ( event.target.className === "nav-link" ) {
        let switch1 = window.getComputedStyle(event.target).order
        let switch2 = window.getComputedStyle(dragged).order;
        dragged.style.order = switch1;
        event.target.style.order = switch2;
    }
}, false);



