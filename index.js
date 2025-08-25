let scoreElH = document.getElementById("score_boardh")
console.log(scoreElH)

let countH = 0
function addH1(){
    countH += 1
    scoreElH.textContent = countH
    console.log(scoreElH.textContent)
}

function addH2(){
     countH += 2
    scoreElH.textContent = countH 
    console.log(scoreElH.textContent)
}

function addH3(){
     countH += 3
    scoreElH.textContent = countH 
    console.log(scoreElH.textContent)
}

let scoreElG = document.getElementById("score_boardg")
console.log(scoreElG)

let countG = 0
function addG1(){
    countG += 1
    scoreElG.textContent = countG
    console.log(scoreElG.textContent)
}

function addG2(){
     countG += 2
    scoreElG.textContent = countG 
    console.log(scoreElG.textContent)
}

function addG3(){
     countG += 3
    scoreElG.textContent = countG 
    console.log(scoreElG.textContent)
}

function newGame(){
    countH = 0
    countG = 0
    scoreElH.textContent = countH
    scoreElG.textContent = countG
}