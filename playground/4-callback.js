
setTimeout(()=>{
    console.log("Two seconds are up");
}, 2000)
const names = ['abc','bcd','hkj']

const shortnames = names.filter((name)=>{
    return name.length<3
})



const geoCode = (address, callback)=>{
    setTimeout(() => {
        const data ={
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000);

}
const data = geoCode('philadelphia', (data)=>{
console.log(data);
})
// console.log(data);