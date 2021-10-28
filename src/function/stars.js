import React, { useState } from 'react';

const Star = ({id, starActive, onEvaluateActive} ) => {
    
    const emptyStar = 'https://img.icons8.com/color/48/000000/star--v1.png'
    const filledStar = 'https://img.icons8.com/emoji/48/000000/star-emoji.png'
    
    //Select star type
    const starImg   = starActive >= id ? filledStar : emptyStar; 
    
    //Optional
    const color = starActive >= id ? 'active' : ''; 
    const classes = [color, "star"].join(' ')
    return (
        <span 
            className= { classes } 
            onClick = { () => onEvaluateActive(Number(id))} 
        >
            <img src = { starImg } alt=""/>
        </span>
    )
}

const Stars = () => {
    
    //Indicate number of stars to show
    const numStars = 5
    
    //Convert the number to array
    let stars = [], i = 0, len = numStars;
    
    while (i++ < len) stars.push(i);
    
    const [starActive, setStarActive] = useState(0); 
    
    const evaluateActive = (numActive) => {
        
        setStarActive( numActive)

        alert(`You've selected ${numActive - 1} stars. Thank you very much for your selection`)
    }

    return(
        
        <div>
            <div  className="center header">
                Please, select your choice rating
            </div>
            <div  id="starSelector" className="center">
                
                {   stars.map( (i) => {
                    
                        return (
                            //The key is due to React needs a key in arrays
                            <Star key={i} id = {i + 1} starActive = {starActive} onEvaluateActive = {evaluateActive}/>
                        )
                    })
                }
            </div>
            
            <a className="reference" href="https://icons8.com/icon/19295/star">Star icon by Icons8</a>
        
        </div>
    );
}

export default Stars ;