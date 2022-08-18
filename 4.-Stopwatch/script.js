const button = document.querySelector('button')
const answer = document.querySelector("#answer")

function generate_random(max_number){
    return Math.round(Math.random()*max_number)
}



button.addEventListener('click', function() {
    let randomNumber = generate_random(4)
    
    let answerText = "";
    if(randomNumber === 0){
        answerText = "Yes definitely!"
    }
    else if (randomNumber === 1) {
        answerText = "Nope, certainly not!"
    }
    else if (randomNumber === 2 ){
        answerText = "Ask again later!"
    }
    else {
        answerText = "I really dont care!"
    }

    answer.innerHTML = answerText
})
