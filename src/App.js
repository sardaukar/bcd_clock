import React, { Component } from 'react'
import './App.css'

class App extends Component {
  componentDidMount() {
    const time = this.getTimeString()
    this.setState((state, props) => {return {time}})

    this.interval = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    const time = this.getTimeString()
    this.setState((state, props) => {return {time}})
  }

  getTimeString() {
    return new Date().toISOString().substr(11, 8).replace(/:/g , "")
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
