import React, { Component } from 'react'
import logo from "../components/assets/logo.png"
import Image from 'next/image'
export class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div>
            <Image src={logo} width="300px" height="75px" layout="fixed"/>
        </div>
        <div className="Buttons-Header">
            <button className="Button">Laith</button>
            <button className="Button">Hussein</button>
        </div>
      </div>
    )
  }
}

export default Header