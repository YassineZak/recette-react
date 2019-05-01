import React, { Component }from "react";
import { SketchPicker } from 'react-color';

export default class Header extends Component {


    state = {
        showPalette: false,
        color: 'seagreen'
    }

    handleChangeComplete = color => {
        this.setState({ color: color.hex })
        this.props.handleColor({color: color.hex})
       }

    formatPseudo = pseudo =>
        /[aeiou]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`;

    handleClick = () => {
        if (this.state.showPalette) {
            this.setState({showPalette : false})
        }
        else{
            this.setState({showPalette : true})
        }
        console.log(this.props)
    }

  

  render() {

        return (
            
                <header style={{ backgroundColor: this.state.color }} >
                
                {this.state.showPalette ? <SketchPicker color={ this.state.background }
                onChange={ this.handleChangeComplete } /> : null }
                <h1>La boîte à recettes {this.formatPseudo(this.props.pseudo)}</h1>
                <button style= {{background: this.state.color}}><i class="fas fa-wrench" style= {{float: "right"}} onClick = {() => this.handleClick()}></i></button>
                </header>
            )
    }
};

