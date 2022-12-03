import React, { Component } from 'react'
import GOV from "../components/data/Governorate.json"

export class Search extends Component {
  render() {
    return (
      <div>
        <from>
        <input type="radio" name="searchByGovArea" value="0" checked onchange="areasGovFill(1)"/>
        Governorate 
        <input type="radio" name="searchByGovArea" value="1" onchange="areasGovFill(2)"/> Area   
        <select id="areasGovDDL" placeholder="Search Project Name" onchange="radioarButtonChange()">
        </select>
        </from>
      </div>
    )
  }
}

export default Search