document.addEventListener("DOMContentLoaded", () => {
    const today = new Date(); // วันที่ปัจจุบัน
    const currentDay = today.getDate(); // ดึงวันที่ (1-31)

    // ค้นหา <div> ที่มีตัวเลขตรงกับวันที่ปัจจุบัน
    const numbers = document.querySelectorAll(".number");
    numbers.forEach((number) => {
        if (parseInt(number.textContent) === currentDay) {
            number.parentElement.classList.add("current-day"); // เพิ่มคลาสให้ <td>
        }
    });
});