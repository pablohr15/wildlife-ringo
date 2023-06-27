
fetch("https://sheets.googleapis.com/v4/spreadsheets/1m9hab2nw1GdqoLbvjJBe7vE8GSiWzliaTXcwzoYKugE/values/ringo-el-curioso?key=AIzaSyB9vIKNAaEYTQ2_Akh48VMdNioidhBIl-o")
.then(res => res.json())
.then(data => {

    const datos = data.values
    const rows = datos[1].length
    let characters = document.getElementById('characters')
    const filters = document.querySelectorAll('.nav-link')
    console.log(filters)
    let charactersList = [];

    for (let i = 0; i < rows; i++) {
        let character = {
            characterImage: datos[0][i],
            characterName: datos[1][i],
            characterDescription: datos[2][i]
        }

        charactersList.push(character);
   
        characters.innerHTML += `  
        <div class="character-card">
            <img src="assets/${i}.jpeg"></img>
            <div class="container">
                <h4 style="font-size:20px"><b>${character.characterName}</b></h4>
                <p style="font-style:italic">${character.characterDescription}</p>
            </div>
        </div>
        `

    }

    filters.forEach((filter) => {
        filter.addEventListener('click', () =>{
            
            $('.navbar-collapse').collapse('hide');

            characters.innerHTML = '';

            for (let i = 0; i < rows; i++) {
                let characterFromList = charactersList[i]
                if (characterFromList["characterDescription"].includes(filter.innerText)){
                    characters.innerHTML += `  
                    <div class="character-card">
                        <img src="assets/${i}.jpeg"></img>
                        <div class="container">
                            <h4 style="font-size:20px"><b>${characterFromList.characterName}</b></h4>
                            <p style="font-style:italic">${characterFromList.characterDescription}</p>
                        </div>
                    </div>
                    `
                }      
            }
        })
    })

        
})
