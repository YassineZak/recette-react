import React, { Component }from "react";
import { ColorContext } from "./Color";
import { SketchPicker } from 'react-color';

export default class Header extends Component {


    state = {
        showPalette: false,
        background: '#fff'
    }

  formatPseudo = pseudo =>
    /[aeiou]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`;

  

  render() {
        return (
            <ColorContext.Consumer color={this.state.background} showPalette={this.state.showPalette}>
            {context => (
                <header style={{ backgroundColor: context.state.color }} onClick = {this.handleClick}>
                <h1>La boîte à recettes {this.formatPseudo(this.props.pseudo)}</h1>
                </header>
            )}
            </ColorContext.Consumer>
        );
    }
};

