function hea(){
    let newHeading = document.getElementById("texy").value;
    document.getElementById("info-text").innerText = newHeading;
}

let isVisible = true;

function bippity() {
    let heading = document.querySelector('h2');
    
    if (isVisible) {
        heading.style.visibility = 'hidden';
        document.getElementById('vanish').innerHTML = "Make it reappear";
    } else {
        heading.style.visibility = 'visible';
        document.getElementById('vanish').innerHTML = "Make it disappear";
    }
    
    isVisible = !isVisible;
}

function fontchoice1() {
    let font1 = document.getElementById('font1').value;
    document.getElementById('info-text').style.fontFamily = font1;   
}


function fontchoice2() {
    let font2 = document.getElementById('font2').value;
    document.getElementById('info-text').style.fontFamily = font2;
}



function fontchoice3() {
    let font3 = document.getElementById('font3').value;
    document.getElementById('info-text').style.fontFamily = font3;   
}

function adjustBoxSize(){
    size = document.getElementById('box-width').value + 'px';
    box = document.getElementById('contain');
    box.style.width = size;
}

function chooseImage(){
    let choice = document.getElementById('dropdown').value;
    let imageChoice = document.getElementById('imgChoice');
    imageChoice.src = choice;
}
