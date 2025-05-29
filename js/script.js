
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


// Task Two Example end-------------------------//
// Task Three Example start-------------------------//
completeBtn.addEventListener('click',()=>{
    Task_2_text.style='color:green';
    Task_2_text.innerHTML='Task 2 Completed';
})

// Task Three Example end-------------------------//
// Task Four Example start-------------------------//


// Task Four Example end-------------------------//
// Task Five Example start-------------------------//


// Task Five Example end-------------------------//
// Task Six Example start-------------------------//


// Task Six Example end


