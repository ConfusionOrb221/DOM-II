//Your code goes here
let atags = document.querySelectorAll("a");
let main = document.querySelector('.home');
let body = document.querySelector("body");
let logo = document.querySelector("h1");
let paragraph = document.querySelector("p");
let div = document.querySelector(".destination");
let p = document.querySelector(".destination p");
logo.style.userSelect = "none";
let timer = -1;
let dragged;
const tl = new TimelineMax();

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

window.addEventListener("load", function(){
    tl.fromTo(logo, 3, {x:-800}, {x:0 , ease: Power2.easeInOut});
}, false);

logo.addEventListener("dblclick", function(){
    tl.fromTo(logo, 1.5, {color:"rgba(204,54,60,1)"}, {color:"rgba(0,0,0,1)", ease: Power2.easeIn});
}, false);

window.addEventListener("copy", function(){
    window.alert("hey this is annoying xd");
}, false);

window.addEventListener("resize", function(){
    if(timer != -1)
        clearTimeout(timer);
    timer = window.setTimeout("refreshPage()", 500);
}, false);

function refreshPage(){
    document.location.reload();
}

div.addEventListener("click", function(){
    div.style.color = "red";
});

p.addEventListener("click", function(event){
    event.stopPropagation();
    p.style.fontSize = "30px";
});

window.addEventListener("keydown", function(event){
    if(event.keyCode === 27){
       window.open("", "", "width=100", "height=100");
    }
});





