import React, { Component } from 'react'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.setState({time: new Date()})

    this.interval = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    this.setState({time: new Date()})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="wrapper">
            <div className="box none" />
            <div className="box off" />
            <div className="box none" />
            <div className="box off" />

            <div className="box none" />
            <div className="box off" />
            <div className="box off" />
            <div className="box off" />

            <div className="box on" />
            <div className="box off" />
            <div className="box off" />
            <div className="box off" />

            <div className="box off" />
            <div className="box off" />
            <div className="box off" />
            <div className="box off" />
          </div>
        </header>
      </div>
    )
  }
}

export default App
