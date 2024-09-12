function doubleme(x:number);
function doubleme(x:string);
function doubleme(x:any){
    if (x && typeof x=== 'number'){
        console.log(x*2);
    } else if (x && typeof x === 'string'){
        console.log(x  +" "+ x);
    }
}



doubleme(2);
doubleme('Édipo');