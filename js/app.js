const a = 10
const first =()=>{
    second()
    console.log('hello i m from first')
}
const second =()=>{
    third()
    console.log('hello i m from second')
}
const third =()=>{
    console.log('hello i m from third')
}
const b = 20
first()
console.log('ami sobar sese asbo')