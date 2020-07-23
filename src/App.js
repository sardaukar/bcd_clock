import React, { Component } from 'react'
import classNames from 'classnames'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    const time = this.getTimeString()
    this.state = {time}
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    const time = this.getTimeString()
    this.setState((_state, _props) => {return {time}})
  }

  getTimeString() {
    const date = new Date();

    const hours = this.padLeft(date.getHours(), 2, "0");
    const minutes = this.padLeft(date.getMinutes(), 2, "0");
    const seconds = this.padLeft(date.getSeconds(), 2, "0");

    return `${hours}${minutes}${seconds}`;
  }

  padLeft(nr, n, str){
    return Array(n - String(nr).length + 1).join(str || '0') + nr
  }

  toBCD(value) {
    return this.padLeft(Number(value).toString(2), 4).split("")
  }

  classesFor(value) {
    return {
      'on': value === '1',
      'off': value === '0'
    }
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

            <div className="box none" />
            <div className={
              classNames(
                'box',
                this.classesFor(hours[1][0])
              )} />
            <div className="box none" />
            <div className={
              classNames(
                'box',
                this.classesFor(minutes[1][0])
              )} />
            <div className="box none" />
            <div className={
              classNames(
                'box',
                this.classesFor(seconds[1][0])
              )} />

            <div className="box none" />
            <div className={
              classNames(
                'box',
                this.classesFor(hours[1][1])
              )} />
            <div className={
              classNames(
                'box',
                this.classesFor(minutes[0][1])
              )} />
            <div className={
              classNames(
                'box',
                this.classesFor(minutes[1][1])
              )} />
              <div className={
              classNames(
                'box',
                this.classesFor(seconds[0][1])
              )} />
              <div className={
              classNames(
                'box',
                this.classesFor(seconds[1][1])
              )} />

            <div className={
              classNames(
                'box',
                this.classesFor(hours[0][2])
              )} />
            <div className={
              classNames(
                'box',
                this.classesFor(hours[1][2])
              )} />
            <div className={
              classNames(
                'box',
                this.classesFor(minutes[0][2])
              )} />
            <div className={
              classNames(
                'box',
                this.classesFor(minutes[1][2])
              )} />
            <div className={
              classNames(
                'box',
                this.classesFor(seconds[0][2])
              )} />
            <div className={
              classNames(
                'box',
                this.classesFor(seconds[1][2])
              )} />

            <div className={
              classNames(
                'box',
                this.classesFor(hours[0][3])
              )} />
            <div className={
              classNames(
                'box',
                this.classesFor(hours[1][3])
              )} />
            <div className={
              classNames(
                'box',
                this.classesFor(minutes[0][3])
              )} />
            <div className={
              classNames(
                'box',
                this.classesFor(minutes[1][3])
              )} />
            <div className={
              classNames(
                'box',
                this.classesFor(seconds[0][3])
              )} />
            <div className={
              classNames(
                'box',
                this.classesFor(seconds[1][3])
              )} />
          </div>
        </header>
        <footer className='footer'>
          <a
            className='link'
            href='https://github.com/sardaukar/bcd_clock'
            target='_blank'
            rel='noopener noreferrer'
          >
            github
          </a>
        </footer>
      </div>
    )
  }
}
