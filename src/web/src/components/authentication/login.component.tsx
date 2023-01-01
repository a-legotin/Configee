import React, { Component } from 'react';

export class Login extends Component {
    render() {
        return (
            <>
                <div className="hero is-fullheight">
                    <div className="hero-body is-justify-content-center is-align-items-center">
                        <div className="columns is-flex is-flex-direction-column box">
                            <div className="column">
                                <label htmlFor="email">Email</label>
                                <input className="input is-link" type="text" placeholder="Email address" />
                            </div>
                            <div className="column">
                                <label htmlFor="Name">Password</label>
                                <input className="input is-link" type="password" placeholder="Password" />
                            </div>
                            <div className="column">
                                <button className="button is-link is-fullwidth" type="submit">Login</button>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}
