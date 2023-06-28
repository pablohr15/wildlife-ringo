
fetch("https://sheets.googleapis.com/v4/spreadsheets/1m9hab2nw1GdqoLbvjJBe7vE8GSiWzliaTXcwzoYKugE/values/ringo-el-curioso?key=AIzaSyB9vIKNAaEYTQ2_Akh48VMdNioidhBIl-o")
.then(res => res.json())
.then(data => {

    const datos = data.values
    const rows = datos[1].length
    let characters = document.getElementById('characters')
    const filters = document.querySelectorAll('.nav-link')
    console.log(filters)
    let charactersList = [];

    const categories_color = {
        "Basketball Team": "rgb(248, 245, 51)",
        "Kingdom Population": "rgb(70, 157, 255)",
        "Ship's Company": "rgb(255, 69, 69)",
        "Wild West": "rgb(132, 255, 50)",
        "Summertime": "rgb(252, 147, 26)"
    }



    for (let i = 0; i < rows; i++) {
        let character = {
            characterImage: datos[0][i],
            characterName: datos[1][i],
            characterDescription: datos[2][i]
        }

        charactersList.push(character);

        console.log(categories_color[character.characterDescription])
   
        characters.innerHTML += `  
        <div class="character-card">
            <img style="border-radius: 10px; width: 100%; height: auto; border: 2px solid rgb(255, 146, 250); box-shadow: 0 0 15px rgb(255, 146, 250), 0 0 30px white;" src="assets/${i}.jpeg"></img>
            <div class="container">
                <h4 style="font-size:20px; padding-top:10px;"><b>${character.characterName}</b></h4>
                <p style="font-style:italic">${character.characterDescription}</p>
            </div>
        </div>
        `

    }



    filters.forEach((filter) => {
        filter.addEventListener('click', () =>{
            
            $('.navbar-collapse').collapse('hide');

            filters.forEach((filter) => {
                filter.style.setProperty('text-shadow', 'none');
            })

            filter.style.setProperty('text-shadow', '0 0 30px white', 'important');

            characters.innerHTML = '';

            let $head = document.getElementsByClassName("headname")[0];
            $head.style.setProperty('color', `${categories_color[filter.innerText]}`, 'important');
            console.log($head);

            for (let i = 0; i < rows; i++) {
                let characterFromList = charactersList[i]
                if (characterFromList["characterDescription"].includes(filter.innerText)){
                    characters.innerHTML += `  
                    <div class="character-card">
                        <img style="border-radius: 10px; width: 100%; height: auto; border: 2px solid ${categories_color[filter.innerText]}; box-shadow: 0 0 15px ${categories_color[filter.innerText]}, 0 0 30px white;" src="assets/${i}.jpeg"></img>
                        <div class="container">
                            <h4 style="font-size:20px; padding-top:10px;"><b>${characterFromList.characterName}</b></h4>
                            <p style="font-style:italic">${characterFromList.characterDescription}</p>
                        </div>
                    </div>
                    `
                }      
            }
        })
    })

        
})
