import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import Admin from './components/Admin'
import recettes from './recettes';
import Card from './components/Card'

//firebase
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    }) // stock dans un sous dossier au niveau de la bdd firebase
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
  }
  ajouterRecette = recette => {
    const recettes = { ...this.state.recettes }
    recettes[`recette-${Date.now()}`] = recette
    this.setState({ recettes })
  }

  majRecette = (key, newRecette) => {
    const recettes = { ...this.state.recettes }
    recettes[key] = newRecette
    this.setState({ recettes })
  }

  supprimerRecette = key => {
    const recettes = { ...this.state.recettes}
    recettes[key] = null
    this.setState({ recettes })
  }
  
  chargerExemple = () =>this.setState({recettes});

  render () {
    const cards = Object.keys(this.state.recettes)
        .map(key => <Card key={key} details={this.state.recettes[key]} />)
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}/>
        <div className='cards'>
          {cards}
        </div>
        <Admin 
        chargerExemple = { this.chargerExemple } 
        ajouterRecette = { this.ajouterRecette }  
        majRecette = { this.majRecette } 
        recettes = { this.state.recettes }
        supprimerRecette = { this.supprimerRecette }
        pseudo = { this.state.pseudo }
        />
      </div>
    )
  }
}

export default App
