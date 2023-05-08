import React from 'react';

import Header from './Components/Header'
import MeetForm from './Components/MeetForm';

class App extends React.Component {

  render(){
    return(<div>
      < Header title = "VKmeets" />

      <div className='panel'>
        <MeetForm onAdd={this.MeetForm}/>
      </div>
    </div>)
  }

  MeetForm(user) {
    const str = JSON.stringify(user)
    console.log(str)
  }

}

export default App