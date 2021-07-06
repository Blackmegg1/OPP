import React, { Component } from 'react'
import { Input } from 'antd'

import './index.css'

const { TextArea } = Input;

export default class MyTextArea2 extends Component {

    render() {
        const {handleChange2} = this.props
        return (
            <TextArea rows={5} className="myTextArea2" onChange={handleChange2}></TextArea>
        )
    }
}
