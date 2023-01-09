const API_KEY = '0131fb00796c7ace47cddb3df88fda12'

const getFormattedWeatherData = async(city, units = 'metric') => {
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`


}