
let  timeDays = document.getElementById(`day`)
let  timeHours = document.getElementById(`hours`)
let  timeMinutes = document.getElementById(`minutes`)
let  timeSeconds = document.getElementById(`seconds`)
let  out = document.getElementById(`out`)

const newsYear= new Date(`Jan 1 2025 00:00:00`)

let count = () => {
  let news = new Date()
  Until =  newsYear - news
if (Until <= 0) {
  out.innerHTML = `С новым годом!`
  return;
}
    
let day = Math.floor(Until / 1000 / 60 /  60 / 24)
let hours = Math.floor(Until / 1000 / 60 /  60 ) % 24
let minutes = Math.floor(Until / 1000 / 60 ) % 60
let seconds = Math.floor(Until / 1000 ) % 60

timeDays.textContent = day
timeHours.textContent = hours
timeMinutes.textContent = minutes
timeSeconds.textContent = seconds



}
setInterval(count,1000)
count()










