interface Add{
  (x:number, y:number):void;

}

interface Subtract{
  (x:number, y:number):number;
}

var add:Add;
var sub:Subtract;

add= function(x:number, y:number){
  console.log(x+y);
} 

sub = function (x:number, y:number){
  return x-y;
}

