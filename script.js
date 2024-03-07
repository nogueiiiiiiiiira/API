async function fetchCharacters(){

    const page = document.getElementById("pageInput").value || 1;
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`

    try {
        const response = await fetch(apiUrl);
        const data = await response.json()
        displayCharacters(data);

    } catch (error) {
        console.error("Erro ao buscar personagens - ", error);
    }
}

function displayCharacters(characters){

}