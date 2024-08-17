import classes from "./ChoresList.module.css";
export default function ChoresList () {
   const chores = ["LaunchCode Work", "Get the Kids Out of Bed", "Develop Latest M4L Device"];
   return(
      <div>
         <h3 className={classes.choresHeading}>Today's Chores</h3>
         <ol>
            <li className={classes.choresList}>{chores[0]}</li>
            <li className={classes.choresList}>{chores[1]}</li>
            <li className={classes.choresList}>{chores[2]}</li>
         </ol>
      </div>
   );
}