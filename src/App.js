import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavBar from './components/NavBar'
import News from './components/News'

export default class App extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}