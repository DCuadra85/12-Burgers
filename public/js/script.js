// // Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function () {
    $(".eatBtn").on("click", function (event) {
        event.preventDefault();
        const id = $(this).data("id");
        console.log("ID:" + id);

        const devoured = {
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


$(".addBurger").on("click", function(event) {
    event.preventDefault();

    const addBurger = {
        burgerName: $("#burgerArea").val(),
        devoured: 0
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
// $(function() {
//     $(".change-sleep").on("click", function(event) {
//       var id = $(this).data("id");
//       var newSleep = $(this).data("newsleep");

//       var newSleepState = {
//         sleepy: newSleep
//       };

//       // Send the PUT request.
//       $.ajax("/api/cats/" + id, {
//         type: "PUT",
//         data: newSleepState
//       }).then(
//         function() {
//           console.log("changed sleep to", newSleep);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });

//     $(".create-form").on("submit", function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();

//       var newCat = {
//         name: $("#ca").val().trim(),
//         sleepy: $("[name=sleepy]:checked").val().trim()
//       };

//       // Send the POST request.
//       $.ajax("/api/cats", {
//         type: "POST",
//         data: newCat
//       }).then(
//         function() {
//           console.log("created new cat");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
//   });
