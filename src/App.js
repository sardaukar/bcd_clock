import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    const time = this.getTimeString()
    this.state = {
      time: time
    }
  }

  componentDidMount() {
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
    return new Date().toISOString().substr(11, 5).replace(/:/g , "")
  }

  padLeft(nr, n, str){
    return Array(n-String(nr).length+1).join(str||'0')+nr;
  }

  toBCD(value) {
    return this.padLeft(Number(value).toString(2), 4)
  }

  render() {
    const hours = [
      this.toBCD(this.state.time[0]),
      this.toBCD(this.state.time[1])
    ]
    const minutes = [
      this.toBCD(this.state.time[2]),
      this.toBCD(this.state.time[3])
    ]

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
