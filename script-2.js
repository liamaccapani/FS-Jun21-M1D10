// ----------------- JAVASCRIPT -----------------
// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe" ✅
let x = "John"
let y = "Doe"

let joinedStrings = x + "<>" + y
console.log(joinedStrings)

// 22) Create an object with properties such name, surname, email ✅
const person = {
    name: 'Lia',
    surname: 'Maccapani',
    email: 'lolojhdj@haga.com'
}


// 23) Delete Email from the previously created object ✅
delete person.email
console.log(person)

// 24) Create an array with 10 strings in it ✅
const stringsArray = []

const fillArray = function(str, n) {
    for(let i=0; i<10; i++){
        n = i+1
        stringsArray.push(str + ' ' + n)
    }
}

fillArray('Element number')


// 25) Print in the console every string in the previous array ✅
console.log(stringsArray)

// 26) Create an array with 100 random numbers in it ✅
const arrayOfRandom = []

for(let i=0; i<100; i++){
    let randomNumber = Math.floor(Math.random() * 100) + 1
    arrayOfRandom.push(randomNumber)
}

console.log(arrayOfRandom, arrayOfRandom.length)

// 27) Write a function to get the MAX and the MIN from the previously created array ✅
const getMinMax = function(arr){
    let min = arr[0]
    let max = arr[0]

    for(let i=0; i<arr.length; i++){
        if(arr[i] < min) {
            min = arr[i]
        } else if (arr[i] > max){
            max = arr[i]
        }
    }
    console.log(min, max)
}

getMinMax(arrayOfRandom)


//28) Create an array of arrays, in which every array has 10 random numbers ✅
const parentArray = []

for(let i=0; i<3; i++){
    const childArray = []
    for(j=0; j<10; j++){
        let randNum = Math.floor(Math.random()*10)+1
        childArray.push(randNum)
    }
    parentArray.push(childArray)
}

console.log(parentArray)


// 29) Create a function that gets 2 arrays and returns the longest one ✅
const longerArray = function(arr1, arr2){
    if(arr1.length > arr2.length){
        console.log(arr1, arr1.length)
    } else if (arr2.length > arr1.length){
        console.log(arr2, arr2.length)
    }
}
const animals = ['dog', 'cat', 'alpaca', 'quokka']
const fruits = ['watermelon', 'apple']

longerArray(animals, fruits)


// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values ✅
const biggerSum = function(arr1, arr2){
    let total1 = 0
    let total2 = 0
    for(let i=0; i<arr1.length; i++){
        total1 += arr1[i]
    }
    for(let i=0; i<arr2.length; i++){
        total2+= arr2[i]
    }
    if(total1 > total2){
        console.log(arr1, total1)
    } else if(total2 > total1){
        console.log(arr2, total2)
    }
}

const array1 = [1,2,3,4,5]
const array2 = [10, 15]

biggerSum(array1, array2)

