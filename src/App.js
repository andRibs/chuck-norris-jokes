import React, { Component } from 'react';
import './App.css';
import List from './components/List/List'
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    categories: ['random'],
    category: 'random',
  }

  //Fetch categories from chuck norris API
  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(response => response.json())
      .then(data => this.setState({ categories: data }))
  }

  handleCategoryClick = (category) => {
    this.setState({ category: category })
  }


  render() {

    //Maps and displays the catgories stored in state 
    let categoriesOutput = this.state.categories.map(cat => {
      let catClass = cat == this.state.category ? 'btn btn-primary cat-btn active' : 'btn btn-primary cat-btn'
      return (
        <li
          className={catClass}
          onClick={() => { this.handleCategoryClick(cat) }} key={cat}>
          {cat}
        </li>)


    })

    return (
      <div >
        <div className='App'>
          <h1>I heard you like Chuck Norris jokes</h1>
          <ul>
            {categoriesOutput}
          </ul>
        </div>
        <List category={this.state.category} />
      </div>
    );
  }
}

export default App;
