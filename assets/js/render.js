const render = {
    candidates(payload) {
        const candidates = payload.candidates;
        for (let e of candidates) {
            console.log("questions",e.candidate);

           const elCandidate=dom.create(
            e.candidate,
            "img",
            elements.main,
            "container",
            imgSrc=`./assets/img/${Math.floor(Math.random() * 8)}.PNG`

           )
            
            // const elQuestion = document.createElement("div");
            // elQuestion.classname = "container";
            // elements.main.append(elQuestion);

            // const elDiv = document.createElement("div");
            // elDiv.innerHTML = e.question;
            // elQuestion.append(elDiv);

            for (let a of e.skills)
                {    
                    const licontainer=dom.create(false, "div",elements.main,"container",false)
                    const li=dom.create(a.skill,"li",licontainer,"container", imgSrc=false)
                    // const li=document.createElement("li");
                    // li.innerHTML=a.antwort;
                    // elQuestion.append(li)
                    console.log("This is SKILL:"+a.skill);
                    
                }

        }



    }




}