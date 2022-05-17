const  request  = require("request")


const url = 'http://api.weatherstack.com//current?access_key=e5bb45bb4d393912e95a17adcee9acc2&query=37.8267,-122.4233&units=m'

request({ url: url, json: true}, (error, response) =>{
    console.log(response.body.current.weather_descriptions[0]+ '. It is currently ' + response.body.current.temperature + ' degree out. feels like '+ response.body.current.feelslike + ' degree.')
})