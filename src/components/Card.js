import React from 'react';

const Card = ({details, color}) => {

    const ingredients = details.ingredients.split(',')
                        .map(item => <li key={item}>{item}</li>)

    const instructions = details.instructions.split('\n')
                        .map(item => <li key={item}>{item}</li>)

    const requireImage = chemin => {
        try {
            return require(`../img/${chemin}`)
        } catch (error) {
            return require(`../img/default.jpeg`)
        }
    }
    const background = color => {
        if( color == null){
            color = "red"
            return color
        }
        else{
            return color
        }
    }                    
    

    return (
            <div className="card">
            <div className="image">
            <img src={requireImage(details.image)} alt={details.nom}/>
            </div>
                <div className="recette">
                    <h2>{details.nom}</h2>
                    <ul className="liste-ingredients" style={{backgroundColor: background(color.color)}}>
                        {ingredients}
                    </ul>
                    <ol className="liste-instructions">
                        {instructions}
                    </ol>
                </div>
            </div>
    );
};

export default Card;