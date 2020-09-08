let valueVisor = 0
let additionalValue = 2

const visor = document.querySelector('.visor')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const buttonPlusTwo = document.querySelector('.plusTwo')
const buttonMinusTwo = document.querySelector('.minusTwo')
const edit = document.querySelector('.changeValues')
const close = document.querySelector('.edit')
const reset = document.querySelector('.reset')

edit.addEventListener('click', () => {
    let input1 = document.querySelector('.input-initialValue').value
    let input2 = document.querySelector('.input-adicionalsValue').value
    valueVisor = Number(input1)
    additionalValue = Number(input2)
    visor.innerHTML = valueVisor
    buttonPlusTwo.innerHTML = `+${additionalValue}`
    buttonMinusTwo.innerHTML = `-${additionalValue}`
    document.querySelector('.settings').classList.remove('closing-settings')
})

close.addEventListener('click', () => {
    document.querySelector('.settings').classList.toggle('closing-settings')
})

buttonPlus.addEventListener('click', () => {
    valueVisor++
    visor.innerHTML = valueVisor
})

buttonMinus.addEventListener('click', () => {
    valueVisor--
    visor.innerHTML = valueVisor
})

buttonPlusTwo.addEventListener('click', () => {
    valueVisor = Number(valueVisor + additionalValue)
    visor.innerHTML = valueVisor
})


buttonMinusTwo.addEventListener('click', () => {
    valueVisor = Number(valueVisor - additionalValue)
    visor.innerHTML = valueVisor
})

reset.addEventListener('click', () => {
    valueVisor = 0
    additionalValue = 2
    visor.innerHTML = valueVisor
    buttonPlusTwo.innerHTML = `+${additionalValue}`
    buttonMinusTwo.innerHTML = `-${additionalValue}`
})