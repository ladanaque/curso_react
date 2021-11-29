import React from "react";
import './App.css'

// Componentes
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";


class App extends React.Component {
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
      </div>
    );
  }
}

export default App;