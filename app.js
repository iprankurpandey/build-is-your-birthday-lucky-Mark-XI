const luckyDate = document.querySelector('#date')
const textBox = document.querySelector('#textbox')
const button = document.querySelector('#button')
const outputbox = document.querySelector('#outputbox')

function luckyBirthdayCheck() {
    let datedata = luckyDate.value.replaceAll('-', '')
    var sum = 0;
    for (i = 0; i < datedata.length; i++)
        sum = sum + Number(datedata[i])
    if (sum % textBox.value === 0) {
        outputbox.innerHTML = 'your birthday is lucky'
    } else {
        outputbox.innerHTML = 'wait for re-birth'
    }
    return sum;
}
button.addEventListener('click', luckyBirthdayCheck)