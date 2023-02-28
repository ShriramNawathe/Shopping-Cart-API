// A function named `jsonFetch` which returns a Promise
let jsonFetch = (e) => {
    return new Promise((resolve, reject) => {
         // the fetch API to retrieve data from the specified file
      fetch("list.json")
        .then((r) => {
  // If the API response is successful, resolve the Promise with the JSON data
          if (r.ok) {
            resolve(r.json());
          } else {
   // Otherwise, reject the Promise with an error message
            reject(new Error("Failed to retrieve data from API"));
          }
        })
        .catch((e) => {
    // Catch any network or fetch-related errors and reject the Promise with the error
          reject(e);
        });
    });
  }; 
// Call the `fetchData` function
  jsonFetch()
    .then((eleInfo) => {
 // If the Promise returned by `fetchData` is resolved, the code inside this block will be executed
    // Use the data retrieved from the API      
      let eleC = document.querySelector(".eleC"); 
  // Iterate over the products in the data and create a product element for each one     
      eleInfo.products.forEach((ele) => {   
          let eleD = document.createElement("span");
          eleD.classList.add("elementList");
     // Create the HTML for the product element using template literals        
          eleD.innerHTML = `
          <div>
            <img src="${ele.thumbnail}" alt="${ele.title}" class="eleImage" id="eleImage">
          </div>
          <div>
              <h3 class="innerBox">${ele.title}</h3>
          </div>
          <div>
              <p class="innerBox">Brand: ${ele.brand}</p>
          </div>
          <div>
              <p class="innerBox">Price: ${ele.price}</p>
          </div>
          <div> 
              <p class="innerBox">Rating: ${ele.rating}</p>
          </div>
          <div>
              <p class="innerBox">Stock: ${ele.stock}</p>
          </div>
          
                
                        
                
// Append the product element to the product container               
               
                
           `;
         eleC.appendChild(eleD);
       });
    })
    .catch(() => {
  // If the Promise returned by `fetchData` is rejected, the code inside this block will be executed
    // Handle any errors that occurred during the API call    
      console.error();
    });
