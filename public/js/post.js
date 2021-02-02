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
        // Alert if those conditions are not met
        // if (
        
        //     !newPost.firstName ||
        //     !newPost.lastName ||
        //     !newPost.email ||
        //     !newPost.school ||
        //     !newPost.mainLanguage ||
        //     !newPost.linkedIn ||
        //     !newPost.gitHub 
        // ) {
        //     console.log(!newPost.firstName);
        //     alert("Please complete all the required fields!");
        // } else {
            alert("You Successfully Posted Your Form!");

            $.ajax({
                url: "/api/students",
                method: "POST",
                data: newPost,
            }).then((response) => {
                console.log(response);
                window.location.href = "/students";
            });
        // }
    });
});