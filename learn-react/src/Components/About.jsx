import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class About extends Component {
    state = {  } 
    render() { 
        return (
          <>
            <h1>About</h1>
            <div className="row">
              <div className="col-3">
                <ul>
                  <li>
                    <Link to="team">Our Team</Link>
                  </li>
                  <li>
                    <Link to="company">Our Company</Link>
                  </li>
                </ul>
              </div>
              <div className="col">
                <Outlet />
              </div>
            </div>
          </>
        );
    }
}
 
export default About;
