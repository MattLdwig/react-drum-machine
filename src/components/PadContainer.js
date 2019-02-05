import React, { Component } from 'react';

import Pad from './Pad';


const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '20px',
    margin: '30px'
}

class PadContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            PadContainerStyle :style
        }
    }

    render() {
        const sounds = this.props.soundsBank;
        return(
            <div className="PadContainer" style={this.state.PadContainerStyle}>
                {sounds.map((sound) => 
                    <Pad key={sound.keyCode} 
                        updateDisplay={this.props.updateDisplay} 
                        soundsBank={sound} 
                        power={this.props.power}
                        bank={this.props.bank}
                        />
                )}
            </div>
        );
    }
}

export default PadContainer;