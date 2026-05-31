const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");

numbers.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

operators.forEach(button => {
    button.addEventListener("click",() => {
        const value = button.textContent;

        if(value === "="){
            display.value = eval(display.value);
        }else{
            display.value += value;
        }
    });
});

document.querySelector("#clear").addEventListener("click",() => {
    display.value = "";
});

document.querySelector("#undo").addEventListener("click",() => {
    display.value = display.value.slice(0,-1);
});

document.querySelector("#toggle").addEventListener("click", () => {
    if(display.value.startsWith("-")){
        display.value = display.value.slice(1);
    }else{
        display.value = "-" + display.value;
    }
});