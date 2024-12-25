function openEnvelope() {
  const flap = document.getElementById("flap");
  const letter = document.getElementById("letter");
  const heart = document.getElementById("heart");

  // เปิดฝาปิดซอง
  flap.style.transform = "rotateX(180deg)";
  
  // เลื่อนจดหมายขึ้น
  letter.style.transform = "translate(-50%, -120%)";

  // เพิ่มแอนิเมชันหัวใจ: ขยายและเอียง 45 องศา
  heart.style.transform = "translate(-50%, -50%) scale(1.2) rotate(45deg)";
  setTimeout(() => {
    heart.style.transform = "translate(-50%, -50%) scale(1) rotate(45deg)";
  }, 500);
}

function resetEnvelope() {
  const flap = document.getElementById("flap");
  const letter = document.getElementById("letter");
  const heart = document.getElementById("heart");

  // ปิดฝาปิดซอง
  flap.style.transform = "rotateX(0deg)";

  // เลื่อนจดหมายกลับลงมา
  letter.style.transform = "translate(-50%, 0%)";

  // รีเซ็ตหัวใจ: ยังคงเอียง 45 องศา
  heart.style.transform = "translate(-50%, -50%) rotate(45deg)";
}
function createHearts() {
  const heartContainer = document.getElementById("heart-container");

  for (let i = 0; i < 50; i++) { // สร้างหัวใจ 50 ดวง
    const heart = document.createElement("div");
    heart.className = "heart";

    // ตั้งค่าตำแหน่งเริ่มต้นแบบสุ่ม
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDelay = `${Math.random() * 2}s`; // เริ่มแอนิเมชันไม่พร้อมกัน
    heart.style.animationDuration = `${3 + Math.random() * 2}s`; // ความเร็วแตกต่างกัน

    heartContainer.appendChild(heart);

    // ลบหัวใจเมื่อแอนิเมชันจบ
    setTimeout(() => {
      heart.remove();
    }, 5000); // หลังจาก 5 วินาที
  }
}
