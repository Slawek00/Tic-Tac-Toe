'use strict';

const elementGame = document.querySelectorAll('.item');
const btnReset = document.getElementById('reset-game');
const objectSequence = new Map([
    ['sequence1',[0,1,2]],
    ['sequence2',[0,3,6]],
    ['sequence3',[0,4,8]],
    ['sequence4',[1,4,7]],
    ['sequence5',[2,4,6]],
    ['sequence6',[2,5,8]],
    ['sequence7',[3,4,5]],
    ['sequence8',[6,7,8]]
]);

let counterTrue = 0;
let elementPosition = 0;
let playerOne = [];
let playerTwo = [];

const addCross = (gameElement,index) => {
    if(elementPosition%2===0) {
        gameElement.textContent = 'X';
        playerOne.push(index);
    }
}

const addCircle = (gameElement,index) => {
    if(elementPosition%2===1) {
        gameElement.textContent = 'O';
        playerTwo.push(index);
        console.log(playerTwo);
    }
}

const addEvents = (itemGame, index) => {
    itemGame.addEventListener('click', () => {
        addCircle(itemGame, index);
        addCross(itemGame, index);
        elementPosition++;
        winGame(playerOne,playerTwo);
    })
}

const getSequence = counter => {
    return objectSequence.get('sequence'+ counter);
}

const checkSequence = arrayElement => {
    if(arrayElement.length >= 3){
        let sequenceWin;
        let counter = 1;
        do{
            sequenceWin = getSequence(counter);
            if(arrayElement.includes(sequenceWin[0])===true){
                counterTrue++;
            }
            if(arrayElement.includes(sequenceWin[1])===true){
                counterTrue++;
            }
            if(arrayElement.includes(sequenceWin[2])===true){
                counterTrue++;
            }
            if(counterTrue !== 3){
                counterTrue = 0;
                counter++;
            }else{
                break
            }
        }while (counter < 9);
    }
    return counterTrue;
}

const winGame = (playerOne, playerTwo) => {
    if(checkSequence(playerOne)===3){
        alert('Wygrałeś graczu pierwszy!!');
        window.location.href = 'index.html';
        counterTrue = 0;
    }
    if(checkSequence(playerTwo)===3){
        alert('Wygrałeś graczu drugi!!');
        window.location.href = 'index.html';
        counterTrue = 0;
    }
}

if(elementGame){
    elementGame.forEach(addEvents);
}

if(btnReset){
    btnReset.addEventListener('click', () => {
        window.location.href = 'index.html';
    })
}



