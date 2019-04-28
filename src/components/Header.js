import React, { Component }from "react";
import { ColorContext } from "./Color";
import { SketchPicker } from 'react-color';

export default class Header extends Component {


    state = {
        showPalette: true,
        background: '#fff'
    }

    handleChangeComplete = color => {
        this.setState({ color: color.hex })
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
    }

  

  render() {

        return (
            <ColorContext.Consumer color={this.state.background} showPalette={this.state.showPalette}>
            {context => (
                context.state.showPalette = this.state.showPalette,
                context.state.color = this.state.color,
                <header style={{ backgroundColor: context.state.color }} onClick = {() => this.handleClick()}>
                {context.state.showPalette ? <SketchPicker color={ this.state.background }
                onChange={ this.handleChangeComplete } /> : null }
                <h1>La boîte à recettes {this.formatPseudo(this.props.pseudo)}</h1>
                </header>
            )}
            </ColorContext.Consumer>
        );
    }
};

