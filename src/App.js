import React from 'react';
import './App.css';
import Counter from './Components/Counter';

class App extends React.Component{
  // constructor(){
  //   super()
  //   this.state={
  //     show : false
  //   }
    
  // }

  state={
    show : false
  }

  render(){

    return(
      <div>
        <h1>WS STATE</h1>
        <button onClick={()=>this.setState({show : !this.state.show})}>{this.state.show ? 'Hide' : 'Show'}</button>
        {
          this.state.show &&   <Counter name ={"Yaakoub"}/>
        }
      
      </div>
    )
  }
}

export default App;
