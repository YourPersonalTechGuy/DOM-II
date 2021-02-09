// Your code goes here
let navA = document.querySelectorAll(".nav-link");
let nav = document.querySelector(".nav-container")

navA.forEach((item) => {
    
    item.addEventListener("mouseover", (event) => {
        event.target.style.color = "red"
        nav.style.backgroundColor = "lime"
        event.preventDefault();
    })
    item.addEventListener("mouseleave", (event) => {
        event.target.style.color = null
        nav.style.backgroundColor = null
        event.preventDefault();
    })

    item.addEventListener("focus", (event) => {
        event.target.style.backgroundColor = "cyan"
        event.preventDefault();
    })
    item.addEventListener("blur", (event) => {
        event.target.style.backgroundColor = ""
        event.preventDefault();
    })
})

let button = document.querySelectorAll(".btn")

button.forEach((item) => {
    item.addEventListener("click", (event) => {
        prompt("Please enter your email").includes("@") ? alert("Your email has been submitted") : alert("That was not an email")
    })
    item.addEventListener("auxclick", (event) => {
        alert("you must be a lefty")
    })
})

let img = document.querySelectorAll("img")

img.forEach((item) => {
    item.addEventListener("dblclick", (event) => {
        event.target.setAttribute("src", "https://loremflickr.com/400/250/meme")
    })
})

document.addEventListener("keydown", (event) => {
    event.key === "Escape" ? alert("There is no escape") : null
})

let navnav = document.querySelector("nav.nav")
let tracker = document.createElement("a")
navnav.prepend(tracker);

document.addEventListener("mouseenter", (event) => {
    tracker.innerHTML = `We are watching X:${event.clientX} Y:${event.clientY}`
})
document.addEventListener("mousemove", (event) => {
    tracker.innerHTML = `We are watching X:${event.clientX} Y:${event.clientY}`
})
document.addEventListener("mouseleave", (event) => {
    tracker.innerHTML = ``
})


