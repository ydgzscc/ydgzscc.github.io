function updateDateTime() {
  const now = new Date()
  const options = {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }
  document.getElementById("datetime").textContent = now.toLocaleString("ja-JP", options)
}

function scaleTitle() {
  const title = document.getElementById("title")
  title.style.animation = "scale 2s infinite"
}

function createNewYearEffect() {
  const text = document.createElement("div")
  text.className = "new-year-text"
  text.textContent = "新年好，开学快乐~"
  document.body.appendChild(text)

  // 强制重绘
  void text.offsetWidth

  text.style.animation = "fadeInOut 3s ease-in-out"

  text.addEventListener("animationend", () => {
    text.remove()
  })

  console.log("新年效果已创建")
}

updateDateTime()
setInterval(updateDateTime, 1000)
scaleTitle()

// 页面加载后立即显示一次
document.addEventListener("DOMContentLoaded", createNewYearEffect)

// 之后每10秒显示一次
setInterval(createNewYearEffect, 10000)

