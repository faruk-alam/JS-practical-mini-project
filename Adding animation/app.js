
for(var i = 0; i < 4;i++){
    document.querySelectorAll(".button")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        console.log(text);
        audioplay(text);
        playAnimation(text);
    })
}
function audioplay(text) {
    switch (text) {
        case "A":
            var audio = new Audio("mp3/Aa.mp3");
            audio.play();
            break;
    
        case "B":
            var audio = new Audio("mp3/Bb.mp3");
            audio.play();
            break;
    
        case "C":
            var audio = new Audio("mp3/Cc.mp3");
            audio.play();
            break;
    
        case "D":
            var audio = new Audio("mp3/Dd.mp3");
            audio.play();
            break;
    
       
    }
}
function playAnimation(text) {
   var buTTon = document.querySelector("."+text);
   buTTon.classList.add("animation");
   setTimeout(function() {
    buTTon.classList.remove("animation")

   },2000);
}