function getPosts(){
    let endpoint = 'https://cors-anywhere.herokuapp.com/https://platform.fatsecret.com/js?key=5e2255f0f9874f5fa415fbd485105d2f';
          fetch(endpoint)
          .then((response=>{
            // Returning it in JSON format
              return response.json()
          }))
          .then((data=>{
            // Displaying it to the DOM
             let output = "<h3>Posts:</h3>"+
                         "<div class='form-group'>"+
                          // We will use this input later on to search for posts
                         "<input type='text' id='search' class='form-control' placeholder='search by title or ID..'>"+
                         "</div>";
              data.forEach(post => {
                  output += `
              <ul class="list-group mb-3" id="${post.id}">
                <li class="list-group-item"><strong>ID:</strong> ${post.id}</li>
                <li class="list-group-item"><strong>Title:</strong> ${post.title}</li>
                <li class="list-group-item"><strong>Body:</strong> ${post.body}</li>
              </ul>
            `;
              })}