// JavaScript
// const getWeather = async (long, lat) => {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=4b5597c8044a6d696d0b7c95f9c7cd8b`,{})
//         if(response.status === 200){
//             const data = response.json()
//             return data
//         } else {
//             throw new Error("Failed to fetch data")
//         }
// }

window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

            const long = position.coords.longitude
            const lat = position.coords.latitude

            const temperatureDesc = document.querySelector('.temperature-description')
            const temperatureDegree = document.querySelector('.temperature-degree')
            const locationTimezone = document.querySelector('.location-timezone')
            

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=4b5597c8044a6d696d0b7c95f9c7cd8b`
            
            fetch(api).then((reponse) => {
                return reponse.json()
            }).then((data) => {
                console.log(data);
                const temp = data.main.temp
                const { description, icon } = data.weather[0]
                const loc = data.name

                // Set DOM elements from API
                temperatureDegree.textContent = temp
                temperatureDesc.textContent = description
                locationTimezone.textContent = loc
                document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${icon}@2x.png`
                console.log(`http://openweathermap.org/img/wn/${icon}@2x.png`);
            })
            
        })
        
    } else {
        h1.textContent = "Hey, dis is not working because location not enabled"
    }
})



// api.openweathermap.org/data/2.5/weather?lat={55.653271600000004}&lon={-4.7937427999999995}&appid={051f3ec41df87985706b7a23fd5b57ee}
// 4b5597c8044a6d696d0b7c95f9c7cd8b