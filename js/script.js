//? synchronous

console.log('task1')
console.log('task2')
function sum(){
    console.log('sum')
}
sum()
console.log('task3')



//? Asynchronous

console.log('tamanna');
setTimeout(() => {
    console.log('task 2 (delayed)')
}, 2000);

console.log('lima')