$("#search").on("click", function (){
    let yourkey = "o3kvEj2HXoHJy8nusb7wrgGQmZPtY1i1"
    //$("#searchterm").val
    let search = $("#searchterm").val();
    let num = $("#retrieve").val();
    let startyear =  $("#startyear").val();
    let endyear =  $("#endyear").val();

    console.log(search + num + startyear + endyear);

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
});