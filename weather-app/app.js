const request = require('request')
const forecast = require('./utils/forecast')

// const url = 'http://api.weatherstack.com/current?access_key=07d209b6d455a0a680327bb4b2da224b&query=37.8267,-122.4233&units=f'

// request({url:url, json: true},(err, res)=>{
    
//     if (err){
//         console.log("unable to connect services");
//     }
//     else if(res.body.err){  
//         console.log("unable to find location");
//     }
//     else{
//         console.log(res.body.current.pressure);
//     }
    
    

// })

//Geo Coding

// const url = 'http://api.positionstack.com/v1/forward?access_key=c72681881f80b1d6b8387627cc401e46&query=1600Pennsylvania Ave NW, Washington DC'

// request({url:url, json: true},(err, res)=>{
//     // const data = JSON.parse(res.body)
//     // console.log(data.current);
//     console.log(res.body.data);
// })



// const geocode= (address, callback)=>{
// const url = 'http://api.positionstack.com/v1/forward?access_key=c72681881f80b1d6b8387627cc401e46&query=1600Pennsylvania Ave NW, Washington DC &country='+ address +' ';
// request({url:url, json: true},(err, res)=>{
    
//     if (err){
//         callback("unable to connect services", undefined)
//     }
//     // else if(res.body.features.length === 0){  
//     //     callback('console.log("unable to find location");', undefined)
//     // }
//     else{
//         callback(undefined, {
//             latitude: address
//         })
//     }
    

// })
// }

// const geocode = (address, callback)=>{}

// geocode('washingtodefvdern', (data)=>{
//     console.log('err',data);
//     console.log('data',data);
//     })

forecast(-755.7088, 45.1545, (error, data)=>{
    console.log('Error', err);
    console.log('Data', data);
})