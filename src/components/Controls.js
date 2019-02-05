import React, { Component } from 'react';

const style = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '20px',
    gridTemplateRows: '2fr 1fr 1fr 1fr',
    alignItems: 'center',
    justifyItems: 'center',
    color: '#FFF',
    borderRight: '2px solid #00FEC6'
}

const titleStyle = {
    fontSize: '4em',
    padding: '0 20px'
}

const displayStyle = {
    borderTop: '2px solid #00FEC6',
    borderBottom: '2px solid #00FEC6',
    height: '100%',
    width: '100%',
    display: 'grid',
    alignItems: 'center',
    fontSize: '28px'
}

const instrumentsStyle = {
    width: '100%',
    height: '100%'
}

const switchContainerStyle = {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
}


class Controls extends React.Component {
    constructor() {
        super();
        this.state = {
            PadControlsStyle :style
        }
    }

    switchPower = () => {
        this.props.switchPower()
    }

    switchBank = () => {
        this.props.switchBank()
    }

    render() {
        const power = this.props.powerState;
        let button;

        if (power) {
            button = <button className="PadControls--switch-btn btn-on" onClick={this.switchPower}>🛑</button>;
        }
        else {
            button = <button className="PadControls--switch-btn btn-off" onClick={this.switchPower}>🔌</button>
        }
        return(
            <div className="PadControls" style={this.state.PadControlsStyle}>
                <h1 style={titleStyle}>Drum Machine</h1>
                <div id="display" className="PadControls--display" style={displayStyle}>
                    <h2>{this.props.display}</h2>
                </div>
                <div className="PadControls--selection" style={switchContainerStyle}>
                    <button className={`${this.props.bank ? 'btn-select' : 'btn-select--off'}`} onClick={this.props.bank ? null : this.switchBank}>&#x1F3B9;</button>
                    <button className={`${this.props.bank ? 'btn-select--off' : 'btn-select'}`} onClick={this.props.bank ? this.switchBank : null}>🥁</button>
                </div>
                <div className="PadControls--switch" style={switchContainerStyle}>
                    {button}
                </div>
            </div>
        );
    }
}

export default Controls;