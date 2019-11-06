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
    i.draggable = true; //sets each element as draggable
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

window.addEventListener('scroll', squeeze); //squeezes the  main div 

document.addEventListener("dragstart", function(event){//sets the dragged event
    dragged = event.target;
}, false);

document.addEventListener("dragover", function( event ) {// prevent clicking when dragging
    event.preventDefault();// prevent default to allow drop
}, false);

document.addEventListener("drop", function( event ) {//activates when u drop on the navbar
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

window.addEventListener("load", function(){//moves the logo on load
    tl.fromTo(logo, 3, {x:-800}, {x:0 , ease: Power2.easeInOut});
}, false);

logo.addEventListener("dblclick", function(){//dbl click the logo
    tl.fromTo(logo, 1.5, {color:"rgba(204,54,60,1)"}, {color:"rgba(0,0,0,1)", ease: Power2.easeIn});
}, false);

window.addEventListener("copy", function(){//copy something
    window.alert("hey this is annoying xd");
}, false);

window.addEventListener("resize", function(){//resize  reload
    if(timer != -1)
        clearTimeout(timer);
    timer = window.setTimeout("refreshPage()", 500);
}, false);

function refreshPage(){
    document.location.reload();
}

div.addEventListener("click", function(){ //sets the color to red when clicking the fun in the sun div
    div.style.color = "red";
});

p.addEventListener("click", function(event){ //sets the font to 30px when u click the fun in the sun paragraph
    event.stopPropagation(); //prevents the red from activating
    p.style.fontSize = "30px";
});

window.addEventListener("keydown", function(event){ //if u click escape itll launch a window
    if(event.keyCode === 27){
       window.open("", "", "width=100", "height=100");
    }
});