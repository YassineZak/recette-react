import React, { Component, Fragment } from 'react'
import { SketchPicker } from 'react-color';
const ColorContext = React.createContext()

export default class ColorProvider extends Component {

    state = {
        color: '#119c62',
        showPalette: true
    }
    handleClick = () => {
      
      if(this.state.showPalette){
          this.setState({showPalette: false})
      }
      else{
        this.setState({showPalette: true})
      }
    }

    handleChangeComplete = color => {
     this.setState({ color: color.hex })
      console.log(this.state)
    }

  render() {
    return (
      <Fragment>
        {
          this.state.showPalette ? <SketchPicker color={ this.state.background }
          onChange={ this.handleChangeComplete } /> : null
          
        }
      <ColorContext.Provider
      value={{state: this.state}}
      >
        {this.props.children}
        
      </ColorContext.Provider>
      </Fragment>
    )
  }
}

export { ColorContext }