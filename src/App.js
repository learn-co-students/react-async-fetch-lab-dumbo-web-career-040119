// create your App component here
import React from 'react'

class App extends React.Component {

  state = {
    space: []
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(({people}) => this.setState({space: people}))
  }

  //fetch("http://api.open-notify.org/astros.json")
      // .then(res => res.json())
      // .then(data => console.log(data.people))

  render() {
    return (
        <div>
          {
            this.state.space.map(p => <h1 key={p.id} p={p}>{p.name}</h1>)
          }
        </div>
      );
  }
}

export default App
