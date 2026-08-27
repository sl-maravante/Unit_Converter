/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputBtn=document.getElementById("input-btn")
const convertBtn=document.getElementById("convertBtn")
let lengthMetric=document.getElementById("lengthMetric")
let volumeMetric=document.getElementById("volumeMetric")
let massMetric=document.getElementById("massMetric")



convertBtn.addEventListener("click",function(){
   const lengthInFeet=(Number(inputBtn.value)*3.281).toFixed(3)
   const lengthInMeter=(Number(inputBtn.value)/3.281).toFixed(3)
   lengthMetric.innerHTML=`${inputBtn.value} meters = ${lengthInFeet} feet | ${inputBtn.value} feet = ${lengthInMeter} meters` 

    const lengthInGallon=(Number(inputBtn.value)*0.264).toFixed(3)
   const lengthInLiter=(Number(inputBtn.value)/0.264).toFixed(3)
   volumeMetric.innerHTML=`${inputBtn.value} liter = ${lengthInGallon} gallons | ${inputBtn.value} gallons = ${lengthInLiter} liters` 

    const lengthInPound=(Number(inputBtn.value)*2.204).toFixed(3)
   const lengthInKg=(Number(inputBtn.value)/2.204).toFixed(3)
   massMetric.innerHTML=`${inputBtn.value} kilograms = ${lengthInPound} pound | ${inputBtn.value} pound = ${lengthInKg} Kilograms` 
   inputBtn.value=""
})