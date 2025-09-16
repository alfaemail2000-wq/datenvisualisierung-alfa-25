const render = {
    candidates(candidates) {
        //const candidates = payload.candidates;
elements.main.innerHTML="";
        let detailContainer = document.querySelector("#candidateDetails");
        if (!detailContainer) {
            detailContainer = document.createElement("div");
            detailContainer.id = "candidateDetails";
            document.body.appendChild(detailContainer);
        }

        for (let e of candidates) {
            console.log("questions", e.candidate);

            // generate and store random index ONCE
            e.randomIndex = Math.floor(Math.random() * 8);

            // create candidate img in main list
            const elCandidate = dom.create(
                e.candidate,
                "img",
                elements.main,
                "container",
                `./assets/img/${e.randomIndex}.PNG`
            );

            // add click event
          
            elCandidate.addEventListener("click", () => {
                // hide all candidates (query instead of array)
                const deselectDivBtn=document.querySelector("#showButton")
                const allCandidates = elements.main.querySelectorAll("img");

                for (let c of allCandidates) {
                    c.style.display = "none";
                    deselectDivBtn.style.display="none";

                }

                // show only this candidate in detail container
                showCandidateDetails(e, detailContainer);
            });
        }
    }
};

function showCandidateDetails(candidate, container) {
    container.innerHTML = ""; // clear previous content

    // use the SAME random index stored earlier
    dom.create(
        candidate.candidate,
        "img",
        container,
        "container",
        `./assets/img/${candidate.randomIndex}.PNG`
    );



    // render skills
    for (let a of candidate.skills) {
        const licontainer = dom.create(false, "div", container, "skill-container", false);
        dom.create(a.skill, "li", licontainer, "skill-item", false);
        console.log("This is SKILL:" + a.skill);

    }


    const reloadBtn = document.createElement("button");
    reloadBtn.textContent = "Reload All";
    reloadBtn.classList.add("reloadbtn")
    container.append(reloadBtn);

    // reload logic
    reloadBtn.addEventListener("click", () => {
        // 1. Clear the detail view
        container.innerHTML = "";
        // 2. Clear the main list
        elements.main.innerHTML = "";
        // 3. Reload candidates from JSON
        dom.mapping();
        ajax.loadJSON("assets/data/data.json", render.candidates);
    });

   

    // function checkCandidates (){
    //     console.log("Candidates log test search event ", candidates);
        
    //     dom.mapping();
    //     ajax.loadJSON("assets/data/data.json", render.candidates);

    //     const searchstr=suchfeld.value.trim().toLowerCase();

    //     for (let i=0;i<candidates.length;i++){
    //         const item=candidates[i];
    //         console.log(item);
            
    //     }

      
    // }




    // suchfeld.addEventListener("input",(e)=>{
    //     console.log("this is text input value", e.target.value);
        
    //     //dom.mapping();
    //     //ajax.loadJSON("assets/data/data.json", render.candidates);
    //     for (persone in candidates){
    //         if(persone.candidate==e.target.textContent){
    //             //render and create a candidate selected 
    //             showCandidateDetails(e, detailContainer);
    //         }

    //     }

    // })




         
    
            
    
}





    



// suchfeld.addEventListener("input", (e) => {
//     const searchStr = e.target.value.trim().toLowerCase();
//     console.log("Searching for:", searchStr);
//     // filter logic here

//     for (let i=0;i<candidates.length;i++){
//         const item=candidates[i];
//         console.log(item);
        
//     }
//     if(searchstr && item.textContent.toLowerCase().includes(searchstr)){
//         item.className="found";
//         console.log("found",searchstr);
        

//     } else {
//         item.className="";
//     }
// });
