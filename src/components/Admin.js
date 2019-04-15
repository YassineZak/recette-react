import React, { Component } from 'react'
import AjouterRecette from './AjouterRecette';
import AdminForm from './AdminForm';
import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'
import Login from './Login';

export default class Admin extends Component {
  state = {
    uid: null,
    chef: null
  }

  handleAuth = async authData => {
    const box = await base.fetch(this.props.pseudo, { context: this })
    console.log(box);
    
    if(!box.chef){
      await base.post(`${this.props.pseudo}/chef`, {
        data: authData.user.uid
      })
    }

    this.setState({
      uid: authData.user.uid,
      chef: box.chef || authData.user.uid
    })
  }

  authenticate = () => {
    const authProvider = new firebase.auth.FacebookAuthProvider()
    firebaseApp.auth().signInWithPopup(authProvider).then(this.handleAuth)
  }
  render() {
    const {ajouterRecette, recettes, chargerExemple, majRecette, supprimerRecette } = this.props

    //si l'utilisateur n'est pas connecté 
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate}></Login>
    }
    if (this.state.uid !== this.state.chef) {
      return (
        <div>
          <p>Tu n'es pas le chef de cette boîte !</p>
        </div>
      )
    }

    return (
      <div className="card">
        <AjouterRecette  ajouterRecette = { ajouterRecette }/>
        {
          Object.keys(recettes).map(key => <AdminForm
          majRecette={majRecette}
          supprimerRecette={supprimerRecette}
          recettes={recettes}
          key={key}
          id={key}>

          </AdminForm>)
        }
        <footer>
          <button onClick={ chargerExemple }>Remplir</button>
        </footer>
      </div>
    )
  }
}
