
function counter()
{ let n=1;
   id= setInterval(()=>{
        console.clear();
        console.log(n++);

        if( n == 10)
            clearInterval(id);
    },1000);
}
counter();
console.log("starting counter")