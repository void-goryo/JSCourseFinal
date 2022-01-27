/*function validate() {
    var num = document.getElementById('phone').value;
    if()
}*/  //also a great guess and you were almost there. Here is a better way to do it

//Jquery
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);



function val() {
    //grabs the value of the phone number
    let phoneNumber = document.forms['phoneNum']['number'].value;
    //if the phone number is not a number
    if (isNaN(phoneNumber)){
        alert('Please enter in a 10 digit phone number');
    }
    
    //if the phone number is a number and is not 10 digits
    else if (isNaN(phoneNumber) == false && phoneNumber.length != 10){
        alert('Please enter a 10 digit phone number');
        return false;
    }

    //if everything is correct
    else {
        alert('Submitted')
    }

}

function openForm() {
    document.getElementById('phoneNum').style.display = 'block';
}

function closeForm() {
    document.getElementById('phoneNum').style.display = 'none';
}

    //typed this out through example. need to study later
//https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);

//For contacts
function openC() {
    document.getElementById('contact').style.display = 'block';
    document.getElementById('open').style.display = 'none';
}

function closeC() {
    document.getElementById('contact').style.display = 'none';
    document.getElementById('open').style.display = 'block';
}