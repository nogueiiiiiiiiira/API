async function fetchCharacters(){

    const page = document.getElementById("pageInput").value || 1;
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`

    try {
        const response = await fetch(apiUrl);
        const data = await response.json()
        displayCharacters(data.results);

    } catch (error) {
        console.error("Erro ao buscar personagens - ", error);
    }
}

function displayCharacters(characters){
    const container = document.getElementById("container");
    container.innerHTML = "";

    characters.forEach(character => {
        const card = document.createElement("div");
        card.className = "card";

        const name = document.createElement("h5");
        name.textContent = character.name;

        const species = document.createElement("p");
        species.textContent = `Spiece: ${character.species}`;

        const status = document.createElement("p");
        status.textContent = `Status: ${character.status}`;

        const image = document.createElement("img");
        image.src = character.image;
        image.alt = character.name;
        image.style.width = "auto";
        image.style.height = "200px";

        if (character.status == "Dead") {
            status.style.color = "red";
        }

        if (character.status == "Alive") {
            status.style.color = "green";
        }

        if (character.status == "unknown") {
            status.style.color = "yellow";
        }


        card.appendChild(name);
        card.appendChild(species);
        card.appendChild(status)
        card.appendChild(image);

        container.appendChild(card);
    });
}

function searchByName(){
    const searchTerm = document.getElementById("nameInput").value.toLowerCase();
    const characters = document.querySelectorAll(".card");

    characters.forEach((character) => {
        const characterName = character.querySelector("h3").textContent.toLowerCase();
        if(characterName.includes(searchTerm)){
            character.style.display = "block"
        }else{
            character.style.display = "none"
        }
    })
}