const loadMeals = (searchText) => {
    

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    fetch(url)
        .then(res=>res.json())
        .then(data => displayMeal(data.meals))
    
}


const displayMeal = meals => {
    

    const mealsContainer = document.getElementById('meals-container');

    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        
        
        console.log(meal);
        
        //create child for each element
        const mealDiv = document.createElement('div');

        mealDiv.classList.add('col');

        mealDiv.innerHTML = `
        
        <div class="card">

  

                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>



                      
                  <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
 
                  Details
 
                  </button>


                    </div>
                    
                  </div>
        


                
        `

 

        mealsContainer.appendChild(mealDiv);

        // <!-- Button trigger modal -->

   

   
    });



}

const searchMeal = () => {
    const searchText= document.getElementById('search-field').value;

    console.log(searchText);
    loadMeals(searchText);



}



const loadMealDetails = mealID => {

    console.log(mealID);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
    .catch(error=>console.log(error))
    
}

const displayMealDetails = meal=>{
    
    console.log(meal);
    
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal


    const ingredients = [];
for (let i = 1; i <= 30; i++) {
    if (meal[`strIngredient${i}`]) {
        ingredients.push(meal[`strIngredient${i}`]);
    }
}


    document.getElementById('mealbody').innerHTML = `
    
   <p>Food Area :<b> ${meal.strArea}</b></p>
   <p> Category :<b> ${meal.strCategory} </b></p>

   <p>Ingredients: <b>${ingredients}</b></p>
   


   

    `
}



loadMeals('rice')