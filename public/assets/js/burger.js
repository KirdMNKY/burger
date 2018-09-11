// ORM specific code

// var orm = require("../../../config/orm.js");

// Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
    // $(".devour").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/burgers/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("devoured id ", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
    $("#add-burger").on("click", function() {
      // Make sure to preventDefault on a submit event.
      // event.preventDefault();
  
      // var newBurger = {
      //   burger: $("#burger").val().trim(),
      //   devoured: false
      // };
      console.log("New Burger: ");
    
  
      // Send the POST request.
      // $.ajax("/api/burgers", {
      //   type: "POST",
      //   data: newBurger
      // }).then(
      //   function() {
      //     console.log("created new burger");
      //     // Reload the page to get the updated list
      //     location.reload();
      //   }
      // );
    });
  // });