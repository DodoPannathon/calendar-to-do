import dayjs from 'dayjs';

let repeatOption = ''
let year = 0
let Month = 0
let today = 0
const currentdate = new Date();

document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById("calendar")
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
    });
    calendar.render();
    calendar.setOption('height', 700);
});
document.addEventListener('DOMContentLoaded', function() {
    const divparent = document.querySelectorAll('.fc-daygrid-day-events');
    divparent.forEach(target => {
        const divcontent = document.createElement('div');
        divcontent.setAttribute('class', 'task-bundle');
        target.appendChild(divcontent)
    });
});
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        [text, year, Month, today] = value.split('-');
        addtaskincalendar(text, year, Month, today);
        console.log('load task');
    };
});
// document.addEventListener("DOMContentLoaded", () => {
//     const currentDay = currentdate.getDate();

//     const numbers = document.querySelectorAll(".number");
//     numbers.forEach((number) => {
//         if (parseInt(number.textContent) === currentDay) {
//             number.parentElement.classList.add("current-day");
//         }
//     });
// });
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
    const textInput = document.getElementById('text-input').value;
    const datevalue = document.getElementById('Date-input').value;
    if (datevalue) {
        [year, Month, today] = datevalue.split('-')
    } else {
        year = currentdate.getFullYear();
        Month = currentdate.getMonth() + 1;
        today = currentdate.getDate();
    };
    Month = "0" + `${Month}`;
    if (repeatOption === 'day') {
        
        // for (let i = today; i <= 31; i++) {
        //     addtaskincalendar(textInput, year, "0" + `${Month}`, i);
        //     console.log("day")
        // }
    } else if (repeatOption === 'week') {
        for (let i = today; i <= 31; i += 7) {
            addtaskincalendar(textInput, year, "0" + `${Month}`, i);
            console.log("week")
        }
    } else if (repeatOption === 'month') {
        for (let i = Month; i <= 12; i++) {
            addtaskincalendar(textInput, year, "0" + `${i}`, today);
            console.log("month")
        }
    } else {
        addtaskincalendar(textInput, year, Month, today);
        console.log("Today")
    }
    repeatOption = "";
    document.getElementById('text-input').value = "";
};
function addtaskincalendar(text, date) {
    const divtask = document.querySelector(`[data-date="${date}"]`)
    if (divtask) {
        const divcontent = divtask.querySelector(".task-bundle")
        const task = document.createElement("div");
        task.setAttribute("class", "task-contianer");
        task.innerHTML = `
            <input id="task-${text}-${date}" type="checkbox">
            <label for="task-${text}-${date}">${text}</label>
        `;
        divcontent.appendChild(task);
    } else {
        console.error(`Element with date "${date}" not found.`);
    };
    const key = `task-${text}-${date}`;
    const key_value = localStorage.getItem(key);
    if (!key_value) {
        localStorage.setItem(key, `${text}-${date}`)
        console.log('add task in localstorage');
    };
};
