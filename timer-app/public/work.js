function sum(){
    const result =  Array.from(arguments).reduce((a,b)=>{
        return a + b
    })
    console.log(result);
}
sum(1,2,3,4,5,6,7,8,9,10);