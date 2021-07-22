import React from 'react'
import { Link } from "react-router-dom"
import Flower from "../../../util/images/Flower.png"



function Nav(props) {

    const {navText, alignText}= props;
    return (
        <nav className="navbar navbar-dark bg-dark d-flex ">
            <div className={`container-fluid navItems ${alignText}`}>
                <span className="navbar-brand d-flex">
                    <img
                        src={Flower}
                        alt="Flower"
                        width="53"
                        height="50"
                        className="d-inline-block " />
                    <h2 className="universeText">
                        {navText}
                    </h2>

                </span>
            </div>
        </nav>

    );
}

export default Nav;