console.log("Hello there ! Fellow developer !\nI have coded this using Bootstrap 4, there's alot of tutorials out there, particularly from w3schools ! (if you're curious)");

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        if (document.getElementById('content').style.marginLeft === '80px'){
            document.getElementById('content').style.marginLeft = '250px';
        }
        else {
            document.getElementById('content').style.marginLeft= '80px';
        }
    });
});