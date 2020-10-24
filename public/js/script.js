// // Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function () {
    $(".eatBtn").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        console.log("ID:"+id);

        var wasDevoured = {
            devoured: true
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: wasDevoured,
        })
        .then(function () {
            location.reload();
        });
    });

    $(".addburger").on("click", function(event) {
        event.preventDefault();
        console.log("burgername:" + burgerName)
        var addBurger = {
            burgerName: $("#burgerName").val(),
            devoured: 0
        };

        $.ajax("/api/burger/", {
            type: "POST",
            data: addBurger
        })
        .then(function() {
            console.log("New Burger Added!");
            location.reload();
        });
    });
});