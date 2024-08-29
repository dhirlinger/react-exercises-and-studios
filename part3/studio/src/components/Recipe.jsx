import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://thecozycook.com/stovetop-mac-and-cheese/";
   let authorPhoto = "https://thecozycook.com/wp-content/uploads/2024/08/The-Cozy-Cook-Sidebar-1.jpg";
   let authorName = "Stephanie Melchione";

   return (
      <div>
         <img src={authorPhoto} alt ={authorName} style={{objectFit: "contain", borderRadius: "50%"}} width={100} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["uncooked macaroni",
       "butter",
       "flour",
       "heavy cream",
       "milk"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   let recipeName = "Stovetop Mac and Cheese";
   let recipeDescription = "This Creamy Stovetop Mac and Cheese is the BEST 30-minute meal for a busy week. Your family will love it every time!"
   return (
      <div> 
         <div>
            <h1>{recipeName}</h1>
            <p>{recipeDescription}</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
