let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");
let logo = document.getElementById("logo");

btn.onclick = function () {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("dark-hover");
    document.body.classList.toggle("dark-head");
    
   
    if (document.body.classList.contains("dark-theme")) {
        btnIcon.src = "sun.png"
        btnText.innerHTML = "Light";
        logo.src = "logo-white.png";
    }
    else {
        btnIcon.src = "moon.png"
        btnText.innerHTML = "Dark";
        logo.src = "logo.png";
    }
}


