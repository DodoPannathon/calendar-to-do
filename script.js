let repeatOption = ''

document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const currentDay = today.getDate();

    const numbers = document.querySelectorAll(".number");
    numbers.forEach((number) => {
        if (parseInt(number.textContent) === currentDay) {
            number.parentElement.classList.add("current-day");
        }
    });
});
// function displayaddtask() {
//     const form = document.createElement("form");
//     const addtask = document.querySelector('.add-task')
//     form.setAttribute("id", "addtaskform");
//     form.innerHTML = `
//     <div class="close">
//         <button id="close" type="button">X</button>
//     </div>
//     <div class="input-field">
//         <input type="text" id="task-input"required>
//         <label for="task-input">Enter you Task</label>
//     </div>
//     <button id="repeat-task" type="button" onclick="displayrepeat()">Repeat</button>
//     <button id="add-task" type="submit">Add Task</button>
//     `
//     form.style.position = 'fixed';
//     form.style.backgroundColor = '#222222'
//     form.style.padding = '10px';
//     form.style.borderRadius = '20px';
//     form.style.zIndex = '10';
//     form.style.marginTop = '5px'
//     addtask.appendChild(form);

//     const close = form.querySelector("#close")
//     close.addEventListener('click', () => {
//         form.remove();
//     });
// };
function displayrepeat() {
    const repeat = document.createElement("div");
    const add_task = document.querySelector('#add-task');
    repeat.setAttribute("id", "repeat");
    repeat.innerHTML = `
    <div class="repeat-container">
        <button type="button" class=" duration-repeat-button" id="repeat-day">Repeat every 1 day</button>
    </div>
    <div class="repeat-container">
        <button type="button" class=" duration-repeat-button" id="repeat-week">Repeat every 1 week</button>
    </div>
    <div class="repeat-container">
        <button type="button" class=" duration-repeat-button" id="repeat-month">Repeat every 1 month</button>
    </div>
    <div class="repeat-container">
        <button type="button" class=" duration-repeat-button" id="repeat-custom">Custom Repeat</button>
    </div>
    `;
    repeat.style.position = 'fixed';
    repeat.style.right = '20px';
    repeat.style.backgroundColor = '#313131';
    repeat.style.padding = '10px';
    repeat.style.borderRadius = '20px';
    repeat.style.zIndex = '10';
    repeat.style.marginTop = '5px';
    add_task.appendChild(repeat);

    document.getElementById("repeat-day").addEventListener('click', () => {
        repeatOption = 'day';
        repeat.remove();
    })
    document.getElementById("repeat-week").addEventListener('click', () => {
        repeatOption = 'week';
        repeat.remove();
    })
    document.getElementById("repeat-month").addEventListener('click', () => {
        repeatOption = 'month';
        repeat.remove();
    })

    let count = 0
    document.addEventListener('click', function(event) {
        if (count >= 1) {
            if (!repeat.contains(event.target)) {
                // console.log("remove")
                repeat.remove();
                count = 0
            };
        };
        count += 1
        // console.log("count + 1")
    });
};
function submittask() {
    console.log("submit")
    let textInput = document.getElementById('text-input').value;
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currenttoday = today.getDate();
    if (repeatOption === 'day') {
        for (let i = currenttoday; i <= 31; i++) {
            addtaskincalendar(textInput,currentMonth,i);
            console.log("day")
        };
    } else if (repeatOption === 'week') {
        for (let i = currenttoday; i <= 31; i += 7) {
            addtaskincalendar(textInput,currentMonth,i);
            console.log("week")
        };
    }else if (repeatOption === 'month') {
        for (let i = currenttoday; i <= 31; i += 30) {
            addtaskincalendar(textInput,i);
            console.log("month")
        };
    } else {
        addtaskincalendar(textInput,currentMonth,currenttoday);
        console.log("Today")
    }
    repeatOption = "";
    textInput = "";
};
function addtaskincalendar(text,month,day) {
    const divtask = document.querySelector(`#task-${month}-${day}`)
    if (divtask) {
        const task = document.createElement("div");
        task.setAttribute("class", "task-contianer");
        task.innerHTML = `
            <input id="task-text-${month}-${day}" type="checkbox">
            <label for="task-text-${month}-${day}">${text}</label>
        `;
        divtask.appendChild(task);
    } else {
        console.error(`Element with id "task-${month}-${day}" not found.`);
    }
}