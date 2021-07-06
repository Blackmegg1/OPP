import React, { Component } from 'react'

import MyTextArea from '../MyTextArea';
import Btn from '../Btn';
import MyTextArea2 from '../MyTextArea2';
import Btn2 from '../Btn2';

import "./index.css"

export default class MySider extends Component {
    render() {
        const { handleChange, handleClick, handleChange2, handleClick2 } = this.props;
        return (
            <div className="mySider">
                <MyTextArea handleChange={handleChange} />
                <Btn handleClick={handleClick} />
                <MyTextArea2 handleChange2={handleChange2} />
                <Btn2 handleClick2={handleClick2} />
            </div>
        )
    }
}
