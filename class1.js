// // function calculate(param1){
// //     console.log("Business logic");
// //     param1();

// // }


// // var sumofTwo = ()=>{
// //     console.log('Sum of two elements');
// // }
// // calculate(sumofTwo) 

// // function calculate(logicfunction,a,b){  //MAIN HIGHER ORDER FUNCTION
// //     return logicfunction(a,b);
// // }

// // function add(a,b){                  //LOGICAL FUNCTIONS
// //     return a+b;
// // }

// // function sub(a,b){
// //     return a-b;
// // }   

// // console.log(calculate(add,2,3));
// // console.log(calculate(sub,2,3));


// //print student name and fees - student details
// // use this fees and divide by 10 - emi
// // print greeting - 'Piyush with 30 k and  emi of 3k


// function Task(logicfunction,name,fees){
//     return logicfunction(name,fees);
//     return logicfunction(fees);
//     return greeting(name,fees,EMI);
// }

// function StudentDetails(name,fees){
//     return {name,fees};
// }
// var fee;
// function EMI(fees){
//     fee = fees/10;
//     return fee
// }

// function greeting(name,fees,emi){
//     return `Student name is ${name} having fees ${fees} with emi ${emi}`
// }

// function negotiate(fee){
//     return fee%10;
// }
// console.log(StudentDetails("Aakash",30000));
// console.log(EMI(30000));
// console.log(greeting("Aakash",30000,fee))

// console.log(StudentDetails("CHOTU",60000));
// console.log(EMI(60000)); 
// console.log(greeting("CHOTU",60000,fee))
// console.log(negotiate(fee));



// SET TIMEOUT AND SET INTERVAL

setTimeout(()=>{
    console.log("Hello");
},3000)

setInterval(()=>{
    console.log("Set Interval")
},2000)
