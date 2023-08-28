const display = document.querySelector("#calc-input");
const buttons = document.querySelectorAll("button");
const specialChars = ["/", "+", "-", "%", "*", "=", "**"];
let output ="";

function caclulate(btnVal){
//  console.log(btnVal);
if(btnVal === "=" && btnVal !== ""){
    // if output has '%', replace it with '/100' before evaluating.
    output = eval(output.replace("%", "/100"))
}else if(btnVal === "c"){
    output="";
}else if(btnVal === "de"){
    // if DE is clicked, remove the last charachter from the output.
    output = output.toString().slice(0, -1);
}else{
    // if output is empty and button is special chars then return.
    if(output === "" && specialChars.includes(btnVal)) return;
    output += btnVal;
}
    display.value = output;

}

buttons.forEach(btn => {
    btn.addEventListener("click", (e)=> caclulate(e.target.value))
})
