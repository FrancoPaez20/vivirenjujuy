function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const config = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

function getRecipe() {
    const id = getParameterByName('receta');

    return fetch('https://vivirenjujuy-api.herokuapp.com/api/v1/recipes/'+id, config)
    .then(res => res.text())
    .then(data => {
        let json = JSON.parse(data);

        const recipeTitle = document.getElementById('recipe-title');
        recipeTitle.innerHTML = json.title;

        const portions = document.getElementById('portions');
        portions.innerHTML += json.portions;

        const ingredients = document.getElementById('ingredients');

        Array.from(json.ingredients).forEach(x => {

            ingredients.innerHTML += `<li> ${x.quantity} ${x.unit} ${x.description} </li>`
        });

        const description = document.getElementById('description');

        description.innerHTML = json.description;
    })
}

getRecipe();