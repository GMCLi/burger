// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devourbtn").on("click", function (event) {
        //id of the burger of button pressed
        var id = $(this).data("id");
        //devourState of that id changes from toDevour to Devoured





        
        var devourState = Devoured;
        var toDevour = $(this).data("toDevour");
        var Devoured = $(this).data("BurgerDevoured");
        console.log(id + this.devourState);
        


        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourState
        }).then(
            function () {
                console.log("changed devoured to", devourState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#addBurger").val().trim(),
        };

        // Send the POST request.
        $.ajax("/index/create", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    //     $(".delete-cat").on("click", function(event) {
    //       var id = $(this).data("id");

    //       // Send the DELETE request.
    //       $.ajax("/api/cats/" + id, {
    //         type: "DELETE"
    //       }).then(
    //         function() {
    //           console.log("deleted cat", id);
    //           // Reload the page to get the updated list
    //           location.reload();
    //         }
    //       );
    //     });
});
