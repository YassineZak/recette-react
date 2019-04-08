import React, { Component } from 'react'

export default class AjouterRecette extends Component {
    state = {
        nom: '',
        image: '',
        ingredients: '',
        instructions: ''
    }
    handleChange = event => {
        const { name, value } = event.target 
        this.setState({ [name]:value }) // entre crochet name pour signifier que c'est une variable
    }

    render() {
        return (
            <div className='card'>
                <form className="admin-form ajouter-recette">
                    <input name= "nom" type="text" value={ this.state.nom } onChange= {this.handleChange} placeholder="Nom de la recette"/>
                    <input name="image" type="text" value={ this.state.image }  onChange= {this.handleChange} placeholder="Nom de l'image" />
                    <textarea name="ingredients" id="" value={ this.state.ingredients }  onChange= {this.handleChange} rows="3" placeholder="Liste des ingrédients"/>
                    <textarea name="instructions" id="" value={ this.state.instructions }  onChange= {this.handleChange} rows="15" placeholder="Liste des instructions"/>
                </form>
            </div>
        )
    }
}
