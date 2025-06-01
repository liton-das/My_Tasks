// select the dom element
let my_inp= document.querySelector('.my_inp');
let my_btn= document.querySelector('.my_btn');
let label_text= document.querySelector('.label_text');
let result= document.querySelector('.result');
let head_text= document.querySelector('.head_text');
let user_inp_table = document.querySelector('.user_inp_table');
// for loop Example
// added the event for user input
my_btn.addEventListener('click', ()=>{
    result.innerHTML = ""; // Clear previous results
      for (let i = 1; i < 11; i++) {
        if (my_inp.value == '') {
          label_text.innerHTML = "Please enter a number";
          label_text.style.color = "red";
          my_inp.focus()
          my_inp.style.border = "1px solid red";
          my_btn.innerHTML = 'Try Again';
          my_btn.style.backgroundColor = "red";
          head_text.innerHTML = 'OOps! Something went wrong';
          head_text.style.color = "red";
          result.innerHTML= 'Your Result Not Found';
          result.style.color = "red";
        } else {
            result.innerHTML += `${my_inp.value} X ${i} = ${my_inp.value * i} <br>`;
            label_text.innerHTML = "Great! Job!";
            label_text.style.color = "green";
            my_inp.style.border = "1px solid green";
            my_btn.innerHTML = 'Submited';
            my_btn.style.backgroundColor = "green";
            head_text.innerHTML = 'congratulations you did it';
            head_text.style.color = "green";
            user_inp_table.innerHTML =`your multiplication table is: ${my_inp.value}`;
            user_inp_table.style.color = "blue";
            result.style.color = "black";
        }
      }
})
// user can select the color of the result
let red = document.querySelector('.red');
let green = document.querySelector('.green');
let blue = document.querySelector('.blue');
let dark = document.querySelector('.dark');
let user_color = document.querySelector('.user_color');
red.addEventListener('click',()=>{
    result.style.color = "red";
    result.style.backgroundColor = "lightpink";
    user_color.style.backgroundColor = "red";
})
green.addEventListener('click',()=>{
    result.style.color = "green";
    result.style.backgroundColor = "lightgreen";
    user_color.style.backgroundColor = "green";
})
blue.addEventListener('click',()=>{
    result.style.color = "blue";
    result.style.backgroundColor = "lightblue";
    user_color.style.backgroundColor = "blue";
})
dark.addEventListener('click',()=>{
    result.style.color = "lightgray";
    result.style.backgroundColor = "#000";
    user_color.style.backgroundColor = "black";
})