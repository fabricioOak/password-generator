function generate(){
    var chars = "";
    var passlength;
    var password = "";
    var min = document.getElementById('min');
    var max = document.getElementById("max");
    var number = document.getElementById("number");
    var esp = document.getElementById("esp");
    var eight = document.getElementById("eight");
    var sixteen = document.getElementById("sixteen");

    
    if (min.checked == true){
        chars = chars + "abcdefghijklmnopqrstuvwxyz";
    }
    if (max.checked == true){
        chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (number.checked == true){
        chars = chars + "1234567890";
    }
    if (esp.checked == true){
        chars = chars + "@%+/'!#$^?:.)(}{][~-_'";
    }

    console.log(chars);
    
    if (eight.checked == true){
        passlength = 8;
    }
    if (sixteen.checked == true){
        passlength = 16;
    }
    for (var i = 0; i < passlength; i++){
        var randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    document.getElementById("password").value = password;
}

function copyText() {
    let copyTxt = document.getElementById('password');

    copyTxt.select();
    copyTxt.setSelectionRange(0,99999);

    document.execCommand('copy');

    if (copyTxt.value != '') {
    alert('Text Copied: ' + copyTxt.value);   
    }
}