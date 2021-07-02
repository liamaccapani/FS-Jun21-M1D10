//DOM EX

window.onload = function(){
    console.log("Page succesfully loaded!")
    changeTitle()
    addRow()
    // addClass()
    // addListItem()
}

let changeTitle = function(){
    document.title = "My Little Pony appreciation page"
}

let addRow = function(){
    let tableNode = document.getElementById("pony-table")
    let newRow = tableNode.insertRow()
    for (let i=0; i<5; i++) {
        let newCell = newRow.insertCell(i)
        newCell.innerText = "I need to change this" //see ex 33
    }
}

/* let addClass = function(){
    let tableRows = document.querySelectorAll('tr')
    tableRows.classList.add('selected')
}

let addListItem = function(){
    let parentNode = document.getElementsByTagName('ul')
    console.log(parentNode)
    let newListItem = document.createElement('li')
    parentNode.appendChild(newListItem)
} */


// let sectionCont = document.getElementById('container')
// console.log(sectionCont)

// let tableData = document.getElementsByTagName('td')
// console.log(tableData)

// JAVASCRIPT

let x = "John"
let y = "Doe"

let joinedStrings = x + "<>" + y
console.log(joinedStrings)

let person = {
    name: 'Lia',
    surname: 'Maccapani',
    email: 'lolojhdj@haga.com'
}

delete person.email
console.log(person)

// let arrayOfStrings = []
// for (let i=0; i<=9; i++){
// }

let arrayOfRandom = []
for(i=0; i<101; i++){
    let randomNumber = Math.floor(Math.random() * 100) + 1
    arrayOfRandom.push(randomNumber)
}
console.log(arrayOfRandom)

// while(arrayOfRandom.length === 100){
//   let randomNumber = Math.floor(Math.random() * 100) + 1
//   arrayOfRandom.push(randomNumber)
// }

// let minMax = function(k, m){
//     let k = Math.min(arrayOfRandom)
//     let m= Math.max(arrayOfRandom)
//     return k, m
// }
// console.log(minMax())

// let arrayParent = []

// let arrayFirstChild = function(){
//     for(i=0; i<11; i++){
//         let randomNumber = Math.floor(Math.random() * 100) + 1
//         arrayFirstChild.push(randomNumber)
//     }

// let arraySeconChild = function(){
//     for(i=0; i<11; i++){
//         let randomNumber = Math.floor(Math.random() * 100) + 1
//         arrayFirstChild.push(randomNumber)
//     }
