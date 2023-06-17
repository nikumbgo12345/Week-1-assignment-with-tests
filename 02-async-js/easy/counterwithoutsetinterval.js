function counter(n) {

    if(n == 10)
        return;

    setTimeout(() => {
        console.log(n++);
        counter(n)
    }, 1000);


}
counter(1);