let cell:string = "989745687"

let re:any = /[0-9]{9}/

if(cell.match(re)){
    console.log("Valid Cell Number")
} else{
    console.log("Invalid Cell Number " +cell)
}