function hea(){
    let newHeading = document.getElementById("texy").value;
    document.getElementById("info").innerText = newHeading;
}

let isVisible = true;

function bippity() {
    let heading = document.querySelector('h2');
    
    if (isVisible) {
        heading.style.visibility = 'hidden';
    } else {
        heading.style.visibility = 'visible';
    }
    
    isVisible = !isVisible;
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
