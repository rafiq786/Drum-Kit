
//button event click
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0 ; i < numberOfDrumButton ; i++ ){
document.querySelectorAll("button")[i].addEventListener("click", function(){
    var buttonInnerHtml = this.innerHTML;

    makesound(buttonInnerHtml); 
    buttonAnimation(buttonInnerHtml) ; 
    

});
}

//keyboard event press
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key){
    
    switch (key) {
        case 'R':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'A':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play()
            break;

        case 'F':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play()
            break;  
            
        case 'I':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play()
            break;

        case 'Q':
            var crash = new Audio("sounds/crash.mp3");
            crash.play()
            break;      
        
        case 'K':
            var snare = new Audio("sounds/snare.mp3");
            snare.play()
            break; 

        case 'L':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play()
            break;     


    
        default: console.log(buttonInnerHtml)

    }
}

function buttonAnimation(currentkey){
    var activeButtons = document.querySelector("." + currentkey);
    activeButtons.classList.add("pressed");

    setTimeout(function(){
        activeButtons.classList.remove("pressed");
    }, 100);
}