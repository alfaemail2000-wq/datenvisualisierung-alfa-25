"use strict"

formlogin.logging()


const handleDataload = () => {
    console.log("fromjs", formlogin.loggedin);
    if (formlogin.loggedin) {
        dom.mapping();
        ajax.loadJSON('assets/data/data.json', render.candidates);

        

      


        const form = document.querySelector("#loginForm"); 
        form.classList.add("hidden");
    }
    else { 
        formlogin.logging();
    }
}
const init = () => {
    const btn = document.querySelector("#showButton button")
    btn.classList.add("notvisible");
    btn.addEventListener("click", handleDataload)

}

init();


// 'use strict';

// const init = () => {
//     dom.mapping();
//     ajax.loadJSON('/data/data.json', render.questions);
// }


// init();