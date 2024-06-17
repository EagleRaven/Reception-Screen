// API KEY - 2FGErtEwOrQBwx4P0PF1KevlgO18pdst
// 
//https://api.windy.com/

// JUNEAU WEBCAM DATA

async function getJuneauCam(){

    const apiKey = "2FGErtEwOrQBwx4P0PF1KevlgO18pdst";
    const url = `https://api.windy.com/api/webcams/v3/`;

    try{

        // Fetch data
        const response = await fetch(url);

        // If no response, throw error
        if(!response.ok){
            throw new Error("Could not find City");
        }

        // Store data in JSON format
        const data = await response.json();
        console.log(data);
    }

    // If error occurs
    catch(error){
        console.error(error);
    }

}


getJuneauCam();