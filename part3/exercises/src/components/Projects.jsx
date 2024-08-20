import data from '../data.json';
import { useState } from 'react';

export default function MyProjects(){
    const [index, setIndex] = useState(0);
    let projects = data.projects;
    let project = projects[index];

    function handleClick() {
        if(index < data.projects.length-1){
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    return(
        <>
            <button onClick={handleClick}>Next</button>
            <h2>Topic: {project.topic}</h2>
            <h2>Headline: {project.fact}</h2>
            <img src={project.photoUrl} alt={project.alt} height={300}></img>
            
        </>
        
    );

    
}