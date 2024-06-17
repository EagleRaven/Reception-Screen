

// MOVING BOXES

// MOVING WEATHER BOX

trans_speed = 20000; // 10 seconds

const weather_add_x = 5;
const weather_add_y = 5;

function moveWeatherBoxUp(){
    
    const moveWeatherBoxUp = setInterval(function(){
        const weather_box = document.getElementById("weather-box"); //get div box
    
        weather_box.style.visibility = "visible";

        let newMarginTop = parseInt(weather_box.style.top) || 0;
        newMarginTop -= weather_add_y;

        weather_box.style.top = newMarginTop + "px";
    
        if(weather_box.offsetTop <= 700 - 500){
            clearInterval(moveWeatherBoxUp);
            setTimeout(moveWeatherBoxRight, trans_speed) ;
        }

    }, 1);
}



function moveWeatherBoxRight(){
    const moveWeatherBoxRight = setInterval(function(){
        const weather_box = document.getElementById("weather-box"); //get div box

        let newMarginLeft = parseInt(weather_box.style.left) || 0;
        newMarginLeft += weather_add_x;

        weather_box.style.left = newMarginLeft + "px";

        if(weather_box.offsetLeft >= 1900){
            clearInterval(moveWeatherBoxRight);
            setTimeout((moveWeatherBoxDown), trans_speed);
            weather_box.style.visibility = "hidden";
        }

        
    }, 1);
}

function moveWeatherBoxDown(){
    const moveWeatherBoxDown = setInterval(function(){
        const weather_box = document.getElementById("weather-box"); //get div box

        let newMarginTop = parseInt(weather_box.style.top) || 0;
        newMarginTop += weather_add_y;

        weather_box.style.top = newMarginTop + "px";

        if(weather_box.offsetTop >= 900){
            clearInterval(moveWeatherBoxDown);
            setTimeout((moveWeatherBoxLeft), trans_speed);
        }

    }, 1);
}

function moveWeatherBoxLeft(){
    const moveWeatherBoxLeft = setInterval(function(){
        const weather_box = document.getElementById("weather-box"); //get div box

        let newMarginLeft = parseInt(weather_box.style.left) || 0;
        newMarginLeft -= weather_add_x;

        weather_box.style.left = newMarginLeft + "px";

        if(weather_box.offsetLeft <= 950){
            clearInterval(moveWeatherBoxLeft);
            setTimeout((moveWeatherBoxUp), trans_speed);
        }

    }, 1);
}

setTimeout(moveWeatherBoxRight, trans_speed);


// MOVING FLIGHT BOX
const flight_add_x = 5;
const flight_add_y = 5;

function moveFlightBoxUp(){
    
    const moveFlightBoxUp = setInterval(function(){
        const flight_box = document.getElementById("flight-box"); //get div box
    
        flight_box.style.visibility = "visible";

        let newMarginTop = parseInt(flight_box.style.top) || 0;
        newMarginTop -= flight_add_y;

        flight_box.style.top = newMarginTop + "px";
    
        if(flight_box.offsetTop <= 700 - 500){
            clearInterval(moveFlightBoxUp);
            setTimeout(moveFlightBoxRight, trans_speed) ;
        }
    
    
    }, 1);
}


function moveFlightBoxRight(){
    const moveFlightBoxRight = setInterval(function(){
        const flight_box = document.getElementById("flight-box"); //get div box

        let newMarginLeft = parseInt(flight_box.style.left) || 0;
        newMarginLeft += flight_add_x;

        flight_box.style.left = newMarginLeft + "px";

        if(flight_box.offsetLeft >= 1900){
            clearInterval(moveFlightBoxRight);
            setTimeout((moveFlightBoxDown), trans_speed);
            flight_box.style.visibility = "hidden";
        }

    }, 1);
}

function moveFlightBoxDown(){
    const moveFlightBoxDown = setInterval(function(){
        const flight_box = document.getElementById("flight-box"); //get div box

        let newMarginTop = parseInt(flight_box.style.top) || 0;
        newMarginTop += flight_add_y;

        flight_box.style.top = newMarginTop + "px";

        if(flight_box.offsetTop >= 900){
            clearInterval(moveFlightBoxDown);
            setTimeout((moveFlightBoxLeft), trans_speed);
        }

    }, 1);
}

function moveFlightBoxLeft(){
    const moveFlightBoxLeft = setInterval(function(){
        const flight_box = document.getElementById("flight-box"); //get div box

        let newMarginLeft = parseInt(flight_box.style.left) || 0;
        newMarginLeft -= flight_add_x;

        flight_box.style.left = newMarginLeft + "px";

        if(flight_box.offsetLeft <= 950){
            clearInterval(moveFlightBoxLeft);
            setTimeout((moveFlightBoxUp), trans_speed);
        }

    }, 1);
}

setTimeout(moveFlightBoxDown, trans_speed);



// MOVING NEWS BOX
const news_add_x = 5;
const news_add_y = 5;

function moveNewsBoxUp(){
    
    const moveNewsBoxUp = setInterval(function(){
        const news_box = document.getElementById("news-box"); //get div box
    
        news_box.style.visibility = "visible";

        let newMarginTop = parseInt(news_box.style.top) || 0;
        newMarginTop -= news_add_y;

        news_box.style.top = newMarginTop + "px";
    
        if(news_box.offsetTop <= 700 - 500){
            clearInterval(moveNewsBoxUp);
            setTimeout(moveNewsBoxRight, trans_speed) ;
        }

    }, 1);
}


function moveNewsBoxRight(){
    const moveNewsBoxRight = setInterval(function(){
        const news_box = document.getElementById("news-box"); //get div box

        let newMarginLeft = parseInt(news_box.style.left) || 0;
        newMarginLeft += news_add_x;

        news_box.style.left = newMarginLeft + "px";

        if(news_box.offsetLeft >= 1900){
            clearInterval(moveNewsBoxRight);
            setTimeout((moveNewsBoxDown), trans_speed);
            news_box.style.visibility = "hidden";
        }

    }, 1);
}

function moveNewsBoxDown(){
    const moveNewsBoxDown = setInterval(function(){
        const news_box = document.getElementById("news-box"); //get div box

        let newMarginTop = parseInt(news_box.style.top) || 0;
        newMarginTop += news_add_y;

        news_box.style.top = newMarginTop + "px";

        if(news_box.offsetTop >= 900){
            clearInterval(moveNewsBoxDown);
            setTimeout((moveNewsBoxLeft), trans_speed);
        }

    }, 1);
}

function moveNewsBoxLeft(){
    const moveNewsBoxLeft = setInterval(function(){
        const news_box = document.getElementById("news-box"); //get div box

        let newMarginLeft = parseInt(news_box.style.left) || 0;
        newMarginLeft -= news_add_x;

        news_box.style.left = newMarginLeft + "px";

        if(news_box.offsetLeft <= 950){
            clearInterval(moveNewsBoxLeft);
            setTimeout((moveNewsBoxUp), trans_speed);
        }
        
    }, 1);
}

setTimeout(moveNewsBoxUp, trans_speed);


// MOVING COMPANY BOX
const company_add_x = 5;
const company_add_y = 5;

function moveCompanyBoxUp(){
    
    const moveCompanyBoxUp = setInterval(function(){
        const company_box = document.getElementById("company-box"); //get div box

        company_box.style.visibility = "visible";

        let newMarginTop = parseInt(company_box.style.top) || 0;
        newMarginTop -= company_add_y;

        company_box.style.top = newMarginTop + "px";
    
        if(company_box.offsetTop <= 700 - 500){
            clearInterval(moveCompanyBoxUp);
            setTimeout(moveCompanyBoxRight, trans_speed) ;
        }
    
    
    }, 1);
}


function moveCompanyBoxRight(){
    const moveCompanyBoxRight = setInterval(function(){
        const company_box = document.getElementById("company-box"); //get div box

        let newMarginLeft = parseInt(company_box.style.left) || 0;
        newMarginLeft += company_add_x;

        company_box.style.left = newMarginLeft + "px";

        if(company_box.offsetLeft >= 1900){
            clearInterval(moveCompanyBoxRight);
            setTimeout((moveCompanyBoxDown), trans_speed);
            company_box.style.visibility = "hidden";
        }

    }, 1);
}

function moveCompanyBoxDown(){
    const moveCompanyBoxDown = setInterval(function(){
        const company_box = document.getElementById("company-box"); //get div box

        let newMarginTop = parseInt(company_box.style.top) || 0;
        newMarginTop += company_add_y;

        company_box.style.top = newMarginTop + "px";

        if(company_box.offsetTop >= 900){
            clearInterval(moveCompanyBoxDown);
            setTimeout((moveCompanyBoxLeft), trans_speed);
        }

    }, 1);
}

function moveCompanyBoxLeft(){
    const moveCompanyBoxLeft = setInterval(function(){
        const company_box = document.getElementById("company-box"); //get div box

        company_box.style.visibility = "hidden";

        let newMarginLeft = parseInt(company_box.style.left) || 0;
        newMarginLeft -= company_add_x;

        company_box.style.left = newMarginLeft + "px";

        if(company_box.offsetLeft <= 950){
            clearInterval(moveCompanyBoxLeft);
            setTimeout((moveCompanyBoxUp), trans_speed);
        }

    }, 1);
}

setTimeout(moveCompanyBoxLeft, trans_speed);




























