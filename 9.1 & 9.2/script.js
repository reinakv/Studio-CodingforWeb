function bippity() {
    let div1 = document.getElementById('div1');
    let btn1 = document.getElementById('btn1');
    
    let isVisible = (div1.style.visibility === "visible");

    if (isVisible) {
        div1.style.visibility = "hidden";  
        btn1.innerHTML = "Make it reappear";
    } else {
        div1.style.visibility = "visible";
        btn1.innerHTML = "Make it disappear";
    }
}

function boppity(){
    let btn2 = document.getElementById('btn2');
    let div2 = document.getElementById('div2');
    let isVisible = (div2.style.visibility === "visible");
    if (isVisible) {
        div2.style.visibility = 'hidden';
        btn2.innerHTML = "Make it reappear";
    } else {
        div2.style.visibility = 'visible';
        btn2.innerHTML = "Make it disappear";
    }
}

btn2.addEventListener("click", boppity);



let clo = document.getElementsByClassName('clo');

for (let closeButton of clo) {
    closeButton.addEventListener('click', function() {
        closeButton.parentElement.style.visibility = "hidden";
    });
}

/*
const cloButtons = document.getElementsByClassName("clo");
var n;
for (n = 0; n < cloButtons.length; n++) {
    cloButtons[n].addEventListener("click", function() {
        this.parentElement.style.visibility = "hidden";
    });
}
*/
