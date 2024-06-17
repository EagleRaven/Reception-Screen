function dateTime(){
    // Create a new Date object
    var currentDate = new Date();

    // Array of day names
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get the index of the current day (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    let dayIndex = currentDate.getDay();

    // Get the long form of the current day
    let longDay = days[dayIndex];

    // Date
    const today = currentDate.getDate();

    //Months 
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //Get Month
    let monthIndex = currentDate.getMonth();

    // Name of Month
    const longMonth = months[monthIndex];

    // Year
    const year = currentDate.getFullYear();

    // Get element
    const dateID = document.getElementById("date");

    // Concatenate full date 
    const full_date = longDay + " " + today + " " + longMonth + " " + "<br>" + year;

    // Print it to dateID Div
    dateID.innerHTML = full_date;

}

dateTime();

function getTime(){
    const currentTime = new Date();

    // GET Hour
    let hour = currentTime.getHours();

    // Get Minute
    let minute = currentTime.getMinutes();

    //GET Seconds - NOT USED
    //let seconds = currentTime.getSeconds();

    // Get time element
    const timeID = document.getElementById("time");


    // Ensure nums less than 10 display as two digits
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    //seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Set am/pm to empty string
    let ampm = "";
    
    // Condition if am or pm
    if (hour < 12){
        ampm = "am";
    }
    else{
        ampm = "pm"
    }

    // Condition if hour is pm, set to 12 hour time 
    if (hour > 12){
        hour = hour - 12;
        
    }

    // Display the full time
    timeID.innerHTML = hour + ":" + minute + " " + ampm;
}

setInterval(getTime, 1000);