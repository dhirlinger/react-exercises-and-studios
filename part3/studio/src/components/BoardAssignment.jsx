import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label: "Cheesy Jams",
         value: "cheesyJams"
      },
      {
         label: "Easy Enough",
         value: "easyEnough"
      },
      {
         label: "Kids Favorites",
         value: "kidsFavorits"
      }
   ];

   let [boardName, setName] = useState('no boards yet!');


   const handleChange = (event) => {
      setName(event.target.value); 
   }
   const boardOptions = boards.map( board =>
       <option key={board.value} value={board.value}>{board.label}</option>
   );
   return (
      <div style={{paddingTop: "50px"}}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
            {boardOptions}
         </select>

         <p>Saved to {boardName}!</p>
      </div>
   );
}
