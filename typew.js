//TYPEWRITER EFFECT

let i = 0;
const speed = 50; // speed at which text is typed
const text = 'Welcome to |agle |aven |lobal';
const pause = 8000; //length of pause time after text is written

function typeWriter(){

    if (i < text.length){
        document.getElementById("welcome").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        if (text.charAt(i) === "|"){
            document.getElementById("welcome").innerHTML += '<br>';
        }
        if (i === 12 ){
            document.getElementById("welcome").innerHTML += '<span style="color: #E3252A;">E</span>';
        }
        if (i === 18 ){
            document.getElementById("welcome").innerHTML += '<span style="color: #E3252A;">R</span>';
        }
        if (i === 24 ){
            document.getElementById("welcome").innerHTML += '<span style="color: #E3252A;">G</span>';
        }
    }

    else {
        setTimeout(() => {
        i = 0;
        document.getElementById("welcome").innerHTML = '';
        typeWriter();
        }, pause);
    }
}

typeWriter();

//END OF TYPEWRITER EFFECT