const stars = document.querySelectorAll('.fa-star');

stars.forEach(star => {
    star.addEventListener("click", () => {
        star.id = '' === star.id ? '' : 'toggled';
        star.style.color = "yellow" === star.style.color ? "black" : "yellow"
    })
})

const box = document.getElementById("box");
box.addEventListener("click", () => {
    box.className = '' === box.className ? '' : 'toggled';
    box.style.backgroundColor = "red" === box.style.backgroundColor ? "red" : "blue"
    // if (box.classList == ''){
    //     box.style.backgroundColor = "blue"
    //     box.className = "toggled"
    // }
    // else {
    //     box.style.backgroundColor = "red"
    //     box.className = ''
    // }
})

