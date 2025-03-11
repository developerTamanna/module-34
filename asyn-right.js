const  sum = async(x, y)=>{

  const res = await  fetch("https://jsonplaceholder.typicode.com/users")
  
    const data = await res.json()
    console.log(data);
   return x+y;
}

const result = sum(12,40).then((result)=> {
    console.log(result);
});
