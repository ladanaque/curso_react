import React from "react";
import './App.css'

// Componentes
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      counter: 0,
      name : 'Luis',
    };
  }

  handlerCounterUp = () => {
    this.setState({counter: this.state.counter + 1});
  }

  handlerCounterDown = () => {
    this.setState({counter: this.state.counter - 1});
  }

  handlerUpdateName = () => {
    this.setState({name: this.state.name = 'Juan'});
  }

  render() {
    return (
      <div className='App'>
        <NavBar />

        <Header />

        <div className='UserSection'>
          <UserCard 
            name='Luis Adanaque' 
            date='Se unio en Julio 1997' 
            description='Ing. de Sistemas'
            img='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
          />

          <UserCard 
            name='Ximena R' 
            date='Se unio en Mayo 1997' 
            description='Medicina Humana'
            img='https://react.semantic-ui.com/images/avatar/large/molly.png'
          />

          <UserCard 
            name='Reus A' 
            date='Se unio en Julio 2000' 
            description='Ing. Civil'
            img='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
          />
          
        </div>

        <div className='CounterSection'>
          <p>Counter: {this.state.counter} </p>
          <div className='btn-section'>
            <button onClick={this.handlerCounterUp}>Aumentar </button>
            <button onClick={this.handlerCounterDown}>Disminuir </button>
          </div>
          <h3>{this.state.name}</h3>
          <button onClick={this.handlerUpdateName}>Actualizar Nombre</button>
        </div>

      </div>
    );
  }
}

export default App;