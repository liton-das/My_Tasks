
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
  task_three_complete.innerHTML='Task 3 Completed';
  task_three_complete.style='color:green;padding:20px';
})

// Task Three Example end-------------------------//
// Task Four Example start-------------------------//


// Task Four Example end-------------------------//
// Task Five Example start-------------------------//


// Task Five Example end-------------------------//
// Task Six Example start-------------------------//


// Task Six Example end


