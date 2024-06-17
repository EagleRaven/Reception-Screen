// https://airlabs.co/alaska-airlines-developer-api

// https://openskynetwork.github.io/opensky-api/rest.html#limitations 



// JUNEAU AIRPORT DATA

async function getJuneauFlights(){

    const url = 'https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json';

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


getJuneauFlights();