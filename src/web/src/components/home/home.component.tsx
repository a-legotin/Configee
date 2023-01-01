import { Component } from "react";
import logo from './../../assets/logo.svg';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
        <section className="main-content section m-0 p-0">
          <div className="container">
            <div className="columns">
              <div className="column is-9 is-offset-1">
                <div className="hero is-medium">
                  <div className="hero-body pb-6 pt-6">
                    <div className="columns is-vcentered">
                      <div className="column is-6">
                        <h1 className="is-size-1 title mb-6 has-text-weight-bold">
                          Your application config is in the right hands
                        </h1>
                        <p className="subtitle is-size-4">
                          <strong>Configee</strong> is the open-source platform
                          to store and provide configuration to your apps. Easy.
                        </p>
                        <div className="buttons">
                          <a
                            className="button is-medium is-link"
                            href="/dashboard"
                          >
                            Login to dashboard
                          </a>
                        </div>
                      </div>
                      <div className="column is-6 is-hidden-mobile">
                        <figure className="image is-square">
                          <img alt="logo" src={logo} />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
