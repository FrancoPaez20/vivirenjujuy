const tagSelect = document.getElementById('tag-select');
const cardsContainer = document.getElementById('cards-container');

const config = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

function getTags() {
    return fetch('https://vivirenjujuy-api.herokuapp.com/api/v1/tags', config)
    .then(res => res.text())
    .then(data => {

        let json = JSON.parse(data);

        Array.from(json).forEach(x => {
            let option = document.createElement('option');
            option.text = x.slug;
            option.value = x.id;
            tagSelect.add(option);
        })

        
    })
} 

getTags();

function getRecipes() {

    return fetch('https://vivirenjujuy-api.herokuapp.com/api/v1/recipes', config)
    .then(res => res.text())
    .then(data => {
        let json = JSON.parse(data);

        Array.from(json).forEach(x => {

            cardsContainer.innerHTML += `
            
                <div class="tarjeta">
                
                    <div class="encabezado">
                        
                        <a href="receta.html?receta=${x.id}"><img src="img/bizcochos.jpg" alt="Portada Recetas"></a>

                    </div>

                    <div class="cuerpo">
                        
                        <h2 class="titulo">${x.title}</h2>

                    </div>

                </div>
            
            `;

        })
    })

}

getRecipes();
