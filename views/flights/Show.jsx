import React, { Component } from 'react'
import Destination from '../../models/destination';




export default class Show extends Component {
  render() {
    const {flight} = this.props
    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <h3>Flight Number:</h3>
          <h3> {flight.flightNo}</h3>
          </div>
          <div>
            <div>
              <h3>Depature Time: </h3>
              <h3>{flight.departs.toISOString().slice(0, 16)}</h3>
            </div>
            <div>
              <h3>Flight Airline:</h3>
              <h3>{flight.airline}</h3>
            </div>
            <div>
              <h3>Airport: </h3>
              <h3>{flight.airport}</h3>
            </div>
          </div>
          <div>
            <label>Destinations</label>
          {flight.destinations.map((destination) => {
            return <h1>{destination.airport}</h1>
        })} 
          </div>
        </div>
        <form method='POST' action={`/destinations/${flight._id}`}>
        <label>Choose Destination</label>
          <select name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


