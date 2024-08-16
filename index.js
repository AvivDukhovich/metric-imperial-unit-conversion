/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
const result1 = document.getElementById("result1")
const result2 = document.getElementById("result2")
const result3 = document.getElementById("result3")

convertBtn.addEventListener("click", function(){
    result1.textContent = renderResult1()
    result2.textContent = renderResult2()
    result3.textContent = renderResult3()
})

function meterToFeet(meters) {
    return String((Number(meters)*3.281).toFixed(2))
}
function feetToMeter(feet) {
    return String((Number(feet)*0.304).toFixed(2))
}
function litersToGallons(liters) {
    return String((Number(liters)*0.264).toFixed(2))
}
function gallonsToLiters(gallons) {
    return String((Number(gallons)*3.785).toFixed(2))
}
function kilosToPounds(kilos) {
    return String((Number(kilos)*2.204).toFixed(2))
}
function poundsToKilos(pounds) {
    return String((Number(pounds)*0.453).toFixed(2))
}
function renderResult1() {
    const val = input.value
    const feet = meterToFeet(val);
    const meters = feetToMeter(val);
    return `${val} meters = ${feet} feet |
     ${val} feet = ${meters} meters`
}
function renderResult2() {
    const val = input.value
    const gallons = litersToGallons(val)
    const liters = gallonsToLiters(val)
    return `${val} liters = ${gallons} gallons |
    ${val} gallons = ${liters} liters`
}
function renderResult3() {
    const val = input.value
    const pounds = kilosToPounds(val)
    const kilos = poundsToKilos(val)
    return `${val} kilos = ${pounds} pounds |
    ${val} pounds = ${kilos} kilos`
}