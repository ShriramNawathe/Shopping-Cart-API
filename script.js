
let jsonFetch = (e) => {
    return new Promise((resolve, reject) => {
      
      fetch("list.json")
        .then((r) => {
        
          if (r.ok) {
            resolve(r.json());
          } else {
      
            reject(new Error("Failed to retrieve data from API"));
          }
        })
        .catch((e) => {
      
          reject(e);
        });
    });
  }; 
  jsonFetch()
    .then((eleInfo) => {
      let eleC = document.querySelector(".eleC"); 
      
      eleInfo.products.forEach((ele) => {   
          let eleD = document.createElement("span");
          eleD.classList.add("elementList");
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
          
                
                        
                
               
               
                
           `;
         eleC.appendChild(eleD);
       });
    })
    .catch(() => {
      
      console.error();
    });