import React from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'

import withFirebase from './hoc/withFirebase'

const App = (props) => {

    const cards = Object.keys(props.recettes)
        .map(key => <Card key={key} details={props.recettes[key]} />)
    return (
      <div className='box'>
        <Header pseudo={props.match.params.pseudo}/>
        <div className='cards'>
          {cards}
        </div>
        <Admin 
        chargerExemple = { props.chargerExemple } 
        ajouterRecette = { props.ajouterRecette }  
        majRecette = { props.majRecette } 
        recettes = { props.recettes }
        supprimerRecette = { props.supprimerRecette }
        pseudo = { props.match.params.pseudo }
        />
      </div>
    )
  }

const WrappedComponent = withFirebase(App)
export default WrappedComponent
