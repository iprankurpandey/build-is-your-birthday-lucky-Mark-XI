const birthday = document.querySelector('#birthday')
console.log(birthday.value)
const luckynumber =document.querySelector('#luckynumber')
const button = document.querySelector('#button')


function checkbirthdayislucky(){

const dob = birthday.value;
const sum =calculateSum(dob)
console.log(sum)
comparevalues (luckynumber.value,sum)
}

function comparevalues (luckynumber,sum){

    if(sum%luckynumber == 0){
        console.log("bday is lucky")
    }
    else{
        console.log("bday is not lucky")
    }
}

function calculateSum(dob){
    const dob= date.replaceAll("-","")
    let sum = 0;
    for (i=0;i<dob.length;i++){
        sum = sum+ Number (charAt(i))
    }
    return sum;
}
button.addEventListener("click", comparevalues)
