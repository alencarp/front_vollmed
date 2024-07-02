function login() {
    fetch("http://localhost:8080/login", {
        mode:"no-cors",
        method: "POST",
        body: JSON.stringify({
          login: "ana.souza@voll.med",
          senha: "123456"
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
}

document.getElementById("btnLogin").addEventListener('click', (event)=>{
    event.preventDefault();
    console.log("Tentando logar...");
    login();
  });
