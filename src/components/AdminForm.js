import React from 'react';

const AdminForm = ({
    id: key, //permet de récupérer le props id et de le renommer en key
    majRecette,
    recettes, 
    supprimerRecette,
    color
}) => {
    const recette = recettes[key]
    const handleChange = (event, key)=>{
        const {name, value } = event.target 
        const recette = recettes[key]
        recette[name] = value
        majRecette(key, recette)
    }
    return (
        <div className='card' >
            <form className="admin-form">
                <input name= "nom" type="text" placeholder="Nom de la recette" value={ recette.nom } onChange={ event =>handleChange(event, key) }style={{ border: "5px solid" + color.color  }}/>
                <input name="image" type="text"placeholder="Nom de l'image"  value={ recette.image } onChange={ event =>handleChange(event, key) } style={{ border: "5px solid" + color.color  }}/>
                <textarea name="ingredients" rows="3" placeholder="Liste des ingrédients" value={ recette.ingredients } onChange={ event =>handleChange(event, key) } style={{ border: "5px solid" + color.color  }}/>
                <textarea name="instructions" rows="15" placeholder="Liste des instructions" value={ recette.instructions } onChange={ event =>handleChange(event, key) } style={{ border: "5px solid" + color.color  }}/>
            </form>
            <button onClick= { () => supprimerRecette(key) } style={{ background: color.color  }}>Supprimer</button>
        </div>
    );
};

export default AdminForm;