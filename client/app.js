// client

$(document).ready(function() {

    var currentPerson = 0;

    $.ajax({
        url: "/data.json"
    }).done(function(data) {

        displayInfo(currentPerson);

        var max = (data.length) - 1;

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

        function displayInfo(currentPerson) {
            //console.log(currentPerson);
            $("#name").text((currentPerson + 1) + ": " + data[currentPerson].Name);
            $("#description").text(data[currentPerson].Description);
            $("#shoutout").text(data[currentPerson].Shoutout);
        }

    });

});