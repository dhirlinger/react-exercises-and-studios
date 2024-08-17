import classes from "./HobbyLinks.module.css"

export default function HobbyLinks(){
    const hobbyLinks = ["https://drawingacademy.com/how-to-draw-a-portrait", "https://en.wikipedia.org/wiki/Basketball"];
    return(
        <div className={classes.hobbiesContainer}>
            <h3>My Hobbies</h3>
            <ol className={classes.hobbieLink}>
                <li><a href = {hobbyLinks[0]}>Drawing Portraits</a></li>
                <li><a href = {hobbyLinks[1]}>Playing & Watching Basketball</a></li>
            </ol>      
        </div>
    );

}