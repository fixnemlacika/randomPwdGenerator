let lastSelected = null;

    function toggleRadio(radio) {
      if (lastSelected === radio) {
        radio.checked = false;
        lastSelected = null;
      } else {
        lastSelected = radio;
      }
    }

function generatepwd(){
    const length = Number(document.getElementById('length').value);
    const includeLower = document.getElementById('includeLower').checked ? true : false;
    const includeUpper = document.getElementById('includeUpper').checked ? true : false;
    const includeNumber = document.getElementById('includeNumber').checked ? true : false;
    const includeSpecial = document.getElementById('includeSpecial').checked ? true : false;
    lowerChars = 'abcdefghijklmnopqrstuvyxwz';
    upperChars = 'ABCDEFGHIJKLMNOPQESTUVWXYZ';
    numbers = '0123456789';
    specialChars = '$@&#^[]{}-_,';
    allowedChars = '';
    password = '';

    if(includeLower){
        allowedChars += lowerChars;
    }else{
        allowedChars = allowedChars;
    }
    if(includeUpper){
        allowedChars += upperChars;
    }else{
        allowedChars = allowedChars;
    }if(includeNumber){
        allowedChars += numbers;
    }else{
        allowedChars = allowedChars;
    }
    if(includeSpecial){
        allowedChars += specialChars;
    }else{
        allowedChars = allowedChars;
    }
    if(!includeLower && !includeUpper && !includeNumber && !includeSpecial){
        document.getElementById('result').textContent = `You have to select at least 1 group to generate!`
    }
    if(length <= 0 || length === undefined){
        document.getElementById('result').textContent = `The length of the password has to be at least 1`
    }
    if(includeLower || includeUpper || includeNumber || includeSpecial && length != 0 && length != undefined){
        for(let i = 0; i < length; i++){
            concatIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[concatIndex]; 
        }
        document.getElementById('result').textContent = `Password: ${password}`
    }
}
