// import logo from './logo.svg';
import './App.css';
import {Form} from './components/recipeInput';
import RecipeBox from './components/recipeBox';
import {useState,useEffect} from 'react';

function App() {
  const [showBox,setShowBox] = useState(0);

  const [recipeDetail,setRecipeDetail] = useState([]);

  const getRecipe = ()=>{
    fetch(`http://localhost:3001/recipes`)
    .then(data=>data.json())
    .then(res=>setRecipeDetail(res));
  }

  useEffect(()=>{
    getRecipe();
  },[showBox,recipeDetail])

  const sortAsending = ()=>{
    fetch(`http://localhost:3001/recipes?_sort=id&_order=asc`)
    .then(data=>data.json())
    .then(res=>setRecipeDetail(res));
  }
  const sortDesending = ()=>{
    fetch(`http://localhost:3001/recipes?_sort=id&_order=desc`)
    .then(data=>data.json())
    .then(res=>setRecipeDetail(res));
  }
  return (
    <div className="App">
      <h1 className='logo'>Recipe Mart</h1>
     <Form setShowBox={setShowBox}/>
     <div className='filterbox'>
       <button onClick={sortAsending}>Low to High</button>
       <button onClick={sortDesending}>High to Low</button>
     </div>
     {showBox?<RecipeBox recipeDetail={recipeDetail} />:''}
    </div>
  );
}

export default App;
