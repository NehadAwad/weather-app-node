const  request  = require("request")


const url = 'http://api.weatherstack.com//current?access_key=e5bb45bb4d393912e95a17adcee9acc2&query=37.8267,-122.4233'

request({ url: url}, (error, response) =>{
    console.log(response)
})