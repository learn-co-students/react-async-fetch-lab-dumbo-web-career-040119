import React from 'react'

class App extends React.Component {

  state ={
    spacePpl: []
        }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(astros => this.setState({
            spacePpl: astros.people
        }))
    }

    render() {
        return(
            <div> </div>
        )
    }


}
export default App
