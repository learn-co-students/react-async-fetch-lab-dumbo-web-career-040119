// create your App component here

import React, { Component } from 'react'

export default class App extends Component {

    state = {
        people: []
    }

    // componentDidMount = () => {
    //     fetch(`http://api.open-notify.org/astros.json`)
    //     .then(resp => resp.json())
    //     .then(data => this.setState({
    //         people: data.people
    //     }))
    // }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
          .then(response => response.json())
          .then(({people}) => this.setState({ people: people }))
    
      }
    
    render() {
        console.log(this.state.people)
        return (
            <div>
                 {this.state.people.map(person => <h1>{person.name}</h1>)}
            </div>
        )
    }
}

