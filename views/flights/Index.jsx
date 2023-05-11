const React = require('react');

class Index extends React.Component {
  render() {
      const { flights } = this.props;
      return (
              <div style={{height: '100vh', fontFamily: 'fantasy'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor: '#9FBBCC'}}>
                  <h1 style={{fontSize: 40}}>Flights Index Page</h1>                    
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <a href="/flights/new" style={{textDecoration: 'none', display: 'block'}}>Create new flight</a>                    
                </div>
                <div style={{display: 'flex' ,justifyContent: 'center', alignItems: 'center'}}>
                  <ul style={{display: 'flex', flexDirection: 'column', }}>
                      {flights.map((flight, i) => {
                          return (
                            <li>
                                <a href={`/flights/${flight._id}`}>{flight.airline}</a>
                                <br/>
                                <a>{flight.flightNo}</a>
                                <br/>
                                <a>{flight.departs.toISOString().slice(0, 16)}</a>
                            </li>
                          );
                      })}
                  </ul>                    
                </div>
              </div>
      );
  }
}
module.exports = Index;