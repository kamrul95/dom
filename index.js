const para = document.querySelectorAll('p')

console.log(para);
console.log(document.URL);

const content = document.querySelector('.content')
const persons = ["karim", "rahim", "james"]

persons.forEach(person =>{
    console.log(person)
    content.innerHTML += `<p>${person}</p>`;
})

// change attribute

const changeALink = document.querySelector('.change-attribute a')
console.log(changeALink.getAttribute('href'))
changeALink.setAttribute('href', 'http://localhost')
changeALink.innerText = 'Localhost'

const changeP = document.querySelector('.change-attribute p')
changeP.setAttribute('style', 'color: red; font-weight: bold; font-size: 20px')

console.log(changeP.style) // console list of CSS Style Declaration 
changeP.style.color = 'violet'
changeP.style.fontSize = '60px'


const addClassList = document.querySelectorAll('.add-classlist p')
console.log(addClassList)
addClassList.forEach(list => {
    console.log(list.textContent)
    if(list.textContent.includes('error')) {
        list.classList.add('error');
    }
    if(list.textContent.includes('success')) {
        list.classList.add('success');
    }
})

// parent child, siblings
const article = document.querySelector('article');
console.log(article.children);
const newAtricle = Array.from(article.children)
console.log(newAtricle);
newAtricle.forEach((child)=> {
    child.classList.add('new-atricle');
})
const title = document.querySelector('article h2')
console.log(title.innerText);
console.log(title.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);


// events
// const events = document.querySelectorAll('li');
// console.log(events)
// events.forEach(item => {
//     item.addEventListener('click', (e)=> {
//         e.target.remove()
//     })
// })

const ul = document.querySelector('ul')
ul.addEventListener('click', (e)=> {
    if(e.target.tagName === 'LI') {
        e.target.remove();
    }
})

const button = document.querySelector('button')
button.addEventListener('click', (e)=> {
    // ul.innerHTML += `<li>New item added</li>`
    const newItem = document.createElement('li')
    newItem.textContent = 'New item added';
    ul.append(newItem)
})