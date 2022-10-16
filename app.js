// Sayohat uchun xarajat hisoblagichi!

let travelSum = prompt("Sayohat uchun mablag'ingingiz qanchaligini kiriting:")

let dollar = 10650.34
let yevro = 11650.03

let sumGoCome = 500 * dollar
let sumHotel = 250 * dollar
let sumWalking = 120 * yevro

let allSum = sumGoCome + sumHotel + sumWalking

if (travelSum >= allSum) {
    alert("Sayohatga borsangiz boladi!.. Oq yo'l!...")
} else {
    alert("Pulingiz hali yetarlicha emas!.. Sabr qiling!...")
}