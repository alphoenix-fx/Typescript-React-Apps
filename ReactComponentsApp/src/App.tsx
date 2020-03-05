import React from 'react';
import logo from './logo.svg';
import './App.css';

type AppProps = {
  yourName?: string;
}

type AppState = {
  count: number;
}

class App extends React.Component<AppProps, AppState>{
  state: AppState= {
    count: 0,
  }

  handleMinusPress = ()=>{
    this.setState({count : this.state.count -1})
  }

  handlePlusPress = ()=>{
    this.setState({count : this.state.count +1})
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Hello, {this.props.yourName};       
        </p>
        <button onClick={this.handleMinusPress}>-</button>
        {this.state.count}
        <button onClick={this.handlePlusPress}>+</button>

      </header>
    </div>
  );
  }
}

export default App;
