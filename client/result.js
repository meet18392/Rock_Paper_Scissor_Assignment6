$(document).ready(function fetchGameResult() {

    $(document).on("click", ":submit", function(event) {
        //alert($(this).val());
        
        if ($(this).val() != " ") {
            $("#Form").attr("action", "/play/" + $(this).val());
            $("#Form").submit();
        }
    });
    $.ajax({
        url: "/output",
        dataType: "json",
        success: function(data) {
           
            $("#result").empty();
            $("#result").append("<h3> result: " + data.outcome + "</h3>");
            $("#result").append("<h4>Wins:" + data.wins + "<br>  Losses:" +
                data.losses + "<br>  Ties:" + data.ties + "</h4>");
        },
        type: "POST"
    });
});