const stars = document.querySelectorAll('.fa-star');

stars.forEach(star => {
    star.addEventListener("click", () => {
        star.id = '' === star.id ? '' : 'toggled';
        star.style.color = "yellow" === star.style.color ? "black" : "yellow"
    })
})

// Task 2

const popover = document.getElementById('popover');
const popoverContent = document.getElementById('popover-content');
popoverContent.style.color = "white";
popover.addEventListener("mouseenter", () => {
    popoverContent.style.display = "block";
})
popover.addEventListener("mouseleave", () => {
    popoverContent.style.display = "none";
});

// const box = document.getElementById("box");
// box.addEventListener("click", () => {
//     box.className = '' === box.className ? '' : 'toggled';
//     box.style.backgroundColor = "red" === box.style.backgroundColor ? "red" : "blue"
//     // if (box.classList == ''){
//     //     box.style.backgroundColor = "blue"
//     //     box.className = "toggled"
//     // }
//     // else {
//     //     box.style.backgroundColor = "red"
//     //     box.className = ''
//     // }
// })

