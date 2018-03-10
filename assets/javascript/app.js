$(document).ready(function() {

    var topics = ["StreetFighter", "Tekken", "Cats", "Lazers", "Panthers", "Star-Trek"];

    function showButtons() {

        for (var i = 0; i < topics.length; i++) {

            var button = $("<button>");

            $("#buttons").append(button);

            button.text(topics[i]);
            button.attr("data-gif", topics[i]);

            $(button).on("click", showGifs);
        }
    };
    showButtons();


    //Button click handler
    function showGifs() {
        $("#gifs").empty();
        //"This" refers to the button
        var gif = $(this).attr("data-gif");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=79zbuhszV1aAosrO1lehwmODjCJ0h0R3";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            var results = response.data;
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                var gifImage = $("<img>")
                $("#gifs").prepend(gifImage);
                gifImage.attr("src", results[i].images.fixed_height_small_still.url);
                gifImage.attr("data-still", results[i].images.fixed_height_small_still.url);
                gifImage.attr("data-animate", results[i].images.fixed_height_small.url);
                gifImage.attr("data-state", "still");
            }
        })
    };

});