var pictures = ["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.png"];
var slides = document.getElementById("my-img");

var count = 0;

function next() {
    count++;
    if(count >= pictures.length){
        count = 0;
        slides.src = pictures[count];
    }
    else{
        slides.src = pictures[count];

    }

}

function prev() {
    count--;
    if(count <  0){
        count = pictures.length -1;
        slides.src = pictures[count];
    }
    else{
        slides.src = pictures[count];
    }
}