let equalPressed = 0;

//Now I am going to access all buttons except C and DEL:

let button_input = document.querySelectorAll('.input_button');

//Accessing equal, erase, clear and input:

let input = document.getElementById('input');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let erase = document.getElementById('erase');

window.onload = () => {
  input.value = '';
};

//Now I will access each class using forEach:

button_input.forEach((button_class) => {
  button_class.addEventListener('click', () => {
    if (equalPressed == 1) {
      input.value = '';
      equalPressed = 0;
    }
    input.value += button_class.value;
  });
});

//Now function to solve the user's input when the equal sign is pressed:

equal.addEventListener('click', () => {
  equalPressed = 1;
  let inp_val = input.value;

  try {
    let solution = eval(inp_val);
    console.log(solution);
    //Will evaluate true for natural and false for decimals
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(3);
    }
  } catch (error) {
    //If there is an invalid input
    alert('Invalid input');
  }
});

//Function to clear it all

clear.addEventListener('click', () => {
  input.value = '';
});

//Function to erase one digit

erase.addEventListener('click', () => {
  input.value = input.value.substr(0, input.value.length - 1);
});
