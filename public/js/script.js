// // Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function () {
    $(".eatBtn").on("click", function (event) {
        event.preventDefault();
        const id = $(this).data("id");
        console.log("ID:" + id);

        const devour = {
            devour: true
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: devour,
        })
            .then(function () {
                location.reload();
            });
    });
});


$(".addburger").on("click", function(event) {
    event.preventDefault();

    var addBurger = {
        burgerName: $("#burgerArea").val(),
        devour: 0
    };

    $.ajax("/api/burger", {
        type: "POST",
        data: addBurger
    })
    .then(function() {
        console.log("New Burger Added!");
        location.reload();
    });
});
