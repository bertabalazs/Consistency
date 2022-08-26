const form = document.querySelector('form')
const factDiv = document.querySelector('.number-fact')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const number = e.target.querySelector('input[type="number"]').value
    console.log(number);
    const loadText = 'Wait a little bit my brudda'

    factDiv.innerHTML = loadText

    const baseURL = "http://numbersapi.com/";

    fetch(baseURL + number)
        .then(res => res.text())
        .then(text => factDiv.innerHTML = text)
})