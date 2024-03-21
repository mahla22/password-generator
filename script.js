
let submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

const uppChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowChars = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symChars = "@#$&";
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const lowerAllowed = document.getElementById("lowerAllowed");
    const upperAllowed = document.getElementById("upperAllowed");
    const numAllowed = document.getElementById("numAllowed");
    const symAllowed = document.getElementById("symAllowed");
    
    const passLength = Number(document.getElementById("passLength").value);
    let pass = "";
    let index = 0;
    let Chars = check(upperAllowed, lowerAllowed, numAllowed, symAllowed);
    let charsLength = Chars.length;
    for (i = 0; i < passLength; i++) {
        index = Math.floor(Math.random() * charsLength);
        pass += Chars[index];
    }
    if (passLength > 20) {
        result.innerHTML = `please enter length of the password between 4 to 20`;
    }
    else if(passLength == 0) {
        result.innerHTML = `please enter length of the password`;
    }
    else if(charsLength == 0) {
        result.innerHTML = `please choose character types(at least one of them)`;
    }
    else {
        result.innerHTML = ` password : ${pass}`;
    }
    
})


function check(upper , lower , number , symbol){
    let chars = "";
    if(upper.checked)
        chars += uppChars;

    if(lower.checked)
        chars += lowChars;

    if(number.checked)
        chars += numbers;
        
    if(symbol.checked)
        chars += symChars;
    return chars;
}
