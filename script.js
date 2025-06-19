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

let repeatOption = '';

function displayaddtask() {
    const form = document.createElement("form");
    const addtask = document.querySelector('.add-task')
    form.setAttribute("id", "addtaskform");
    form.innerHTML = `
    <div class="close">
        <button id="close" type="button">X</button>
    </div>
    <div class="input-field">
        <input type="text" id="task-input"required>
        <label for="task-input">Enter you Task</label>
    </div>
    <button id="repeat-task" type="button" onclick="displayrepeat()">Repeat</button>
    <button id="add-task" type="submit">Add Task</button>
    `
    form.style.position = 'fixed';
    form.style.backgroundColor = '#222222'
    form.style.padding = '10px';
    form.style.borderRadius = '20px';
    form.style.zIndex = '10';
    form.style.marginTop = '5px'
    addtask.appendChild(form);

    const close = form.querySelector("#close")
    close.addEventListener('click', () => {
        form.remove();
    });
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskInput = document.getElementById('task-input').value;
        const today = new Date();
        const currentMonth = today.getMonth() + 1;
        const currenttoday = today.getDate();
        if (repeatOption === 'day') {
            for (let i = currenttoday; i <= 31; i++) {
                addtaskincalendar(taskInput,currentMonth,i);
                console.log("day")
            };
        } else if (repeatOption === 'week') {
            for (let i = currenttoday; i <= 31; i += 7) {
                addtaskincalendar(taskInput,currentMonth,i);
                console.log("week")
            };
        }else if (repeatOption === 'month') {
            for (let i = currenttoday; i <= 31; i += 30) {
                addtaskincalendar(taskInput,i);
                console.log("month")
            };
        } else {
            addtaskincalendar(taskInput,currentMonth,currenttoday);
            console.log("Today")
        }
        form.remove();
    });
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
function displayrepeat() {
    const repeat = document.createElement("div");
    const form = document.querySelector('#addtaskform');
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
    <!-- <div class="repeat-container">
        <button type="button" class=" duration-repeat-button" id="repeat-custom">Custom Repeat</button>
    </div> -->
    `;
    repeat.style.position = 'fixed';
    repeat.style.backgroundColor = '#313131';
    repeat.style.padding = '10px';
    repeat.style.borderRadius = '20px';
    repeat.style.zIndex = '10';
    repeat.style.marginTop = '5px';
    form.appendChild(repeat);

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

    repeat.focus();
    repeat.addEventListener('blur', () => {
        repeat.remove();
    });
}