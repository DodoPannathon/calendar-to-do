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
};
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
    <div class="repeat-container">
        <button type="button" class=" duration-repeat-button" id="repeat-custom">Custom Repeat</button>
    </div>
    `;
    repeat.style.position = 'fixed';
    repeat.style.backgroundColor = '#313131';
    repeat.style.padding = '10px';
    repeat.style.borderRadius = '20px';
    repeat.style.zIndex = '10';
    repeat.style.marginTop = '5px';
    form.appendChild(repeat);

    repeat.focus();
    repeat.addEventListener('blur', () => {
        repeat.remove();
    });
}