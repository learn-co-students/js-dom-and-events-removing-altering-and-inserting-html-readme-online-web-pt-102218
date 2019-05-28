let welcomeDiv = document.createElement('div');
welcomeDiv.innerHTML = 'Hello, DOM!';
welcomeDiv.style.backgroundColor = '#f9f9f9';

document.body.appendChild(welcomeDiv);

let ul = document.createElement('ul');
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
 
welcomeDiv.appendChild(ul);