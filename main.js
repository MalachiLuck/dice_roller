const rollButton = document.querySelector("#roll-button")
let dieRolls = []
const showRoll = document.querySelector("#show-rolls-button")
const diceBox = document.querySelector("#number-of-dice")
const resetButton = document.querySelector("#reset-button")
const sides = document.querySelector("#sides")
let total = 0

rollButton.addEventListener("click", function (){
    let position = 0
    while (position <diceBox.value){
    let numberfromDice = Math.floor(Math.random() * sides.value) +1
    dieRolls.push(numberfromDice)
    document.getElementById("countspan").innerHTML = total += numberfromDice
    console.log(numberfromDice)
    position +=1 
}
})

showRoll.addEventListener("click", function() {
    let position = 0
    while(position <dieRolls.length){
    const newDiceString = '<li class="die">' + dieRolls[position] + "</li>";
    document.getElementById ("dice").innerHTML += newDiceString
    position += 1
}
    dieRolls = []
})

resetButton.addEventListener("click", function () {
  diceBox.value = ''
  sides.value = ''
  document.getElementById("countspan").innerHTML = ''
  document.getElementById ("dice").innerHTML = ''
  console.log(resetButton)
})