const request = require('request')


const forecast = (latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=07d209b6d455a0a680327bb4b2da224b&query='+latitude+','+longitude+'&units=f'

    request({url:url, json:true}, (err, res)=>{
        if(err){
            callback('web not connected', undefined)

        }
        else if(res.body.err){
           callback('unable to find location', undefined)
 
        }
        else{
            callback(undefined, res.body.current.pressure+'it is current')
        }
    })

}

module.exports = forecast