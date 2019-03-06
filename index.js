console.log("Hello there ! Fellow developer !\nI have coded this using Bootstrap 4, there's alot of tutorials out there, particularly from w3schools ! (if you're curious)");

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        if ($(window).width() <= 768) {
            if (document.getElementById('content').style.marginLeft != '80px'){
                document.getElementById('content').style.marginLeft = '80px';
            }
            else {
                document.getElementById('content').style.marginLeft= '0px';
            }
        }
        else {
            if (document.getElementById('content').style.marginLeft != '80px'){
                document.getElementById('content').style.marginLeft = '80px';
            }
            else {
                document.getElementById('content').style.marginLeft= '250px';
            }
        }
    });
});

let prevWindowWidth = 0;

$(window).resize(function() {
    // prevent scrolling resizing: https://stackoverflow.com/questions/17711676/navbar-collapses-on-mobile-with-chrome-safari-on-scroll
    const currentWindowWidth = $(window).width();
    if(currentWindowWidth  === prevWindowWidth) {
        return;
    }
    prevWindowWidth = currentWindowWidth;
    $('#sidebar').toggleClass('active');
    if (currentWindowWidth <= 768) {
        if (document.getElementById('content').style.marginLeft != '80px'){
            document.getElementById('content').style.marginLeft = '80px';
        }
        else {
            document.getElementById('content').style.marginLeft= '0px';
        }
    }
    else {
        if (document.getElementById('content').style.marginLeft != '80px'){
            document.getElementById('content').style.marginLeft = '80px';
        }
        else {
            document.getElementById('content').style.marginLeft= '250px';
        }
    }
});