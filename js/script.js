let number1 = +prompt("Enter the first number")
let sign  = prompt("Select an action + - * /")
let number2 
let boolean1 = true
if ( sign == "+"  ){
    console.log("ok")
}else if( sign == "-"){
    console.log("ok")
}else if( sign == "*"){
    console.log("ok")
}else if( sign == "/"){
    console.log("ok")
}else{
   boolean1 = false 
}

if(boolean1  ){
 number2 = +prompt("Enter the second number")

}else{
    alert("An error occured")
}

switch(sign){
  case "+":
        result = number1 + number2
        break
  case "-":
        result = number1 - number2
        break
  case "*":
        result = number1 * number2 
        break
   case "/":
        result = number1 / number2
                         
}

alert(result)