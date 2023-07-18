

// const name = 'andrew'
// const userAge = 26
// const user = {
//         name,
//         age: userAge,
//         location: 'Philadephia'
// }

// console.log(user);


// object destructing

const product ={
    label : 'Red Notebook',
    price :3,
    stock : 201,
    salePrice: undefined,
    rating: 4.2
}

// // const label = product.label
// // const stock = product.stock

// const {label, stock} = product

// console.log(label);
// console.log(stock);



const transaction = (type, {label,stock})=>{
    console.log(type, label, stock);

}

transaction('order', product)