const birthday = document.querySelector('#birthday')
const luckynumber = document.querySelector('#luckynumber')
const button = document.querySelector('#button')
const outputBox = document.querySelector('#outputbox')


function comparevalues(sum, luckynumber) {

    if (sum % luckynumber.value === 0) {
        outputBox.innerText = "Your Birthday is Lucky";
    } else {
        outputBox.innerText = "Sorry, Better Luck Next Birth";
    }
}





function checkbirthdayislucky() {
    var dob = birthday.value;
    var sum = calculateSum(dob)
    comparevalues(sum, luckynumber)
}


function calculateSum(dob) {
    dob = dob.replaceAll("-", "")
    let sum = 0;
    for (i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i))
    }
    return sum;
}
button.addEventListener("click", checkbirthdayislucky)