import React, { Component } from 'react'
import { Input } from 'antd'

import './index.css'

const { TextArea } = Input;

export default class MyTextArea extends Component {

    render() {
        const {handleChange} = this.props
        return (
            <TextArea rows={10} className="myTextArea" onChange={handleChange}></TextArea>
        )
    }
}
