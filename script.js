var follow = $("#follow");

//changement bouton follow
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

var likes =0;
//changement likes et cpteur de likes
$(".fa-heart").click(function() {
    $(".fa-heart").toggleClass("far fas");
    likes++
    $("#likes").text(likes);
});

// changement icone commentaire plus formulaire
$(".fa-comment").click(function() {
    $(".fa-comment").toggleClass("far fas");
    $("#comments").toggle();  //permet show ou hide
});


//ajout d'un commentaire
$("#comments button").click(function() {
    var message = $("#comments textarea").val();
    
//mettre le premier mot en strong    
    var words = message.split(' ');
    words[0] = "<strong>" + words[0] + "</strong>";
    words[1] = "<strong>" + words[1] + "</strong>";
    message = words.join(' ');

//ajout du p
    var paragraph = $("<p></p>");
    paragraph.html(message);
    $("#messages").append(paragraph);

    //vider textarea
    $("#comments textarea").val('');
    $(".fa-comment").toggleClass("far fas");
});


