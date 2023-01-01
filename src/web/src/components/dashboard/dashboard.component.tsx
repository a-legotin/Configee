import { Component } from 'react';

export class Dashboard extends Component {

  render() {
    return (
      <>
        <div className="columns">
          <div className="column is-2">
            <aside className="menu">
              <p className="menu-label">
                General
              </p>
              <ul className="menu-list">
                <li>Dashboard</li>
                <li>Customers</li>
              </ul>

            </aside>
          </div>
          <div className="column">
            <h1>Dashboard</h1>
          </div>
        </div>
      </>
    );
  }
}
