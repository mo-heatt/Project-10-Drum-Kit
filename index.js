var length = document.querySelectorAll(".drum").length;
for(var i = 0; i < length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var innerHTML = this.innerHTML
        makesound(innerHTML);
        animation(innerHTML);
    })
}
document.addEventListener("keypress",function(event){
    var key = event.key;
    makesound(key);
    animation(key);
})
function makesound(event){
    switch(event){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(event);
    }
}
function animation(paramenter) {
    var activebutton = document.querySelector("." + paramenter);
    activebutton.classList.add("pressed");
    setTimeout(function(animnation){
        activebutton.classList.remove("pressed");
    }, 100);
}