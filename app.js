// ul remove 
const ul = document.querySelector("ul")


const button = document.querySelector("button")
button.addEventListener("click", () => {
    // ul.innerHTML += '<li>Smothing new text 😆</li>'

    // jsda element yaratish
    const li = document.createElement("li")
    li.textContent = 'Smothing new text 😆'
    ul.appendChild(li)
})

// Items
const items = document.querySelectorAll("li");

items.forEach((item) => {
item.addEventListener('click', (e) => {
    
    // console.log(e)
    // console.log(item)
    // e.target.style.textDecoration = 'line-through'
    // e.target.style.opacity = '0.8'
    // e.target.remove()
    
    // console.log("Clicked Li")
    // e.stopPropagation()
})
})

ul.addEventListener('click', (e) => {
    if (e.target.nodeName == "LI") {
        e.target.remove()
    }
})