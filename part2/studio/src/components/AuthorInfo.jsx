import recipedata from './recipe.json';
import './styling.css';

function AuthorInfo() {
  let recipeAuthor = <div>{recipedata[0].author}</div>;
  
  let recipeAuthorImage = <img className='authorImage' src={recipedata[0].recipeImage} alt={recipedata[0].author}/>;

  let url = recipedata[0].website;
  let recipeWebsite = <a href={url} target='_blank'>{url}</a>;

   return(
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 