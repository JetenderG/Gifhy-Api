var holiday = ["Birthday", "Christmas", "Easter", "Fourth of July", "Halloween", "New Years", "Thanksgiving", "Valentimes", "Wedding"];

var num = 0;

function buttonDisplay() {

    $("#button-container").empty();

    for (var i = 0; i < holiday.length; i++) {

        var day = $("<button>");

        day.addClass("movieButton");

        day.attr("data-name", holiday[i]);

        day.text(holiday[i]);

        $("#button-container").append(day);
    }

}


function gifWork() {


    var buttondata = $(this).attr("data-name");

    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=BvXWsiFM8S2KrBFiKAkWAn1yZ7JIl6W9&q=" + buttondata + "&limit=10&offset=0&rating=G&lang=en"

    $.ajax({

        url: queryUrl,
        method: "GET",

    }).then(function (response) {


        for (var i = 0; i < response.data.length; i++) {
            var displaytext = $("<p>");

            var gif = $("<img>").addClass("gifimage");

            var display = $("#moviedisplay");

            var containerGT = $("<div>");

            displaytext.html(response.data[i].rating);

            gif.attr("src", response.data[i].images.fixed_height_still.url)



            display.append(displaytext, gif)

        }
        return gif;
    });
}

$(document).on("click", ".gifimage", function () {
    console.log("hi");

    $(this).attr({

        "data-state": "still",
        "data-still": "",
        "data-animate": "response.data[i].images.fixed_height.ur",

    });

    $(this).attr()


    if (state === "still") {
        var value = $(this).attr("data-animate");
        $(this).attr("src", value);
        // $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else if (state === "animate") {
        // else {

        var value = $(this).attr("data-still");
        $(this).attr("src", value);
        $(this).attr("data-state", "still");
    }


    var gifStill = $(this).attr("fixed_height_still", url);

    var gifAnimate = $(this).attr("fixed_height", url);

    var clicked = $(this).attr("data-state");

    if (clicked === "state") {


        $(this).attr("data-state", "animate");

        state.attr("src", "fixed_height", "url");

    } else if (clicked === "animate") {

        state.attr("src", $(this).attr("fixed_height_still", "url"))

        $(this).attr("data-state", "still");


    }





});

$("#submit").on("click", function () {

    event.preventDefault();

    var btninfo = $("#addbtn").val()


    holiday.push(btninfo);



    buttonDisplay();

})


buttonDisplay();

$(document).on("click", ".movieButton", gifWork);