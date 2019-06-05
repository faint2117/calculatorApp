import React from 'react';
import DisplayDetails from './displayDetails';
import ButtonKey from './buttonKey';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {displayText: 'HELLO'};
    console.log(Date.now());
    setTimeout(() => {
      // update state
      
      this.setState({displayText: 'Hello after 30s'});
      console.log(Date.now());
  }, 30000)
  }

  render() {
    return (
      <div className="calculator">

        
        <DisplayDetails displayText={this.state.displayText} />

        <div className="calculator-keys">

          <ButtonKey className='operator' value='+' label='+' /> 
          <ButtonKey className='operator' value='+' label='-' />      
          <ButtonKey className='operator' value='+' label='*' />      
          <ButtonKey className='operator' value='+' label='/' />              

          <ButtonKey className='numeric' value='7' label='7' />
          <ButtonKey className='numeric' value='8' label='8' />
          <ButtonKey className='numeric' value='9' label='9' />

          <ButtonKey className='numeric' value='4' label='4' />
          <ButtonKey className='numeric' value='5' label='5' />
          <ButtonKey className='numeric' value='6' label='6' />

          <ButtonKey className='numeric' value='1' label='1' />
          <ButtonKey className='numeric' value='2' label='2' />
          <ButtonKey className='numeric' value='3' label='3' />

          <ButtonKey className='numeric' value='0' label='0' />

          <ButtonKey className='decimal' value='.' label='.' />
          <ButtonKey className='all-clear' value='all-clear' label='AC' />   

          <ButtonKey className='equal-sign' value='=' label='=' />

        </div>
      </div>
    );
  }
}

export default App;
