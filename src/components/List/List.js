import React, { Component } from 'react';
import SingleJoke from '../SingleJoke/SingleJoke';
import ListItem from '../ListItem/ListItem';
import { Route } from 'react-router-dom';
import './List.css'

class List extends Component {
    state = {
        gotJokes: [],
        loadingState: false,
        clicked: '',
        category:'random'
    }

    //Fetches jokes and saves them to state
    componentDidMount() {
        this.setState({category:this.props.category})
        for (let x = 0; x < 10; x++) {
            this.loadMoreItems();
        }
    //Adds eventListener for the joke feed to load more when scrolled to bottom
        this.refs.iScroll.addEventListener("scroll", () => {
            if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight) {
                this.loadMoreItems();
            }
        });
    }
    //listens for the back-button click to redirect to main feed after viewing isolated joke.
    componentDidUpdate() {
        window.onpopstate = (e) => {
            this.setState({clicked:''});
        }
    }

    //Listens for change of category which is sent as props from parent App.js
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.category+'next')
        console.log(this.state.category+'state')

        if(this.state.category != nextProps.category){
            this.setState({gotJokes:[], category:nextProps.category})

            for (let x = 0; x < 10; x++) {
                console.log(this.state.category+'loop')

                this.loadMoreItems(nextProps.category);
            }
        } 
    } 

    //function to load another joke based on the current category stored in state
    loadMoreItems(category) {
        this.setState({ loadingState: true });
        let url = (category=='random' || category==undefined? 'random' : 'category='+category)
        fetch('https://api.chucknorris.io/jokes/'+url)
            .then(response => response.json())
            .then(data => this.setState(prevState => ({
                gotJokes: [...prevState.gotJokes, data.value],
                loadingState: false
            })))
    }

    onSingleClicked(item) {
        this.setState({ clicked: item });
    }

    render() {
        //maps all jokes stored in state to display
        let jokesList = this.state.gotJokes.map(item => {
            return <ListItem key={item} onSingleClicked={() => { this.onSingleClicked(item) }} item={item} />
        })

        //conditional that decides to display a single joke or the feed
        const content = (this.state.clicked !== '' ?
                <SingleJoke joke={this.state.clicked} />:
            <div ref="iScroll" className='List-scroll'>
                <ul className='list-group'>
                    {jokesList}
                </ul>
                {this.state.loadingState ? <p className="loading"> loading Chuck Norris {this.state.category} jokes</p> : ""}
            </div>)

        return (
            <div className='container'>
                <Route path='/joke'  />
                {content}
            </div>
        )
    }
}

export default List;