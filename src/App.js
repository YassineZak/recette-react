import React from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import Admin from './components/Admin'
import Card from './components/Card'
import  ColorContext  from './components/Color'

// PropTypes
import PropTypes from 'prop-types'

//Firebase
import withFirebase from './hoc/withFirebase'


const App = ({
  recettes, 
  match,
  ajouterRecette,
  majRecette,
  supprimerRecette,
  chargerExemple,
  handleChangeComplete 

}) => {

    const cards = Object.keys(recettes)
        .map(key => <Card key={key} details={recettes[key]} />)
    return (
      <ColorContext>         
        <div className='box'>
          <Header pseudo={match.params.pseudo}
          color = { handleChangeComplete }
          />
          <div className='cards'>
            {cards}
          </div>
          <Admin 
          chargerExemple = { chargerExemple } 
          ajouterRecette = { ajouterRecette }  
          majRecette = { majRecette } 
          recettes = { recettes }
          supprimerRecette = { supprimerRecette }
          pseudo = { match.params.pseudo }
          />
        </div>
      </ColorContext>
    )
  }
      App.prototype = {
        chargerExemple: PropTypes.func.isRequired,
        ajouterRecette: PropTypes.func.isRequired,
        majRecette: PropTypes.func.isRequired,
        recettes: PropTypes.string.isRequired,
        supprimerRecette: PropTypes.func.isRequired,
        pseudo: PropTypes.string.isRequired
      }

const WrappedComponent = withFirebase(App)
export default WrappedComponent
