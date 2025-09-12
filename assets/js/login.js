"use strict "

const formlogin = {
  loggedin: false,
  
  logging() {
     const form = document.querySelector("form");
    const btn=document.querySelector("#showButton button")
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("Formular abgesendet!", event.target);
      console.log("Submitter (Button):", event.submitter);

      const username = form.username.value;
      const password = form.password.value;

      if (username === "bill" && password === "js") {
        // Wichtig: Property des Objekts ändern
        this.loggedin = true;
        console.log("you logged in!", this.loggedin);
                // Remove 'notvisible' and add 'visible'
                btn.classList.remove("notvisible");
                btn.classList.add("visible");
                form.classList.toggle("hidden")
      } else {
        console.log("Login fehlgeschlagen!");
      }

      console.log("Login attempt:", username, password);
    });
  }
};
























