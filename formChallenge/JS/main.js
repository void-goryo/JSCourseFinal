/*function validate() {
    var num = document.getElementById('phone').value;
    if()
}*/  //also a great guess and you were almost there. Here is a better way to do it

function val() {
    //let phn = document.forms['valphone']['num'].value;
    let form = document.forms['phoneNum'].value;
    let phn = form['number'];
    console.log(phn)
    var text;
    let length = pnh.length;
    // a new varaible = document from the HTML form. first value is the form name, second value is the input name. and .value of course, gets the value
    if (isNaN(phn)){
        //if phn is Not a Number (NaN), and the length is equal to 10
        text = 'Please enter a 10 digit phone number';
    }
    else if (length != 10){
        text = 'Please enter a 10 digit phone number'
    }
    else {
        text = 'Submited!';
    }
    console.log(phn);
    console.log(legnth);
    document.getElementById('result').innerHTML = validatePhone();
}