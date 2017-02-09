$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 1500,
    complete: function() {
        // Called after the entrance animation is executed.
    }
});
$(window).keydown(function(e) {
    e.preventDefault(); //prevent default arrow key behavior

    var targetElement;
    //down
    if (e.keyCode == 40) {
        $targetElement = $('.active').next('section');
    }
    //up
    else if (e.keyCode == 38) {
        $targetElement = $('.active').prev('section');
    }
    //f5 work
    else if (e.keyCode == 116) {
        location.reload();
    }
    if (!$targetElement.length) {
        return;
    }
    $('.active').removeClass('active');
    $targetElement.addClass('active');

    //scroll element into view
    $('html, body').clearQueue().animate({
        scrollTop: $targetElement.offset().top
    }, 1000);
});

var delay = false;

$(document).on('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if (delay) return;

    delay = true;
    setTimeout(function() {
        delay = false
    }, 200)

    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    var a = document.getElementsByTagName('section');
    if (wd < 0) {
        for (var i = 0; i < a.length; i++) {
            var t = a[i].getClientRects()[0].top;
            if (t >= 40) break;
        }
    } else {
        for (var i = a.length - 1; i >= 0; i--) {
            var t = a[i].getClientRects()[0].top;
            if (t < -20) break;
        }
    }
    $('html,body').animate({
        scrollTop: a[i].offsetTop
    }, 500);
});
