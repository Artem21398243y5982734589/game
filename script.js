let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
//если ходит крестик то значение true, а если ходит нолик то значение false. Первым ходит крестик
let whoMove = true
let itsLocketOne = false
let itsLocketTwo = false
let itsLocketThree = false
let itsLocketFour = false
let itsLocketFive = false
let itsLocketSix = false
let itsLocketSeven = false
let itsLocketEight = false
let itsLocketNine = false

let checkChemOne
let checkChemTwo
let checkChemThree
let checkChemFour
let checkChemFive
let checkChemSix
let checkChemSeven
let checkChemEight
let checkChemNine

function oneF(){
    if(whoMove === true && itsLocketOne === false){
        one.textContent = "X"
        itsLocketOne = true
        whoMove = false
         checkChemOne = true
    }else if (whoMove === false && itsLocketOne === false){
        one.textContent = "O"
        itsLocketOne = true
        whoMove = true
        lcheckChemOne = false
    } else if(itsLocketOne === true){
        alert('здесь занято')
    }
}
function twoF(){
    if(whoMove === true && itsLocketTwo === false){
        two.textContent = "X"
        itsLocketTwo = true
        whoMove = false
         checkChemTwo = true
    }else if (whoMove === false && itsLocketTwo === false){
        two.textContent = "O"
        itsLocketTwo = true
        whoMove = true
         checkChemTwo = false
    } else if(itsLocketTwo === true){
        alert('здесь занято')
    }
}
function threeF(){
    if(whoMove === true && itsLocketThree === false){
        three.textContent = "X"
        itsLocketThree = true
        whoMove = false
         checkChemThree = true
    }else if (whoMove === false && itsLocketThree === false){
        three.textContent = "O"
        itsLocketThree = true
        whoMove = true
         checkChemThree = false
    } else if(itsLocketThree === true){
        alert('здесь занято')
    }
}
function fourF(){
    if(whoMove === true && itsLocketFour === false){
        four.textContent = "X"
        itsLocketFour = true
        whoMove = false
         checkChemFour = true
    }else if (whoMove === false && itsLocketFour === false){
        four.textContent = "O"
        itsLocketFour = true
        whoMove = true
         checkChemFour = false
    } else if(itsLocketFour === true){
        alert('здесь занято')
    }
}
function fiveF(){
    if(whoMove === true && itsLocketFive === false){
        five.textContent = "X"
        itsLocketFive = true
        whoMove = false
         checkChemFive = true
    }else if (whoMove === false && itsLocketFive === false){
        five.textContent = "O"
        itsLocketFive = true
        whoMove = true
         checkChemFive = false
    } else if(itsLocketFive === true){
        alert('здесь занято')
    }
}
function sixF(){
    if(whoMove === true && itsLocketSix === false){
        six.textContent = "X"
        itsLocketSix = true
        whoMove = false
         checkChemSix = true
    }else if (whoMove === false && itsLocketSix === false){
        six.textContent = "O"
        itsLocketSix = true
        whoMove = true
         checkChemSix = false
    } else if(itsLocketSix === true){
        alert('здесь занято')
    }
}
function sevenF(){
    if(whoMove === true && itsLocketSeven === false){
        seven.textContent = "X"
        itsLocketSeven = true
        whoMove = false
         checkChemSeven = true
    }else if (whoMove === false && itsLocketSeven === false){
        seven.textContent = "O"
        itsLocketSeven = true
        whoMove = true
         checkChemSeven = false
    } else if(itsLocketSeven === true){
        alert('здесь занято')
    }
}
function eightF(){
    if(whoMove === true && itsLocketEight === false){
        eight.textContent = "X"
        itsLocketEight = true
        whoMove = false
        checkChemEight = true
    }else if (whoMove === false && itsLocketEight === false){
        eight.textContent = "O"
        itsLocketEight = true
        whoMove = true
        checkChemEight = false
    } else if(itsLocketEight === true){
        alert('здесь занято')
    }
}
function nineF(){
    if(whoMove === true && itsLocketNine === false){
        nine.textContent = "X"
        itsLocketNine = true
        whoMove = false
        checkChemNine = true
    }else if (whoMove === false && itsLocketNine === false){
        nine.textContent = "O"
        itsLocketNine = true
        whoMove = true
        checkChemNine = false
    } else if(itsLocketNine === true){
        alert('здесь занято')
    }
}
function checkF(){
    if(checkChemOne === true && checkChemTwo === true && checkChemThree === true){
        alert('крестики выиграли')
    } else if   (checkChemFour === true && checkChemFive === true && checkChemSix === true) {
        alert('крестики выиграли')
    } else if   (checkChemSeven === true && checkChemEight === true && checkChemNine === true) {
        alert('крестики выиграли')
    } else if   (checkChemOne === true && checkChemFive === true && checkChemNine === true) {
        alert('крестики выиграли')
    } else if   (checkChemThree === true && checkChemFive === true && checkChemSeven === true) {
        alert('крестики выиграли')
    } else if   (checkChemOne === true && checkChemFour === true && checkChemSeven === true) {
        alert('крестики выиграли')
    } else if   (checkChemTwo === true && checkChemFive === true && checkChemEight === true) {
        alert('крестики выиграли')
    } else if   (checkChemThree === true && checkChemSix === true && checkChemNine === true) {
        alert('крестики выиграли')
    } else if(checkChemOne === false && checkChemTwo === false && checkChemThree === false){
        alert('нолики выиграли')
    } else if (checkChemFour === false && checkChemFive === false && checkChemSix === false) {
        alert('нолики выиграли')
    } else if (checkChemSeven === false && checkChemEight === false && checkChemNine === false) {
        alert('нолики выиграли')
    } else if   (checkChemOne === false && checkChemFive === false && checkChemNine === false) {
        alert('нолики выиграли')
    } else if   (checkChemThree === false && checkChemFive === false && checkChemSeven === false) {
        alert('нолики выиграли')
    } else if   (checkChemOne === false && checkChemFour === false && checkChemSeven === false) {
        alert('нолики выиграли')
    } else if   (checkChemTwo === false && checkChemFive === false && checkChemEight === false) {
        alert('нолики выиграли')
    } else if   (checkChemThree === false && checkChemSix === false && checkChemNine === false) {
        alert('нолики выиграли')
    }  
}

one.addEventListener('click', oneF, );
two.addEventListener('click', twoF, );
three.addEventListener('click', threeF, );
four.addEventListener('click', fourF, );
five.addEventListener('click', fiveF, );
six.addEventListener('click', sixF, );
seven.addEventListener('click', sevenF, );
eight.addEventListener('click', eightF);
nine.addEventListener('click', nineF, );

one.addEventListener('click', checkF);
two.addEventListener('click', checkF);
three.addEventListener('click', checkF);
four.addEventListener('click', checkF);
five.addEventListener('click', checkF);
six.addEventListener('click', checkF);
seven.addEventListener('click', checkF);
eight.addEventListener('click', checkF);
nine.addEventListener('click', checkF);