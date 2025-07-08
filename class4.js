//PROMISES

// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve("done");
//         reject("Failed");
//     },2000);
// });

// myPromise
// .then((res)=> console.log(res))
// .catch((rej)=>console.log(rej));

// console.log(myPromise);

/* --------------------------------------------------------------------------------------------------------------*/


// const placementPromise = new Promise((resolve) => {
//     setTimeout(() => { 
//         resolve("Placement Done") 
//     }, 1000);
// });

// placementPromise
//   .then((res) => {
//     console.log(res); 
//     return new Promise((resolve) =>{
//       setTimeout(() => { 
//         resolve("Party") 
//     }, 2000); 
//     });
//   })
//   .then((res) => {
//     console.log(res); 
//     return new Promise((resolve) => {
//       setTimeout(() => { 
//         resolve("Joining") 
//       }, 3000);
//     });
//   })
//   .then((res) => {
//     console.log(res); 
//     return new Promise((resolve) => {
//       setTimeout(() => { 
//         resolve("Work") 
//       }, 4000);
//     });
//   })
//   .then((res) => {
//     console.log(res); 
//     return new Promise((resolve) => {
//       setTimeout(() => { 
//         resolve("Layoff") 
//       }, 5000);
//     });
//   })
//   .then((res) => {
//     console.log(res); 
//   })
//   .catch((err) =>{
//     console.log(err);
//   })


/* --------------------------------------------------------------------------------------------------------------*/


// function placementProcedure(placementStep,delay){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("Message:"+ placementStep);
//       console.log("Message:"+ placementStep);
//     },delay)
//   })
// }

// placementProcedure("Got Placement",1000)
// .then(()=> placementProcedure("Party",2000))
// .then(()=> placementProcedure("Joining",3000))
// .then(()=> placementProcedure("Work",4000))
// .then(()=> placementProcedure("Layoff",5000))


/* --------------------------------------------------------------------------------------------------------------*/



const myPromise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("JetBlue Data")
    },1000)
})
const myPromise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       // resolve("Menizs Data")
        reject("Menizs Data")
    },3000)
})
const myPromise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("SpiceJet Data")
    },3000)
})
const myPromise4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("AirIndia Data")
    },2000)
})


Promise.all([myPromise1,myPromise2,myPromise3,myPromise4])
//Promise.allSettled([myPromise1,myPromise2,myPromise3,myPromise4])
//Promise.any([myPromise1,myPromise2,myPromise3,myPromise4])
//Promise.race([myPromise1,myPromise2,myPromise3,myPromise4])

.then((res)=> console.log(res))
.catch((rej)=>console.log(rej));
