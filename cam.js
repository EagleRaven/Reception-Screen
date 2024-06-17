

    // Wait for the iframe content to load
    // document.getElementById('cam').onload = function() {
    //     // Get a reference to the iframe content window
    //     var iframeContentWindow = document.getElementById('cam').contentWindow;
        
    //     // Scroll to a specific point in the iframe content
    //     iframeContentWindow.scrollTo(0, 500); // Change 500 to your desired scroll position
    // };

    // // Iframe method. JS natively doesnt allow scrolling from other sources
    // function moveCam(){
    //     const camWindow = document.getElementById("cam").contentWindow;
        
    //     // Ensure the iframe content is fully loaded before scrolling
    //     camWindow.onload = function() {
    //         camWindow.scrollTo(0, 50); // Scroll to the desired position
    //     };
    // }

    // moveCam(); // Call the function


    fetch('https://webcams.thesnowcloud.com/')
    .then(response => response.text())
    .then(html => {
      // Parse the HTML response
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
  
      // Extract the content of a specific div element with id="content"
      const divContent = document.querySelector('div:nth-of-type(3)');
  
      // Display the extracted content
      document.getElementById('webcamid').innerHTML = divContent.innerHTML;
    })
    .catch(error => console.error('Error fetching the page:', error));


















