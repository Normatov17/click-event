//
const button = document.querySelector("button");

button.addEventListener('click', () => {
    console.log("You are cliked me !")
});

// Items
const items = document.querySelectorAll("li");

items.forEach((item) => {
item.addEventListener('click', (e) => {
    
    // console.log(e)
    // console.log(item)
    e.target.style.textDecoration = 'line-through'
    e.target.style.opacity = '0.8'

})
})