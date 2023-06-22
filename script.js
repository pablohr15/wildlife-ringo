
fetch("https://sheets.googleapis.com/v4/spreadsheets/1m9hab2nw1GdqoLbvjJBe7vE8GSiWzliaTXcwzoYKugE/values/ringo-el-curioso?key=AIzaSyB9vIKNAaEYTQ2_Akh48VMdNioidhBIl-o")
.then(res => res.json())
.then(data => {

    const datos = data.values
    const rows = datos[1].length
    const characters = document.getElementById('characters')

    for (let i = 0; i < rows; i++) {
        let character = {
            characterImage: datos[0][i],
            characterName: datos[1][i],
            characterDescription: datos[2][i]
        }
   
        characters.innerHTML += `  
        <div class="card">
            <img src="assets/${i}.jpeg"></img>
            <div class="container">
                <h4 style="font-size:20px"><b>${character.characterName}</b></h4>
                <p>${character.characterDescription}</p>
            </div>
        </div>
        `

    }

        
})