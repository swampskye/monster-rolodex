import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/cardList'
import SearchBox from './components/search-box/searchBox'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => { return { monsters: users } }))
  }

  onSearchChange = (event) => {
    // console.log(event.target.value)
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField }
    })

  }


  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        {/* <input className='search-box' type='search' placeholder='Search Monsters' onChange={onSearchChange} /> */}
        <SearchBox className='search-box' placeholder='Search Monsters' onChangeHandler={onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;