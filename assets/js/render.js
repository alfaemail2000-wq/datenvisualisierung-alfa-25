const render = {
    questions(payload) {
        const questions = payload.questions;
        for (let e of questions) {
            console.log(e);
            
            const elQuestion = document.createElement("div");
            elQuestion.classname = "container";
            elements.main.append(elQuestion);

            const elDiv = document.createElement("div");
            elDiv.innerHTML = e.question;
            elQuestion.append(elDiv);

            for (let a of e.answers)
                {
                    const li=document.createElement("li");
                    li.innerHTML=a.antwort;
                    elQuestion.append(li)
                    console.log(a.antwort);
                    
                }

        }



    }




}