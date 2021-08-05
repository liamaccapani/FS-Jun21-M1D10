// ----------------- DOM EX -----------------
// 38) Console log "Page loaded" when the page is correctly loaded ✅
window.onload = function(){
    console.log("Page succesfully loaded!")
    changeTitle()
    addRow()
    // addClass()
    // addListItem()
}

// 31) Get element with ID "container" from the page ✅
const getContainer = document.getElementById('container')
console.log(getContainer)

//34) Write a function to change the heading of the page ✅
const changeTitle = function(){
    document.title = "My Little Pony appreciation page"
}

// 32) Get every "td" from the page ✅
const allTheTds = [] //store the HTML td and the JS td

const tds = document.querySelectorAll('td') //HTML
tds.forEach(td => {
    allTheTds.push(td)
});


//35) Write a function to add an extra row to the table ✅ 
const addRow = function(){
    const tbody = document.querySelector('tbody') //it has to be queryselector, not working with id && Why tbody?
    const tr = document.createElement('tr')
    for (let i=0; i<5; i++){
        const td = document.createElement('td')
        td.innerText = `item ${i+1}`
        tr.appendChild(td)
        allTheTds.push(td)
    }
    tbody.appendChild(tr)
    //const tableNode = document.getElementByID('pony-table')
    // const newRow = tableNode.insertRow()
    // for (let i=0; i<5; i++) {
    //     let newTd = newRow.insertCell(i)
    //     newTd.innerHTML = `<td>Item ${i+1} yeet</td>`
    //     allTheTds.push(newTd)
    // }
}


// 33) Create a loop that prints the text inside every td of the page 💥 not selecting the JS td
for(let td of allTheTds){
    td.addEventListener('click', () => {
        td.innerText = 'Changed!'
    })
}

// 36) Write a function to add the class "test" to each row in the table 💥 not selecting the JS tr
const addClass = function() {
    const trs = document.querySelectorAll('tr')
    trs.forEach(tr => {
        tr.classList.add('test')
    })
}

addClass()

// 37) Write a function to add a red background to every link in the page ✅
const redLinks = function(){
    const links = document.querySelectorAll('a')
    links.forEach(link => {
        link.style.background = 'red'
    })
}
redLinks()


// 39) Write a function to add new items to a UL ✅ to be implemented :81
const uls = document.getElementsByTagName('ul')
const ols = document.getElementsByTagName('ol')

const addListItem = function(){
    //const ul = document.getElementsByTagName('ul')
    const newLi = document.createElement('li')
    newLi.innerText = 'new unordered list item'
    uls[0].appendChild(newLi)
}

// 40) Write a function to empty a list ✅
const emptyList = function() { 
    uls[0].innerHTML = '' 
    ols[0].innerHTML = ''
}



// ----------------- EXTRA -----------------
// 41) Add an eventListener to alert when the mouse is over a link, displaying the URL
// 42) Add a button to hide every image on the page
// 43) Add a button to hide and show the table from the page
// 44) Write a function to sum every number inside the TD (if the content is numeric)
// 45) Delete the last letter from the title each time the user clicks on it
// 46) Change a single TD background color when the user clicks on it
// 47) Add a button DELETE, on click it should delete a random TD from the page
// 48) Add a pink border to a cell when the mouse is over 
// 49) Write a function to add a table with 4 rows and 3 columns programmatically
// 50) Write a function to remove the table from the page