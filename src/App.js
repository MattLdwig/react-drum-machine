import React, { Component } from 'react';
import './App.css';

import Controls from './components/Controls';
import PadContainer from  './components/PadContainer';

import C from './sounds/C.wav'
import C_sharp from './sounds/C_sharp.wav'
import D from './sounds/D.wav'
import D_sharp from './sounds/D_sharp.wav'
import E from './sounds/E.wav'
import F from './sounds/F.wav'
import F_sharp from './sounds/F_sharp.wav'
import G from './sounds/G.wav'
import G_sharp from './sounds/G_sharp.wav'
import A from './sounds/A.wav'
import A_sharp from './sounds/A_sharp.wav'
import B from './sounds/B.wav'

import Clap1 from './sounds/clap1.wav'
import Clap2 from './sounds/clap7.wav'
import Clap3 from './sounds/clap15.wav'
import Crash from './sounds/crash.wav'
import Crash2 from './sounds/crash2.wav'
import Hithat from './sounds/hithat.wav'
import OpenHat from './sounds/openhat.wav'
import Kick from './sounds/kick.wav'
import Shaker from './sounds/shaker.wav'
import Snare1 from './sounds/snare3.wav'
import Snare2 from './sounds/snare8.wav'
import Snare3 from './sounds/snare9.wav'

class App extends Component {
  constructor() {
    super();

    this.updateDisplay = this.updateDisplay.bind(this);
    this.switchPower = this.switchPower.bind(this);
    this.switchBank = this.switchBank.bind(this);

    this.state = {
      power: false,
      displayKey: '',
      keyPush: {
        key: '-',
        noteToPlay: '',
        keyPad: ''
      },
      currentPiano: false,
      soundsBank: [
        {
          note: 'C',
          drum: 'Clap N°1',
          keyCode: 81,
          pianoSound: C,
          drumSound: Clap1,
          keyPad: 'Q'
        },
        {
          note: 'C#',
          drum: 'Clap N°2',
          keyCode: 87,
          pianoSound: C_sharp,
          drumSound: Clap2,
          keyPad: 'W'
        },
        {
          note: 'D',
          drum: 'Clap N°3',
          keyCode: 69,
          pianoSound: D,
          drumSound: Clap3,
          keyPad: 'E'
        },
        {
          note: 'D#',
          drum: 'Crash N°1',
          keyCode: 65,
          pianoSound: D_sharp,
          drumSound: Crash,
          keyPad: 'A'
        },
        {
          note: 'E',
          drum: 'Crash N°2',
          keyCode: 83,
          pianoSound: E,
          drumSound: Crash2,
          keyPad: 'S'
        },
        {
          note: 'F',
          drum: 'Hithat',
          keyCode: 68,
          pianoSound: F,
          drumSound: Hithat,
          keyPad: 'D'
        },
        {
          note: 'F#',
          drum: 'Open Hat',
          keyCode: 90,
          pianoSound: F_sharp,
          drumSound: OpenHat,
          keyPad: 'Z'
        },
        {
          note: 'G',
          drum: 'Kick',
          keyCode: 88,
          pianoSound: G,
          drumSound: Kick,
          keyPad: 'X'
        },
        {
          note: 'G#',
          drum: 'Shaker',
          keyCode: 67,
          pianoSound: G_sharp,
          drumSound: Shaker,
          keyPad: 'C'
        },
        /** Here:  Pads to be deleted to pass the 7th test */
        {
          note: 'A',
          drum: 'Snare N°1',
          keyCode: 82,
          pianoSound: A,
          drumSound: Snare1,
          keyPad: 'R'
        },
        {
          note: 'A#',
          drum: 'Snare N°2',
          keyCode: 70,
          pianoSound: A_sharp,
          drumSound: Snare2,
          keyPad: 'F'
        },
        {
          note: 'B',
          drum: 'Snare N°2',
          keyCode: 86,
          pianoSound: B,
          drumSound: Snare3,
          keyPad: 'V'
        }
        /** end of the deletion area */
      ]
    }
  }

  switchPower() {
    this.setState({ power: !this.state.power })
  }

  switchBank() {
    this.setState({ currentPiano: !this.state.currentPiano })
  }

  updateDisplay = key => {
   if (this.state.power) {
     this.setState({ displayKey: key })
   }
  }

  render() {
    return (
      <div className="App" id="drum-machine">
        <div className="App-drum--container">
          <Controls display={this.state.displayKey} 
                    switchPower={this.switchPower} 
                    powerState={this.state.power} 
                    bank={this.state.currentPiano}
                    switchBank={this.switchBank} />
          <PadContainer updateDisplay={this.updateDisplay} 
                        soundsBank={this.state.soundsBank}
                        power={this.state.power}
                        bank={this.state.currentPiano}
                        />
        </div>
      </div>
    );
  }
}

export default App;
