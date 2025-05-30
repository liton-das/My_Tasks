
// -------- JavaScript Code for Tasks --------
// Brake the tasks into individual sections and implement them one by one.
// -----------------------------------------------O-------------------
// Task 1: Color <h1> Text on Button Click
       
// Take an <h1> element with the text: "Hello this is my Task 1"

// Create a button below the heading. The button text can be something like: "Change Color"

// When the user clicks the button, the color of the <h1> text should change to green.
// -----------------------------------------------O-------------------
// Task one Example Start-------------------------//
let show_text=document.querySelector('.show_text');
let change_color_btn=document.querySelector('.change_color')

change_color_btn.addEventListener('click',()=>{
    show_text.style='color:green'
})

// Task one Example end-------------------------//

// Brake the tasks into individual sections and implement them one by one.
// -----------------------------------------------O-------------------
// Task 2: Change <h2> Text and Color on Button Click

// Create an <h2> element with the content: "This is Task 2"

// Add a button below it with the text: "Complete Task"

// When the user clicks the button:
// The <h2> text should change to: "Task 2 Completed"
// The color of the <h2> text should change to green
// -----------------------------------------------O-------------------
// Task Two Example start-------------------------//
let Task_2_text=document.querySelector('.Task_2_text');
let completeBtn=document.querySelector('.completeBtn');

completeBtn.addEventListener('click',()=>{
    Task_2_text.style='color:green';
    Task_2_text.innerHTML='Task 2 Completed';
})

// Task Two Example end-------------------------//
// ------------------Task Three Example-------------------------//
// Brake the tasks into individual sections and implement them one by one.
// ----------------------------------------------- O -------------------------------------------
// Task 3: Change <div> Background Color Using Buttons
// Create a <div> with:
// Width: 400px
// Height: 400px
// Initial background color: black
// Below the <div>, add 4 buttons with these background colors:
// Yellow
// Green
// Pink
// Purple
// When the user clicks on any button:
// The background color of the <div> should change to match the button’s color.
// Clicking the yellow button → <div> becomes yellow
// Clicking the green button → <div> becomes green
// Clicking the pink button → <div> becomes pink
// Clicking the purple button → <div> becomes purple
// ----------------------------------------------- O -------------------------------------------
// Task Three Example start-------------------------//
let task_3=document.querySelector('.task_3')
let task_three_complete=document.querySelector('.task_three_complete');
let btn_yellow=document.querySelector('.btn_yellow');
let btn_green=document.querySelector('.btn_green');
let btn_pink=document.querySelector('.btn_pink');
let btn_purple=document.querySelector('.btn_purple');
btn_yellow.addEventListener('click',()=>{
  task_3.style='background-color:yellow'; 
})
btn_green.addEventListener('click',()=>{
  task_3.style='background-color:green'; 
})
btn_pink.addEventListener('click',()=>{
  task_3.style='background-color:pink'; 
})
btn_purple.addEventListener('click',()=>{
    task_3.style='background-color:purple';
    task_three_complete.style='color:green;padding:20px';
    task_three_complete.innerHTML='Task 3 Completed';
})
// Task Three Example end-------------------------//
// Task Four Example start-------------------------//
let quantity=document.querySelector('.quantity');
let sum=document.querySelector('.sum');
let sub=document.querySelector('.sub');
let inc=1;
sum.addEventListener('click',()=>{
    quantity.innerHTML=`${inc++}`;
})
sub.addEventListener('click',()=>{
    if(inc ==0){
        alert('You cannot decrease the quantity below 0');
    }else{
        quantity.innerHTML=`${inc--}`;
    }
})
// Task Four Example end-------------------------//
// Task Five Example start-------------------------//
let inp=document.querySelector('.inp');
let result=document.querySelector('.result');
let form_btn=document.querySelector('.form_btn');
let err=document.querySelector('.err');
form_btn.addEventListener('click',()=>{
    if(inp.value==''){
        err.innerHTML='Name field is required';
        err.style='color:red';
    }else{
        err.innerHTML='';
        result.innerHTML=`User Name: ${inp.value}`;
        result.style='color:green';
    }
})
// Task Five Example end-------------------------//
// Task Six Example start-------------------------//
let inp_value=document.querySelector('.inp_value');
let submit_btn=document.querySelector('.form_btn2')
let err2=document.querySelector('.error')
let show_result=document.querySelector('.show_result');
let result2=document.querySelector('.result2');
let red=document.querySelector('.red');
let blue=document.querySelector('.blue');
let green=document.querySelector('.green');
submit_btn.addEventListener('click',()=>{
    if(inp_value.value==''){
        err2.innerHTML='Input field is required';
        err2.style='color:red';
        submit_btn.innerHTML='Try Again';
        submit_btn.style='background:red';
    }else{
        err2.innerHTML='';
        submit_btn.innerHTML='Submitted';
        submit_btn.style='background:green';
    }
})
show_result.addEventListener('click',()=>{
    result2.innerHTML=inp_value.value;
    show_result.style='background:green;color:#fff'
})
red.addEventListener('click',()=>{
    result2.style='color:green;background:red';
    red.style='background:red;color:blue';
})
blue.addEventListener('click',()=>{
    result2.style='color:red;background:blue';
    blue.style='background:blue;color:red';
})
green.addEventListener('click',()=>{
    result2.style='color:blue;background:green';
    green.style='background:green;color:blue';
})
// Task Six Example end


