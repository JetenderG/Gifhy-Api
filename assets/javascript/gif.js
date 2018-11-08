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

            //   gif.attr("src", response.data[i].images.fixed_height_still.url)

            gif.attr({

                "data-state": "still",
                "src": response.data[i].images.fixed_height_still.url,
                "data-animate": response.data[i].images.fixed_height.url,
                "data-still": response.data[i].images.fixed_height_still.url,

            });

            display.append(displaytext, gif)

        }
    });
}

$(document).on("click", ".gifimage", function () {




    var imageSelect = $(this);





    var clicked = imageSelect.attr("data-state");


    if (clicked == "still") {

        var gifAnimate = $(this).attr("data-animate");

        $(this).attr("data-state", "animate");

        $(this).attr("src", $(this).attr(gifAnimate));
    } else if (clicked == "animate") {
        var gifStill = $(this).attr("data-still");

        $(this).attr("src", $(this).attr(gifStill));

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