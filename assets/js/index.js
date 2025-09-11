"use strict"

const handleDataload = () => {
    //console.log(evt);
    const request = new XMLHttpRequest();
    request.open("get", "/data.json")
    request.addEventListener("load", () => {

        if (request.status == 200) {
            console.log(request.response);
            const data = JSON.parse(request.response)
            render(data)
            console.log("test", render(data));

        }
        else {
            console.warn(`${xhr.responseURL} konnte nicht geladen werden: ${xhr.statusText}`);
        }

    })
    request.send()


}


const render = (data) => {
  

    //const prender=document.querySelectorAll("p")
    let all = document.body;
    let counterCorrectAnswers=0;
    let counterWrongAnswers=0;
    for (let i = 0; i < data.questions.length; i++) {

        console.log(data.questions[i].answers.length)

        console.log(data.questions[i]);

        const p = document.createElement('p')
        p.className="paragraph"
        p.innerHTML = data.questions[i].question
        all.append(p)



        for (let j = 0; j < data.questions[i].answers.length; j++) {
            const li = document.createElement('li')
            li.innerHTML = data.questions[i].answers[j].antwort
            li.className="list"
            all.append(li)

            li.addEventListener('click',()=>{
                //console.log("Answere clicked");
                

                if(data.questions[i].answers[j].true){
                    console.log(data.questions[i].answers[j].true)
                    console.log("congrats the answer is True - correct");
                   counterCorrectAnswers++
                    console.log("CCA",counterCorrectAnswers);
                    
                } else 
              {  counterWrongAnswers++
                console.log("wrong answere try again!")
                console.log(data.questions[i].answers[j].true);
                console.log("CWA",counterWrongAnswers);
                }
                
                
            })
        }

        //item.innerHTML=JSON.stringify(object);



    }
    return data


}


const init = () => {

    const btn = document.querySelector("button")
    btn.addEventListener("click", handleDataload)









}

init()