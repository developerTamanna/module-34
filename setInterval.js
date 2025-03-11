let count = 1;
const interValid = setInterval(()=>{
    console.log('count', count);
    count ++;


    if(count >5){
        clearInterval(interValid);
        console.log("interval stopped")
    }
}, 1000);