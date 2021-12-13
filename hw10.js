// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn=document.getElementById('btn')
// btn.onclick=function (){
//     document.getElementById('text').hidden=true
// }
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let btn=document.getElementById('btn')
// btn.onclick=function (){
//     btn.hidden=true
// }
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let checking=document.forms.checkout
// checking.onsubmit=function (e){
//     e.preventDefault()
//     console.log(checking.userage.value)
//     if (checking.userage.value<18){
//      alert('false')
//     }
// }


// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu=document.getElementsByClassName('menu')[0]
// menu.onclick=function (){
//     menu.classList.toggle('drop')
// }

//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.

// let array=[
//     {title: 'ivan', body:'js'},
//     {title: 'serg', body:'ns'},
//     {title: 'kvan', body:'ls'},
//     {title: 'hvan', body:'ys'},
//     {title: 'gvan', body:'is'},
//     {title: 'tvan', body:'rs'}
// ]
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let divelement=document.createElement('div')
// for (const arrayElement of array) {
//      let div=document.createElement('div')
//     let h2=document.createElement('h2')
//     let p=document.createElement('p')
//     let btn=document.createElement('button')
//     h2.innerText=arrayElement.title
//     p.innerText=arrayElement.body
//     btn.innerHTML='hide'
//     btn.onclick=()=>{
//          p.style.display='none'
//     }
//
//     div.appendChild(h2)
//     div.appendChild(p)
//     div.appendChild(btn)
//     divelement.appendChild(div)
// }
// document.body.appendChild(divelement)