import React from 'react';
import DisplayDetails from './displayDetails';
import ButtonKey from './buttonKey';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { displayText: '', results: [] };
    console.log(Date.now());
    // setTimeout(() => {
    //   // update state

    //   this.setState({ displayText: 'Hello after 30s' });
    //   console.log(Date.now());
    // }, 30000)
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(input) {
    switch (input.target.className) {
      case 'equal-sign':
        var temp = this.state.results;
        if(temp.length === 5) {
          temp.shift();
        }
        temp.push(<DisplayDetails key={temp.length} displayText={`${this.state.displayText} = ${eval(this.state.displayText)}`} />);
        this.setState({displayText: eval(this.state.displayText), results: temp});
        break;

      case 'all-clear': 
        this.setState({displayText: '', results: this.state.results});
        break;
      default:
        this.setState({displayText: this.state.displayText + input.target.value, results: this.state.results});
        break;
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="calculator">


          <DisplayDetails displayText={this.state.displayText} />

          <div className="calculator-keys">

            <ButtonKey operationHandling={this.onButtonClick} className='operator' value='+' label='+' />
            <ButtonKey operationHandling={this.onButtonClick} className='operator' value='-' label='-' />
            <ButtonKey operationHandling={this.onButtonClick} className='operator' value='*' label='*' />
            <ButtonKey operationHandling={this.onButtonClick} className='operator' value='/' label='/' />

            <ButtonKey operationHandling={this.onButtonClick} className='numeric' value='7' label='7' />
            <ButtonKey operationHandling={this.onButtonClick} className='numeric' value='8' label='8' />
            <ButtonKey operationHandling={this.onButtonClick} className='numeric' value='9' label='9' />

            <ButtonKey operationHandling={this.onButtonClick} className='numeric' value='4' label='4' />
            <ButtonKey operationHandling={this.onButtonClick} className='numeric' value='5' label='5' />
            <ButtonKey operationHandling={this.onButtonClick} className='numeric' value='6' label='6' />

            <ButtonKey operationHandling={this.onButtonClick} className='numeric' value='1' label='1' />
            <ButtonKey operationHandling={this.onButtonClick} className='numeric' value='2' label='2' />
            <ButtonKey operationHandling={this.onButtonClick} className='numeric' value='3' label='3' />

            <ButtonKey operationHandling={this.onButtonClick} className='numeric' value='0' label='0' />

            <ButtonKey operationHandling={this.onButtonClick} className='decimal' value='.' label='.' />
            <ButtonKey operationHandling={this.onButtonClick} className='all-clear' value='all-clear' label='AC' />

            <ButtonKey operationHandling={this.onButtonClick} className='equal-sign' value='=' label='=' />

          </div>
        </div>
        <div className="lastResults-container">
          {this.state.results}
        </div>
      </div>
    );
  }
}

export default App;
