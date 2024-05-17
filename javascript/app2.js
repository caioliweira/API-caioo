document.addEventListener("DOMContentLoaded", () => {
    const urlFollowers = "https://api.github.com/users/caioliweira/followers";

    fetch(urlFollowers)
        .then((response) => {
            if (!response.ok) {
                throw new Error("acabo o limite da taxa de requisição ou não sei");
            }
            return response.json();
        })
        .then((data) => {
            renderizarFollowers(data);
            console.log(data);
        })
        .catch((err) => console.log(err));
});

const renderizarFollowers = (items) => {
    const containerFollowers = document.getElementById("followers");

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
