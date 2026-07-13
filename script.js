// ===============================
// Life With Leo Malli
// Professional Script
// ===============================

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 1200);
  }
});

// Dark / Light Mode
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      themeBtn.innerHTML = "☀️";
    } else {
      themeBtn.innerHTML = "🌙";
    }
  });
}

// Scroll Progress Bar
window.addEventListener("scroll", () => {

const progress = document.getElementById("progressBar");

if(progress){

let totalHeight =
document.documentElement.scrollHeight -
window.innerHeight;

let progressHeight =
(window.pageYOffset / totalHeight) * 100;

progress.style.width = progressHeight + "%";

}

});

// Scroll Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach((section)=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition=".8s";

observer.observe(section);

});

// Header Shadow
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 5px 20px rgba(0,0,0,.4)";

}else{

header.style.boxShadow="none";

}

});

// Scroll To Top Button
const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
left:20px;
bottom:20px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#ff0000;
color:white;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
`;

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Console
console.log("Welcome To Life With Leo Malli");