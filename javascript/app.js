document.addEventListener("DOMContentLoaded", () => {
    const urlBase = "https://api.github.com/users/caioliweira";
    
    fetch(urlBase)
        .then((response) => {
            if (!response.ok) {
                throw new Error('acabo o limite da taxa de requisição ou não sei');
            }
            return response.json();
        })
        .then((data) => {
            renderizarElemento(data);
            console.log(data);
        })
        .catch((err) => console.log(err));
    
    document.getElementById("homeButton").addEventListener("click", () => {
        location.href = "index.html";
    });
    
    document.getElementById("backButton").addEventListener("click", () => {
        location.href = "index.html";
    });
});

const renderizarElemento = (item) => {
    const divFoto = document.getElementById("foto");
    const divBio = document.getElementById("name");
    const divFooter = document.getElementById("footer");

    divFoto.innerHTML = `<img class="fotoProfile" style="border-radius: 300px;" src="${item.avatar_url}">`;
    divBio.innerHTML = `
        <h2 class="nome">${item.login}</h2>
        <h3 class="bio">${item.bio}</h3>
    `;
    divFooter.innerHTML = `<p>Todos os direitos reservados a ${item.login}</p>`;
};
