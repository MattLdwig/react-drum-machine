import React from 'react';

class Pad extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            padActive: false,
            activeBank: props.soundsBank.note
        }
        this.activePad = this.activePad.bind(this);
        this.playSound = this.playSound.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.checkKey);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.checkKey);
    }

    checkKey = e => {
        if(e.keyCode === this.props.soundsBank.keyCode) {
            this.playSound()
        }
    }

    playSound() {
        if(this.props.power) { 
            const audio = document.getElementById(this.props.soundsBank.keyPad);
            audio.currentTime = 0;
            audio.play().catch(err => {console.log(err)});
            const currentBankDisplay = this.props.bank ? this.props.soundsBank.note : this.props.soundsBank.drum;
            this.props.updateDisplay(currentBankDisplay)
            this.activePad()
            setTimeout(() => this.activePad(), 50)
        }
    }

    activePad() {
        this.setState({ padActive: !this.state.padActive})
    }
    
    render() {
        return(
            <div className={`Pad drum-pad ${this.state.padActive ? 'active' : 'innactive'}`} id={this.props.soundsBank.pianoSound} style={this.state.pad} onClick={this.playSound}>
            <audio preload="auto" className='clip' id={this.props.soundsBank.keyPad} src={`${this.props.bank ? this.props.soundsBank.pianoSound : this.props.soundsBank.drumSound}`}></audio>
            {this.props.soundsBank.keyPad}
            </div>
        );
    }
}

export default Pad;

