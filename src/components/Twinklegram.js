import React, { Component } from "react";
import Typed from 'typed.js';

class Twinkle extends React.Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
        // your desired props to this destructuring assignment.
        const { strings } = this.props;
        // You can pass other options here, such as typing speed, back speed, etc.
        const options = {
            strings: strings,
            typeSpeed: 25,
            backSpeed: 10
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
        // to prevent memory leaks
        this.typed.destroy();
    }

    render() {
        return (
            <div className="ba bw1 br3 border-main pl3">
                <h3 className="f3 tracked ttu mister">>log</h3>
                <span
                    style={{ whiteSpace: 'pre' }}
                    className="f4 tracked steps"
                    ref={(el) => { this.el = el; }}
                />
            </div> 
        );
    }
}

export default Twinkle;