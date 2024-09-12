var email:string = "teste@teste.com";
var atposition:number = email.indexOf("@");
var dotposition:number = email.lastIndexOf(".");


if (atposition == -1|| dotposition == -1){
    console.log('invalid email iD');
}else {
    console.log('valid email id');
}