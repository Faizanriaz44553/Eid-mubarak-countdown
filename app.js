let count1 = document.querySelector("#count1")
let count2 = document.querySelector("#count2")
let count3 = document.querySelector("#count3")
let count4 = document.querySelector("#count4")
function countmines() {
    let EidDate = new Date("2024-6-16")
    let currentDate = new Date()
    let differace = EidDate - currentDate
    let sec = Math.floor(differace / 1000)
    let min = Math.floor(differace / (1000 * 60))
    let hour =Math.floor(differace / (1000 * 60 * 60))
    let days = Math.floor(differace / (1000 * 60 * 60 * 24))
    if (differace < 0) {
        
    }
    count1.innerHTML = (`Second : ${sec}`)
    count2.innerHTML = (`Minutes : ${min}`)
    count3.innerHTML = (`Hour : ${hour}`)
    count4.innerHTML = (`Days : ${days}`)
}

 setInterval(countmines, 1000)

// console.log(cal3);
// console.log(cal4);