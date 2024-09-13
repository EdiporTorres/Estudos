let password:string = "Teste1234"
let RegEx:any = /(?=.*[A-Z])\w{4,10}/

if(password.match(RegEx)){
    console.log("Valid Password")
} else{
    console.log("Invalid Password "+ password)
}