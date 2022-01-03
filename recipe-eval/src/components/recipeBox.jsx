import Card from './recipeCard';

function RecipeBox({recipeDetail}){
    return <div className="recipebox">
        <h3 className='logo'>Latest Recipes</h3>
        <div className="recipe-card">
        {
            recipeDetail.map((recipe)=> <Card key={recipe.id} {...recipe}/>)
        }
        </div>
    </div>
}

export default RecipeBox;