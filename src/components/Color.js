import React, { Component, Fragment } from 'react'
import { SketchPicker } from 'react-color';
const ColorContext = React.createContext()

export default class ColorProvider extends Component {

    state = {
        color: '#119c62',
        showPalette: true
    }

    

  render() {
    return (
      <ColorContext.Provider
      value={{state: this.state}}
      >
        {this.props.children}
        
      </ColorContext.Provider>
    )
  }
}

export { ColorContext }