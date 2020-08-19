import React, { Component } from 'react'
import MainRouter from './router'
import Tfooter from './components/Footer'
import Theader from './components/Header'
export default class App extends Component {
  render() {
    return (
      <div  className="warp">
        <Theader />
        <main className="main">
          <MainRouter />
        </main>
        <Tfooter />
      </div>
    )
  }
}