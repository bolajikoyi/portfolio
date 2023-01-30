let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (let i = 0; i < themeDots.length; i++) {
  console.log(themeDots.length);
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("option clicked:", mode);
    setTheme(mode);
  });
}

// hearts = document.querySelectorAll('.heart');
// for (let heart of hearts) {
//     setInterval(async() => {
//         await heart.classList.toggle('heartColor')
//     }, 1000)
// }
document.querySelector(".year").textContent = new Date().getFullYear();

function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";
  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue-mode.css";
  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green-mode.css";
  }

  localStorage.setItem("theme", mode);
}
