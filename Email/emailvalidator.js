var email = "teste@teste.com";
var atposition = email.indexOf("@");
var dotposition = email.lastIndexOf(".");
if (atposition == -1 || dotposition == -1) {
    console.log('invalid email iD');
}
else {
    console.log('valid email id');
}
