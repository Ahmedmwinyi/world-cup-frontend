import React, { Component} from "react";

export class HeaderComponent extends Component {
    render () {
        return (
            <div className=''>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="/" className="navbar-brand">
                                World Cup 2022~<strong>QATAR</strong>
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
