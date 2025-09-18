const render = {
  candidates(candidates) {
    elements.main.innerHTML = ""; // clear main list
    const loadButton = document.querySelector("#showButton button");
  

    for (let e of candidates) {
      // assign a random index once for each candidate if not already set
      if (e.randomIndex === undefined) {
        e.randomIndex = Math.floor(Math.random() * candidates.length);
      }

      // create candidate image in main container
      const elCandidate = dom.create(
        false, // no innerHTML
        "img",
        elements.main,
        "candidate-img",
        `${e.candidatepath}${e.randomIndex}.PNG`
      );

      elCandidate.addEventListener("click", () => {
        // hide all main images
        const allCandidates = elements.main.querySelectorAll(".candidate-img");
        allCandidates.forEach(c => (c.style.display = "none"));

        // hide load button
        if (loadButton) loadButton.style.display = "none";

        // remove old detail section if exists
        const oldDetail = document.querySelector("#candidateDetails");
        if (oldDetail) oldDetail.remove();

        // create detail section
        const container = document.createElement("div");
        container.id = "candidateDetails";
        elements.main.appendChild(container);

        // create selected image **only in detail container**
        dom.create(
          false,
          "img",
          container,
          "container",
          `${e.candidatepath}${e.randomIndex}.PNG`
        );


        const nameDiv = dom.create(false, "div", container, "candidate-name", false);
        dom.create(e.name, "h1", nameDiv, false, false);

        const skillBeschrift = dom.create(false, "div", container, "candidate-name", false);
        const h2_Skills = dom.create("-skills-", "h2", nameDiv, false, false);
        h2_Skills.style.color = "#1e90ff";
        // show skills
        for (let skill of e.skills) {

          const skillDiv = dom.create(false, "div", container, "skill-container", false);
          dom.create(skill.skill, "li", skillDiv, "skill-item", false);
        }

        const ausbildungsBeschrift = dom.create(false, "div", container, "candidate-name", false);
        const h2_Ausbildung = dom.create("-ausbildung-", "h2", ausbildungsBeschrift, false, false);
        h2_Ausbildung.style.color = "#1e90ff";


        for (let ausbildeinricht of e.studium) {
          const studiumDiv = dom.create(false, "div", container, "skill-container", false);
          dom.create(ausbildeinricht.einrichtung, "li", studiumDiv, "skill-item", false)
          console.log("Ausbildeinricht", ausbildeinricht.einrichtung, "studium", e.studium);

        }
        const hrform = document.querySelector("#HRForm");
        if (hrform) {
          const clone = hrform.cloneNode(true); // clone including inputs
          clone.style.display = "block";
          container.appendChild(clone);

          const showButton = document.querySelector("#showFormDataBtn");

          handleSubmit=(evt)=>{
            evt.preventDefault();
            const formdata = new FormData(clone);
            const dataObj=Object.fromEntries(formdata.entries())
            //console.log("this is formData", formdata);
            localStorage.setItem("HRFormData", JSON.stringify(dataObj));
            showButton.hidden = false;
          }
          
          clone.addEventListener("submit",handleSubmit);



          document.querySelector("#showFormDataBtn").addEventListener("click", () => {
            localstoragerender.renderSavedData("#savedDataContainer");
          });
        }



        // reload button
        const reloadBtn = document.createElement("button");
        reloadBtn.textContent = "Reload All";
        reloadBtn.classList.add("reloadbtn");
        container.appendChild(reloadBtn);

        reloadBtn.addEventListener("click", () => {
          container.remove();
          elements.main.innerHTML = "";
          if (loadButton) loadButton.style.display = "inline-block";


          //todos deselect the show saved from data
          if (showButton) showButton.hidden = true;

          dom.mapping();
          ajax.loadJSON("assets/data/data.json", payload => {
            payload.candidates.forEach(c => {
              c.randomIndex = Math.floor(Math.random() * payload.candidates.length);
            });
            render.candidates(payload.candidates);

          });
        });
      });
    }
  }
};
