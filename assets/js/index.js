"use strict"

formlogin.logging()


const handleDataload = () => {
    console.log("fromjs", formlogin.loggedin);
    if (formlogin.loggedin) {
        dom.mapping();

        ajax.loadJSON('assets/data/data.json', payload => {
            // assign a random index to each candidate once
            payload.candidates.forEach(c => {
                if (c.randomIndex === undefined) {
                    c.randomIndex = Math.floor(Math.random() * payload.candidates.length);
                }
            });

            render.candidates(payload.candidates);
            datastore.payload = payload;
            
        });

        const form = document.querySelector("#loginForm");
        form.classList.add("hidden");
    } else {
        formlogin.logging();
    }
}



const handleSuche = (e) => {
    let suchitem=datastore.payload.candidates.filter(item=>item.name.includes(e.target.value));
render.candidates(suchitem);
    console.log("suchtext", e.target.value);
}


const init = () => {
  




//to do in dom js durch mapping implementieren  
    const suchfeld = document.querySelector("#suchFeld");
    suchfeld.addEventListener("input", handleSuche)

//to do in dom js durch mapping implementieren
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