// create your App component here

import React, { Component } from 'react'

export default class App extends Component {

    state = {
        spacePeople: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
          .then(response => response.json())
          .then(({people}) =>
                  this.setState({ spacePeople: people })
            )
      }

    render() {
        console.log(this.state.people)
        return (
            <div>
                 {this.state.spacePeople.map(person => <h1>{person.name}</h1>)}
            </div>
        )
    }
}
