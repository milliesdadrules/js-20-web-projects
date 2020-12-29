const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)') // Creates node list (Array) of all referenced classes
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')
let ticketPrice = +movieSelect.value

//  Get data from localStorage and populate UI
const populateUI = () => {
    const selectedSeats = JSON.parse(localStorage.getItem('selectSeats'))

    if(selectedSeats!== null && selectedSeats.length > 0){
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('occupied')
            }
        })
    } 
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')
    if(selectedMovieIndex !== null ) {
        movieSelect.selectedIndex = selectedMovieIndex
        ticketPrice = localStorage.getItem('selectedMoviePrice')
    }
}

populateUI()

// Save select movie index and price
const setMovieData = (movieIndex, moviePrice) => {
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
}
// Update total and count
const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.select') // Creates node list (Array) of seats with referenced classes

    // Create new array to hold index of seats when selected using index of "seats" array referenced above
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat))

    localStorage.setItem('selectSeats',JSON.stringify(seatsIndex))

    const selectedSeatsCount = selectedSeats.length
    console.log(seatsIndex);
    count.innerText = selectedSeatsCount
    total.innerText = +selectedSeatsCount * ticketPrice
}

// Move select event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value
    setMovieData(e.target.selectedIndex, e.target.value)
    updateSelectedCount()
})

// Seat click event
container.addEventListener('click', (e) => {
    if (
        e.target.classList.contains('seat') && 
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('select')

        updateSelectedCount()
    }
})
updateSelectedCount()