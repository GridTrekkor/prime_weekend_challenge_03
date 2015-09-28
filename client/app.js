// client

$(document).ready(function() {

    var currentPerson = 0;

    $.ajax({
        url: "/data.json"
    }).done(function(data) {

        // append circle indicators
        for (var i = 0; i < data.length; i++) {
            $(".carousel-indicators").append("<li data-target='#myCarousel' data-slide-to='" +  i + "' title='" + data[i].Name + "'></li>");
        }

        // click on a circle indicator
        $(".carousel-indicators li").click(function() {
            currentPerson = $(this).data("slide-to");
            displayInfo(currentPerson);
        });

        displayInfo(currentPerson);

        var max = (data.length) - 1;

        // click previous or next arrows
        $("#previous").click(function() {
            if (currentPerson == 0) {
                currentPerson = max;
            } else {
                currentPerson--;
            }
            displayInfo(currentPerson);
        });

        $("#next").click(function() {
            if (currentPerson == max) {
                currentPerson = 0;
            } else {
                currentPerson++;
            }
            displayInfo(currentPerson);
        });

        // output JSON data
        function displayInfo(currentPerson) {
            //console.log(currentPerson);
            $(".carousel-indicators li").attr("class", "");
            $("#name").text((currentPerson + 1) + ": " + data[currentPerson].Name);
            $("#description").text(data[currentPerson].Description);
            $("#shoutout").text(data[currentPerson].Shoutout);
            $(".carousel-indicators li").eq(currentPerson).attr("class", "active");
        }

    });

});