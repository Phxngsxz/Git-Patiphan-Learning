// ฟังก์ชันเปลี่ยนสีพื้นหลังแบบสุ่ม
function changeBackgroundColor() {
    const colors = ["#f8b400", "#ff5733", "#33ff57", "#5733ff", "#ff33a1", "#33a1ff"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// ดักจับ Event คลิกปุ่ม
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("changeColorButton");
    button.addEventListener("click", changeBackgroundColor);
});
