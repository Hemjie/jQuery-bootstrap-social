var follow = $("#follow");

follow.click(function() {
    if(follow.text() == "Follow") {
        follow.text("Unfollow");
        follow.addClass("btn-danger");
        follow.removeClass("btn-primary");
    } else {
        follow.text("Follow");
        follow.removeClass("btn-danger");
        follow.addClass("btn-primary");
    }
});

$(".fa-heart").click(function() {
    $(".fa-heart").toggleClass("far fas");
});