const hireMe = document.querySelector(".hire__me");

hireMe.addEventListener('click', ()=>{
    alert("Thank you for hiring me")
})


let fruits = [
  { name: "mango", color: "green" },
  { name: "mango", color: "yellow" },
  { name: "orange", color: "orange" },
  { name: "pineaple", color: "green" },
];
// console.log(fruits)

const newFruits = fruits.map(fruit => fruit.name)
console.log(newFruits)

let mangoFruit = fruits.filter(fruit => fruit.name == "mango")
console.log(mangoFruit)

let countOfMango = mangoFruit.length
console.log(countOfMango)


const newArr = fruits.reduce((acc, nextEle)=>{
    return acc.name + nextEle.name
})
console.log(newArr)

// 