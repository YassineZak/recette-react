import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDgaccfKDzXkQ9BdD41zD3NOy_eB2AF7c8',
  authDomain: 'recette-app-b131c.firebaseapp.com',
  databaseURL: 'https://recette-app-b131c.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
