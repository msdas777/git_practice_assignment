function CheckPrime(number){
let factor=0;
for(let i=0;i<number;i++){
    if(number%i==0){
        factor++;
    }
}

if(factor==2){
    console.log("prime");
} else{
    console.log("not a prime");
}
}
CheckPrime(13);