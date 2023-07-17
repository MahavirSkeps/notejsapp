// const square = (x)=> {
// return x*x;
// }

// const square= (x)=> x*x

// console.log(square(9));

const event = {
    name : 'Mahavir',
    guestList : ['ab', 'bc', 'cd'],
    event1(){
        that = this
        console.log("the party is given by " + this.name)
        this.guestList.forEach( (guest)=>{
            console.log(guest + 'is attending' + this.name)
        })
    }
}
event.event1();


// This That concept
// const event = {
//     name : 'Mahavir',
//     guestList : ['ab', 'bc', 'cd'],
//     event1(){
//         that = this
//         console.log("the party is given by " + this.name)
//         this.guestList.forEach(function (guest){
//             console.log(guest + 'is attending' + that.name)
//         })
//     }
// }