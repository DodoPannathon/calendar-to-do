document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const currentDay = today.getDate();

    const numbers = document.querySelectorAll(".number");
    numbers.forEach((number) => {
        if (parseInt(number.textContent) === currentDay) {
            number.parentElement.classList.add("current-day");
        }
    });
});function displayaddtask() {
    const form = document.createElement("form");
    const addtask = document.querySelector('.add-task')
    form.setAttribute("id", "addtaskform");
    form.innerHTML = `
    <input type="text" id="task-input" placeholder="Enter your task here..." required>
    <button type="submit">Add Task</button>
    `
    form.style.position = 'fixed';
    form.style.backgroundColor = 'black'
    form.style.padding = '10px';
    form.style.borderRadius = '20px';
    form.style.zIndex = '10';
    form.style.border = '1px solid white'
    form.style.marginTop = '5px'
    addtask.appendChild(form);
}