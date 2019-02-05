import React, { Component } from 'react';

const style = {
    gridColumn: '1 / -1'
}

class ControlVolume extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="PadControls--volume" style={style}>
                <input type="range" min="1" max="10" defaultValue="5" className="PadControls--volume-slider"></input>
            </div>
        );
    }
}

export default ControlVolume;
