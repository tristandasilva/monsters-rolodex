import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
   constructor() {
      super();
      this.state = {
         monsters: [],
         searchField: '',
      };
   }

   componentDidMount() {
      fetch('https://randomuser.me/api/?results=100&nat=gb')
         .then(response => response.json())
         .then(users => {
            this.setState({ monsters: users.results });
            console.log(this.state);
         });
   }

   handleChange = e => {
      this.setState({ searchField: e.target.value });
   };

   render() {
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter(
         monster =>
            monster.name.first
               .toLowerCase()
               .includes(searchField.toLowerCase()) ||
            monster.name.last.toLowerCase().includes(searchField.toLowerCase())
      );

      return (
         <div className='App'>
            <h1>Monsters Rolodex</h1>
            <SearchBox
               placeholder='Search monsters'
               handleChange={this.handleChange}
            />
            <CardList monsters={filteredMonsters} />
         </div>
      );
   }
}

export default App;
