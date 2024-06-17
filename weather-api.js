
// WEATHER API

//Condition Map

const icons = {
    "01d": "/icons/01d.png",
    "01n": "/icons/01n.png",
    "02d": "/icons/02d.png",
    "02n": "/icons/02n.png",
    "03d": "/icons/03d.png",
    "03n": "/icons/03n.png",
    "04d": "/icons/04d.png",
    "04n": "/icons/04n.png",
    "09d": "/icons/09d.png",
    "09n": "/icons/09n.png",
    "10d": "/icons/10d.png",
    "10n": "/icons/10n.png",
    "11d": "/icons/11d.png",
    "11n": "/icons/11n.png",
    "13d": "/icons/13d.png",
    "13n": "/icons/13n.png",
    "50d": "/icons/50d.png",
    "50n": "/icons/50n.png",
    "unknown": "/icons/unknown.png"

}

const imgSize = "90px";

// JUNEAU DATA
async function getJuneauData(){

    const apiKey = 'a86b584a74811c1ad1daaf95236b9fe9';
    const city = 'juneau';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    try{

        // Fetching the data
        const response = await fetch(url);

        // If not ok then throw an error
        if(!response.ok){
            throw new Error("Could not find City");
        }
        // store the data in data in json format
        const data = await response.json();
        console.log(data);

        // grabbing each element of the data 
        const city = data.name
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        const icon = data.weather[0].icon;

        // getting the ID elements 
        const juneauName = document.getElementById("juneau-name");
        const juneauTemp = document.getElementById("juneau-temp");
        const juneauWeather = document.getElementById("juneau-weather");
        const juneauIcon = document.getElementById("juneau-icon");

        // Pushing the data results to the cities
        juneauName.innerHTML = city;
        juneauTemp.innerHTML = `${Math.floor(temp)}°F`;
        //juneauWeather.innerHTML = weather;
        //juneauIcon.innerHTML = icon;

        // Create Image element
        const img = document.createElement("img");

        // Switch cases for each weather type
        if(icon === "01d"){
            // sets the source to the image path
            img.src= icons["01d"];
       }
        else if(icon === "01n"){
                img.src= icons["01n"];
        }
        else if(icon === "02d"){
                img.src= icons["02d"];
        }
        else if(icon === "02n"){
                img.src= icons["02n"];
        }
        else if(icon === "03d"){
                img.src= icons["03d"];
        }
        else if(icon === "03n"){
                img.src= icons["03n"];
        }
        else if(icon === "04d"){
                img.src= icons["04d"];
        }
        else if(icon === "04n"){
                img.src= icons["04n"];
        }
        else if(icon === "09d"){
                img.src= icons["09d"];
        }
        else if(icon === "09n"){
                img.src= icons["09n"];
        }
        else if(icon === "10d"){
                img.src= icons["10d"];
        }
        else if(icon === "10n"){
                img.src= icons["10n"];
        }
        else if(icon === "11d"){
                img.src= icons["11d"];
        }
        else if(icon === "11n"){
                img.src= icons["11n"];
        }
        else if(icon === "13d"){
                img.src= icons["13d"];
                const iconBack = document.getElementById("juneau-icon");
                iconBack.style.backgroundColor = "#5F7279"; 
        }
        else if(icon === "13n"){
                img.src= icons["13n"];
                const iconBack = document.getElementById("juneau-icon");
                iconBack.style.backgroundColor = "#5F7279"; 
        }
        else if(icon === "50d"){
                img.src= icons["50d"];
        }
        else if(icon === "50N"){
                img.src= icons["50n"];
        }
        else {
            img.src = icons["unknown"];
        }

        // resize image
        img.style.width = imgSize;
        img.style.height = imgSize;

        // set the image into the element
        juneauIcon.appendChild(img);

    }

    // if error occurs
    catch(error){
        console.error(error)
    }
}

getJuneauData();



// KETCHIKAN DATA
async function getKetchikanData(){

    const apiKey = 'a86b584a74811c1ad1daaf95236b9fe9';
    const city = 'ketchikan';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    let  = "/icons/01d.png"



    try{

        // Fetching the data
        const response = await fetch(url);

        // If not ok then throw an error
        if(!response.ok){
            throw new Error("Could not find City");
        }
        // store the data in data in json format
        const data = await response.json();
        console.log(data);

        // grabbing each element of the data 
        const city = data.name
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        const icon = data.weather[0].icon;

        // getting the ID elements 
        const ketchikanName = document.getElementById("ketchikan-name");
        const ketchikanTemp = document.getElementById("ketchikan-temp");
        const ketchikanWeather = document.getElementById("ketchikan-weather");
        const ketchikanIcon = document.getElementById("ketchikan-icon");

        // Pushing the data results to the cities
        ketchikanName.innerHTML = city;
        ketchikanTemp.innerHTML = `${Math.floor(temp)}°F`;
       //ketchikanWeather.innerHTML = weather;
        //ketchikanIcon.innerHTML = icon;

        // Create Image element
        const img = document.createElement("img");

        // Switch cases for each weather type
        if(icon === "01d"){
                // sets the source to the image path
                img.src= icons["01d"];
       }
        else if(icon === "01n"){
                img.src= icons["01n"];
        }
        else if(icon === "02d"){
                img.src= icons["02d"];
        }
        else if(icon === "02n"){
                img.src= icons["02n"];
        }
        else if(icon === "03d"){
                img.src= icons["03d"];
        }
        else if(icon === "03n"){
                img.src= icons["03n"];
        }
        else if(icon === "04d"){
                img.src= icons["04d"];
        }
        else if(icon === "04n"){
                img.src= icons["04n"];
        }
        else if(icon === "09d"){
                img.src= icons["09d"];
        }
        else if(icon === "09n"){
                img.src= icons["09n"];
        }
        else if(icon === "10d"){
                img.src= icons["10d"];
        }
        else if(icon === "10n"){
                img.src= icons["10n"];
        }
        else if(icon === "11d"){
                img.src= icons["11d"];
        }
        else if(icon === "11n"){
                img.src= icons["11n"];
        }
        else if(icon === "13d"){
                img.src= icons["13d"];
                const iconBack = document.getElementById("ketchikan-icon");
                iconBack.style.backgroundColor = "#5F7279"; 
        }
        else if(icon === "13n"){
                img.src= icons["13n"];
                const iconBack = document.getElementById("ketchikan-icon");
                iconBack.style.backgroundColor = "#5F7279"; 
        }
        else if(icon === "50d"){
                img.src= icons["50d"];
        }
        else if(icon === "50N"){
                img.src= icons["50n"];
        }
        else {
            img.src = icons["unknown"];
        }

        // resize image
        img.style.width = imgSize;
        img.style.height = imgSize;

        // set the image into the element
        ketchikanIcon.appendChild(img);

    }

    // if error occurs
    catch(error){
        console.error(error)
    }
}

getKetchikanData();



// ANCHoRAGE DATA
async function getAnchorageData(){

    const apiKey = 'a86b584a74811c1ad1daaf95236b9fe9';
    const city = 'anchorage';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    try{

        // Fetching the data
        const response = await fetch(url);

        // If not ok then throw an error
        if(!response.ok){
            throw new Error("Could not find City");
        }
        // store the data in data in json format
        const data = await response.json();
        console.log(data);

        // grabbing each element of the data 
        const city = data.name
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        const icon = data.weather[0].icon;

        // getting the ID elements 
        const anchorageName = document.getElementById("anchorage-name");
        const anchorageTemp = document.getElementById("anchorage-temp");
        const anchorageWeather = document.getElementById("anchorage-weather");
        const anchorageIcon = document.getElementById("anchorage-icon");

        // Pushing the data results to the cities
        anchorageName.innerHTML = city;
        anchorageTemp.innerHTML = `${Math.floor(temp)}°F`;
        //anchorageWeather.innerHTML = weather;
        //anchorageIcon.innerHTML = icon;

        // Create Image element
        const img = document.createElement("img");

        // Switch cases for each weather type
        if(icon === "01d"){
            // sets the source to the image path
            img.src= icons["01d"];
       }
        else if(icon === "01n"){
                img.src= icons["01n"];
        }
        else if(icon === "02d"){
                img.src= icons["02d"];
        }
        else if(icon === "02n"){
                img.src= icons["02n"];
        }
        else if(icon === "03d"){
                img.src= icons["03d"];
        }
        else if(icon === "03n"){
                img.src= icons["03n"];
        }
        else if(icon === "04d"){
                img.src= icons["04d"];
        }
        else if(icon === "04n"){
                img.src= icons["04n"];
        }
        else if(icon === "09d"){
                img.src= icons["09d"];
        }
        else if(icon === "09n"){
                img.src= icons["09n"];
        }
        else if(icon === "10d"){
                img.src= icons["10d"];
        }
        else if(icon === "10n"){
                img.src= icons["10n"];
        }
        else if(icon === "11d"){
                img.src= icons["11d"];
        }
        else if(icon === "11n"){
                img.src= icons["11n"];
        }
        else if(icon === "13d"){
                img.src= icons["13d"];
                const iconBack = document.getElementById("anchorage-icon");
                iconBack.style.backgroundColor = "#5F7279"; 
        }
        else if(icon === "13n"){
                img.src= icons["13n"];
                const iconBack = document.getElementById("anchorage-icon");
                iconBack.style.backgroundColor = "#5F7279"; 
        }
        else if(icon === "50d"){
                img.src= icons["50d"];
        }
        else if(icon === "50N"){
                img.src= icons["50n"];
        }
        else {
            img.src = icons["unknown"];
        }

        // resize image
        img.style.width = imgSize;
        img.style.height = imgSize;

        // set the image into the element
        anchorageIcon.appendChild(img);

    }

    // if error occurs
    catch(error){
        console.error(error)
    }
}

getAnchorageData();



// SEATTLE DATA
async function getSeattleData(){

    const apiKey = 'a86b584a74811c1ad1daaf95236b9fe9';
    const city = 'seattle';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    try{

        // Fetching the data
        const response = await fetch(url);

        // If not ok then throw an error
        if(!response.ok){
            throw new Error("Could not find City");
        }
        // store the data in data in json format
        const data = await response.json();
        console.log(data);

        // grabbing each element of the data 
        const city = data.name
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        const icon = data.weather[0].icon;

        // getting the ID elements 
        const seattleName = document.getElementById("seattle-name");
        const seattleTemp = document.getElementById("seattle-temp");
        const seattleWeather = document.getElementById("seattle-weather");
        const seattleIcon = document.getElementById("seattle-icon");

        // Pushing the data results to the cities
        seattleName.innerHTML = city;
        seattleTemp.innerHTML = `${Math.floor(temp)}°F`;
        //seattleWeather.innerHTML = weather;
        //seattleIcon.innerHTML = icon;

        // Create Image element
        const img = document.createElement("img");

        // Switch cases for each weather type
        if(icon === "01d"){
            // sets the source to the image path
            img.src= icons["01d"];
       }
        else if(icon === "01n"){
                img.src= icons["01n"];
        }
        else if(icon === "02d"){
                img.src= icons["02d"];
        }
        else if(icon === "02n"){
                img.src= icons["02n"];
        }
        else if(icon === "03d"){
                img.src= icons["03d"];
        }
        else if(icon === "03n"){
                img.src= icons["03n"];
        }
        else if(icon === "04d"){
                img.src= icons["04d"];
        }
        else if(icon === "04n"){
                img.src= icons["04n"];
        }
        else if(icon === "09d"){
                img.src= icons["09d"];
        }
        else if(icon === "09n"){
                img.src= icons["09n"];
        }
        else if(icon === "10d"){
                img.src= icons["10d"];
        }
        else if(icon === "10n"){
                img.src= icons["10n"];
        }
        else if(icon === "11d"){
                img.src= icons["11d"];
        }
        else if(icon === "11n"){
                img.src= icons["11n"];
        }
        else if(icon === "13d"){
                img.src= icons["13d"];
                const iconBack = document.getElementById("seattle-icon");
                iconBack.style.backgroundColor = "#5F7279"; 
        }
        else if(icon === "13n"){
                img.src= icons["13n"];
                const iconBack = document.getElementById("seattle-icon");
                iconBack.style.backgroundColor = "#5F7279"; 
        }
        else if(icon === "50d"){
                img.src= icons["50d"];
        }
        else if(icon === "50N"){
                img.src= icons["50n"];
        }
        else {
            img.src = icons["unknown"];
        }

        // resize image
        img.style.width = imgSize;
        img.style.height = imgSize;

        // set the image into the element
        seattleIcon.appendChild(img);

    }

    // if error occurs
    catch(error){
        console.error(error)
    }
}

getSeattleData();