

let yourkey = "o3kvEj2HXoHJy8nusb7wrgGQmZPtY1i1"
//$("#searchterm").val
let search = "election"
let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${yourkey}`


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    console.log(response);
    console.log(response.response.docs);
    response.response.docs.forEach(element => {
        console.log(element.headline.main);
        console.log("--" + element.byline.original)
        
        
    });
  });