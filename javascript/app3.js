document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const followerId = urlParams.get('id');
    const urlFollower = `https://api.github.com/users/${followerId}`;

    fetch(urlFollower)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados do seguidor');
            }
            return response.json();
        })
        .then((data) => {
            renderizarSeguidor(data);
            console.log(data);
            fetchSeguidoresSeguidor(followerId);
        })
        .catch((err) => console.log(err));
});

const renderizarSeguidor = (item) => {
    const divFoto = document.getElementById("fotoSeguidor");
    const divBio = document.getElementById("nameSeguidor");
    const divFooter = document.getElementById("footer");

    divFoto.innerHTML = `<img class="fotoProfile" style="border-radius: 300px;" src="${item.avatar_url}">`;
    divBio.innerHTML = `
        <h2 class="nome">${item.login}</h2>
        <h3 class="bio">${item.bio}</h3>
    `;
    divFooter.innerHTML = `<p>Todos os direitos reservados a ${item.login}</p>`;
};

const fetchSeguidoresSeguidor = (followerId) => {
    const urlFollowers = `https://api.github.com/users/${followerId}/followers`;

    fetch(urlFollowers)
        .then((response) => {
            if (!response.ok) {
                throw new Error('acabo o limite da taxa de requisição ou não sei');
            }
            return response.json();
        })
        .then((data) => {
            renderizarFollowersSeguidor(data);
            console.log(data);
        })
        .catch((err) => console.log(err));
};

const renderizarFollowersSeguidor = (items) => {
    const containerFollowers = document.getElementById("divSeguidores");

    items.forEach((item) => {
        const divFollowers = document.createElement('div');

        divFollowers.innerHTML = `
            <img class="followersFoto" alt="avatar de ${item.login}" src="${item.avatar_url}" onclick="location.href='./seguidor.html?id=${item.login}'">
            <p class="nomeSeguidor">${item.login}</p>
        `;
        divFollowers.classList.add('divSeguidores');
        containerFollowers.appendChild(divFollowers);
    });
};