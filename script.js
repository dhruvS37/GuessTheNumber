let form = document.forms["myForms"]
let inputBox = form['input']
let showGuess = document.getElementById('showGuess')
let showRemGuess = document.getElementById('showRemGuess')
let resultTag = document.getElementById('result')
let submitBtn = form['submit']
let newBtn = form['restart']


window.onload = () => {
    resetGame()
    startGame()
}

newBtn.onclick = (e) =>{
    e.preventDefault()
    console.log("new Game Started");

    resetGame()
    startGame()

}

function startGame() {
    console.log("Starting ...");

    const randNumber = Math.floor(Math.random() * 100) + 1
    const numList = []
    
    submitBtn.onclick = (e) => {
        e.preventDefault()
        console.log("submit clicked");

        let num = parseInt(inputBox.value)
        validGuess(num, randNumber, numList)

        showGuess.innerHTML = numList
        showRemGuess.innerHTML = (10 - numList.length)
        inputBox.value=""
    }

}
function validGuess(num, generatedNum, numList) {
    
    if (isNaN(num)) {
        alert('Enter Valid Number!')
    } else if (num > 100 || num < 1) {
        alert('Enter Number between 1 to 100!')
    } else {
        if (numList.length < 10) {
            let massage
            if (num > generatedNum) {
                massage = 'Number is too high! Try again.'
                numList.push(num)
            } else if (num < generatedNum) {
                massage = 'Number is too Low! Try again.'
                numList.push(num)
            } else {
                massage = 'YO Your Guess is Correct. You Win the Game.'
                numList.push(num)
                newBtn.classList.remove('restartActive')
                inputBox.disabled = true
            }
            printResult(massage)
        }else{
            printResult('Game Over! You Lost!')
            newBtn.classList.remove('restartActive')
            inputBox.disabled = true
        }
    }
}

function resetGame(){
    console.log("Resetting game...");

    showGuess.innerHTML = ""
    showRemGuess.innerHTML = 10
    newBtn.classList.add('restartActive')
    inputBox.disabled = false
    printResult("")
}
function printResult(massage) {
    resultTag.innerHTML = massage
}

