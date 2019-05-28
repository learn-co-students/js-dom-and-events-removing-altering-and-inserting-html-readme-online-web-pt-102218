//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

let ul = document.createElement('ul')

for (let i = 0; i < 3; i++) {
    let li = document.createElement('li')
    li.innerHTML = "booty"
    ul.appendChild(li)
}

document.body.appendChild(ul)

ul.remove();