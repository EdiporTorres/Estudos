var password:string = 'dTeste12@';

if (password.charCodeAt(0)>=65 && password.charCodeAt(0)<=90){
    console.log('valid password');
}else{
    console.log('invalid password '+password);
}