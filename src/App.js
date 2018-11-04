import React, { Component } from 'react'
import classNames from 'classnames'
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
    return new Date().toISOString().substr(11, 8).replace(/:/g , "")
  }

  padLeft(nr, n, str){
    return Array(n-String(nr).length+1).join(str||'0')+nr
  }

  toBCD(value) {
    return this.padLeft(Number(value).toString(2), 4).split("")
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
    const seconds = [
      this.toBCD(this.state.time[4]),
      this.toBCD(this.state.time[5])
    ]

    return (
      <div className="App">
        <header className="App-header">
          <div className="wrapper">

            <div className="box none" /> {/* hours[0][0] */}
            <div className={
              classNames(
                'box',
                {
                  'on': hours[1][0] === '1',
                  'off': hours[1][0] === '0'
                }
              )} />  {/* hours[1][0] */}
            <div className="box none" /> {/* minutes[0][0] */}
            <div className={
              classNames(
                'box',
                {
                  'on': minutes[1][0] === '1',
                  'off': minutes[1][0] === '0'
                }
              )} />  {/* minutes[1][0] */}
            <div className="box none" /> {/* seconds[0][0] */}
            <div className={
              classNames(
                'box',
                {
                  'on': seconds[1][0] === '1',
                  'off': seconds[1][0] === '0'
                }
              )} />  {/* seconds[1][0] */}

            <div className="box none" /> {/* hours[0][1] */}
            <div className={
              classNames(
                'box',
                {
                  'on': hours[1][1] === '1',
                  'off': hours[1][1] === '0'
                }
              )} />  {/* hours[1][1] */}
            <div className={
              classNames(
                'box',
                {
                  'on': minutes[0][1] === '1',
                  'off': minutes[0][1] === '0'
                }
              )} />  {/* minutes[0][1] */}
            <div className={
              classNames(
                'box',
                {
                  'on': minutes[1][1] === '1',
                  'off': minutes[1][1] === '0'
                }
              )} />  {/* minutes[1][1] */}
              <div className={
              classNames(
                'box',
                {
                  'on': seconds[0][1] === '1',
                  'off': seconds[0][1] === '0'
                }
              )} />  {/* seconds[0][1] */}
              <div className={
              classNames(
                'box',
                {
                  'on': seconds[1][1] === '1',
                  'off': seconds[1][1] === '0'
                }
              )} />  {/* seconds[1][1] */}

            <div className={
              classNames(
                'box',
                {
                  'on': hours[0][2] === '1',
                  'off': hours[0][2] === '0'
                }
              )} />  {/* hours[0][2] */}
            <div className={
              classNames(
                'box',
                {
                  'on': hours[1][2] === '1',
                  'off': hours[1][2] === '0'
                }
              )} />  {/* hours[1][2] */}
            <div className={
              classNames(
                'box',
                {
                  'on': minutes[0][2] === '1',
                  'off': minutes[0][2] === '0'
                }
              )} />  {/* minutes[0][2] */}
            <div className={
              classNames(
                'box',
                {
                  'on': minutes[1][2] === '1',
                  'off': minutes[1][2] === '0'
                }
              )} />  {/* minutes[1][2] */}
            <div className={
              classNames(
                'box',
                {
                  'on': seconds[0][2] === '1',
                  'off': seconds[0][2] === '0'
                }
              )} />  {/* seconds[0][2] */}
            <div className={
              classNames(
                'box',
                {
                  'on': seconds[1][2] === '1',
                  'off': seconds[1][2] === '0'
                }
              )} />  {/* seconds[1][2] */}

            <div className={
              classNames(
                'box',
                {
                  'on': hours[0][3] === '1',
                  'off': hours[0][3] === '0'
                }
              )} />  {/* hours[0][3] */}
            <div className={
              classNames(
                'box',
                {
                  'on': hours[1][3] === '1',
                  'off': hours[1][3] === '0'
                }
              )} />  {/* hours[1][3] */}
            <div className={
              classNames(
                'box',
                {
                  'on': minutes[0][3] === '1',
                  'off': minutes[0][3] === '0'
                }
              )} />  {/* minutes[0][3] */}
            <div className={
              classNames(
                'box',
                {
                  'on': minutes[1][3] === '1',
                  'off': minutes[1][3] === '0'
                }
              )} />  {/* minutes[1][3] */}
            <div className={
              classNames(
                'box',
                {
                  'on': seconds[0][3] === '1',
                  'off': seconds[0][3] === '0'
                }
              )} />  {/* seconds[0][3] */}
            <div className={
              classNames(
                'box',
                {
                  'on': seconds[1][3] === '1',
                  'off': seconds[1][3] === '0'
                }
              )} />  {/* seconds[1][3] */}
          </div>
        </header>
      </div>
    )
  }
}

export default App
