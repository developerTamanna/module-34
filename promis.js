// // const loadData =()=>{
// //     fetch('https://jsonplaceholder.typicode.com/users')
// //     // .then(res =>console.log (res.json()))
// //     .then((res) => res.json() )
// //     .then((data) => {
// //         console.log(data)
     
// //     })
// //     .catch((err) =>{
// //         console.log('this line :', err)
// //     } );
    
// // }

// loadData()



// // const fetchData =()=>{
// //     return new Promise((resolve,reject)=>{
// //     const status = true;
// //     if(status){
// //         resolve({name:"tamanna"})
// //     }
// //     else{
// //         reject("server error")
// //     }
// // })
// // }

// // fetchData()
// // .then((res) => console.log(res))
// // .catch((err) => console.log(err))




// const fetchData =()=>{
//      return new Promise((resolve, reject) => {
//          const status = true;
//          if(status){
//             resolve({name:"tamanna", age: 43})
//          } 
//          else{
//             reject("server error")
//          }
//       })
// }
// fetchData()
// .then((res) =>console.log(res) )
// .catch((err) => {
//     console.log(err)
// })