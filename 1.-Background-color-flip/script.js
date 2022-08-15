const btn = document.querySelector('button')
const h2Element = document.querySelector('h2')
const bgElement = document.querySelector('section')


btn.addEventListener('click', function() {
    let color = "#"
    color += Math.random().toString(16).slice(2,8)
    bgElement.style.backgroundColor = color
    h2Element.innerText = color
    

})