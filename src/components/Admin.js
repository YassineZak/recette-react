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

  componentDidMount() {
    firebase.ath().onAuthStateChanged(user =>{
      if (user){
        this.handleAuth({ user })
      }
    })
  }
  

  handleAuth = async authData => {
    const box = await base.fetch(this.props.pseudo, { context: this })
    
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

  logout = async () => {
    console.log('Déconnexion')
    await firebase.auth().signOut()
    this.setState({ uid: null })

  }
  render() {
    const {ajouterRecette, recettes, chargerExemple, majRecette, supprimerRecette } = this.props

    const logout = <button onClick={ this.logout }>Déconnexion</button>

    //si l'utilisateur n'est pas connecté 
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate}></Login>
    }
    if (this.state.uid !== this.state.chef) {
      return (
        <div>
          <p>Tu n'es pas le chef de cette boîte !</p>
          {logout}
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
          id={key}/>)
        }
        <footer>
          {logout}
          <button onClick={ chargerExemple }>Remplir</button>
        </footer>
      </div>
    )
  }
}
