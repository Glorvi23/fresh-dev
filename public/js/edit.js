console.log("Server's running")
$(document).ready(function () {
    console.log("inside document.ready")
    $("#new-post-form").on("submit", function (event) {
        event.preventDefault();
        console.log("You successfully post")
        const newPost =
        {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            email: $("#email").val(),
            school: $("#school").val(),
            mainLanguage: $("#mainLanguage").val(),
            subLanguage: $("#subLanguage").val(),
            linkedIn: $("#linkedIn").val(),
            gitHub: $("#gitHub").val(),
            resume: $("#resume").val(),
            description: $("#description").val(),
        };
        console.log(newPost);

        const id = $("#student-id").val();

        alert("Successfully Edited The Post!");
        
        $.ajax({
            url: `/api/students/${id}`,
            method: "PUT",
            data: newPost,
        }).then((response) => {
            console.log(response);
            window.location.href = "/students/saved";
        });
    });
});