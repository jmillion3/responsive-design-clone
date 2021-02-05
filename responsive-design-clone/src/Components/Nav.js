import React, {Component} from 'react';
import hamburger from '../Media/hamburger.png'

class Nav extends Component {
    constructor(){
        super();
        this.state = {
            toggleShow: false
        }
    }

    toggleShowFunc = () => {
        this.setState((prevState) => {
            return {
                toggleShow: !prevState.toggleShow
            }
        })
    }

    render(){
        return <div className="nav">
            <img alt="logo" className="logo" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"/>
            <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`}>
                <ul className="nav-list">
                    <li>
                        <a href="https://startbootstrap.github.io/startbootstrap-agency/#services"
                        >Services</a>
                    </li>
                    <li>
                        <a href="https://startbootstrap.github.io/startbootstrap-agency/#portfolio"
                        >Portfolio</a>
                    </li>
                    <li>
                        <a href="https://startbootstrap.github.io/startbootstrap-agency/#about"
                        >About</a>
                    </li>
                    <li>
                        <a href="https://startbootstrap.github.io/startbootstrap-agency/#team"
                        >Team</a>
                    </li>
                    <li>
                        <a href="https://startbootstrap.github.io/startbootstrap-agency/#contact"
                        >Contact</a>
                    </li>
                </ul>
            </nav>
            <button onClick={this.toggleShowFunc} alt="menu-icon" type="button" id="nav-btn">MENU 
            <img src={hamburger}></img>
            </button>
        </div>
    }
}

export default Nav;